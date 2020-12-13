import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { SeoTags } from 'helpers/seoTags';
import Header from 'layouts/Header';
import nameColor from 'helpers/nameColor';
import validateHex, { returnIfNotColor } from 'helpers/validateHex';
import { Container, Grid, Heading, Card, ColorBoard } from 'components';
import styles from './NameColor.module.scss';

export default function index({ urlColor }) {
  const router = useRouter();

  const [color, setColor] = useState(urlColor);
  const [colorInput, setColorInput] = useState(urlColor);
  const [typing, setTyping] = useState(false);

  /**
   * ColorPicker actions
   */
  const handleColorBoardOnChange = ({ hex }) => {
    setColor(hex);
    setColorInput(hex);
  };
  const handleColorBoardOnChangeComplete = ({ hex }) => {
    setShadowUrl(hex);
  };

  const setShadowUrl = (urlSegment) => {
    const urlSegmentWithoutHash = urlSegment.replace('#', '');
    setTimeout(() => {
      router.push(`/name-that-color/${urlSegmentWithoutHash}`, undefined, { shallow: true });
    });
  };

  useEffect(() => {
    if (validateHex(colorInput)) {
      if (typing) {
        setColor(colorInput);
        setShadowUrl(colorInput);
      }
    }
  }, [colorInput]);

  return (
    <div>
      <Header />
      <SeoTags title="Name that color" description="Find the name of a color" />
      <Heading title="Enter the color" subtitle="Name that color">
        <input
          className={styles.colorInput}
          type="text"
          value={colorInput}
          onFocus={() => setTyping(true)}
          onBlur={() => setTyping(false)}
          onChange={(e) => setColorInput(e.target.value)}
        />
      </Heading>
      <Container>
        <Grid>
          <Grid.Column size={{ sm: '1/3' }}>
            <ColorBoard
              elementClassName={styles.colorBoardHeight}
              color={color}
              onChange={handleColorBoardOnChange}
              onChangeComplete={handleColorBoardOnChangeComplete}
            />
          </Grid.Column>
          <Grid.Column size={{ sm: '2/3' }}>Color name: {nameColor(color)}</Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}

index.defaultProps = {
  urlColor: '#fefefe',
};
