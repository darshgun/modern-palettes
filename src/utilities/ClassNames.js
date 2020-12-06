// Functions to combine classnames together
import cx from 'classnames';

export function ClassNames(...classNames) {
  return cx(classNames);
}

export function ClassName(name, prefix = '') {
  return [prefix, name].join('--');
}
