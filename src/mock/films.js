import { getRandomInteger } from '../utils.js';

const generateTitle = () => {
  const titles = [
    'Made For Each Other',
    'Popeye Meets Sinbad',
    'Sagebrush Trail',
    'Santa Claus Conquers The Martians',
    'The Dance Of Life',
    'The Great Flamarion',
    'The Man With The Golden Arm'
  ];

  const randomIndex = () => getRandomInteger(0, titles.length-1);

  return titles[randomIndex];
};

const generateAlternativeTitle = () => {
  const alternativeTitles = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven'
  ];

  const randomIndex = () => getRandomInteger(0, alternativeTitles.length-1);

  return alternativeTitles[randomIndex];
};

const generateTotalRating = () => {
  const totalRatings = [
    7.8,
    9,
    8.6,
    9.4,
    8,9,
    7.7,
    10
  ];

  const randomIndex = () => getRandomInteger(0, totalRatings.length-1);

  return totalRatings[randomIndex];
};

const generatePoster = () => {
  const posters = [
    './images/posters/made-for-each-other.png',
    './images/posters/popeye-meets-sinbad.png',
    './images/posters/sagebrush-trail.jpg',
    './images/posters/santa-claus-conquers-the-martians.jpg',
    './images/posters/the-dance-of-life.jpg',
    './images/posters/the-great-flamarion.jpg',
    './images/posters/the-man-with-the-golden-arm.jpg'
  ];

  const randomIndex = () => getRandomInteger(0, posters.length-1);

  return posters[randomIndex];
};

const generateAgeRating = () => {
  const ageRatings = [
    0,
    12,
    14,
    18,
    6,
    3,
    9
  ];

  const randomIndex = () => getRandomInteger(0, ageRatings.length-1);

  return ageRatings[randomIndex];
};

const generateReleaseCountry = () => {
  const releaseCountries = [
    'CCCP',
    'Great Britain',
    'USA',
    'Germany',
    'France',
    'Italy',
    'Spain',
    'Finland'
  ];

  const randomIndex = () => getRandomInteger(0, releaseCountries.length-1);

  return releaseCountries[randomIndex];
};

const generateActors = () => {
  const actors = [
    'Leonardo',
    'Markus',
    'Reedman',
    'Ovchinikov',
    'Goodman',
    'Okonell',
    'Joye',
    'David'
  ];

  const randomIndex = () => getRandomInteger(0, actors.length-1);

  return actors[randomIndex];
};


export const generateFilm = () => ({
  'title': generateTitle(),
  alternativeTitle: generateAlternativeTitle(),
  totalRating: generateTotalRating(),
  poster: generatePoster(),
  ageRating: generateAgeRating(),
  director: 'Tom Ford',
  writers: [
    'Takeshi Kitano'
  ],
  actors: [
    generateActors()
  ],
  release: {
    date: null,
    releaseCountry: generateReleaseCountry()
  },
  runtime: 77,
  genre: [
    'Comedy'
  ],
  description: 'Oscar-winning film, a war drama about two young people, from the creators of timeless classic \'"\'Nu, Pogodi!\'"\' and\' "\'Alice in Wonderland\'"\', with the best fight scenes since Bruce Lee.'
});
