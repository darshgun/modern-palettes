import React, { Fragment, useState, useRef, createRef } from 'react';
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

  const [activeColorSet, setActiveColorSet] = useState({});
  const updateActiveColorSet = (index, values) => {};

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
  const handleColorPickerChange = ({ hex }) => {
    setColor(hex);
    colorSets[activeColorSet].color = color;
  };
  const handleColorPickerChangeComplete = ({ hex }) => {
    setColor(hex);
    console.log(hex);
    colorSets[activeColorSet].color = color;
  };

  const NewColor = ({ children, color, onInputChange, ...props }) => (
    <Card className={styles.card} {...props}>
      <div className={styles.newColor} style={{ backgroundColor: color }}>
        <input type="text" value={color} onChange={onInputChange} />
      </div>
    </Card>
  );

  return (
    <Fragment>
      <Header />
      <Heading title="Create your own" subtitle="Generate" />
      <Container className="position-relative">
        <Grid>
          {colorSets.map((set, index) => (
            <NewColor
              ref={(element) => {
                colorSetRefs[index] = createRef();
                colorSetRefs[index].current = element;
              }}
              key={index}
              color={set.color}
              onClick={() => {
                setActiveColorSet(index);
                toggleColorPicker(index);
              }}
              onInputChange={() => set}
            />
          ))}
        </Grid>

        <Popover ref={pickerRef} withArrow>
          <ColorPicker
            color={color}
            onChange={handleColorPickerChange}
            onChangeComplete={handleColorPickerChangeComplete}
          />
        </Popover>
      </Container>
    </Fragment>
  );
}

export default index;
