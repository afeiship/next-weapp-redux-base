var NxWeappStore = require('next-weapp-store');

module.exports = {
  getMemory: function(inStore) {
    return inStore.getState().__memory__;
  },
  getLocal: function(inKeys) {
    return NxWeappStore._weappStorage.gets(inKeys);
  }
};
