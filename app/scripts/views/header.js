/* global App, templates */

App.Views = App.Views || {};

(function () {
  'use strict';

  App.Views.Header = Backbone.Marionette.LayoutView.extend({
    template: templates.header,
    serializeData: function() {
      return {
        'title': this.options.title || 'App',
        'subtitle': this.options.subtitle || '',
        'logo': this.options.logo || ''
      };
    }
  });


})();
