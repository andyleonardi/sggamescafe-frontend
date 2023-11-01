export interface Game {
  id: number;
  name: string;
  imgUrl: string;
  imgThumb: string;
  status: string;
  type: string;
  minPlayTime: number;
  maxPlayTime: number;
  minPlayer: number;
  maxPlayer: number;
  checkouts: Array<{
    ldap: string;
    checkoutType: string;
    checkDate: string;
  }>;
  reviews: Array<{
    ldap: string;
    recommended: boolean;
  }>;
}

export const games = [
  {
    id: 1111111112222111,
    name: 'Azul',
    imgUrl: 'https://cf.geekdo-images.com/aPSHJO0d0XOpQR5X-wJonw__original/img/AkbtYVc6xXJF3c9EUrakklcclKw=/0x0/filters:format(png)/pic6973671.png',
    imgThumb: 'https://cf.geekdo-images.com/aPSHJO0d0XOpQR5X-wJonw__thumb/img/ccsXKrdGJw-YSClWwzVUwk5Nh9Y=/fit-in/200x150/filters:strip_icc()/pic6973671.png',
    status: 'Available',
    type: 'Light',
    minPlayTime: 30,
    maxPlayTime: 60,
    minPlayer: 1,
    maxPlayer: 4,
    checkouts: [
        {
            ldap: 'andyleonardi',
            checkoutType: 'Borrow',
            checkDate: '2023-09-22',
        },
        {
            ldap: 'slatts',
            checkoutType: 'Play',
            checkDate: '2023-04-12',
        },
    ],
    reviews: [
        {
            ldap: 'andyleonardi',
            recommended: true,
        },
    ],
  },
  {
    id: 1111111112222112,
    name: 'Dune: Imperium',
    imgUrl: 'https://cf.geekdo-images.com/PhjygpWSo-0labGrPBMyyg__original/img/mZzaBAEEJpMlHWWmC0R6Su0OibQ=/0x0/filters:format(jpeg)/pic5666597.jpg',
    imgThumb: 'https://cf.geekdo-images.com/PhjygpWSo-0labGrPBMyyg__thumb/img/JGgY-nBmkyB8WRp8vcoBLlNMQ5U=/fit-in/200x150/filters:strip_icc()/pic5666597.jpg',
    status: 'Available',
    type: 'Next Step',
    minPlayTime: 60,
    maxPlayTime: 90,
    minPlayer: 1,
    maxPlayer: 4,
    checkouts: [
        {
            ldap: 'andyleonardi',
            checkoutType: 'Borrow',
            checkDate: '2023-07-06',
        },
    ],
    reviews: [
        {
            ldap: 'andyleonardi',
            recommended: true,
        },
    ],
  },
  {
    id: 1111111112222143,
    name: 'Everdell',
    imgUrl: 'https://cf.geekdo-images.com/fjE7V5LNq31yVEW_yuqI-Q__original/img/HQ1ti16wT9lqja5_h3gUfHUIcVI=/0x0/filters:format(png)/pic3918905.png',
    imgThumb: 'https://cf.geekdo-images.com/fjE7V5LNq31yVEW_yuqI-Q__thumb/img/Cf_mYxR_VvdjTEPXseSurni2JNI=/fit-in/200x150/filters:strip_icc()/pic3918905.png',
    status: 'Borrowed',
    type: 'Next Step',
    minPlayTime: 60,
    maxPlayTime: 90,
    minPlayer: 1,
    maxPlayer: 4,
    checkouts: [
        {
            ldap: 'slatts',
            checkoutType: 'Borrow',
            checkDate: '2023-10-09',
        },
    ],
    reviews: [],
  },
  {
    id: 1111111112222999,
    name: 'Codenames',
    imgUrl: 'https://cf.geekdo-images.com/aPSHJO0d0XOpQR5X-wJonw__original/img/AkbtYVc6xXJF3c9EUrakklcclKw=/0x0/filters:format(png)/pic6973671.png',
    imgThumb: 'https://cf.geekdo-images.com/aPSHJO0d0XOpQR5X-wJonw__thumb/img/ccsXKrdGJw-YSClWwzVUwk5Nh9Y=/fit-in/200x150/filters:strip_icc()/pic6973671.png',
    status: 'Removed',
    type: 'Party',
    minPlayTime: 10,
    maxPlayTime: 30,
    minPlayer: 3,
    maxPlayer: 12,
    checkouts: [
        {
            ldap: 'slatts',
            checkoutType: 'Borrow',
            checkDate: '2021-10-09',
        },
        {
            ldap: 'andyleonardi',
            checkoutType: 'Borrow',
            checkDate: '2021-02-10',
        },
        {
            ldap: 'slatts',
            checkoutType: 'Play',
            checkDate: '2020-09-22',
        },
        {
            ldap: 'votbear',
            checkoutType: 'Borrow',
            checkDate: '2020-08-30',
        },
    ],
    reviews: [
        {
            ldap: 'andyleonardi',
            recommended: true,
        },
        {
            ldap: 'slatts',
            recommended: true,
        },
        {
            ldap: 'votbear',
            recommended: false,
        },
    ],
  },
  {
    id: 1111112312222111,
    name: "Time's Up: Title Recall",
    imgUrl: 'https://cf.geekdo-images.com/fjE7V5LNq31yVEW_yuqI-Q__original/img/HQ1ti16wT9lqja5_h3gUfHUIcVI=/0x0/filters:format(png)/pic3918905.png',
    imgThumb: 'https://cf.geekdo-images.com/fjE7V5LNq31yVEW_yuqI-Q__thumb/img/Cf_mYxR_VvdjTEPXseSurni2JNI=/fit-in/200x150/filters:strip_icc()/pic3918905.png',
    status: 'Available',
    type: 'Party',
    minPlayTime: 20,
    maxPlayTime: 60,
    minPlayer: 3,
    maxPlayer: 99,
    checkouts: [
        {
            ldap: 'slatts',
            checkoutType: 'Play',
            checkDate: '2023-07-24',
        },
        {
            ldap: 'andyleonardi',
            checkoutType: 'Play',
            checkDate: '2023-01-25',
        },
        {
            ldap: 'minqi',
            checkoutType: 'Borrow',
            checkDate: '2022-09-25',
        },
        {
            ldap: 'votbear',
            checkoutType: 'Borrow',
            checkDate: '2022-06-13',
        },
        {
            ldap: 'slatts',
            checkoutType: 'Borrow',
            checkDate: '2022-06-02',
        },
    ],
    reviews: [
        {
            ldap: 'andyleonardi',
            recommended: true,
        },
        {
            ldap: 'minqi',
            recommended: true,
        },
        {
            ldap: 'votbear',
            recommended: true,
        },
        {
            ldap: 'slatts',
            recommended: true,
        },
    ],
  },
  {
    id: 2511111112222111,
    name: "Point Salad",
    imgUrl: 'https://cf.geekdo-images.com/PhjygpWSo-0labGrPBMyyg__original/img/mZzaBAEEJpMlHWWmC0R6Su0OibQ=/0x0/filters:format(jpeg)/pic5666597.jpg',
    imgThumb: 'https://cf.geekdo-images.com/PhjygpWSo-0labGrPBMyyg__thumb/img/JGgY-nBmkyB8WRp8vcoBLlNMQ5U=/fit-in/200x150/filters:strip_icc()/pic5666597.jpg',
    status: 'Available',
    type: 'Light',
    minPlayTime: 10,
    maxPlayTime: 30,
    minPlayer: 2,
    maxPlayer: 5,
    checkouts: [
        {
            ldap: 'slatts',
            checkoutType: 'Borrow',
            checkDate: '2023-05-14',
        },
        {
            ldap: 'minqi',
            checkoutType: 'Borrow',
            checkDate: '2022-09-25',
        },
        {
            ldap: 'slatts',
            checkoutType: 'Play',
            checkDate: '2022-08-17',
        },
    ],
    reviews: [
        {
            ldap: 'minqi',
            recommended: true,
        },
        {
            ldap: 'slatts',
            recommended: true,
        },
    ],
  },
  {
    id: 1111111155522111,
    name: "Architects of the Western Kingdom",
    imgUrl: 'https://cf.geekdo-images.com/PhjygpWSo-0labGrPBMyyg__original/img/mZzaBAEEJpMlHWWmC0R6Su0OibQ=/0x0/filters:format(jpeg)/pic5666597.jpg',
    imgThumb: 'https://cf.geekdo-images.com/PhjygpWSo-0labGrPBMyyg__thumb/img/JGgY-nBmkyB8WRp8vcoBLlNMQ5U=/fit-in/200x150/filters:strip_icc()/pic5666597.jpg',
    status: 'Available',
    type: 'Next Step',
    minPlayTime: 40,
    maxPlayTime: 80,
    minPlayer: 1,
    maxPlayer: 5,
    checkouts: [
        {
            ldap: 'andyleonardi',
            checkoutType: 'Borrow',
            checkDate: '2023-08-08',
        },
        {
            ldap: 'slatts',
            checkoutType: 'Play',
            checkDate: '2023-05-19',
        },
        {
            ldap: 'minqi',
            checkoutType: 'Borrow',
            checkDate: '2022-09-25',
        },
    ],
    reviews: [
        {
            ldap: 'andyleonardi',
            recommended: true,
        },
        {
            ldap: 'slatts',
            recommended: false,
        },
        {
            ldap: 'minqi',
            recommended: true,
        },
    ],
  },
  {
    id: 1111111111234567,
    name: "Pandemic",
    imgUrl: 'https://cf.geekdo-images.com/S3ybV1LAp-8SnHIXLLjVqA__original/img/IsrvRLpUV1TEyZsO5rC-btXaPz0=/0x0/filters:format(jpeg)/pic1534148.jpg',
    imgThumb: 'https://cf.geekdo-images.com/S3ybV1LAp-8SnHIXLLjVqA__thumb/img/oqViRj6nVxK3m36NluTxU1PZkrk=/fit-in/200x150/filters:strip_icc()/pic1534148.jpg',
    status: 'Borrowed',
    type: 'Co-op',
    minPlayTime: 60,
    maxPlayTime: 60,
    minPlayer: 1,
    maxPlayer: 4,
    checkouts: [
        {
            ldap: 'minqi',
            checkoutType: 'Borrow',
            checkDate: '2023-10-10',
        },
        {
            ldap: 'votbear',
            checkoutType: 'Borrow',
            checkDate: '2023-04-24',
        },
    ],
    reviews: [
        {
            ldap: 'votbear',
            recommended: true,
        },
    ],
  },
  {
    id: 1125111111252110,
    name: "Marvel United",
    imgUrl: 'https://cf.geekdo-images.com/S3ybV1LAp-8SnHIXLLjVqA__original/img/IsrvRLpUV1TEyZsO5rC-btXaPz0=/0x0/filters:format(jpeg)/pic1534148.jpg',
    imgThumb: 'https://cf.geekdo-images.com/S3ybV1LAp-8SnHIXLLjVqA__thumb/img/oqViRj6nVxK3m36NluTxU1PZkrk=/fit-in/200x150/filters:strip_icc()/pic1534148.jpg',
    status: 'Available',
    type: 'Co-op',
    minPlayTime: 30,
    maxPlayTime: 45,
    minPlayer: 1,
    maxPlayer: 4,
    checkouts: [
        {
            ldap: 'slatts',
            checkoutType: 'Borrow',
            checkDate: '2023-01-04',
        },
        {
            ldap: 'andyleonardi',
            checkoutType: 'Play',
            checkDate: '2022-05-15',
        },
        {
            ldap: 'slatts',
            checkoutType: 'Borrow',
            checkDate: '2022-04-27',
        },
    ],
    reviews: [
        {
            ldap: 'andyleonardi',
            recommended: true,
        },
        {
            ldap: 'slatts',
            recommended: true,
        },
    ],
  },
];
