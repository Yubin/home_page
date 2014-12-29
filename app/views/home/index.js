import Ember from 'ember';

export default Ember.View.extend({
  classNames: ['full'],

  // ddLength: 0.025,

  getContentWidth: function () {
    return this.$('> div.col-md-10').width() * 0.9;
  },

  onResize: function () {
    // var width = 100 * this.getContentWidth() / this.$('> div.col-md-10').width();
    var width = 90;
    var array = this.$('dd');
    var ddWidth = 0.025 * this.$('> div.col-md-10').width();
    for(var i = 0; i < array.length; i++) {
      var dd = this.$(array[i]);
      dd.css({
        left: ddWidth * i
      });
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

    this.onResize();
    this.$('dd > h4').click(function(evt) {
      var node = this.$(evt.currentTarget).parent('dd');
      var index = node.index();
      var left = node.offset().left;
      var array = this.$('dd');
      var dd, i;
      var ddWidth = 0.025 * this.$('> div.col-md-10').width();
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
            dd.animate({'left': this.$('> div.col-md-10').width() + ddWidth * (i - 5) }, {
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
