const inquirer = require("inquirer");

module.exports = {
  askProjectName: () => {
    const questions = [
      {
        name: "projectname",
        type: "input",
        message: "Enter the react-native project name:",
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return "Enter the react-native project name:";
          }
        }
      }
    ];

    return inquirer.prompt(questions);
  },
  askDependencies: dependencies => {
    const questions = [
      {
        type: "checkbox",
        name: "dependencies",
        message: "Select the (optional) dependencies you want to install",
        choices: dependencies
      }
    ];
    return inquirer.prompt(questions);
  }
};
