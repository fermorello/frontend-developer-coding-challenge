if (typeof React === 'undefined' || !React.cache) {
    module.exports = {
      cache: function(fn) {
        return fn;
      }
    };
  } else {
    module.exports = { cache: React.cache };
  }