import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const POST_TITLES = [
  'math study room',  
  'Math study rooms : LIVE 🟢  ',
  "meeting : intercact club || subject : preparing to visit old people's home (nursing home) " ,
  'physics study rooms : LIVE 🟢 ',
  'science study rooms : LIVE 🟢 ',
  'personal devolopment room : LIVE 🟢 ',
  "debate room : LIVE 🟢",
  "French course A1 room : LIVE 🟢"
 
];

const posts = [...Array(11)].map((_, index) => ({
  id: faker.datatype.uuid(),
  cover: `/assets/images/covers/cover_${index + 1}.jpg`,
  title: POST_TITLES[index + 1],
  createdAt: faker.date.past(),
  view: faker.datatype.number(),
  comment: faker.datatype.number(),
  share: faker.datatype.number(),
  favorite: faker.datatype.number(),
  author: {
    name: faker.name.fullName(),
    avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  },
}));

export default posts;
