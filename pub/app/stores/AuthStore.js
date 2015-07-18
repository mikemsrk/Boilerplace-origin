var AppDispatcher = require('../dispatchers/AppDispatcher');
var AuthConstants = require('../constants/AuthConstants');
var Auth = require('../services/AuthService');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _user = null;
var _loggedIn = false;

var AuthStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
     this.emit(CHANGE_EVENT);
   },

  login: function(username,pass){
    console.log(username,pass);
    Auth.login(username,pass,function(){
      //TODO: redirect to /
    });
  },
  // log out user
  logout: function() {
    Auth.logout(function(){
      //TODO: redirect to /logout
    });
  },

  isLoggedIn: function() {
    return !!_loggedIn;
  },

  addChangeListener: function(cb) {
    this.on(CHANGE_EVENT, cb)
  },

  removeChangeListener: function(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }
});


AppDispatcher.register(function(payload){
  var action = payload.action;
 console.log('default dispatcherrrrrr');
  switch(action.actionType){
    case AuthConstants.SIGNUP:
      // _user = action.data;
      // _loggedIn = action.loggedIn;
      // redirect();
      AuthStore.emitChange();
      break;
    case AuthConstants.LOGIN:
      // _user = action.data;
      // _loggedIn = action.loggedIn;
      // redirect();
      console.log('login event');
      AuthStore.login(action.data.username,action.data.pass);
      AuthStore.emitChange();
      break;
    case AuthConstants.LOGOUT:
      AuthStore.logout();
      // RouterContainer.get().transitionTo('/login');
      break;
    default:
      return true;
  }

  AuthStore.emitChange();
  return true;
});

module.exports = AuthStore;