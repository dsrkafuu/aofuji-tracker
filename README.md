# Vector Tracker

![](https://img.shields.io/github/workflow/status/dsrkafuu/vector-tracker/npm-publish)
![](https://img.shields.io/npm/v/vector-tracker)
![](https://img.shields.io/npm/l/vector-tracker)

Dedicated tracker for Vector Analytics.

- [Documentation](https://appvector.icu)
- [Repository](https://github.com/dsrkafuu/vector-analytics)

## Getting Started

### CDN

```html
<script
  async
  data-vaid="[id]"
  data-vaapi="[api]"
  data-vaspa="[true]"
  src="https://cdn.jsdelivr.net/npm/vector-tracker@0.1/lib/vector.min.js"
></script>
```

### npm

```sh
npm install --save vector-tracker
```

```js
import useVector from 'vector-tracker';
const { vecView, vecLeave, vecEvent } = useVector('[id]', '[api]', true);
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

This project is released under `MIT License`, for more information read the [LICENSE](https://github.com/dsrkafuu/vector-tracker/blob/main/LICENSE).

**Copyright © 2020-present DSRKafuU (https://dsrkafuu.su)**
