module.exports = {
  setMemory: function(inData) {
    return {
      type: 'memory',
      data: inData
    };
  },
  setLocal: function(inData) {
    return {
      type: 'local',
      data: inData
    };
  }
};
