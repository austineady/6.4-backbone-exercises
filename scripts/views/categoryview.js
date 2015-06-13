export default Backbone.View.extend({
  template: JST.category,

  initialize: function() {
    console.log(this.collection);
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.collection));
  }
});
