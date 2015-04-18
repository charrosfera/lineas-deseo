/* global App, templates */

App.Views = App.Views || {};

(function () {
  'use strict';

  App.Views.Init = Backbone.Marionette.LayoutView.extend({
    template: templates.init,

    initialize: function() {
      $('body').removeClass().addClass('body-init');
    },

    onShow: function() {
      window.setTimeout(function(){
        App.Router.navigate('inicio', { trigger: true });
      }, 1500);
    }


  });

})();
