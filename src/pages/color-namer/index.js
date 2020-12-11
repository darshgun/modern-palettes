import React from 'react';
import { useRouter } from 'next/router';
import Header from 'layouts/Header';
import { Container, Grid, Heading, Card, ColorBoard } from 'components';

export default function index() {
  const router = useRouter();
  const { query } = router;

  return (
    <div>
      <Header />
      <Heading title="Popular palettes" subtitle="Explore" />
      <Container>
        <Grid>
          <Grid.Column size={{ sm: '1/3' }}>
            <ColorBoard />
          </Grid.Column>
          <Grid.Column size={{ sm: '2/3' }}>Test</Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}
