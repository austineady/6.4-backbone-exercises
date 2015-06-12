import IndexView from './views/indexview';
import BlogView from './views/blogview';
import ShowView from './views/showview';

import {UserCollection} from './models/usermodel';
import {BlogCollection} from './models/blogmodel';

var Router = Backbone.Router.extend({

  routes: {
    '': 'index',
    'blog': 'blog',
    'blog/:id': 'showpost',
    'create': 'create'
  },

  initialize: function() {
    this.users = new UserCollection();
    this.blogs = new BlogCollection();
  },

  index: function() {
  this.showView(new IndexView({collection: this.users}));
  },

  blog: function() {
  this.showView(new BlogView({collection: this.blogs}));
  this.blogs.fetch();
  },

  showpost: function(id) {
    console.log(id);
    this.blogs.fetch().then(function() {
      console.log(this.blogs.get(id));
      var blog = this.blogs.get(id);
      this.showView(new ShowView({model: blog}));
    }.bind(this));
  },

  showView: function(view) {
    if(this.currentView) this.currentView.remove();
    this.currentView = view;
    $('#app').html(view.el);
    return view;
  }
});

// export an INSTANCE of the Router
export default Router;
