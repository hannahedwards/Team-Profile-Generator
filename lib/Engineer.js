const inquirer = require("inquirer"); 
module.exports = EngineerHtml; 

function EngineerHtml (questionAnswers) {// format for engineer question anwsers
    return `<div class="px-6 my-6">
    <div class="card ">
    <div class="card-content">
        <p class="title">
            Engineer
        </p>
        <p class="subtitle">
            Name: ${questionAnswers.engineerName}
            <br>
            Employee ID: ${questionAnswers.engineerId}
        </p>
    </div>
    <footer class="card-footer">
        <p class="card-footer-item">
            <span>
            Email Address: <a href="mailto:${questionAnswers.EngineerEmail}" target="_blank">${questionAnswers.EngineerEmail}</a>
            </span>
        </p>
        <p class="card-footer-item">
            <span>
            Github Profile: <a href="${questionAnswers.githubUrl}" target="_blank">${questionAnswers.githubUrl}</a>
            </span>
        </p>
    </footer>
    </div>
    </div>`
}
