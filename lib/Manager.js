const inquirer = require("inquirer"); //allowing us to use inquirer package from node modules 
module.exports = ManagerHtml; // module.exports, an object used to store variables and methods that can be used on the same application and other js files. 

// Created a function to generate HTML
function ManagerHtml(answers) {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
        <link rel="stylesheet" href="./style.css">
        <title>My Team Members </title>
    </head>
    
    <body>
        <section class="hero is-small is-primary">
            <div class="hero-body">
                <p class="title has-text-centered has-text-primary-light">
                    Your Team Members
                </p>
            </div>
        </section>
    
        <div class="card">
            <div class="card-content">
                <p class="title">
                    Manager
                </p>
                <p class="subtitle">
                    Name: ${answers.Manager}
                    <br>
                    Employee ID: ${answers.ManagerId}
                </p>
            </div>
            <footer class="card-footer">
                <p class="card-footer-item">
                    <span>
                        Email Address: <a href="mailto:${answers.ManagerEmail}" target="_blank">${answers.ManagerEmail}</a>
                    </span>
                </p>
                <p class="card-footer-item">
                    <span>
                        Phone Number: <a href="tel:${answers.officeNumber}">${answers.officeNumber}</a>
                    </span>
                </p>
            </footer>
        </div>
    </body>`
   };
   
  