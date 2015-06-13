export default Backbone.View.extend({
  template: JST.edit,

  events: {
    'submit .edit-post': 'save',
    'click .edit-delete': 'delete'
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },

  save: function() {
    this.model.set({
      title: this.$('.edit-title-input').val(),
      content: this.$('.edit-content-input').val(),
      picture: this.$('.edit-post-picture').val(),
      tags: this.$('.tagselection').val()
    });
    this.model.save();
  },

  delete: function() {
  if(confirm('Are you sure you want to delete this post? This is irreversible')) {
    this.model.destroy();
    router.navigate('blog', {trigger: true});
  } else {
    router.navigate('blog', {trigger: true});
  }
  }
});
