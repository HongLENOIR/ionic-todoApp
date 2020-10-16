import { Component } from '@angular/core';
import {Task} from '../models/task';

@Component({
  selector: 'app-home', // identifiant
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // déclarer une variable comme dessous, moins propre que déclarer une classe
  // task = {
  //   id: null,
  //   name: null,
  //   dueDate: null,
  //   status: false // initial tache n'est pas faite
  // };
  /**
   * Ici la propriété "task" (comme object) est de type "Task"; c'est à dire qu'elle prendra comme structure, comme référence la classe Task.
   */
  task: Task = new Task(); // type de task est Task, veut dire task prend toutes les proprieté
  tasks: Task[] = [
    {id: 1, title: 'Faire la vaisselle', status: true},
    {id: 2, title: 'Sortir la poubelle', status: false},
    {id: 3, title: 'Promener le chien', status: false},
    {id: 4, title: 'Préparer le bois de la cheminée', status: true},
  ];

  constructor() {}

}
