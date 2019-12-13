#!/usr/bin/env node
const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");

const inquirer = require("./lib/inquirer");
const reactNative = require("./lib/react-native");
const boiler = require("./lib/boiler");

clear();

console.log(
  chalk.blue(
    figlet.textSync("Reflux native", {
      horizontalLayout: "controlled smushing"
    })
  )
);

const choices = ["axios", "moment", "lodash"];

const run = async () => {
  const projectName = await inquirer.askProjectName();
  await reactNative.installReactNative(projectName.projectname);
  const optionalDeps = await inquirer.askDependencies(choices);
  await reactNative.installDependencies(projectName.projectname, optionalDeps);
  await boiler.replaceAppJS(projectName.projectname);
  await boiler.createModel(projectName.projectname);
  await boiler.updateRootReducer(projectName.projectname);
  await boiler.updateMainReducer(projectName.projectname);
  await boiler.createNavigationFiles(projectName.projectname);
  await boiler.updateAppStack(projectName.projectname);

  console.log(
    chalk.greenBright(
      `Success! Cd into ${projectName.projectname} and run 'react-native run-ios/run-android' to start your app...'`
    )
  );
};

run();
