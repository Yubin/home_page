import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function () {
    console.log(this.get('content') );
    this.$().css('background-image', 'url(' + this.get('content') + ')');
  }
});
