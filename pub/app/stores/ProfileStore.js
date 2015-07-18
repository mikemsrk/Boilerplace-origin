var AppDispatcher = require('../dispatchers/AppDispatcher');
var ProfileConstants = require('../constants/ProfileConstants');
var Profile = require('../services/ProfileService');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _store = {
  avatar: '',
  firstname: '',
  lastname: '',
  blurb: ''
};

var ProfileStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
     this.emit(CHANGE_EVENT);
   },

  error: function(){
    return _error;
  },

  fetch: function(){


  },

  update: function(){


  },

  delete: function(){


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

  switch(action.actionType){
    case ProfileConstants.FETCH:
      ProfileStore.fetch();
      ProfileStore.emitChange();
      break;
    case ProfileConstants.UPDATE:
      ProfileStore.update();
      ProfileStore.emitChange();
      break;
    case ProfileStore.DELETE:
      ProfileStore.delete();
      break;
    default:
      return true;
  }

  ProfileStore.emitChange();
  return true;
});

module.exports = ProfileStore;