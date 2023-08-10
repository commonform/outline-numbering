# outline-numbering

number hierarchical documents like Section 1(c)(iv)

outline-numbering is part of the [abstract-numbering](https://www.npmjs.com/search?q=keywords:abstract-numbering) family of packages.

```javascript
var outline = require('outline-numbering')
var assert = require('assert')
```

The package is a numbering scheme as described by [abstract-numbering](https://www.npmjs.com/package/abstract-numbering).

# Outline Style

```javascript
assert.deepEqual(
  outline([
    {
      series: { number: 1, of: 1 },
      element: { number: 1, of: 1 }
    }
  ]),
  'Section\u00a01'
)

assert.deepEqual(
  outline([
    {
      series: { number: 1, of: 2 },
      element: { number: 1, of: 1 }
    }
  ]),
  'Section\u00a0A-1'
)

assert.deepEqual(
  outline([
    {
      series: { number: 1, of: 1 },
      element: { number: 1, of: 1 }
    },
    {
      series: { number: 1, of: 1 },
      element: { number: 1, of: 1 }
    }
  ]),
  'Section\u00a01(a)'
)

assert.deepEqual(
  outline([
    {
      series: { number: 1, of: 1 },
      element: { number: 1, of: 1 }
    },
    {
      series: { number: 1, of: 1 },
      element: { number: 28, of: 28 }
    }
  ]),
  'Section\u00a01(ab)'
)

assert.deepEqual(
  outline([
    {
      series: { number: 1, of: 1 },
      element: { number: 1, of: 1 }
    },
    {
      series: { number: 1, of: 1 },
      element: { number: 1, of: 1 }
    },
    {
      series: { number: 1, of: 1 },
      element: { number: 1, of: 1 }
    }
  ]),
  'Section\u00a01(a)(i)'
)

assert.deepEqual(
  outline([
    {
      series: { number: 1, of: 1 },
      element: { number: 1, of: 1 }
    },
    {
      series: { number: 1, of: 1 },
      element: { number: 1, of: 1 }
    },
    {
      series: { number: 1, of: 1 },
      element: { number: 1, of: 1 }
    },
    {
      series: { number: 1, of: 1 },
      element: { number: 1, of: 1 }
    }
  ]),
  'Section\u00a01(a)(i)(A)'
)

assert.deepEqual(
  outline([
    {
      series: { number: 1, of: 1 },
      element: { number: 1, of: 1 }
    },
    {
      series: { number: 1, of: 1 },
      element: { number: 1, of: 1 }
    },
    {
      series: { number: 1, of: 1 },
      element: { number: 1, of: 1 }
    },
    {
      series: { number: 1, of: 1 },
      element: { number: 1, of: 1 }
    },
    {
      series: { number: 1, of: 1 },
      element: { number: 1, of: 1 }
    }
  ]),
  'Section\u00a01(a)(i)(A)(I)'
)

assert.deepEqual(
  outline([
    {
      series: { number: 1, of: 1 },
      element: { number: 1, of: 1 }
    },
    {
      series: { number: 1, of: 1 },
      element: { number: 1, of: 1 }
    },
    {
      series: { number: 1, of: 1 },
      element: { number: 1, of: 1 }
    },
    {
      series: { number: 1, of: 1 },
      element: { number: 1, of: 1 }
    },
    {
      series: { number: 1, of: 1 },
      element: { number: 1, of: 1 }
    },
    {
      series: { number: 1, of: 1 },
      element: { number: 1, of: 1 }
    }
  ]),
  'Section\u00a01(a)(i)(A)(I)(a)'
)
```

# Short Forms

```javascript
assert.deepEqual(
  outline(
    [
      {
        series: { number: 1, of: 1 },
        element: { number: 1, of: 1 }
      }
    ],
    true
  ),
  '1.'
)

assert.deepEqual(
  outline(
    [
      {
        series: { number: 1, of: 1 },
        element: { number: 1, of: 1 }
      },
      {
        series: { number: 1, of: 1 },
        element: { number: 1, of: 1 }
      }
    ],
    true
  ),
  '(a)'
)
```
