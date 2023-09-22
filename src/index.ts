// Interfaces
import { IAnswers } from "./types/answers.interface";
// Modules
import inquirer from "inquirer";
import { AppController } from "./controller/appController";
import { questions } from "./questions";

class InitCli {
  constructor() {
    inquirer.prompt(questions).then((answers: IAnswers) => {
      if (answers.gitRepoName == "Sair") {
        return;
      }
      const startController = new AppController();
      startController.clone(answers);
    });
  }
}

new InitCli();
