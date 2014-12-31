import Ember from 'ember';

export default Ember.Component.extend({
  content: [{name: 'Top Apps'},
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

click: function (evt) {
  console.log(evt.target);
  this.$('li').removeClass('active');
  this.$(evt.target).addClass('active');
}

});
