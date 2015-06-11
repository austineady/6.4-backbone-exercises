import IndexView from './views/indexview';

import {UserCollection} from './models/usermodel';

var Router = Backbone.Router.extend({

  routes: {
    '': 'index',
    'blog': 'blog',
    'blogpost/:id': 'blogpost',
    'create': 'create'
  },

  initialize: function() {
    //stuff
  },

  index: function() {
  this.showView(new IndexView({collection: UserCollection}));
  },

  blog: function() {

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

var router = new Router();

export default router;
