import IndexView from './views/indexview';
import BlogView from './views/blogview';

import {UserCollection} from './models/usermodel';

var Router = Backbone.Router.extend({

  routes: {
    '': 'index',
    'blog': 'blog',
    'blogpost/:id': 'blogpost',
    'create': 'create'
  },

  initialize: function() {
    this.users = new UserCollection();
    console.log(this.users);
  },

  index: function() {
  this.showView(new IndexView({collection: this.users}));
  },

  blog: function() {
  this.showView(new BlogView());
  },

  create: function() {

  },

  showView: function(view) {
    if(this.currentView) this.currentView.remove();
    this.currentView = view;
    $('#app').html(view.el);
    return view;
  }
});

export default new Router();
