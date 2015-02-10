import Ember from 'ember';

export default Ember.View.extend({
  classNames: ['dd-content', 'other-content'],
  templateName: 'other/content',

  onIndexChange: function () {
    var index = this.get('controller.activeContent') || 0;

    if (this._state === 'inDOM') {
      this.$('.item').hide();
      if (index > 2) {
        index = 2;
      }
      this.$(this.$('.item')[index]).fadeIn( "slow");
    }

  }.observes('controller.activeContent'),

  didInsertElement: function () {
    this.onIndexChange();
  }

});
