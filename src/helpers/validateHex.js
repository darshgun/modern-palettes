export default function validateHex(hex) {
  if (hex) {
    return /^#([0-9A-F]{3}){1,2}$/i.test(hex);
  }
}

export function returnIfNotColor(hex, falseValue) {
  if (validateHex(hex)) {
    return hex;
  }
  return falseValue;
}
