import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { SlotsService } from 'src/app/service/slots.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  isClicked: boolean;
  counter = 8;
  constructor(public service: SlotsService) { }
  active = false;
  bussy = false;

  items = [
    { name: '8:00', active: false, bussy: false },
    { name: '8:30', active: false, bussy: false },
    { name: '9:00', active: false, bussy: false },
    { name: '9:30', active: false, bussy: false },
    { name: '10:00', active: false, bussy: false },
    { name: '10:30', active: false, bussy: false },
    { name: '11:00', active: false, bussy: false },
    { name: '11:30', active: false, bussy: false },
    { name: '12:00', active: false, bussy: false },
    { name: '12:30', active: false, bussy: false },
    { name: '1:00', active: false, bussy: false },
    { name: '1:30', active: false, bussy: false },
    { name: '2:00', active: false, bussy: false },
    { name: '2:30', active: false, bussy: false },
    { name: '3:00', active: false, bussy: false },
    { name: '3:30', active: false, bussy: false },
    { name: '4:00', active: false, bussy: false },
    { name: '4:30', active: false, bussy: false },
    { name: '5:00', active: false, bussy: false },
    { name: '5:30', active: false, bussy: false },
    { name: '6:00', active: false, bussy: false },
    { name: '6:30', active: false, bussy: false },
    { name: '7:00', active: false, bussy: false },
    { name: '7:30', active: false, bussy: false },
    { name: '8:00', active: false, bussy: false },
  ];

  ngOnInit(): void {
  }

  toggleClass(item) {


    if (this.counter >= 0 && this.counter <= 8) {

      item.active = !item.active;
      if (item.bussy === false) {

        if (this.counter !== 0) {

          this.counter = this.counter - 1;
          item.bussy = true;
        } else {
          this.active = false
        }

      } else {
        this.counter = this.counter + 1;
        item.bussy = false;
      }
    } if (this.counter === 0) {
      console.log(this.counter);
      this.active = false;
    }
  }


}


