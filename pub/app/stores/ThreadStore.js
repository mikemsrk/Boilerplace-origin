var AppDispatcher = require('../dispatchers/AppDispatcher');
var ThreadConstants = require('../constants/ThreadConstants');
var Thread = require('../services/ThreadService');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _threads = [];
var _thread = null;

var ThreadStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
     this.emit(CHANGE_EVENT);
   },

  getThread: function(){
    return _thread;
  },

  getThreads: function(){
    return _threads;
  },

  fetchPage: function(page){
    var that = this;
    Thread.fetchPage(page, function(data){
      _threads = data;
      that.emitChange();
    });
  },

  add: function(title,body){
    var that = this;
    Thread.add(title,body,function(data){
      that.emitChange();
    });
  },

  update: function(bio,avatar){
    // var that = this;
    // Thread.update(bio,avatar,function(data){
    //   console.log('update successful');
    //   that.fetch();
    // });
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
    case ThreadConstants.FETCHPAGE:
      ThreadStore.fetchPage(action.data.page);
      ThreadStore.emitChange();
      break;
    case ThreadConstants.FETCHONE:
      // ThreadStore.fetch(action.data.page);
      ThreadStore.emitChange();
      break;
    case ThreadConstants.ADD:
      ThreadStore.add(action.data.title,action.data.body);
      break;
    case ThreadStore.UPDATE:
      // ThreadStore.delete();
      break;
    case ThreadStore.DELETE:
      // ThreadStore.delete();
      break;
    default:
      return true;
  }

  ThreadStore.emitChange();
  return true;
});

module.exports = ThreadStore;