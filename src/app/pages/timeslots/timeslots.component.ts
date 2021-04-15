import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SlotsService } from 'src/app/service/slots.service';

@Component({
  selector: 'app-timeslots',
  templateUrl: './timeslots.component.html',
  styleUrls: ['./timeslots.component.css']
})
export class TimeslotsComponent implements OnInit {

  Username: String;

  constructor(public service: SlotsService, private router: ActivatedRoute) {
    this.Username = this.router.snapshot.paramMap.get('name');
  }

  ngOnInit(): void {
  }

}
