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
      githubLink: "https://github.com/Solquarters/Join_Gruppe3",
      imgSource: "../../../assets/img/projectJoinImg.png",
    },
    {
      name: "El Pollo Loco",
      toolsUsed: "JavaScript | HTML | CSS",
      description: "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
      liveTestUrl: "https://code-crafters-join-3.developerakademie.net/07_08_PolloLoco/index.html",
      githubLink: "https://github.com/Solquarters/07_08_PolloLoco",
      imgSource: "",
    },
    {
      name: "Pokédex",
      toolsUsed: "JavaScript | HTML | CSS | API",
      description: "Based on the PokéAPI a simple library that provides and catalogues pokemon information.",
      liveTestUrl: "https://roman-kabucov.developerakademie.net/05_30_Modul9_APIs/06_03_Projekt_Pokedex/index.html",
      githubLink: "https://github.com/Solquarters/Join_Gruppe3",
      imgSource: "",
    },
    {
      name: "The Wave",
      toolsUsed: "C++ | Unreal Engine",
      description: "An Unreal Engine based Game Demo, with custom sound riddles and level design. Incorporating Metasound and a combination of C++ und Blueprints.",
      liveTestUrl: "https://code-crafters-join-3.developerakademie.net/06_09_GruppenProjekt_Join_ProjektOrdner/02summary.html",
      githubLink: "https://github.com/Solquarters/Join_Gruppe3",
      imgSource: "",
    },
    {
      name: "Open API based poject",
      toolsUsed: "JavaScript, APIs",
      description: "Still open, check git hub ideas",
      liveTestUrl: "https://code-crafters-join-3.developerakademie.net/06_09_GruppenProjekt_Join_ProjektOrdner/02summary.html",
      githubLink: "https://github.com/public-apis/public-apis",
      imgSource: "",
    },
    {
      name: "Music notes learning app",
      toolsUsed: "Vanilla JavaScript",
      description: "As a support tool this mobile friendly app helps music students with learning music notation on mobile devices, wherever, whenever for constant growth.",
      liveTestUrl: "https://roman-kabucov.developerakademie.net/04_22_Modul7_JavaScriptProjekte/05_23_Projekt_MusikLernApp01/index.html",
      githubLink: "https://github.com/Solquarters/05_23_Projekt_MusikLernApp01",
      imgSource: "",
    },
    
  ]



}
