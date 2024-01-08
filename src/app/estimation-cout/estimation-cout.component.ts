import { Component } from '@angular/core';

@Component({
  selector: 'app-estimation-cout',
  templateUrl: './estimation-cout.component.html',
  styleUrls: ['./estimation-cout.component.css']
})
export class EstimationCoutComponent {
  selectedPos: string = '';
  charCount!: number;
  cost!: number;

  submitForm(form: any) {

      if (this.selectedPos === 'haut') {
        this.cost = this.charCount <= 30 ? 10 : 20;
      } else if (this.selectedPos === 'bas') {
        this.cost = this.charCount <= 30 ? 5 : 15;
      }
  }
}

