import Ember from 'ember';

var get = Ember.get;

export default Ember.View.extend({
  templateName: 'home/app-list',
  classNames: ['app-list'],

  content: [
    {logoUrl: 'assets/img/side_icons_1.png', name: 'Human Resource', number: 52},
    {logoUrl: 'assets/img/side_icons_2.png', name: 'Customer Relationship', number: 9},
    {logoUrl: 'assets/img/side_icons_3.png', name: 'Project Management', number: 42},
    {logoUrl: 'assets/img/side_icons_4.png', name: 'Supply Chain', number: 16},
    {logoUrl: 'assets/img/side_icons_5.png', name: 'Sales Force', number: 19},
    {logoUrl: 'assets/img/side_icons_6.png', name: 'Accounting & Tax', number: 22},
    {logoUrl: 'assets/img/side_icons_7.png', name: 'Analytics & Reports', number: 10},
    {logoUrl: 'assets/img/side_icons_8.png', name: 'e-Commerce', number: 31},
    {logoUrl: 'assets/img/side_icons_9.png', name: 'Customized APP', number: 13}
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
