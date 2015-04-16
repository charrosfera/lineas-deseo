/* global App */

$(function() {
  'use strict';
  App.Main.addInitializer(function(){
    Backbone.history.start();
  });
  App.Main.start();
});

