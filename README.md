ngl.url
=======

URL-related helpers for Angular 1.x

Install
-------

    bower install --save ngl.url

Include the sources

```html
<script src="bower_components/ngl.fp/dist/ngl.fp.min.js"></script>
<script src="bower_components/ngl.url/dist/ngl.url.min.js"></script>
```

Add `ngl.url` to your app dependencies

```js
angular.module('app', [ 'ngl.url' ]);
```

API
---

### nglInterpolate(template, params)

Replace all `:`-prefixed attributes found in `template` matching `param` keys
with its related `param` values

```js
nglInterpolate('/foo/:id', { id: 123 }); // '/foo/123'
```

### nglQueryString(object)

Converts a simple object to a query string

```js
nglQueryString({ foo: 123, bar: 'abc' }); // '?foo=123&bar=abc'
```

Contributing
------------

PRs are welcome!

    git clone <path/to/ngl.url>
    cd ngl.url
    npm run setup

### Tasks

    npm run <task>

  * **setup:** install all required dependencies
  * **upgrade:** update all installed dependencies
  * **lint:** static analysis of JavaScript sources and unit tests
  * **test:** run available unit tests
  * **build:** generate a `dist/` directory with the compiled sources
