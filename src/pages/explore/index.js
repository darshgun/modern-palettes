import React from 'react';
import Header from 'layouts/Header';
import { Container, Grid, Heading, PaletteCard } from 'components';

function index() {
  return (
    <div>
      <Header />
      <Heading title="Popular palettes" subtitle="Explore" />
      <Container fluid>
        <Grid>
          <Grid.Column className="d-flex">
            <PaletteCard colors={['#E45D2A', '#E56B36', '#EA9938', '#6DCCC1', '#88FBE7']} />
            <PaletteCard colors={['#E45D2A', '#E56B36', '#EA9938', '#6DCCC1', '#88FBE7']} />
            <PaletteCard colors={['#E45D2A', '#E56B36', '#EA9938', '#6DCCC1', '#88FBE7']} />
            <PaletteCard colors={['#E45D2A', '#E56B36', '#EA9938', '#6DCCC1', '#88FBE7']} />
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}

export default index;
