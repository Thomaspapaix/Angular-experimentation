import { Component, OnInit } from '@angular/core';
import { project} from './models/rp.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  table_project!: project[];


  ngOnInit(){
    this.table_project = [
      {
        title: "Rpg",
        description: "Reproduction du jeu \"Pokemon Donjon Mystere Explorateur du Ciel\" en langage C a l'aide de la lib Csfml. Nous étions 5 à faire ce projet qui avait une durée de 4 semaines. Le sujet était de créer notre \"Role playing game\" en y ajoutant certaines fonctions obligatoires.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/fr/c/cb/Pok%C3%A9mon_Donjon_myst%C3%A8re_Explorateurs_du_ciel_Logo.png",
        like: 0,
        dificulty:"Difficile"
      },
      {
        title: "Printf",
        description: "My_printf et un des premiers projets en autonomie de la premeire année. L'objectif et de recoder la fonction de la lib C.",
        imageUrl: "https://tutorials.freshersnow.com/wp-content/uploads/2019/04/C-Tutorial.jpg",
        like: 0,
        dificulty: "Facile"
      },
      {
        title: "Minishell",
        description: "Objectif du projet était de créer un shell avec certaines options obligatoires.",
        imageUrl: "https://cdn-icons-png.flaticon.com/512/0/337.png",
        like: 0,
        dificulty: "Moyen"
      },

    ];
  }
}