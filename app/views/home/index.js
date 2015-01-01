import Ember from 'ember';

export default Ember.View.extend({
  classNames: ['full'],

  // ddLength: 0.025,

  getContentWidth: function () {
    return this.$('> div.wrapper').width() * 0.92;
  },

  onResize: function () {
    // var width = 100 * this.getContentWidth() / this.$('> div.wrapper').width();
    var width = 92;
    var array = this.$('dd');
    var ddWidth = 0.02 * this.$('> div.wrapper').width();
    var totalDdWidth = 0.5 * this.$('> div.wrapper').width();
    for(var i = 0; i < array.length; i++) {
      var dd = this.$(array[i]);
      if (dd.offset().left < totalDdWidth) {
        dd.css('left', ddWidth * i);
      } else {
        dd.css('left', this.$('> div.wrapper').width() + ddWidth * (i - 5));
      }
    }
    for(var i = 0; i < array.length; i++) {
      var dd = this.$(array[i]);
      dd.css({
        width: width + '%'
      });
    }
  },

  didInsertElement: function () {

    Ember.$(window).resize(function (evt) {
      this.onResize();
    }.bind(this));

    Ember.$(window).keydown(function (evt) {
      if (evt.keyCode === 9) { // TBD: nicer way to disable Tab
        evt.stopPropagation();
        evt.preventDefault();
      }
    });

    this.onResize();
    this.$('dd > h4').click(function(evt) {
      var node = this.$(evt.currentTarget).parent('dd');

      var index = node.index();
      var left = node.offset().left;
      var array = this.$('dd');
      var dd, i;
      var ddWidth = 0.02 * this.$('> div.wrapper').width();
      var totalDdWidth = ddWidth * 4;

      if (left > totalDdWidth) { // go left
        for(i = index; i > 0; i--) {
          dd = this.$(array[i]);
          if (dd.offset().left < totalDdWidth) { break;}
          dd.animate({'left': ddWidth * i}, {
            complete: function() {
              node.find('h4 a').css({'display': 'none'});
            }
          });
        }
        Ember.$(array[i]).find('h4 a').css('display', 'block');

      } else { // go right
        for(i = index + 1; i < array.length; i++) {
          dd = this.$(array[i]);
          if (dd.offset().left < totalDdWidth + 1) {
            dd.animate({'left': this.$('> div.wrapper').width() + ddWidth * (i - 5) }, {
              complete: function () {
                Ember.$(this).find('h4 a').css('display', 'block');
                node.find('h4 a').css({'display': 'none'});
              }
            });
          }
        }
      }
    }.bind(this));
  }

});
