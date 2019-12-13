const CLI = require("clui");
const chalk = require("chalk");
const Spinner = CLI.Spinner;
const cmd = require("node-cmd");
const Promise = require("bluebird");

const getAsync = Promise.promisify(cmd.get, { multiArgs: true, context: cmd });

module.exports = {
  installReactNative: async name => {
    const status = new Spinner("Creating react native project, please wait...");
    status.start();

    try {
      const response = await getAsync(`npx react-native init ${name}`);
      return response;
    } catch (err) {
      throw chalk.red(err);
    } finally {
      status.stop();
    }
  },
  installDependencies: async (name, deps) => {
    const status = new Spinner("Installing dependencies, please wait...");
    status.start();

    try {
      const dependencies = await getAsync(`
        cd ${name}
        npm install redux redux-thunk react-redux react-navigation react-navigation-stack react-native-reanimated react-native-gesture-handler ${deps.dependencies.join(
          " "
        )}
        cd ios
        pod install
        cd ..
        `);
      return dependencies;
    } catch (err) {
      throw chalk.red(err);
    } finally {
      status.stop();
    }
  },
  createReduxBoilerPlate: () => {
    const status = new Spinner("Setting up Redux boilerplate, please wait...");
    status.start();
    try {
    } catch (err) {
      throw chalk.red(err);
    } finally {
      status.stop();
    }
  }
};
