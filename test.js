var test = require('tape')
var AutoCor = require('.')

test('Zero lag', _ => {
  var ac = AutoCor(0)
  ;[1, 2, 3, 4].forEach(v => {
    ac(v)
  })
  _.equal(ac.values[0], 1)
  _.end()
})

test('Simple test', _ => {
  // Fit one by one
  var ac = AutoCor(2)
  ;[1, 2, 3, 4].forEach(v => {
    ac(v)
  })
  var expected1 = [1.00, 0.25, -0.30]
  ac.values.forEach((v, i) => {
    _.true(Math.abs(v - expected1[i]) < 0.01)
  })

  // Fit at once
  ac([5, 6, 7])
  var expected2 = [1.000, 0.571, 0.179]
  ac.values.forEach((v, i) => {
    _.true(Math.abs(v - expected2[i]) < 0.01)
  })
  _.end()
})
