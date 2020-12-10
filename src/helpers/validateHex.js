export default function validateHex(hex) {
  if (hex) {
    console.log(/^#([0-9A-F]{3}){1,2}$/i.test(hex));
  }
}
