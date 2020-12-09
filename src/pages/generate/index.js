import React, { Fragment, useState, useRef, createRef } from 'react';
import Header from 'layouts/Header';
import { Container, Card, Grid, Heading, ColorPicker, Popover } from 'components';
import styles from './Generate.module.scss';

function index() {
  const [color, setColor] = useState('#fafafa');
  const [colorset, setColorset] = useState([
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

  const pickerRef = useRef();
  const colorsetItemRefs = [];
  const [activeColorset, setActiveColorset] = useState(0);

  const handleColorChange = ({ hex }) => {
    setColor(hex);
    colorset[activeColorset].color = color;
  };
  const toggleColorPicker = (triggerRef) => {
    setColor(colorset[triggerRef].color);
    pickerRef.current.togglePopover(triggerRef);
  };

  const NewColor = ({ children, color, ...props }) => (
    <Card className={styles.card} {...props}>
      <div className={styles.newColor} style={{ backgroundColor: color }}></div>
    </Card>
  );

  return (
    <Fragment>
      <Header />
      <Heading title="Create your own" subtitle="Generate" />
      <Container className="position-relative">
        <Grid>
          {colorset.map((set, index) => (
            <NewColor
              ref={(element) => {
                colorsetItemRefs[index] = createRef();
                colorsetItemRefs[index].current = element;
              }}
              key={index}
              color={set.color}
              onClick={() => {
                setActiveColorset(index);
                toggleColorPicker(index);
              }}
            />
          ))}
        </Grid>
        <Popover ref={pickerRef} withArrow>
          <ColorPicker
            color={color}
            onChange={handleColorChange}
            onOverlayClick={() => toggleColorPicker()}
          />
        </Popover>
      </Container>
    </Fragment>
  );
}

export default index;
