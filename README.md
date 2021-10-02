# Next.JS PWA

## Ссылки:

- https://medium.com/geekculture/how-to-make-a-next-js-app-a-pwa-a5e2b13da548
- https://github.com/vercel/next.js/tree/canary/examples/progressive-web-app

## Шаги:

### 1. Установка необходимой зависимости

```
yarn add next-pwa
```

### 2. Добавление файлов-иконок

Нам понадобятся иконки размером 512x512 (`icon-512x512.png`) и 192x192 (`icon.png`). Добавьте эти два значка в каталог `public`.

### 3. manifest.json

В каталоге `public` создать файл:

```
{
  "name": "Next PWA demo",
  "short_name": "Next PWA",
  "icons": [
    {
      "src": "/icon.png",
      "sizes": "192x192",
      "type": "image/png"
    },

    {
      "src": "/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#FFFFFF",
  "background_color": "#FFFFFF",
  "start_url": "/",
  "display": "standalone",
  "orientation": "portrait"
}
```

### 4. Добавление `link`

В `pages/_app.tsx` `Head` Добавить ссылки

```diff
<Head>
  <title>Create Next App</title>
  <meta name="description" content="Generated by create next app" />
+ <link rel="manifest" href="/manifest.json" />
+ <link rel="apple-touch-icon" href="/icon.png"></link>
+ <meta name="theme-color" content="#fff" />
  <link rel="icon" href="/favicon.ico" />
</Head>
```

### 5.`next.config.js`

```
const withPWA = require("next-pwa")

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
})
```

## PS: Как проверить, является ли это PWA

В левом верхнем углу вкладки браузера увидите кнопку установки.

Теперь, если нажмете «Установить», приложение будет установлено и появится всплывающее окно.
