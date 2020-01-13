import { Component, OnInit } from '@angular/core';
import {
  trigger, style,
  transition, animate, keyframes, query, stagger
} from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations : [ trigger('animobjectifs' ,[
    transition ( '*=>*' ,[
    query(':enter', style({opacity: 0}), {optional: true}),
    query(':enter', stagger('300ms',[ animate ( '.6s ease-in' , keyframes ([
    style({opacity: 0, transform: 'translateY(-75%)', offset: 0}), style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
    style({opacity: 1, transform: 'translateY(0)', offset: 1}), ]))]),{optional: true})
    ]) ])]
})
export class HomeComponent implements OnInit {

  nbItems: number = 0;
  btnText: string = "Ajouter un élément";
  objectifsText: string;
  objectifs: string[] = [];

  constructor() { }

  ngOnInit() {
    this.nbItems = this.objectifs.length;
  }
  ajoutItem(item: string) {
    //console.log("***** "+item);
    this.objectifs.push(item);
    this.nbItems = this.objectifs.length;
    //return this.nbItems;
    this.objectifsText = "";
    /*
        for (let i=0;i<this.objectifs.length;i++)
        {
          console.log('--- '+this.objectifs[i]);
        }
        */
  }

  ajoutItemBis() {
    this.objectifs.push(this.objectifsText);
    this.nbItems = this.objectifs.length;
    //return this.nbItems;
    this.objectifsText = "";
  }

}
