import React from 'react';
import { Container, Grid } from 'components';
import styles from './Heading.module.scss';

function Heading({ title, subtitle, children }) {
  return (
    <div className={styles.heading}>
      <Container>
        <Grid>
          <Grid.Column>
            <h3 className={styles.subtitle}>{subtitle}</h3>
            <h1 className={styles.title}>{title}</h1>
          </Grid.Column>
        </Grid>
        <Grid>
          <Grid.Column>{children}</Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}

export default Heading;
