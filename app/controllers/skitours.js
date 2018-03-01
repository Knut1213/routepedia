import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    filterByStart(param) {
      if (param !== '') {
        return this.get('store')
          .query('skitour', {
            start: param
          })
          .then((results) => {
            return {
              query: param,
              results: results
            };
          });
      } else {
        return this.get('store')
          .findAll('skitour')
          .then((results) => {
            return {
              query: param,
              results: results
            };
          });
      }
    }
  }
});