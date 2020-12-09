import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import { usePopper } from 'react-popper';
import { Portal, Card } from 'components';
import modStyles from './Popover.module.scss';

export const PopoverDemo = forwardRef(({ children, className, withArrow, container }, ref) => {
  const properties = {
    className: `${modStyles.popover} ${className}`,
  };

  const [showPopper, setShowPopper] = useState(false);
  const popperRef = useRef(null);
  const [buttonRef, setButtonRef] = useState(useRef(null));
  const [arrowRef, setArrowRef] = useState(null);

  /**
   * Open popover
   */
  const open = (triggerRef) => {
    setButtonRef(triggerRef);
    setShowPopper(true);
  };

  /**
   * Close popover
   */
  const close = (triggerRef) => {
    setButtonRef(triggerRef);
    setShowPopper(false);
  };

  /**
   * Toggle popover
   */
  const toggle = (triggerRef) => {
    setButtonRef(triggerRef);
    setShowPopper(!showPopper);
  };

  const { styles, attributes } = usePopper(buttonRef.current, popperRef.current, {
    placement: 'bottom',
    modifiers: [
      {
        name: 'arrow',
        options: {
          element: arrowRef,
        },
      },
      {
        name: 'offset',
        enabled: true,
        options: {
          offset: [0, 10],
        },
      },
    ],
  });

  /**
   * Exposed functions
   */
  useImperativeHandle(ref, () => ({
    openPopover: (triggerRef) => open(triggerRef),
    closePopover: (triggerRef) => close(triggerRef),
    togglePopover: (triggerRef) => toggle(triggerRef),
  }));

  if (showPopper) {
    return (
      <Portal>
        <div
          className={`${modStyles.overlay} ${!showPopper && 'd-none'}`}
          ref={ref}
          onClick={close}
        />
        {showPopper ? (
          <Card {...properties} ref={popperRef} style={styles.popper} {...attributes.popper}>
            {withArrow && (
              <div ref={setArrowRef} style={styles.arrow} className={modStyles.arrow} />
            )}
            {children}
          </Card>
        ) : null}
      </Portal>
    );
  }
  return null;
});

PopoverDemo.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  arrow: PropTypes.bool,
  container: PropTypes.node,
};

export default PopoverDemo;
