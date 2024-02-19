import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from './heroes/services/apiService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  private readonly apiservice: ApiService = inject(ApiService)
  
  ngOnInit(): void {
    this.apiservice.showList()
  }
  title = 'A-modules';
}
