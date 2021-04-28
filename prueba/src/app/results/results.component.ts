import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  total = 0;
  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
    this.total = this.dataservice.results;
  }

}
