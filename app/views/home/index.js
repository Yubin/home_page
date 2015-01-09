import Ember from 'ember';

export default Ember.View.extend({
  classNames: ['full'],

  // ddLength: 0.025,

  onResize: function () {
    var array = this.$('dd');
    var ddWidth = 0.02 * this.$('> div.wrapper').width();
    var totalDdWidth = 0.5 * this.$('> div.wrapper').width();
    var width = 100 - 2 * (array.length - 1);

    for(var i = 0; i < array.length; i++) {
      var dd = this.$(array[i]);
      if (dd.offset().left < totalDdWidth) {
        dd.css('left', ddWidth * i);
      } else {
        dd.css('left', this.$('> div.wrapper').width() + ddWidth * (i - array.length));
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
      var totalDdWidth = 0.5 * this.$('> div.wrapper').width();

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
            dd.animate({'left': this.$('> div.wrapper').width() + ddWidth * (i - array.length) }, {
              complete: function () {
                Ember.$(this).find('h4 a').css('display', 'block');
                node.find('h4 a').css({'display': 'none'});
              }
            });
          }
        }
      }
    }.bind(this));
  },

  actions: {
    enterDesktop: function () {

      var href = "http://yubin.github.io/web_desktop/dist/index.html";
      var win = this.get('newWindow');
      if (!win || win.closed) {
        win = window.open(href, '_blank');
        this.set('newWindow', win);
      }
      console.log(win.closed);
      win.focus();
      return false;
      // var firstNode = this.$('dd')[4];
      // var DesktopNode = this.$('dd')[3];
      // var dd = this.$(firstNode);
      // var ddWidth = 0.02 * this.$('> div.wrapper').width();
      //
      // dd.animate({'left': this.$('> div.wrapper').width() - ddWidth }, {
      //   complete: function () {
      //     Ember.$(this).find('h4 a').css('display', 'block');
      //     Ember.$(DesktopNode).find('h4 a').css({'display': 'none'});
      //   }
      // });
    }
  }

});
