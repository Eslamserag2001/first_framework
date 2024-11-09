import { Component } from '@angular/core';
import { OurdataService } from '../service/ourdata.service';
@Component({
  selector: 'app-home',
  standalone: true,
  providers:[OurdataService],

  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor( public _newservices:OurdataService){
    this.mylast=this._newservices.datalist
  }

  mylast !: any []


}
