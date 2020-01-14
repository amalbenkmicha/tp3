import { Injectable } from '@angular/core';

@Injectable(
  // {
  //providedIn: 'root'
  //}

)
export class ActiviteService {

  objectifs: string[] = [];

  constructor() { }

  getLength() {
    return this.objectifs.length;
  }

  pushActivite(item) {
    this.objectifs.push(item);
  }

  getObjectifs() {
    return this.objectifs;
  }
  finObjectif(index) {
    return this.objectifs[index];
    ;
  }
  removeElem(index){
  this.objectifs.splice(index,1);
  }

  maj(index,new_value)
  {
    this.objectifs[index]=new_value;
  }
}
