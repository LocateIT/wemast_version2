# Wetland Monitoring and Assessment Service for Transboundary Basins in Southern Africa (WeMAST2.0)

## Description
A web application for monitoring wetlands in the four basins in the Southern Africa region: Cuvelai, Zambezi, Limpopo and Okavango.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [Acknowledgments](#acknowledgements)

## Installation
### Prerequisites
- Node.js
- npm


### Clone the Repository
```sh
git clone https://github.com/LocateIT/wemast_version2.git
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).



## Usage

```sh
cd wemast_version2
```


## Install Dependencies

```sh
npm install
```

### Run application

```sh
npm run dev
```

### Build for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Configuration
### Create an .env file in the root directory with the following variables:

- VITE_BASE_URL=/
- VITE_DEFAULT_LOCALE=en
- VITE_FALLBACK_LOCALE=fr
- VITE_SUPPORTED_LOCALES=en,fr,pt
- VITE_MAPBOX_API_KEY=your_api_key

## Deployment
Deploy with Digital Ocean and Nginx. See Digital Ocean Documentation https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-20-04

## Acknowledgements
- [Vue](https://vuejs.org/)
- [PrimeVue](https://primevue.org/)
- [PrimeFlexCSS](https://primeflex.org/)
- [Leaflet](https://leafletjs.com/)
- [Chart JS](https://www.chartjs.org/docs/latest/)
- [Digital Ocean](https://www.digitalocean.com/)
- [Nginx](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-20-04)

