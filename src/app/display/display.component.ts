import { Component, OnInit } from '@angular/core';
import { InputservService } from '../services/inputserv.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  display:any=[]
  constructor(private displayInput:InputservService) { }

  ngOnInit(): void {
    this.displayInput.getInput()
    .subscribe((res:any)=>{
      this.display=res
    })
  }

}
