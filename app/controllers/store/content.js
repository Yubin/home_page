import Ember from 'ember';

export default Ember.Controller.extend({

  activeContent: 0,

  menu: [
    {name: 'Top Apps'},
    {name: 'Collaboration'},
    {name: 'Human Resources'},
    {name: 'Customer Relationship'},
    {name: 'Project Management'},
    {name: 'Sales Management'},
    {name: 'Supply Chain'},
    {name: 'e-Commerce'},
    {name: 'Accounting'},
    {name: 'Inventory'},
    {name: 'Analytics'}
  ],

  actions: {
    indexChange: function (index) {
      this.set('activeContent', index);
    }
  }
});
