import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function () {
    this.$().css('background-image', 'url(' + this.get('content') + ')');
  }
});
