export default Backbone.View.extend({
  template: JST.blog,

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
  }
});
