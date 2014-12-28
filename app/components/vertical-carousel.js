import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['carousel','slide','vertical'],

  currentIndx: 0,

  minIndex: 0,

  maxIndex: 2,

  interval: 5000,

  reverse: false, // if true, from max to min

  onResize: function () {
    var winHeight = Ember.$(document).height();
    this.$('.control').css('top', winHeight/2);
    this.$('li').height(winHeight);
  },

  didInsertElement: function () {

    this.onResize();

    Ember.$(window).resize(function () {
      this.onResize();
    }.bind(this));

    this.set('timer', setInterval(function () {
      this.addIndex(1);
    }.bind(this), this.get('interval')));
  },

  addIndex: function (delta) {

    var currentIndx = this.get('currentIndx') + delta;
    var minIndex = this.get('minIndex');
    var maxIndex = this.get('maxIndex');

    if (currentIndx > maxIndex) {
      currentIndx = minIndex;
    }
    if (currentIndx < minIndex) {
      currentIndx = maxIndex;
    }
    this.set('currentIndx', currentIndx);
  },

  onIndexChange: function () {
    var currentIndx = this.get('currentIndx');
    var height = Ember.$(document).height() * currentIndx * -1;
    var translateY = "translateY(" + height +"px)";

    this.$('ul').css({
      "-webkit-transform": translateY,
      "-ms-transform": translateY,
      "transform": translateY
    });

    console.log(height);

  }.observes('currentIndx'),

  actions: {
    prev: function () {
      clearInterval(this.get('timer'));
      this.addIndex(-1);
      this.set('timer', setInterval(function () {
        this.addIndex(1);
      }.bind(this), this.get('interval')));

    },
    next: function () {
      clearInterval(this.get('timer'));
      this.addIndex(1);
      this.set('timer', setInterval(function () {
        this.addIndex(1);
      }.bind(this), this.get('interval')));
    }
  }

});
