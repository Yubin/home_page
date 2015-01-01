import Ember from 'ember';

export default Ember.View.extend({
  classNames: ['app-store-content'],
  templateName: 'store/content',

  onIndexChange: function () {
    var index = this.get('controller.activeContent') || 0;

    if (this._state === 'inDOM') {
      this.$('.item').hide();
      if (index > 1) {
        index = 1;
      }
      this.$(this.$('.item')[index]).show();
    }

  }.observes('controller.activeContent'),

  didInsertElement: function () {
    this.onIndexChange();
  }

});
