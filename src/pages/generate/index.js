import React, { Fragment, useState, useEffect, useRef, createRef } from 'react';
import validateHex from 'helpers/validateHex';
import Header from 'layouts/Header';
import { Container, Card, Grid, Heading, ColorPicker, Popover } from 'components';
import styles from './Generate.module.scss';

function index() {
  /**
   * Default color and starter color sets
   */
  const [color, setColor] = useState('#fafafa');
  const [colorSets, setColorSets] = useState([
    {
      color: '#fafafa',
      order: 1,
    },
    {
      color: '#fafafa',
      order: 2,
    },
    {
      color: '#fafafa',
      order: 3,
    },
    {
      color: '#fafafa',
      order: 4,
    },
    {
      color: '#fafafa',
      order: 5,
    },
  ]);

  const [activeColorSet, setActiveColorSet] = useState(0);
  useEffect(() => {
    validateHex(color);
    colorSets[activeColorSet].color = color;
  }, [activeColorSet, color]);

  /**
   * Color picker and colorSet refs
   */
  const pickerRef = useRef();
  const colorSetRefs = [];
  const toggleColorPicker = (triggerRef) => {
    setColor(colorSets[triggerRef].color);
    pickerRef.current.togglePopover(triggerRef);
  };

  /**
   * ColorPicker actions
   */
  const handleColorPickerOnChange = ({ hex }) => {
    setColor(hex);
    colorSets[activeColorSet].color = color;
  };
  const handleColorPickerOnChangeComplete = ({ hex }) => {
    setColor(hex);
    colorSets[activeColorSet].color = color;
  };

  return (
    <Fragment>
      <Header />
      <Heading title="Create your own" subtitle="Generate" />
      <Container className="position-relative">
        <Grid>
          {colorSets.map((set, index) => (
            <Card
              className={`${styles.card} ${styles.newColor}`}
              ref={(element) => {
                colorSetRefs[index] = createRef();
                colorSetRefs[index].current = element;
              }}
              key={index}
              color={set.color}
              onClick={() => {
                setActiveColorSet(index);
              }}
            >
              <input
                className={styles.newColorInput}
                type="text"
                value={color}
                onChange={(event) => {
                  setColor(event.target.value);
                }}
              />
              <div
                className={styles.newColorBox}
                style={{ backgroundColor: color }}
                onClick={() => toggleColorPicker(index)}
              ></div>
            </Card>
          ))}
        </Grid>

        <Popover ref={pickerRef} withArrow>
          <ColorPicker
            color={color}
            onChange={handleColorPickerOnChange}
            onChangeComplete={handleColorPickerOnChangeComplete}
          />
        </Popover>
      </Container>
    </Fragment>
  );
}

export default index;
