import { Component, OnInit } from '@angular/core';
import { InputservService } from '../services/inputserv.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  inputVal:string=""
  constructor(private inputServ:InputservService) { }

  ngOnInit(): void {
  }
  onClick(){
    this.inputServ.addInput(this.inputVal)
  }

}
