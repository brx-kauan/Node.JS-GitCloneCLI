// Interfaces
import { IAnswers } from "../types/answers.interface";
// Modules
import path from "path";
import shelljs from "shelljs";

export class AppController {
  public clone(answers: IAnswers) {
    try {
      this._cloneRepository(answers.gitUser, answers.gitRepoName);
    } catch (error) {
      console.error("Ocorreu um erro:", error);
      throw error;
    }
  }

  private _cloneRepository(gitUser: string, gitRepoName: string) {
    try {
      const repoUrl = `https://github.com/${gitUser}/${gitRepoName}.git`;
      const fullPath = path.resolve();
      shelljs.cd(fullPath);
      shelljs.exec(`git clone ${repoUrl}`);
      console.log("Repositório clonado com Sucesso!");
      return shelljs.exit();
    } catch (error) {
      console.error("Ocorreu um erro:", error);
      throw error;
    }
  }
}
