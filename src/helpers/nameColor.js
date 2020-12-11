import _ from 'lodash';
import namer from 'color-namer';

export default function nameColor(color) {
  const ntc = namer(color, { pick: ['ntc'] }).ntc;
  const closest = _.sortBy(ntc, ['distance'], ['asc']);
  return ntc;
}
