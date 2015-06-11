import router from '../router';

export default Backbone.View.extend({

  template: JST.index,

  events: {
    'submit .log-in': 'login',
    'click .new-user-button': 'shownewform',
    'submit .log-in-new': 'store'
  },

  initialize: function() {
    this.render();
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
    var userUsername = this.$('.login-username').val();
    if(this.collection.where({username: userUsername}) !== undefined) {
      this.router.navigate('blog', {trigger: true});
    } else {
      alert("This username does not exist! Please create one!");
    }
  },

  shownewform: function() {
    this.$('.new-user-button').css('display', 'none');
    this.$('.new-user-form').css('dislay', 'block');
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
  }
});
