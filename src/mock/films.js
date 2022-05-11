import dayjs from 'dayjs';
import { getRandomInteger, getRandomFloatInteger, getRandomBoolean, getRandomArrayElement, getRandomArrayList } from '../utils.js';

const MAX_ID = 20;
//const MAX_COMMENTS_LENGTH = 10;

const Titles = [
  'Made For Each Other',
  'Popeye Meets Sinbad',
  'Sagebrush Trail',
  'Santa Claus Conquers The Martians',
  'The Dance Of Life',
  'The Great Flamarion',
  'The Man With The Golden Arm'
];

const Posters = [
  './images/posters/made-for-each-other.png',
  './images/posters/popeye-meets-sinbad.png',
  './images/posters/sagebrush-trail.jpg',
  './images/posters/santa-claus-conquers-the-martians.jpg',
  './images/posters/the-dance-of-life.jpg',
  './images/posters/the-great-flamarion.jpg',
  './images/posters/the-man-with-the-golden-arm.jpg'
];

const AgeRatings = [
  0,
  6,
  12,
  16,
  18,
];

const Actors = [
  'Robin Williams',
  'Tom Hanks',
  'Harrison Ford',
  'Sandra Bullock',
  'Jackie Chan',
  'Dwayne "The Rock" Johnson',
  'Will Smith',
  'Bruce Willis',
  'Samuel L. Jackson',
  'Steve Martin',
  'Julia Roberts',
  'Anthony Hopkins',
  'Robert Downey Jr.',
  'Bill Murray',
  'Eddie Murphy',
  'Patrick Swayze',
  'Keanu Reeves',
  'Audrey Hepburn',
  'Danny DeVito',
  'Al Pacino',
  'Kurt Russell'
];

const Directors = [
  'Stanley Kubrick',
  'Alfred Hitchcock',
  'Akira Kurosawa',
  'Steven Spielberg',
  'Martin Scorsese',
  'Quentin Tarantino',
  'Ingmar Bergman',
  'John Ford',
  'Sergei Eisenstein',
  'Charlie Chaplin'
];

const Writers = [
  'Billy Wilder',
  'Ethan Coen and Joel Coen',
  'Robert Towne',
  'Quentin Tarantino',
  'Francis Ford Coppola',
  'William Goldman',
  'Charlie Kaufman',
  'Woody Allen',
  'Nora Ephron',
  'Ernest Lehman'
];

const Descriptions = [
  'Burlesque comic Ralph "Skid" Johnson (Skelly), and specialty dancer Bonny Lee King (Carroll), end up together on a cold, rainy night at a tr…',
  'Sentenced for a murder he did not commit, John Brant escapes from prison determined to find the real killer. By chance Brant\'s narrow escap…',
  'Frankie Machine (Frank Sinatra) is released from the federal Narcotic Farm in Lexington, Kentucky with a set of drums and a new outlook on…',
  'The Martians Momar ("Mom Martian") and Kimar ("King Martian") are worried that their children Girmar ("Girl Martian") and Bomar ("Boy Marti…',
  'In this short, Sindbad the Sailor (presumably Bluto playing a "role") proclaims himself, in song, to be the greatest sailor, adventurer and…',
  'Oscar-winning film, a war drama about two young people, from the creators of timeless classic \'"\'Nu, Pogodi!\'"\' and\' "\'Alice in Wonderland\'"\', with the best fight scenes since Bruce Lee.'
];

const ReleaseData = {
  MIN: 1895,
  MAX: 1980
};

const ReleaseCountries = [
  'CCCP',
  'Great Britain',
  'USA',
  'Germany',
  'France',
  'Italy',
  'Spain',
  'Finland'
];

const TotalRating = {
  MIN: 7,
  MAX: 10
};

const Genres = [
  'Action',
  'Comedy',
  'Drama',
  'Fantasy',
  'Horror',
  'Mystery',
  'Romance',
  'Thriller',
  'Musical'
];

const Comments = {
  AUTHORS: [ 'Monica', 'Phoebe', 'Ross', 'Chandler', 'Rachel', 'Joey'],
  COMMENTS: [
    'Never seen a selfie of yours that I don\'t like.',
    'You are the coolest.',
    'Watch out, world',
    'Besides chocolate, you are my favourite thing',
    'Very gorgeous; I am falling in love with this snap of you.',
    'Your smile is wow',
    'Dashing look',
    'Hey, you are breaking the internet'
  ],
  EMOTIONS: [ 'smile', 'sleeping', 'puke', 'angry'],
  get MAX() {
    return this.COMMENTS.length;
  }
};

const getRandomDate = () => {
  const maxDays = 360;
  const randomDay = getRandomInteger(0, maxDays);
  const formatDate = 'YYYY/MM/D HH:mm';

  return dayjs().add(-randomDay, 'day').format(formatDate);
};

const generateOneComment = (id = 0) => ({
  id,
  author: getRandomArrayElement(Comments.AUTHORS),
  comment:getRandomArrayElement(Comments.COMMENTS),
  date: getRandomDate(),
  emotion: getRandomArrayElement(Comments.EMOTIONS)
});

const generateComments = () => {
  const array = [];

  for (let i = 0; i <= MAX_ID; i++) {
    array.push(generateOneComment(i));
  }

  return array;
};

const commentsArray = generateComments();


export const generateFilm = (id = getRandomInteger(0, MAX_ID)) => {
  const title = getRandomArrayElement(Titles);

  return {
    id,
    comments: getRandomArrayList(commentsArray.map((comment) => comment.id)), //.slice(-MAX_COMMENTS_LENGTH),
    filmInfo: {
      title: title,
      alternativeTitle: title,
      totalRating: getRandomFloatInteger(TotalRating.MIN, TotalRating.MAX),
      poster: getRandomArrayElement(Posters),
      ageRating: getRandomArrayElement(AgeRatings),
      director: getRandomArrayElement(Directors),
      writers: [
        getRandomArrayElement(Writers)
      ],
      actors: [
        getRandomArrayList(Actors)
      ],
      release: {
        date: getRandomInteger(ReleaseData.MIN, ReleaseData.MAX),
        releaseCountry: getRandomArrayElement(ReleaseCountries)
      },
      runtime: 77,
      genre: getRandomArrayList(Genres),
      description: getRandomArrayElement(Descriptions)
    },
    userDetails: {
      watchList: getRandomBoolean(),
      alreadyWatched: getRandomBoolean(),
      watchingDate: getRandomDate(),
      favorite: getRandomBoolean()
    }};
};


export { commentsArray }; //Не уверен првильно ли экспортировать отсюда, а не из модели
