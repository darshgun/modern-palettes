import React, { useState } from 'react';
import Header from 'layouts/Header';
import { Container, Grid, Heading, ColorPicker } from 'components';

function index() {
  const [color, setColor] = useState('#fafafa');
  const handleColorChange = ({ hex }) => setColor(hex);

  return (
    <div>
      <Header />
      <Heading title="Create your own" subtitle="Generate" />
      <Container fluid>
        <Grid>
          <ColorPicker color={color} onChange={handleColorChange} />
        </Grid>
      </Container>
    </div>
  );
}

export default index;
