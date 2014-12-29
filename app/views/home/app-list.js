import Ember from 'ember';

var get = Ember.get;

export default Ember.View.extend({
  templateName: 'home/app-list',
  classNames: ['app-list'],

  content: [
    {logoUrl: 'assets/img/side_icons_1.png', name: 'Humber Resource', number: 12},
    {logoUrl: 'assets/img/side_icons_2.png', name: 'Customer Relationship', number: 12},
    {logoUrl: 'assets/img/side_icons_3.png', name: 'Project Management', number: 12},
    {logoUrl: 'assets/img/side_icons_4.png', name: 'Supply Chain', number: 12},
    {logoUrl: 'assets/img/side_icons_5.png', name: 'Sales Force', number: 12},
    {logoUrl: 'assets/img/side_icons_6.png', name: 'Accounting & Tax', number: 12},
    {logoUrl: 'assets/img/side_icons_7.png', name: 'Analytics', number: 12},
    {logoUrl: 'assets/img/side_icons_8.png', name: 'e-Commerce', number: 12},
    {logoUrl: 'assets/img/side_icons_9.png', name: 'Customize', number: 12}
  ],

  query: '',

  searchContent: [],

  init: function () {
    this.set('searchContent', this.get('content'));
    this._super();
  },

  onQueryChange: function () {
    var array = this.get('content').filter(function (item) {
      return get(item, 'name').toLowerCase().indexOf(this.get('query').toLowerCase()) > -1;
    }.bind(this));
    this.set('searchContent', array);
  }.observes('query'),

  keyDown: function (evt) {
    if (evt.keyCode === 27) { // escape
      this.set('query', '');
    }
  }

});
