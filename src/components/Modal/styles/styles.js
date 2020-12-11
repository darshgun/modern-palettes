export const styles = {
  Portal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 1040,
  },

  Modal: {
    backgroundColor: 'white',
    position: 'relative',
    width: 'auto',
    margin: '0.5rem',
    zIndex: 1,
  },

  Overlay: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  Hidden: {
    display: 'none',
  },
};
