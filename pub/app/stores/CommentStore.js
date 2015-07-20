var AppDispatcher = require('../dispatchers/AppDispatcher');
var CommentConstants = require('../constants/CommentConstants');
var Comment = require('../services/CommentService');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _comments = [];
var _userComments = [];
var _comment = null;

var CommentStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
     this.emit(CHANGE_EVENT);
   },

  getComment: function(){
    return _comment;
  },

  getComments: function(){
    return _comments;
  },

  getUserComments: function(){
    return _userComments;
  },

  fetchComment: function(id){
    var that = this;
    Comment.fetchComment(id, function(data){
      _comment = data;
      that.emitChange();
    });
  },

  fetchPage: function(page){
    var that = this;
    Comment.fetchPage(page, function(data){
      _comments = data;
      that.emitChange();
    });
  },

  fetchUserPage: function(page){
    var that = this;
    Comment.fetchUserPage(page, function(data){
      _userComments = data;
      that.emitChange();
    });
  },

  add: function(title,body){
    var that = this;
    Comment.add(title,body,function(data){
      that.emitChange();
    });
  },

  vote: function(Comment_id,score){
    var that = this;
    Comment.vote(Comment_id,score,function(data){
      that.emitChange();
    });
  },

  update: function(bio,avatar){
    // var that = this;
    // Comment.update(bio,avatar,function(data){
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
    case CommentConstants.FETCHPAGE:
      CommentStore.fetchPage(action.data.page);
      CommentStore.emitChange();
      break;
    case CommentConstants.FETCHUSERPAGE:
      CommentStore.fetchUserPage(action.data.page);
      CommentStore.emitChange();
      break;
    case CommentConstants.FETCHComment:
      CommentStore.fetchComment(action.data.id);
      CommentStore.emitChange();
      break;
    case CommentConstants.ADD:
      CommentStore.add(action.data.title,action.data.body);
      break;
    case CommentConstants.UPDATE:
      // TODO: Updating a Comment

      break;
    case CommentConstants.DELETE:
      // TODO: Deleting a Comment

      break;
    case CommentConstants.VOTE:
      CommentStore.vote(action.data.Comment_id,action.data.score);
      break;

    default:
      return true;
  }

  CommentStore.emitChange();
  return true;
});

module.exports = CommentStore;