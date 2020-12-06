import React from 'react';
import { Container, Grid } from 'components';
import styles from './Heading.module.scss';

function Heading({ title, subtitle }) {
  return (
    <div className={styles.heading}>
      <Container>
        <Grid.Column>
          <Grid.Column>
            <h3 className={styles.subtitle}>{subtitle}</h3>
            <h1 className={styles.title}>{title}</h1>
          </Grid.Column>
        </Grid.Column>
      </Container>
    </div>
  );
}

export default Heading;
