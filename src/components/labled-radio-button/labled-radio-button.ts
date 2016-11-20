import { Component } from '@angular/core';


@Component({
  selector: 'labled-radio-button',
  template: '<input type="radio" [id]="id" [name]="name" [value]="value"> <label [for]="name">{{label}}</label>'
})
export class LabledRadioButton {

  public id: string;
  public name: string;
  public value: string;
  public label: string;
  
  constructor() {
  }

}
