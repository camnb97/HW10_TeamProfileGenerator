//runs the application

// installed inquirer, jest, and fs
const inquirer = require("inquirer");
const fs = require('fs');
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
//const for a file that has generate html

let managerInfo = [];
//what type of array is returned when info is pushed in here
let engineerInfo = [];
let internInfo = [];
//need javascript for github and email clicks working on the generated html file
//use a for loop to create a card for each person and add the card as a variable?... same thing for weather api homework
//

//writes the html file
const generateHTML = (managerInfo, engineerInfo, internInfo) => {
    //let engineer = engineerInfo.map .. return a teplate literal for each engineer, then join together ith .join
    // map makes it so the info for ALL the enginner/interns are included 
    let manager = managerInfo.map((element) => {
        return `<div>
        <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${manager.mName}</h5>
              <h6 class="card-subtitle mb-2 text-muted">Role: Manager</h6>
              <h6 class="card-subtitle mb-2 text-muted">ID Number: ${manager.mId}</h6>
              <h6 class="card-subtitle mb-2 text-muted">Office Number: ${manager.officeNum}</h6>
              <a href="#" class="card-link">${manager.mEmail}</a>
            </div>
        </div>
    </div>`
    });


    let engineer = engineerInfo.map((element) => {
        return `<div>
        <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${eName}</h5>
              <h6 class="card-subtitle mb-2 text-muted">Role: Engineer</h6>
              <h6 class="card-subtitle mb-2 text-muted">ID Number: ${eId}</h6>
              <a href="#" class="card-link">${eEmail}</a>
              <a href="#" class="card-link">${eGithub}</a>
            </div>
        </div>
    </div>`
    });


    let intern = internInfo.map((element) => {
        return `<div>
        <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${internName}</h5>
              <h6 class="card-subtitle mb-2 text-muted">Role: Intern</h6>
              <h6 class="card-subtitle mb-2 text-muted">ID Number: ${internId}</h6>
              <a href="#" class="card-link">${internEmail}</a>
              <a href="#" class="card-link">${internSchool}</a>
            </div>
        </div>
    </div>`
    })

    return `<!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <title></title>
            <meta name="description" content="">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
        </head>
        <body>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                  <h1 class="display-4">My Team</h1>
                  <p class="lead">Here you will see your  complete team, along with some important info about each person.</p>
                </div>
            </div>
            <div>
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title">${mName}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Role: Manager</h6>
                      <h6 class="card-subtitle mb-2 text-muted">ID Number: ${mId}</h6>
                      <h6 class="card-subtitle mb-2 text-muted">Office Number: ${officeNum}</h6>
                      <a href="#" class="card-link">${mEmail}</a>
                    </div>
                </div>
            </div>
            <div>
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title">${eName}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Role: Engineer</h6>
                      <h6 class="card-subtitle mb-2 text-muted">ID Number: ${eId}</h6>
                      <a href="#" class="card-link">${eEmail}</a>
                      <a href="#" class="card-link">${eGithub}</a>
                    </div>
                </div>
            </div>
            <div>
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title">${internName}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Role: Intern</h6>
                      <h6 class="card-subtitle mb-2 text-muted">ID Number: ${internId}</h6>
                      <a href="#" class="card-link">${internEmail}</a>
                      <a href="#" class="card-link">${internSchool}</a>
                    </div>
                </div>
            </div>
            <script src="" async defer></script>
        </body>
    </html>`;
}

function menu() {
    inquirer.prompt([
        {
            type: "list",
            name: "option",
            message: "Choose what you would like to do:",
            choices: ["Add a manager", "Add an engineer", "Add an intern", "Finish building team"],
        }
    ])
        .then(function ({ option }) {
            if (option === "Add a manager") {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "mName",
                        message: "Enter your team manager name:"
                    },
                    {
                        type: "input",
                        name: "mId",
                        message: "Enter manager ID:",
                    },
                    {
                        type: "input",
                        name: "mEmail",
                        message: "Enter email address:",
                    },
                    {
                        type: "input",
                        name: "officeNum",
                        message: "Enter office number:",
                    },
                ])
                    .then(function ({ mName, mId, mEmail, officeNum }) {
                        let newManager = new Manager(mName, mId, mEmail, officeNum);
                        managerInfo.push(newManager);

                        menu()
                    })

            } else if (option === "Add an engineer") {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "eName",
                        message: "Enter engineer's name:",
                    },
                    {
                        type: "input",
                        name: "eId",
                        message: "Enter engineer's ID number:",
                    },
                    {
                        type: "input",
                        name: "eEmail",
                        message: "Enter engineer's email address:",
                    },
                    {
                        type: "input",
                        name: "eGithub",
                        message: "Enter engineer's GitHub username:",
                    },
                ]).then(function ({ eName, eId, eEmail, eGithub }) {
                    let newEngineer = new Engineer(eName, eId, eEmail, eGithub);
                    engineerInfo.push(newEngineer);
                    menu();
                })
            } else if (option === "Add an intern") {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "internName",
                        message: "Enter intern's name:",
                    },
                    {
                        type: "input",
                        name: "internId",
                        message: "Enter intern's ID number:",
                    },
                    {
                        type: "input",
                        name: "internEmail",
                        message: "Enter intern's email address:",
                    },
                    {
                        type: "input",
                        name: "internSchool",
                        message: "Enter intern's shool name:",
                    },
                ]).then(function ({ internName, internId, internEmail, internSchool }) {
                    let newIntern = new Intern(internName, internId, internEmail, internSchool);
                    internInfo.push(newIntern);
                    menu();
                })
            } else {
                console.log(ManagerInfo);
                console.log(engineerInfo);
                console.log(internInfo);
                const htmlContent = generateHTML(managerInfo, engineerInfo, internInfo);
                fs.writeFile("./output/index.html", htmlContent, (err) =>
                    err ? console.log(err) : console.log("succesfully created HTML")
                );
            }
        });
}
































// menu()
// function addEmployee() {
//     inquirer.prompt([
//         {
//             type: "input",
//             name: "mName",
//             message: "Enter your team manager name:"
//         },
//         {
//             type: "input",
//             name: "mId",
//             message: "Enter manager ID:",
//         },
//         {
//             type: "input",
//             name: "mEmail",
//             message: "Enter email address:",
//         },
//         {
//             type: "input",
//             name: "officeNum",
//             message: "Enter office number:",
//         },
//     ])
//         .then(function ({ mName, mId, mEmail, officeNum }) {
//             let newManager = new Manager(mName, mId, mEmail, officeNum);
//             managerInfo.push(newManager)
//             menu()
//         })
// }

// addEmployee()

// function endCreate() {
//     console.log(team);
//     fs.writeFileSync(
//         "./index.html",
//         makeCards(team), "utf-8"
//     );
// }
        //finish building team should cause html to generate
    //add engineer prompts engineer questions
    //add intern prompts intern questions

    ///make functions that go to specofc questions
    ////////////////