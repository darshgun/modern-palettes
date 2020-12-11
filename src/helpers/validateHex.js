export default function validateHex(hex) {
  if (hex) {
    return /^#([0-9A-F]{3}){1,2}$/i.test(hex);
  }
}
