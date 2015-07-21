var AppDispatcher = require('../dispatchers/AppDispatcher');
var CommentConstants = require('../constants/CommentConstants');

var CommentActions = {
  add: function(data){
    AppDispatcher.handleAction({
      actionType: CommentConstants.POST_ADD,
      data: data
    });
  },
  // Fetches a page of Comments
  fetchPage: function(data){
    AppDispatcher.handleAction({
      actionType: CommentConstants.POST_FETCHPAGE,
      data: data
    });
  },

  fetchUserPage: function(data){
    AppDispatcher.handleAction({
      actionType: CommentConstants.POST_FETCHUSERPAGE,
      data: data
    });
  },

  // Fetches one Comment only
  fetchComment: function(data){
    AppDispatcher.handleAction({
      actionType: CommentConstants.POST_FETCHCOMMENT,
      data: data
    });
  },
  // Rate a Comment up or down
  vote: function(data){
    AppDispatcher.handleAction({
      actionType: CommentConstants.POST_VOTE,
      data: data
    });
  }

};

module.exports = CommentActions;