import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  start: DS.attr('string'),
  difficulty: DS.attr('string'),
  duration: DS.attr('number'),
  heightdifference: DS.attr('number'),
  exposition: DS.attr('string'),
  description: DS.attr('string')
});