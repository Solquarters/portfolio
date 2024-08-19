import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReferencesComponent } from './references/references.component';

@Component({
  selector: 'app-d-portfolio',
  standalone: true,
  imports: [FormsModule, CommonModule, ReferencesComponent],
  templateUrl: './d-portfolio.component.html',
  styleUrl: './d-portfolio.component.scss'
})
export class DPortfolioComponent {


  projects =  [
    {
      name: "Join",
      toolsUsed: "JavaScript | HTML | CSS | Firebase",
      description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      liveTestUrl: "https://join.roman-kabucov.de/03board.html",
      githubLink: "https://github.com/Solquarters/Join_Gruppe3",
      imgSource: "../../../assets/img/portfolio screenshots/joinlaptoppng.png",
    },
    {
      name: "El Pollo Loco",
      toolsUsed: "JavaScript | HTML | CSS",
      description: "Working with collision detection and image based animations. Jump, run and throw game based on an object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
      liveTestUrl: "https://pollo-loco.roman-kabucov.de",
      githubLink: "https://github.com/Solquarters/07_08_PolloLoco",
      imgSource: "../../../assets/img/portfolio screenshots/pollolocolaptoppng.png",
     
    },
    {
      name: "Pokédex",
      toolsUsed: "JavaScript | HTML | CSS | API",
      description: "Fetching and visualizing API Data in a user friendly manner. Based on the PokéAPI a simple library that provides and catalogues pokemon information including an evolution tree and individual stats.",
      liveTestUrl: "https://pokedex-api.roman-kabucov.de/",
      githubLink: "https://github.com/Solquarters/06_03_Projekt_Pokedex",
      imgSource: "../../../assets/img/portfolio screenshots/pokemonlaptoppng.png",
    },
    {
      name: "The Wave",
      toolsUsed: "C++ | Unreal Engine",
      description: "An Unreal Engine based Game Demo, with custom sound riddles and level design. Incorporating Metasound and a combination of C++ and Blueprints. Video Demo pending.",
      liveTestUrl: "",
      githubLink: "",
      imgSource: "../../../assets/img/portfolio screenshots/thewavelaptoppng.png",
    },
    {
      name: "CRM / Open API based poject",
      toolsUsed: "JavaScript, APIs",
      description: "Still open, check git hub ideas",
      liveTestUrl: "https://github.com/public-apis/public-apis",
      githubLink: "https://github.com/public-apis/public-apis",
      imgSource: "../../../assets/img/portfolio screenshots/openapiprojectlaptoppng.png",
    },
    {
      name: "Notes Wizard - Music notes learning app",
      toolsUsed: "Vanilla JavaScript",
      description: "As a support tool this mobile friendly app helps music students with learning music notation on mobile devices, wherever, whenever for constant growth.",
      liveTestUrl: "https://notes-wizard.roman-kabucov.de",
      githubLink: "https://github.com/Solquarters/05_23_Projekt_MusikLernApp01",
      imgSource: "../../../assets/img/portfolio screenshots/musikappsmartphone.png",
    },
    
  ]




  isScaled = false;

  onTouchStart(): void {
    this.isScaled = true;
  }

  onTouchEnd(): void {
    this.isScaled = false;
  }


}
