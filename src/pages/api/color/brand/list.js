import d01 from './data/01';
import d02 from './data/02';
import d03 from './data/03';
import d04 from './data/04';
import d05 from './data/05';

export const data = [...d01, ...d02, ...d03, ...d04, ...d05];

export default function List(request, response) {
  return response.status(200).json(data);
}
