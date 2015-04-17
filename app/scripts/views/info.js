/* global App, templates */

App.Views = App.Views || {};

(function () {
  'use strict';

  App.Views.Info = Backbone.Marionette.LayoutView.extend({
    template: templates.info,

    regions: {
      header: '#header',
      navBar: '#nav-bar',
      content: '#content'
    },

    onShow: function() {
      this.navBar.show(new App.Components.NavigationBar());

      this.header.show(new App.Views.Header({
        title: 'Lineas de Deseo',
        logo: 'images/logo-big.png'
      }));
    }

  });

})();
