import nameColor from 'helpers/nameColor';
import validateHex from 'helpers/validateHex';

export default function distance(request, response) {
  const {
    query: { hex },
  } = request;
  const hexString = `#${hex}`;

  const ntc = nameColor(hexString);

  if (validateHex(hexString)) {
    return response.status(200).json(ntc[0].name);
  }
  response.end('Invalid color code');
}
