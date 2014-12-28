import Ember from 'ember';

export default Ember.CollectionView.extend({
  tagName: 'ul',
  itemViewClass: 'home/images-item',
  content: ['http://placehold.it/600x400&amp;text=First+Slide',
  'http://placehold.it/600x400&amp;text=Second+Slide',
  'http://placehold.it/600x400&amp;text=Third+Slide']



});
