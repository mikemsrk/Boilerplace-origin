var AppDispatcher = require('../dispatchers/AppDispatcher');
var ThreadConstants = require('../constants/ThreadConstants');

var ThreadActions = {
  add: function(data){
    AppDispatcher.handleAction({
      actionType: ThreadConstants.ADD,
      data: data
    });
  },
  // Fetches a page of threads
  fetchPage: function(data){
    AppDispatcher.handleAction({
      actionType: ThreadConstants.FETCHPAGE,
      data: data
    });
  },
  // Fetches one thread only
  fetchOne: function(data){
    AppDispatcher.handleAction({
      actionType: ThreadConstants.FETCHONE,
      data: data
    });
  },
};

module.exports = ThreadActions;