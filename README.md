# Spotifood

[ ![Codeship Status for rhberro/ifood-frontend-test](https://app.codeship.com/projects/861206c0-7055-0136-0903-5248fdda3e37/status?branch=master)](https://app.codeship.com/projects/299009)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

A web application used to display the preferred playlists from iFood's customers.

---

- [**Installing**](#installing)
- [**Getting Started**](#getting-started)
- [**Todos**](#todos)

---

## Installing

Install it by cloning this repository.

```
git clone git@github.com:rhberro/ifood-frontend-test.git your-project-name
```

## Getting Started

Run node package manager install command or yarn to install the project dependencies.

```js
npm install
```

Make a copy of the .env.example file and fill it with your Spotify token from [this link](https://developer.spotify.com/console/get-featured-playlists).

```
cp .env.example .env
```

Start the application using the node package manager or yarn start command.

```js
npm start
```

## Todos
  - [ ] Write tests.
  - [ ] Use React Router to keep the user filters whenever necessary.
  - [x] Use Redux for the application state.
  - [ ] Add a step to authenticate to Spotify without the need of manual work.
  - [ ] Use Debounce to prevent unnecessary updates to the state when searching.