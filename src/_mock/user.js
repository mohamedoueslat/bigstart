import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(10)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name:faker.name.fullName(),
  company:  sample([
    "11'th grade math book",
    'novel by cooleen hoover',
    'french book C1',
    "physics book 9'th grade",
    "backpack (pink)",
    "arabic book first year",
    "spanish book A2"

  ]),
  status: sample(['delivered', 'in progress']),
  role: sample([
    '1',
    '2',
    '4',
    '3',
    '5',
    '6',
    '7'
  ]),
}));

export default users;
