import _ from 'lodash';
import namer from 'color-namer';

export default function nameColor(color, camelCase = false) {
  const ntc = namer(color, { pick: ['ntc'] }).ntc;
  if (camelCase) {
    return _.camelCase(ntc[0].name);
  }
  return ntc[0].name;
}

export function colorDistances(color) {
  const ntc = namer(color, { pick: ['ntc'] }).ntc;
  return ntc;
}
