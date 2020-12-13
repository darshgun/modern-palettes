import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SeoTags } from 'helpers/seoTags';
import Header from 'layouts/Header';
import { data as dummyData } from '../api/color/brand/list';
import { exportCss } from 'helpers/exporter';
import { Container, Grid, Heading, PaletteCard, Modal, SyntaxBox } from 'components';

function index() {
  const [paletteData, setPaletteData] = useState([]);
  const [activePalette, setActivePalette] = useState();
  const [loading, setLoading] = useState(true);
  const [exportModalOpen, setExportModalOpen] = useState(false);
  const [exportCssCode, setExportCssCode] = useState('{}');

  const exportOnClick = (index) => {
    setExportCssCode(exportCss(paletteData[index]));
    setActivePalette(index);
    setExportModalOpen(true);
  };

  useEffect(() => {
    setLoading(true);
    setPaletteData(dummyData);

    async function fetchPalettes() {
      const res = await axios.get('/api/color/brand/list');
      setPaletteData(res.data);
    }

    setLoading(false);
    fetchPalettes();
  }, []);

  return (
    <div>
      <Header />
      <SeoTags title="Brand color explorer" description="Explore famous brand colors" />
      <Heading title="Color palettes" subtitle="Brand Colors" />
      <Container fluid>
        <Grid>
          {paletteData.map((palette, index) => (
            <PaletteCard
              name={palette.name}
              key={index}
              colors={palette.colors}
              favorites={palette.favorites}
              downloadOnClick={() => {
                exportOnClick(index);
              }}
            />
          ))}
        </Grid>
        <Modal open={exportModalOpen} overlayClick={() => setExportModalOpen(false)}>
          <SyntaxBox code={exportCssCode} />
        </Modal>
      </Container>
    </div>
  );
}

export default index;
