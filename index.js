const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
     {
        type:"input",
        message:"What is the title of your project?",
        name :"title"
    },
   {
        type: "input",
        message: "What is the description of your project?",
        name: "description"
    },
     {
        type: "input",
        message: "What are the installation instructions for your project?",
        name: "installation"
    },
    {
        type: "input",
        message: "What is the usage information for your project?",
        name: "usage"
    },
    {
        type: "input",
        message: "What are the contribution guidelines for your project?",
        name: "contributing"
    },
    {
        type: "input",
        message: "What are the test instructions for your project?",
        name: "tests"
    },
    {
        type: "list",
        message: "What license would you like to use for your project?",
        name: "license",
        choices: ["MIT", "Apache", "GPL", "BSD", "None"]
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    }

];

// function to write README file

function writeToFile(fileName,data){
    fs.writeFile(fileName,data,"utf8",(err)=>{
        if (err) throw err;
        console.log("the file has been saved")
    });
}




// function to initialize program
function init(){
    inquirer.prompt(questions).then((data)=>{
        const fileName =path.join(process.cwd(),"README.md");
        const fileData= generateMarkdown(data);
        writeToFile(fileName,fileData);
    });
}

// function call to initialize program
init();
