'use strict';

/**
 * Overrides render method of marionette to use hogan templates
 */
Backbone.Marionette.Renderer.render = function(template, data){
  return template.render(data);
};


Backbone.Marionette.Region.prototype.attachHtml = function(view){
  // empty the node and append new view
  this.el.innerHTML='';

  //If it's a component, then replace the region element with the component one
  if (this.$el.attr('data-component')){
    this.$el.replaceWith(view.el);
  }else{
    this.el.appendChild(view.el);
  }

};
