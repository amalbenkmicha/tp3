import { Component, OnInit } from '@angular/core';
import {
  trigger, style,
  transition, animate, keyframes, query, stagger
} from '@angular/animations';
import { Router } from '@angular/router';
import { ActiviteService } from '../services/activite.service';


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
  
  t=[];

  constructor(private monRouteur : Router, private activiteService: ActiviteService ) {
    

   }

  ngOnInit() {
    this.nbItems = this.activiteService.getLength();
    this.t = this.activiteService.getObjectifs();
  }
  ajoutItem(item: string) {
    //console.log("***** "+item);
    this.activiteService.pushActivite(item);
    this.nbItems = this.activiteService.getLength();
    //return this.nbItems;
    this.objectifsText = "";
    setTimeout(()=> {
      //this.monRouteur.navigate(['/about']);
    }, 1000 );



    /*
        for (let i=0;i<this.objectifs.length;i++)
        {
          console.log('--- '+this.objectifs[i]);
        }
        */
  }

  ajoutItemBis() {
    /*
    this.objectifs.push(this.objectifsText);
    this.nbItems = this.objectifs.length;
    //return this.nbItems;
    this.objectifsText = "";
    */
  }

}
