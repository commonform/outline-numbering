```javascript
var outline = require('outline-numbering')
var assert = require('assert')
```

# Outline Style

```javascript
assert.deepEqual(
  outline([
    { series:  { number: 1, of: 1 },
      element: { number: 1, of: 1 } } ]),
  '1')

assert.deepEqual(
  outline([
    { series:  { number: 1, of: 2 },
      element: { number: 1, of: 1 } } ]),
  'A-1')

assert.deepEqual(
  outline([
    { series:  { number: 1, of: 1 },
      element: { number: 1, of: 1 } },
    { series:  { number: 1, of: 1 },
      element: { number: 1, of: 1 } } ]),
  '1(a)')

assert.deepEqual(
  outline([
    { series:  { number: 1, of: 1 },
      element: { number: 1, of: 1 } },
    { series:  { number: 1, of: 1 },
      element: { number: 1, of: 1 } },
    { series:  { number: 1, of: 1 },
      element: { number: 1, of: 1 } } ]),
  '1(a)(i)')

assert.deepEqual(
  outline([
    { series:  { number: 1, of: 1 },
      element: { number: 1, of: 1 } },
    { series:  { number: 1, of: 1 },
      element: { number: 1, of: 1 } },
    { series:  { number: 1, of: 1 },
      element: { number: 1, of: 1 } },
    { series:  { number: 1, of: 1 },
      element: { number: 1, of: 1 } } ]),
  '1(a)(i)(A)')

assert.deepEqual(
  outline([
    { series:  { number: 1, of: 1 },
      element: { number: 1, of: 1 } },
    { series:  { number: 1, of: 1 },
      element: { number: 1, of: 1 } },
    { series:  { number: 1, of: 1 },
      element: { number: 1, of: 1 } },
    { series:  { number: 1, of: 1 },
      element: { number: 1, of: 1 } },
    { series:  { number: 1, of: 1 },
      element: { number: 1, of: 1 } } ]),
  '1(a)(i)(A)(I)')

assert.deepEqual(
  outline([
    { series:  { number: 1, of: 1 },
      element: { number: 1, of: 1 } },
    { series:  { number: 1, of: 1 },
      element: { number: 1, of: 1 } },
    { series:  { number: 1, of: 1 },
      element: { number: 1, of: 1 } },
    { series:  { number: 1, of: 1 },
      element: { number: 1, of: 1 } },
    { series:  { number: 1, of: 1 },
      element: { number: 1, of: 1 } },
    { series:  { number: 1, of: 1 },
      element: { number: 1, of: 1 } } ]),
  '1(a)(i)(A)(I)(a)')
```

# Short Forms

```javascript
assert.deepEqual(
  outline(
    [ { series:  { number: 1, of: 1 },
        element: { number: 1, of: 1 } } ],
    true),
  '1.')

assert.deepEqual(
  outline(
    [ { series:  { number: 1, of: 1 },
        element: { number: 1, of: 1 } },
      { series:  { number: 1, of: 1 },
        element: { number: 1, of: 1 } } ],
    true),
  '(a)')
```
