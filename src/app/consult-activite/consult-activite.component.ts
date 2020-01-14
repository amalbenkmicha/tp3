import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActiviteService } from '../services/activite.service';

@Component({
  selector: 'app-consult-activite',
  templateUrl: './consult-activite.component.html',
  styleUrls: ['./consult-activite.component.scss']
})
export class ConsultActiviteComponent implements OnInit {

  constructor(private act: ActivatedRoute, private s2: ActiviteService, private r:Router) { }
  v: any;
  v1: any;
  objectif: any;

  ngOnInit() {
    this.v = this.act.snapshot.paramMap.get('id');
    this.v1 = this.act.snapshot.paramMap.get('id1');

    this.objectif = this.s2.finObjectif(this.v);//retourne t[i]

    console.log('querying routing params')
    let keys = this.act.snapshot.paramMap.keys
    keys.forEach((e) => {
      console.log(e, this.act.snapshot.paramMap.get(e));
    });

    // tab, tab['prenom']==>amal
  }
  remove(){
    this.s2.removeElem(this.v);
    this.r.navigate(['/']);
  }
  update:boolean=false;

  updateField()
  {

    this.update=true;
  }

  retour()
  {
    this.r.navigate(['/']);
  }
  save()
  {
    this.update=false;
    this.s2.maj(this.v,this.objectif);
  }
}
