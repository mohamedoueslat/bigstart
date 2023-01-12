import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const PRODUCT_NAME = [
  "6th grade",
  "7th grade",
  "8th grade",
  "9th grade (freshman)",
  "10th grade (sophmore)",
  "11th grade (junior)",
  "12h grade (senior)",
];

// ----------------------------------------------------------------------

const products = [...Array(7)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
    cover: `/assets/images/products/product_${setIndex}.jpg`,
    name: PRODUCT_NAME[index],
    price: ([
      "123 documents"
  ]),
    priceSale: setIndex % 3 ? null : faker.datatype.number({ min: 19, max: 29, precision: 0.01 }),
    status: sample(['sale', 'new', '', '']),
  };
});

export default products;
