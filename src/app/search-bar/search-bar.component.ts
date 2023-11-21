import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  @Output() emitter = new EventEmitter<string>(); //To send term typed on search bar to appcomponent
  term: string = '';

  //OnTyping(value: string){
    //console.log(value);
  //}

  onFormSubmit(event: any){
    event.preventDefault();
    //console.log(this.term);
    this.emitter.emit(this.term)
    
  }
}
