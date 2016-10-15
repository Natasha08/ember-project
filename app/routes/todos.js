import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ['shopping', 'working out', 'feeding the cats'];
  }
});
