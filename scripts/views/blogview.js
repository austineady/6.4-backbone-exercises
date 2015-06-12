export default Backbone.View.extend({

  template: JST.blog,

  events: {
    'click .new-post': 'create',
    'submit .create-post': 'store',
    'click .post': 'showid'
  },

  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'update', this.render);
  },

  render: function() {
    this.$el.html(this.template(this.collection.toJSON()));
  },

  create: function() {
    this.$('.trendingbox').css('display', 'none');
    this.$('.popularbox').css('display', 'none');
    this.$('.postbox').css('float', 'right');
    this.$('.create-post').css('display', 'block');
  },

  store: function(e) {
    e.preventDefault();
    var newCollection = this.collection;
    newCollection.create({
      title: this.$('.title-input').val(),
      content: this.$('.content-input').val(),
      picture: this.$('.new-post-picture').val(),
    });
  }
});
