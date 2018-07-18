import { Component, OnInit,Input } from '@angular/core';
import { HEROES }      from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  title = 'List Heroes';
  

  heroes: any;

  //@Input() hero = heroes;

  constructor() { }

  ngOnInit() {
    this.getAllHeroes();
  }

  getAllHeroes(){
    return this.heroes = HEROES;
  }
  showInfo(id){
    console.log(this.heroes[id-1]);
  }

}
