# Electron React Boilerplate

Bundle a `create-react-app` with `electron`.

## Usage

If you don't need to develop within Electron, it's just a basic [`create-react-app`][cra].

Start it with `npm start`, test it with `npm test`, etc.

If you need to start the app within an Electron instance (**develoment**), use:

```
npm run electron-dev
```

And for a **production** build:

```
npm run electron-prod
```

## TODO

- [ ] Electron Packager

## Thanks

Bundling `create-react-app` and `electron` together is explained [on this Medium post by Christian Sepulveda][bundling].


[cra]: https://github.com/facebookincubator/create-react-app
[bundling]: https://medium.freecodecamp.com/building-an-electron-application-with-create-react-app-97945861647c#.a4tt9jngo
