import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  topic: DS.attr(),
  url: DS.attr(),
  description: DS.attr()
});
