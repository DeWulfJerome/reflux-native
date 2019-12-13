#!/usr/bin/env node
const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");

const inquirer = require("./lib/inquirer");
const reactNative = require("./lib/react-native");

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
  const installed = await reactNative.installReactNative(
    projectName.projectname
  );
  const optionalDeps = await inquirer.askDependencies(choices);
  const dependencies = await reactNative.installDependencies(
    projectName.projectname,
    optionalDeps
  );
  console.log(
    chalk.greenBright(
      `Success! Cd into ${projectName.projectname} and run 'react-native run-ios/run-android' to start your app...'`
    )
  );
};

run();
