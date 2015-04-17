/* global App, templates */

App.Views = App.Views || {};

(function () {
  'use strict';

  App.Views.Start = Backbone.Marionette.LayoutView.extend({
    template: templates.start,

    events: {
      'click .js-select-transport': 'onSelectTransport',
      'click .js-btn-back': 'goBack'
    },

    regions: {
      header: '#header',
      content: '#content'
    },

    initialize: function() {
      $('body').removeClass().addClass("body-start");
    },

    onShow: function() {
      this.header.show(new App.Views.Header({
        title: 'delines'
      }));
    },

    onSelectTransport: function(e) {
      e.preventDefault();

      App.Router.navigate('guardando-ruta', { trigger: true });
    },

    goBack: function(e) {
      e.preventDefault();
      window.history.back();
    }

  });

})();
