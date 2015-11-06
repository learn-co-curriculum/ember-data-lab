import Mirage, {faker}  from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  title: function(){
    return `Learn ${faker.hacker.ingverb()}`;
  },
  description: faker.hacker.phrase,
  url: 'www.example.com',
  topic: faker.hacker.noun
});