// import {UserCollection} from '../models/usermodel';

export default Backbone.View.extend({

  template: JST.index,

  events: {
    'submit .loginform': 'login',
    'click .new-user-button': 'shownewform',
    'submit .new-user-form': 'store'
  },

  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'update', function() {
      router.navigate('blog', {trigger: true});
    });
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  login: function(e) {
    e.preventDefault();
    var userUsername = this.$('.login-username').val();
    var that = this;
    if(that.collection.where({username: userUsername}) !== undefined) {
      router.navigate('blog', {trigger: true});
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
    var currentCollection = this.collection;
      currentCollection.create({
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
    }
});
