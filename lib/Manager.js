const inquirer = require("inquirer");
module.exports = ManagerHtml;

function ManagerHtml(questionAnswers) {//format for manager question anwsers as well as the header of the page
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
        <title>Team Members </title>
    </head>
    
    <body>
        <section class="hero is-small is-primary">
            <div class="hero-body">
                <p class="title has-text-centered has-text-primary-light">
                    Your Team Members
                </p>
            </div>
        </section>
        <div class="px-6 my-6">
        <div class="card">
            <div class="card-content">
                <p class="title">
                    Manager
                </p>
                <p class="subtitle">
                    Name: ${questionAnswers.Manager}
                    <br>
                    Employee ID: ${questionAnswers.ManagerId}
                </p>
            </div>
            <footer class="card-footer">
                <p class="card-footer-item">
                    <span>
                        Email Address: <a href="mailto:${questionAnswers.ManagerEmail}" target="_blank">${questionAnswers.ManagerEmail}</a>
                    </span>
                </p>
                <p class="card-footer-item">
                    <span>
                        Phone Number: <a href="tel:${questionAnswers.officeNumber}">${questionAnswers.officeNumber}</a>
                    </span>
                </p>
            </footer>
        </div>
        </div>`
   };
   
  