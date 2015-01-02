import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['carousel','slide','vertical'],

  currentIndx: 1,

  minIndex: 1,

  maxIndex: 5,

  interval: 5000,

  autoSlide: true,

  reverse: false, // if true, from max to min

  defaultTransition: 1,

  circleSlide: true,

  images: [
    'assets/img/home_pic_2174_1512_1.jpg',
    'assets/img/home_pic_2174_1512_2.jpg',
    'assets/img/home_pic_2174_1512_5.jpg',
    'assets/img/home_pic_2174_1512_3.jpg',
    'assets/img/home_pic_2174_1512_4.jpg'
  ],

  onResize: function () {
    var winHeight = window.innerHeight;
    this.$('.control').css('top', winHeight/2);
    this.$('li').height(winHeight);
    this.onIndexChange(0);
  },

  didInsertElement: function () {

    this.onResize();

    Ember.$(window).resize(function () {
      this.onResize();
    }.bind(this));

    this.onIndexChange(0);

    this.resetTimer();

    this.$('.control').mouseover(function () {
      clearInterval(this.get('timer'));
    }.bind(this));

    this.$('.control').mouseout(function () {
      this.resetTimer();
    }.bind(this));

  },

  resetTimer: function () {
    clearInterval(this.get('timer'));
    if (this.get('autoSlide')) {
      this.set('timer', setInterval(function () {
        this.addIndex(1);
      }.bind(this), this.get('interval')));
    }
  },

  addIndex: function (delta) {

    var currentIndx = this.get('currentIndx') + delta;
    var minIndex = this.get('minIndex');
    var maxIndex = this.get('maxIndex');

    if (currentIndx > maxIndex) {
      this.onIndexChange(0, minIndex - 1);
      currentIndx = minIndex;
    }
    if (currentIndx < minIndex) {
      this.onIndexChange(0, maxIndex + 1);
      currentIndx = maxIndex;
    }
    this.set('currentIndx', currentIndx);
  },

  onIndexChange: function (transition, currentIndx) {
    if (isNaN(transition)) {
      transition = this.get('defaultTransition');
    }

    if (isNaN(currentIndx)) {
      currentIndx = this.get('currentIndx');
    }
    var height = window.innerHeight * currentIndx * -1;
    var translateY = "translateY(" + height +"px)";

    this.$('ul').css({
      "transition": transition + 's',
      "-webkit-transition": transition + 's',
      "-webkit-transform": translateY,
      "-ms-transform": translateY,
      "transform": translateY
    });

  }.observes('currentIndx'),

  actions: {
    prev: function () {
      this.addIndex(-1);
      this.resetTimer();
    },
    next: function () {
      this.addIndex(1);
      this.resetTimer();
    },

    page: function (item) {
      //TBD
    }
  }

});
