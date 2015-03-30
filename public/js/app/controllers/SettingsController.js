define(["app/app",
        "ember"], function(App, Ember) {
  "use strict";

  App.SettingsController = Ember.Controller.extend({
    screenName: Ember.computed.oneWay('model.screenName'),
    isPrivate: Ember.computed.oneWay('model.isPrivate'),

    actions: {
      update: function() {
        var user = this.get('model')
        user.set('screenName', this.get('screenName'))
        user.set('isPrivate', this.get('isPrivate'))

        user.save()
          .then(function(newUser) {
          }.bind(this))
      }
    }
  })
})
