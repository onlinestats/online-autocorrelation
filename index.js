const AutoCov = require('online-autocovariance')

module.exports = function AutoCorrelation (n) {
  const acov = AutoCov(n)
  const acor = function acor (x) {
    if (!isNaN(x)) {
      if (typeof x !== 'number') {
        x = parseFloat(x)
      }
      acov(x)
    } else if (Array.isArray(x)) {
      x.forEach(el => acor(el))
    }
    const v = acov()
    return v.map(val => val / v[0])
  }

  acor.fit = function (x) {
    acor(x)
  }

  Object.defineProperty(acor, 'values', {
    get: function () {
      return acor()
    }
  })

  return acor
}
