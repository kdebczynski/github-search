# Github repository search

### Setup environment

You need to have installed node js with npm.
To install dependencies just run
`npm install`

### Running project in development mode

`npm run serve:dev`

Then open browser and type address: `http://localhost:8080/`

### Running project in production mode

`npm run serve:prod`

Then open browser and type address: `http://localhost:8080/`

### Running project with public IP

ex. `npm run serve:dev -- --host=0.0.0.0`

Then open browser and type address: `http://your-ip-here:8080/`

### Creating bundle package

`npm run build`

Bundle package will be avaialble in `dist` directory

### Running Unit Tests

`npm run test`

### Running bundle analyzer

`npm run build -- --env.analyze=true`