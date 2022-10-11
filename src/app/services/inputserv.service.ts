import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InputservService {

  inputArr:any=[]
  public inputElement =new BehaviorSubject<string>("")
  constructor() { }
  getInput(){
    return this.inputElement.asObservable()
  }
  addInput(item:any){
    this.inputArr.push(item)
    this.inputElement.next(this.inputArr)
  }
}
