# argv
> Tiny argv impl.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/argv
```

## usage
```js
import argv from '@jswork/argv';

// node index.js --name=afei --age=18 file1 file2
const { args, opts } = argv();
console.log(args); // [ 'file1', 'file2' ]
console.log(opts); // { name: 'afei', age: '18' }
```

## license
Code released under [the MIT license](https://github.com/afeiship/argv/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/argv
[version-url]: https://npmjs.org/package/@jswork/argv

[license-image]: https://img.shields.io/npm/l/@jswork/argv
[license-url]: https://github.com/afeiship/argv/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/argv
[size-url]: https://github.com/afeiship/argv/blob/master/dist/argv.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/argv
[download-url]: https://www.npmjs.com/package/@jswork/argv
