import { Component } from '@angular/core';

@Component({
  selector: 'app-root1',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my first angule application';
  cities = [];
  newCiti: string;

  addCiti() {
    // alert(this.newCiti);
    this.cities.push(this.newCiti);
    this.newCiti = '';
  }

  removeCiti(index) {
    this.cities.splice(index, 1);
  }
}
