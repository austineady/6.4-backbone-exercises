var User = Backbone.Model.extend({
  defaults: function() {
    return {
      firstname: '',
      lastname: '',
      username: '',
      street: '',
      city: '',
      zipcode: '',
      phonenumber: '',
      profilepicture: '',
      description: '',
      personaltags: '',
      likedposts: '',
    };
  }
});

var UserCollection = Backbone.Collection.extend ({
  model: User,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/ade/users'
});

export default {User, UserCollection};
