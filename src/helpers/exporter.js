import nameColor from 'helpers/nameColor';

export const exportCss = (colorset) => {
  let exportCode = '';
  const { colors } = colorset;

  colors.map((color, index) => {
    const colorName = nameColor(color, true);
    exportCode = `${exportCode} --${colorName}: ${color} ${index < colors.length - 1 && `\n`}`;
  });

  return exportCode;
};
