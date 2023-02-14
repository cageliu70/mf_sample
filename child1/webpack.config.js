const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'child1',

  exposes: {
    './Component': './src/app/app.component.ts',
    "./Module": "./src/app/amf/amf.module.ts",
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
