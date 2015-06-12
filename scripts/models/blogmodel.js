var Blog = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: function() {
    return {
      title: '',
      content: '',
      picture: '',
      tags: '',
      created_at: new Date()
    };
  }
});

var BlogCollection = Backbone.Collection.extend({
  model: Blog,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/adeblog'
});

export default {Blog, BlogCollection}
