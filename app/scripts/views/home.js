/* global App, templates */

App.Views = App.Views || {};

(function () {
  'use strict';

  App.Views.Homepage = Backbone.Marionette.LayoutView.extend({
    template: templates.homepage,

    events: {
      'click #btn-info': 'onClickInfo',
      'click #btn-start': 'onClickStart'
    },

    regions: {
      header : '#header',
      content: '#content'
    },

    onShow: function() {
      this.header.show(new App.Views.Header({
        title: 'Lineas de Deseo',
        logo: 'images/logo-big.png'
      }));
    },

    onClickInfo: function(){
      App.Router.navigate('informacion', { trigger: true });
    },

    onClickStart: function(){
      App.Router.navigate('como-te-mueves', { trigger: true });
    }


  });

})();
