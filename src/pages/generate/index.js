import React, { useState, useEffect } from 'react';
import Header from 'layouts/Header';
import { Container, Card, Grid, Heading, ColorPicker } from 'components';

function index() {
  const [color, setColor] = useState('#fafafa');
  const [openPicker, setOpenPicker] = useState(false);

  const handleColorChange = ({ hex }) => setColor(hex);
  const toggleColorPicker = () => setOpenPicker(!openPicker);

  const NewColor = ({ children, ...props }) => <Card {...props}>{children}</Card>;

  return (
    <div>
      <Header />
      <Heading title="Create your own" subtitle="Generate" />
      <Container fluid>
        <Grid>
          <NewColor onClick={() => toggleColorPicker()}>Color1</NewColor>
          <NewColor
            onClick={() => {
              toggleColorPicker();
            }}
          >
            Color2
          </NewColor>
          <NewColor
            onClick={() => {
              toggleColorPicker();
            }}
          >
            Color3
          </NewColor>
        </Grid>
      </Container>

      <ColorPicker
        open={openPicker}
        color={color}
        onChange={handleColorChange}
        onOverlayClick={() => toggleColorPicker()}
      />
    </div>
  );
}

export default index;
