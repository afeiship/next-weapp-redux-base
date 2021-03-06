var nx = require('next-js-core2');
var NxWeappStore = require('next-weapp-store');
var INITIAL_ACTION = '@@redux/INIT';
var DEFAULT_OPTIONS = { prefix: '' };
var nxSets = require('next-sets');

module.exports = function(inState, inAction, inOptions) {
  var type = inAction.type;
  var data = inAction.data;
  var options = nx.mix(DEFAULT_OPTIONS, inOptions);
  var isInitial = type === INITIAL_ACTION;
  var state = isInitial ? { __memory__: inState.memory || {} } : inState;

  //set preifx:
  NxWeappStore.config(options.prefix);

  switch (type) {
    case 'memory':
      nxSets(state.__memory__, data);
      return nx.mix(state, { __memory__: state.__memory__ });
    case 'local':
      NxWeappStore[type] = data;
      return state;
    case INITIAL_ACTION:
      if (inState.local) {
        NxWeappStore.local = inState.local;
      }
      break;
  }

  return state;
};
