/* global App, templates */

App.Views = App.Views || {};

(function () {
  'use strict';

  App.Views.Info = Backbone.Marionette.LayoutView.extend({
    template: templates.info,

    events: {
      'click .js-btn-back': 'goBack'
    },

    regions: {
      header: '#header',
      content: '#content'
    },

    initialize: function() {
      $('body').removeClass().addClass("body-info");
    },

    onShow: function() {
      this.header.show(new App.Views.Header({
        title: 'info'
      }));
    },

    goBack: function(e) {
      e.preventDefault();
      window.history.back();
    }

  });

})();
