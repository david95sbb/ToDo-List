# ToDo List

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Requisitos

Leer toda la documentación antes de iniciar cualquier proceso.

Estudiar y entender:

- [Git Flow](https://danielkummer.github.io/git-flow-cheatsheet/)
- [Semantic Version](https://semver.org/)
- [React](https://reactjs.org/)
- [Next.JS](https://nextjs.org/)
- [Redux Saga](https://redux-saga-firebase.js.org/)
- [Redux Form](https://redux-form.com/6.0.0-rc.1/)
- [Firebase database](https://firebase.google.com/docs/database/)
- [Redux Saga Firebase](https://redux-saga-firebase.js.org/)

Tener instalado globalmente:

_Se recomienda tener instalado [homebrew](https://brew.sh/index_es) si se está usando MacOS para instalar todos los paquetes_

- [SourceTree](https://www.sourcetreeapp.com/) o [GitKraken](https://www.gitkraken.com/)
- [Atom](https://atom.io/) o [Visual Studio Code](https://code.visualstudio.com)
- [nvm](https://github.com/creationix/nvm)
- [yarn](https://yarnpkg.com/lang/en/)
- [standard](https://standardjs.com/)
- [prettier](https://prettier.io/docs/en/editors.html/) integrado con el editor o IDE.

## Instalación

Instalar los paquetes globales la primera vez si el objetivo es desarrollar, de lo contrario pasar al siguiente paso:

```sh
$ yarn global add commitizen
```

Al tenerlo instalado ejecutamos el siguiente comando para instalar las librerías"

```sh
$ yarn
```

Posteriormente ejecutamos el siguiente comando para poder renderizar el proyecto en `localhost` en entorno de desarrollo:

```sh
$ yarn dev
```

Si se reuquiere ver el proyecto local en entorno de producción, se deben ejecutar los siguientes comandos:

```sh
$ yarn build
$ yarn start
```
