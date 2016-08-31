import { Component } from "@angular/core";
import { RepositoryService } from "../services/repository.service";
import { GraphService } from "../services/graph.service";

@Component({
  selector: "app-header",
  template: `
    <div class="header">
      <button (click)="promptUserToAddRepository()">+</button>
      <p class="repo-name" id="repo-name"></p>
      <p class="repo-branch" id="repo-branch"></p>
      <img src="./assets/arrow.png" class="pull-button" onclick="pullFromRemote('./tmp')">
      <img src="./assets/arrow.png" class="push-button" onclick="pushToRemote('./tmp', 'master')">
    </div>
  `,
  providers: [RepositoryService, GraphService]
})

export class HeaderComponent   {
  repoName: string = "Repo name";
  repoBranch: string = "Repo branch";
  repository: any;

  promptUserToAddRepository(): void {
    switchToAddRepositoryPanel();
  }
}
