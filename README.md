# Remix + Vite + Tailwind v4 + Open Props!

I'm sharing my local sandbox for integrating Open Props and Tailwind v4 in this [tailwind.css](https://github.com/argyleink/twop/blob/main/app/tailwind.css) file. 

<br><br><br>

📖 See the [Remix docs](https://remix.run/docs) and the [Remix Vite docs](https://remix.run/docs/en/main/future/vite) for details on supported features.

## Development

Run the Vite dev server:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`
