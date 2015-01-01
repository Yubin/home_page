import Ember from 'ember';

export default Ember.View.extend({
  classNames: ['dd-content', 'developers-content'],
  templateName: 'developers/content',

  onIndexChange: function () {
    var index = this.get('controller.activeContent') || 0;

    if (this._state === 'inDOM') {
      this.$('.item').hide();
      if (index > 2) {
        index = 2;
      }
      this.$(this.$('.item')[index]).show();
    }

  }.observes('controller.activeContent'),

  didInsertElement: function () {
    this.onIndexChange();
  }

});
