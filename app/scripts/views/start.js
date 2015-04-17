/* global App, templates */

App.Views = App.Views || {};

(function () {
  'use strict';

  App.Views.Start = Backbone.Marionette.LayoutView.extend({
    template: templates.start,

    events: {
      'click .js-select-transport': 'onSelectTransport'
    },

    regions: {
      header: '#header',
      content: '#content'
    },

    onShow: function() {
      this.header.show(new App.Views.Header({
        title: 'Lineas de Deseo',
        logo: 'images/delines-09.png'
      }));
    },

    onSelectTransport: function(e) {
      e.preventDefault();

      App.Router.navigate('guardando-ruta', { trigger: true });
    }

  });

})();
