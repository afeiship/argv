(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var NxWeappStorage = nx.WeappStorage || require('next-weapp-storage');
  var POPULATE_METHODS = ['set', 'sets', 'get', 'gets', 'clear', 'clears'];

  var NxWeappStore = nx.declare('nx.WeappStore', {
    properties: {
      local: {
        get: function() {
          return this._weappStorage.gets();
        },
        set: function(inValue) {
          this._weappStorage.sets(inValue);
        }
      }
    },
    statics: {
      config: function(inPrefix) {
        this._weappStorage = new NxWeappStorage(inPrefix);

        //populate methods:
        nx.each(
          POPULATE_METHODS,
          function(_, name) {
            var self = this;
            this[name] = function(inKey, inValue) {
              return self._weappStorage[name](inKey, inValue);
            };
          },
          this
        );
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxWeappStore;
  }
})();
