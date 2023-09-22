// Interfaces
import { IAnswers } from "./types/answers.interface";
// Modules
import { repoController } from "./repoMananger";

export const questions = [
  {
    type: "input",
    name: "gitUser",
    message: "Qual o nome do usuário a ser consultado?",
    validate: (user: string) => {
      if (!user) return "O nome do usuário não pode estar vazio.";
      if (/[^\w\s-]/.test(user))
        return "O nome do usuário não pode conter caracteres especiais.";
      return true;
    },
  },
  {
    type: "list",
    name: "gitRepoName",
    loop: false,
    message: "Qual o repositório você deseja clonar?",
    choices: async (answers: IAnswers) => {
      const userRepos: Array<string> = await repoController.searchRepos(
        answers.gitUser,
      );
      userRepos.push("Sair"); // Adiciona a opção "Sair" no final das opções
      return userRepos;
    },
  },
];
