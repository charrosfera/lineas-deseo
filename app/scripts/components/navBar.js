/* global templates */

App.Components = App.Components || {};

(function () {
  'use strict';

  App.Components.NavigationBar = Backbone.Marionette.LayoutView.extend({
    template: templates.navigationBar,

    events:{
      'click .js-bo-back': 'onClickGoBack'
    },

    initialize: function(options){
      options = options || {};
    },

    render: function(){
      var templateHTML = this.template.render(this.options.data);
      this.setElement($(templateHTML));
    },

    onClickGoBack: function(){
      window.history.back();
    }

  });

})();
