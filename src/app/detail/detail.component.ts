import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HEROES }      from '../mock-heroes';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public heroes: any;
  public title = "Infomation Hero";
  public hero;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    //this.heroes = this.getAllHeroes();
    this.getHero();
    //console.log(this.hero)
  }
  getHero(){
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.heroes = HEROES;
    this.hero = this.heroes[ id -1];
  }

}
