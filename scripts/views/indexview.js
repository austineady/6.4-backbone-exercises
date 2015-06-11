import Router from '../router';
// import {UserCollection} from '../models/usermodel';

export default Backbone.View.extend({

  template: JST.index,

  events: {
    'submit .loginform': 'login',
    'click .new-user-button': 'shownewform',
    'submit .log-in-new': 'store'
  },

  initialize: function() {
    this.render();
    this.router = new Router();
    this.listenTo(this.collection, 'add', function() {
      this.router.navigate('blog', {trigger: true});
    });
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  login: function(e) {
    e.preventDefault();
    console.log('hi');
    var userUsername = this.$('.login-username').val();
    if(this.collection.where({username: userUsername}) !== undefined) {
      this.router.navigate('blog', {trigger: true});
    } else {
      alert("This username does not exist! Please create one!");
    }
  },

  shownewform: function() {
    this.$('.new-user-button').css('display', 'none');
    this.$('.new-user-window').css('display', 'block');
  },

  store: function(e) {
    e.preventDefault();
      this.collection.create({
        firstname: this.$('.first-name').val(),
        lastname: this.$('.last-name').val(),
        username: this.$('.username').val(),
        street: this.$('.street-name').val(),
        city: this.$('.city-name').val(),
        zipcode: this.$('.zipcode').val(),
        phonenumber: this.$('.phone-number').val(),
        profilepicture: this.$('.profile-picture-url').val(),
        discription: this.$('.profile-description').val()
      });
      this.router.navigate('blog', {trigger: true});
    }
});
