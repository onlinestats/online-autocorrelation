# online-autocorrelation

Calculate autocorrelation in online fashion (element by element) or fitting all values at once

## Usage
```javascript
const AutoCor = require('online-autocorrelation')

// Init autocorrelation object
const ac1 = AutoCor(3)
const ac2 = AutoCor(3)

// Online
;[1, 2, 3, 4, 5, 6, 7].forEach(v => { ac1(v) })
const res1 = ac1() // or const res1 = ac1.values

// Batch
const res2 = ac2([5, 1, 4, 7, 8, 1, -4, 0, 3, 7])
```
