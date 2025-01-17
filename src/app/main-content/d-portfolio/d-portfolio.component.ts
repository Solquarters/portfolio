import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslationService } from '../../translation.service';
import { FormsModule } from '@angular/forms';
import { ReferencesComponent } from './references/references.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-d-portfolio',
  standalone: true,
  imports: [FormsModule, CommonModule, ReferencesComponent, TranslateModule],
  templateUrl: './d-portfolio.component.html',
  styleUrl: './d-portfolio.component.scss'
})
export class DPortfolioComponent {


  isScaled = false;

  onTouchStart(): void {
    this.isScaled = true;
  }

  onTouchEnd(): void {
    this.isScaled = false;
  }

  translate = inject(TranslationService);


  getTranslatedDescription(descriptionKey: string): string {
    return this.translate.instant(descriptionKey);
  }

  projects =  [
    {
      name: "DABubble",
      toolsUsed: "TypeScript | Angular | Firebase | RxJS",
      description: "DABubble is a fully functional and responsive chat messenger similar to Discord or Slack, featuring real-time data displaying and authentication. It was developed by a team of three. Upload images, create channels or send private messages.",
      descriptionKey: this.translate.instant("portfolio.project00.description"),
      liveTestUrl: "https://dabubble.roman-kabucov.de/",
      githubLink: "https://github.com/Solquarters/DABubbleGroup.git",
      imgSource: "../../../assets/img/portfolio screenshots/dabubblewithlaptop.png",
    },
    {
      name: "Simple CRM",
      toolsUsed: "TypeScript | Angular | Firebase | D3 | API",
      description: "CRM System with interactive data visualization, Wikimedia API geodata fetching, license key generation and realtime firebase intergration.",
      descriptionKey: this.translate.instant("portfolio.project01.description"),
      liveTestUrl: "https://simplecrm.roman-kabucov.de/",
      githubLink: "https://github.com/Solquarters/2024_10_01_simple-crm.git",
      imgSource: "../../../assets/img/portfolio screenshots/simplecrmlaptoppng.png",
    },
    {
      name: "Join",
      toolsUsed: "JavaScript | HTML | CSS | Firebase",
      description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      descriptionKey: this.translate.instant("portfolio.project1.description"),
      liveTestUrl: "https://join.roman-kabucov.de/07logIn.html",
      githubLink: "https://github.com/Solquarters/Join_Gruppe3",
      imgSource: "../../../assets/img/portfolio screenshots/joinlaptoppng.png",
    },
    {
      name: "El Pollo Loco",
      toolsUsed: "JavaScript | HTML | CSS",
      description: "Working with collision detection and image based animations. Jump, run and throw game based on an object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
      descriptionKey: this.translate.instant("portfolio.project2.description"),
      liveTestUrl: "https://pollo-loco.roman-kabucov.de",
      githubLink: "https://github.com/Solquarters/07_08_PolloLoco",
      imgSource: "../../../assets/img/portfolio screenshots/pollolocolaptoppng.png",
     
    },
    {
      name: "Pokédex",
      toolsUsed: "JavaScript | HTML | CSS | API",
      description: "Fetching and visualizing API Data in a user friendly manner. Based on the PokéAPI a simple library that provides and catalogues pokemon information including an evolution tree and individual stats.",
      descriptionKey: this.translate.instant("portfolio.project3.description"),
      liveTestUrl: "https://pokedex-api.roman-kabucov.de/",
      githubLink: "https://github.com/Solquarters/06_03_Projekt_Pokedex",
      imgSource: "../../../assets/img/portfolio screenshots/pokemonlaptoppng.png",
    },

    {
      name: "Notes Wizard",
      toolsUsed: "Vanilla JavaScript",
      description: "As a support tool this mobile friendly app helps music students with learning music notation on mobile devices, wherever, whenever for constant growth.",
      descriptionKey: this.translate.instant("portfolio.project6.description"),
      liveTestUrl: "https://notes-wizard.roman-kabucov.de",
      githubLink: "https://github.com/Solquarters/05_23_Projekt_MusikLernApp01",
      imgSource: "../../../assets/img/portfolio screenshots/musikappsmartphone.png",
    },
    
  ]



}



/////Weitere Projekte
// {
//   name: "The Wave",
//   toolsUsed: "C++ | Unreal Engine",
//   description: "An Unreal Engine based Game Demo, with custom sound riddles and level design. Incorporating Metasound and a combination of C++ and Blueprints. Video Demo pending.",
//   descriptionKey: this.translate.instant("portfolio.project4.description"),
//   liveTestUrl: "",
//   githubLink: "",
//   imgSource: "../../../assets/img/portfolio screenshots/thewavelaptoppng.png",
// },
// {
//   name: "CRM / Open API based poject",
//   toolsUsed: "JavaScript, APIs",
//   description: "Still open, check git hub ideas.",
//   descriptionKey: this.translate.instant("portfolio.project5.description"),
//   liveTestUrl: "https://github.com/public-apis/public-apis",
//   githubLink: "https://github.com/public-apis/public-apis",
//   imgSource: "../../../assets/img/portfolio screenshots/openapiprojectlaptoppng.png",
// },