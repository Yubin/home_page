import Ember from 'ember';

export default Ember.Controller.extend({

  activeContent: 0,
  menu: [
    {name: 'About'},
    {name: 'Jobs'},
  ],
  actions: {
    indexChange: function (index) {
      console.log(index);
      this.set('activeContent', index);
    }
  }
});
