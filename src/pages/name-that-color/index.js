import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { SeoTags } from 'helpers/seoTags';
import Header from 'layouts/Header';
import { Container, Grid, Heading, Card, ColorBoard } from 'components';

export default function index() {
  const [color, setColor] = useState();
  const router = useRouter();
  const { query } = router;

  /**
   * ColorPicker actions
   */
  const handleColorBoardOnChange = ({ hex }) => {
    setColor(hex);
  };
  const handleColorBoardOnChangeComplete = ({ hex }) => {
    setColor(hex);
  };

  return (
    <div>
      <Header />
      <SeoTags title="Name that color" description="Find the name of a color" />
      <Heading title="Name that color" subtitle="More Tools" />
      <Container>
        <Grid>
          <Grid.Column size={{ sm: '1/3' }}>
            <ColorBoard
              color={color}
              onChange={handleColorBoardOnChange}
              onChangeComplete={handleColorBoardOnChangeComplete}
            />
          </Grid.Column>
          <Grid.Column size={{ sm: '2/3' }}>{color}</Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}
