import { Component } from '@angular/core';
import { PkPediaService } from './pk-pedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PKPedia';
  pages: any = [];

  constructor (private ps: PkPediaService){}

  onEmit(event: string){
    //console.log(event);
    this.ps.getData(event).subscribe((res: any)=> {
      this.pages = res.query.search;
      console.log(this.pages);
    });
  }
}
