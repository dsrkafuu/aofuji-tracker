# Aofuji Tracker

![](https://img.shields.io/github/workflow/status/dsrkafuu/aofuji-tracker/npm-publish)
![](https://img.shields.io/npm/v/aofuji-tracker)
![](https://img.shields.io/npm/l/aofuji-tracker)

Dedicated tracker for Aofuji Analytics.

- [Documentation](https://aofuji.ink)
- [Repository](https://github.com/dsrkafuu/aofuji-analytics)

## Getting Started

### CDN

```html
<script
  async
  data-aoid="[id]"
  data-aoapi="[api]"
  data-aospa="[true]"
  src="https://cdn.jsdelivr.net/npm/aofuji-tracker@0.1/lib/aofuji.min.js"
></script>
```

### npm

```sh
npm install --save aofuji-tracker
```

```js
import useAofuji from 'aofuji-tracker';
const { aoView, aoLeave, aoEvent } = useAofuji('[id]', '[api]', true);
```

## Contribute

This project uses [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged) to format source code, so the git commands may be slow due to the Prettier formatting workflow.

After clone the repo, you can simply:

```sh
npm install
npm run init
npm run build
```

## License

This project is released under `MIT License`, for more information read the [LICENSE](https://github.com/dsrkafuu/aofuji-tracker/blob/main/LICENSE).

**Copyright © 2020-present DSRKafuU (https://dsrkafuu.su)**
