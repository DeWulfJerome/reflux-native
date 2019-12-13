const fs = require("fs");
const cmd = require("node-cmd");
const Promise = require("bluebird");
const App = require("../boilerplate/App");
const RootReducer = require("../boilerplate/Rootreducer");
const MainReducer = require("../boilerplate/Mainreducer");
const AppStack = require("../boilerplate/Appstack");
const CLI = require("clui");
const chalk = require("chalk");
const Spinner = CLI.Spinner;

const getAsync = Promise.promisify(cmd.get, { multiArgs: true, context: cmd });
const getDirectory = async name => {
  const DIR = await getAsync(`
        cd ${name}
        pwd`);
  return DIR[0].replace(/(\r\n|\n|\r)/gm, "");
};

module.exports = {
  replaceAppJS: async name => {
    const status = new Spinner("Updating App.js, please wait...");
    status.start();
    const DIR = await getDirectory(name);
    const AppJS = DIR + "/App.js";
    return new Promise((resolve, reject) => {
      fs.writeFile(AppJS, App(), () => {
        status.stop();
        resolve();
      });
    });
  },
  createModel: async name => {
    const status = new Spinner("Creating reducers, please wait...");
    status.start();
    const Model = await getAsync(`
        cd ${name}
        mkdir model
        cd model
        touch rootReducer.js
        mkdir reducers
        cd reducers
        touch mainReducer.js
        `);
    status.stop();
    return Model;
  },
  updateRootReducer: async name => {
    const status = new Spinner("Updating Rootreducer, please wait...");
    status.start();
    const DIR = await getDirectory(name);
    const rootReducer = DIR + "/model/rootReducer.js";
    return new Promise((resolve, reject) => {
      fs.writeFile(rootReducer, RootReducer(), () => {
        status.stop();
        resolve();
      });
    });
  },
  updateMainReducer: async name => {
    const status = new Spinner("Updating MainReducer, please wait...");
    status.start();
    const DIR = await getDirectory(name);
    const rootReducer = DIR + "/model/reducers/mainReducer.js";
    return new Promise((resolve, reject) => {
      fs.writeFile(rootReducer, MainReducer(), () => {
        status.stop();
        resolve();
      });
    });
  },
  createNavigationFiles: async name => {
    const status = new Spinner("Creating navigation, please wait...");
    status.start();
    const nav = await getAsync(`
    cd ${name}
    mkdir navigation
    cd navigation
    touch Appstack.js
    `);
    status.stop();
    return nav;
  },
  updateAppStack: async name => {
    const status = new Spinner("Updating Appstack, please wait...");
    status.start();
    const DIR = await getDirectory(name);
    const stack = DIR + "/navigation/Appstack.js";
    return new Promise((resolve, reject) => {
      fs.writeFile(stack, AppStack(), () => {
        status.stop();
        resolve();
      });
    });
  }
};
