import { colorDistances } from 'helpers/nameColor';
import validateHex from 'helpers/validateHex';

export default function distance(request, response) {
  const {
    query: { hex },
  } = request;
  const hexString = `#${hex}`;

  const ntc = colorDistances(hexString);

  if (validateHex(hexString)) {
    return response.status(200).json(ntc);
  }
  response.end('Invalid color code');
}
