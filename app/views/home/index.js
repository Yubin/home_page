import Ember from 'ember';

export default Ember.View.extend({
  classNames: ['full'],

  ddLength: 30,



  getContentWidth: function () {
    return this.$('> div.col-md-10').width() - 120;
  },

  onResize: function () {
    var width = 100 * this.getContentWidth() / this.$('> div.col-md-10').width();
    var array = this.$('dd');
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
    var array = this.$('dd');
    for(var i = 0; i < array.length; i++) {
      var dd = this.$(array[i]);
      dd.css({
        left: 30 * i
      });
    }

    this.$('dd > h4').click(function(evt) {
      var node = this.$(evt.currentTarget).parent('dd');
      var index = node.index();
      var left = node.offset().left;
      var array = this.$('dd');
      var dd;

      if (left > 120) { // go left
        for(var i = index; i > 0; i--) {
          dd = this.$(array[i]);
          if (dd.offset().left > 120) {
            dd.animate({'left': 30 * i});
          }
        }
      } else { // go right
        for(var i = index + 1; i < array.length; i++) {
          dd = this.$(array[i]);
          if (dd.offset().left < 121) {
            dd.animate({'left': this.getContentWidth() + 30 * (i - 1)});
          }
        }
      }
      //
      this.$('dd').removeClass('current');
      node.addClass('current');
    }.bind(this));
  }

});
