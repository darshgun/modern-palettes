import React, { useState, useRef, createRef } from 'react';
import Header from 'layouts/Header';
import { Container, Card, Grid, Heading, ColorPicker, Popover } from 'components';
import styles from './Generate.module.scss';

function index() {
  const [color, setColor] = useState('#fafafa');
  const [openPicker, setOpenPicker] = useState(false);

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
  const colorsetItems = [];

  const handleColorChange = ({ hex }) => setColor(hex);
  const toggleColorPicker = (triggerRef) => {
    pickerRef.current.togglePopover(triggerRef);
    console.log(triggerRef);
  };

  const NewColor = ({ children, color, ...props }) => (
    <Card className={styles.card} {...props}>
      <div className={styles.newColor} style={{ backgroundColor: color }}></div>
    </Card>
  );

  return (
    <div style={{ position: 'relative' }}>
      <Header />
      <Heading title="Create your own" subtitle="Generate" />
      <Container>
        <Grid>
          {colorset.map((set, index) => (
            <NewColor
              ref={(element) => {
                colorsetItems[index] = createRef();
                colorsetItems[index].current = element;
              }}
              key={index}
              color={set.color}
              onClick={() => {
                toggleColorPicker(index);
              }}
            />
          ))}
        </Grid>
      </Container>

      <Popover ref={pickerRef}>
        <ColorPicker
          open={openPicker}
          color={color}
          onChange={handleColorChange}
          onOverlayClick={() => toggleColorPicker()}
        />
      </Popover>
    </div>
  );
}

export default index;
