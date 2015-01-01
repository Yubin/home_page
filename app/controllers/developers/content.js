import Ember from 'ember';

export default Ember.Controller.extend({

  activeContent: 0,
  menu: [
    {name: 'Welcome'},
    {name: 'APP Serve APP'},
    {name: 'Unified Javascript'}
  ],
  actions: {
    indexChange: function (index) {
      console.log(index);
      this.set('activeContent', index);
    }
  }
});
