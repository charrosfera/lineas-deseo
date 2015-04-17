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
      content: '#content'
    },

    initialize: function() {
      App.Events.on('gelocation:update-line', function(data){
        $('#txt-debug-position').val(JSON.stringify(data));
      });
    },

    onShow: function() {
    },

    onClickInfo: function(){
      App.Router.navigate('informacion', { trigger: true });
    },

    onClickStart: function(){
      App.Router.navigate('como-te-mueves', { trigger: true });
    }


  });

})();
