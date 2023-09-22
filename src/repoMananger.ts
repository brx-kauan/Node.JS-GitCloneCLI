// Modules
import { Octokit } from "@octokit/rest";

class RepoManager {
  private octokit: Octokit;

  constructor() {
    this.octokit = new Octokit();
  }

  public async searchRepos(user: string) {
    try {
      const response = await this.octokit.repos.listForUser({
        username: user,
      });
      const repos = response.data.map((res) => res.name);
      if (repos.length === 0) {
        throw new Error("O usuário não possui nenhume repositório público.");
      }
      return repos;
    } catch (error: any) {
      if (error.response && error.response.status === 404) {
        throw new Error("Usuário não encontrado");
      }
      throw error;
    }
  }
}
export const repoController = new RepoManager();
