import { Component } from '@angular/core';
import { timestamp } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  showDetails = false;

  timesButtonClicked = [];

  onShowDetails() {
    this.showDetails = !this.showDetails;

    this.timesButtonClicked.push(new Date());
    console.log(this.timesButtonClicked);
  }
}
