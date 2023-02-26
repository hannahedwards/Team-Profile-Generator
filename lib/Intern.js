const inquirer = require("inquirer"); 

module.exports = InternHtml; 

function InternHtml(questionAnswers) {//format for the intern question answers
    return `<div class="px-6 my-6">
    <div class="card ">
    <div class="card-content">
        <p class="title">
            Intern
        </p>
        <p class="subtitle">
            Name: ${questionAnswers.InternName}
            <br>
            Employee ID: ${questionAnswers.InternId}
        </p>
    </div>
    <footer class="card-footer">
        <p class="card-footer-item">
            <span>
            School:${questionAnswers.school}
            </span>
        </p>
        <p class="card-footer-item">
            <span>
            Email Address: <a href="mailto:${questionAnswers.InternEmail}" target="_blank">${questionAnswers.InternEmail}</a>
            </span>
        </p>
    </footer>
    </div>
    </div>`
};