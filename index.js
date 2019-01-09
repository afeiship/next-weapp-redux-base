// var NxStore = require('next-store');
// NxStore.config(null);

module.exports = {
  actions: require('./lib/redux-actions'),
  reducers: require('./lib/redux-reducers'),
  states: require('./lib/redux-states')
};
