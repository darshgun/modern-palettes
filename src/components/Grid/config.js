let configuration = {
  breakpoints: {
    mobile: 576,
    tablet: 768,
    desktop: 992,
    widescreen: 1200,
    fullhd: 1600,
  },
  containers: {
    mobile: 540,
    tablet: 750,
    desktop: 960,
    widescreen: 1140,
    fullhd: 1140,
  },
  gutterWidth: 32,
  gridColumns: 12,
  defaultScreenClass: 'desktop',
  columnSizes: {
    auto: [''],
    12: ['12', 'full'],
    11: ['11'],
    10: ['10'],
    9: ['9', 'three-quarters', '3/4'],
    8: ['8', 'two-thirds', '2/3'],
    7: ['7'],
    6: ['6', 'half', '1/2'],
    5: ['5'],
    4: ['4', 'one-third', '1/3'],
    3: ['3', 'quarter', '1/4'],
    2: ['2', '1/6'],
    1: ['1'],
    // 'one-fifth': ['one-fifth', '1/5'],
    // 'two-fifths': ['two-fifths', '2/5'],
    // 'three-fifths': ['three-fifths', '3/5'],
    // 'four-fifths': ['four-fifths', '4/5'],
  },
};

export const getConfiguration = () => configuration;

export const setConfiguration = (newConfiguration) => {
  configuration = { ...configuration, ...newConfiguration };
};
