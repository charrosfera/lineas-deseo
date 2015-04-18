/* global App, templates */

App.Views = App.Views || {};

(function () {
  'use strict';

  App.Views.Success = Backbone.Marionette.LayoutView.extend({
    template: templates.success,

    events: {
      'click .js-btn-back': 'goBack'
    },

    regions: {
      header: '#header',
      content: '#content'
    },

    initialize: function() {
      $('body').removeClass().addClass('body-info');
    },

    onShow: function() {
      this.header.show(new App.Views.Header({
        title: 'Éxito'
      }));
    },

    goBack: function(e) {
      e.preventDefault();
      App.Router.navigate('inicio', { trigger: true });
    }

  });

})();
