#!/usr/bin/env node

import { log } from "console"
import inquirer from "inquirer"


log("Welcome to MonoGit")
let projectName = await inquirer.prompt({
    name:"projectName",
    message:"Enter the name of your project",
    prefix:">"
}).then((answer)=>{
    return answer.projectName
})

log(`You chose ${projectName}`)
createRootFolder(projectName)


function createRootFolder(root){
    console.log(process.cwd())
}