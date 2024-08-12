import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-d-portfolio',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './d-portfolio.component.html',
  styleUrl: './d-portfolio.component.scss'
})
export class DPortfolioComponent {


  projects =  [
    {
      name: "Join",
      toolsUsed: "JavaScript | HTML | CSS | Firebase",
      description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      liveTestUrl: "https://code-crafters-join-3.developerakademie.net/06_09_GruppenProjekt_Join_ProjektOrdner/02summary.html",
      githubLink: "https://github.com/Solquarters/Join_Gruppe3"
    },
    {
      name: "Join",
      toolsUsed: "JavaScript | HTML | CSS | Firebase",
      description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      liveTestUrl: "https://code-crafters-join-3.developerakademie.net/06_09_GruppenProjekt_Join_ProjektOrdner/02summary.html",
      githubLink: "https://github.com/Solquarters/Join_Gruppe3"
    },
    
  ]



}
