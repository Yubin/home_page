import Ember from 'ember';

export default Ember.CollectionView.extend({
  tagName: 'ul',
  itemViewClass: 'home/images-item',
  padding: false,

  init: function () {
    if (this.get('padding')) {
      var array = this.get('content');
      if (array.length > 2) {
        var first = array[0];
        var last = array[array.length-1];
        array.unshift(last);
        array.push(first);
        this.set('content', array);
      }
    }
    this._super();

  }


});
