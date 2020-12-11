import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from 'layouts/Header';
import { data as dummyData } from './api/palettes/list';
import { Container, Grid, Heading, PaletteCard, Modal, SyntaxBox } from 'components';

function index() {
  const [paletteData, setPaletteData] = useState([]);
  const [activePalette, setActivePalette] = useState();
  const [loading, setLoading] = useState(true);
  const [exportModalOpen, setExportModalOpen] = useState(false);

  const exportOnClick = (index) => {
    setExportModalOpen(true);
    setActivePalette(index);
  };

  useEffect(() => {
    setLoading(true);
    setPaletteData(dummyData);

    async function fetchPalettes() {
      const res = await axios.get('/api/palettes/list');
      setPaletteData(res.data);
    }

    setLoading(false);
    fetchPalettes();
  }, []);

  return (
    <div>
      <Header />
      <Heading title="Popular palettes" subtitle="Explore" />
      <Container fluid>
        <Grid>
          {paletteData.map((palette, index) => (
            <PaletteCard
              key={index}
              colors={palette.colors}
              favorites={palette.favorites}
              downloadOnClick={() => exportOnClick(index)}
            />
          ))}
        </Grid>
        <Modal open={exportModalOpen} overlayClick={() => setExportModalOpen(false)}>
          <SyntaxBox />
        </Modal>
      </Container>
    </div>
  );
}

export default index;
