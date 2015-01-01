import Ember from 'ember';

var get = Ember.get;

export default Ember.Component.extend({

  classNames: ['left-nav-wrap'],

  activeIndex: 0,

  action: 'indexChange',

  didInsertElement: function () {
    var array = this.$('li');
    this.$(array[this.get('activeIndex')]).addClass('active');
    this.sendAction('action', this.get('activeIndex'));
  },

  click: function (evt) {
    var target = $( event.target );
    var active = this.$('li.active');
    if (target.is('li') && target[0] !== active[0]) {
      this.set('activeIndex', target.index());
      active.removeClass('active');
      target.addClass('active');
      this.sendAction('action', target.index());
    }
  }

});
