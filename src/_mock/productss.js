import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const PRODUCT_NAME = [
  "1st grade (Elementary)",
  "2nd grade(Elementary)",
  "3rd grade(Elementary)",
  "4th grade(Elementary)",
  "5th grade(Elementary)",
  "6th grade(Middle)",
  "7th grade(Middle)",
  "8th grade(Middle)",
  "9th grade (freshman)",
  "10th grade (sophmore)",
  "11th grade (junior)",
  "12h grade (senior)",
];

// ----------------------------------------------------------------------

const products = [...Array(12)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
    cover: `/assets/images/products/product_${setIndex}.jpg`,
    name: PRODUCT_NAME[index],
    price: ([
      "0 Files / 0 links"
  ]),
    priceSale: setIndex % 3 ? null : faker.datatype.number({ min: 19, max: 29, precision: 0.01 }),
    status: sample([]),
  };
});

export default products;
