import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from 'layouts/Header';
import { data as dummyData } from './api/palettes/list';
import { Container, Grid, Heading, PaletteCard } from 'components';

function index() {
  const [paletteData, setPaletteData] = useState([]);
  const [loading, setLoading] = useState(true);

  const downloadOnClick = () => {};

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
              downloadOnClick={downloadOnClick}
            />
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default index;
