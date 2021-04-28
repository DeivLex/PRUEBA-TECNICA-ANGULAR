import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataservice: DataService) {
   }

  ngOnInit(): void {
    // Resetea la variable del punteo a 0
    this.dataservice.results = 0;
  }
}
