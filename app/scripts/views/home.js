/* global App, templates */

App.Views = App.Views || {};

(function () {
  'use strict';

  App.Views.Homepage = Backbone.Marionette.LayoutView.extend({
    template: templates.homepage,

    regions: {
      header : '#header',
      content: '#content'
    },

    onShow: function() {
      this.header.show(new App.Views.Header());
    }

  });

})();
