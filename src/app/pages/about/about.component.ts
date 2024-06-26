import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  constructor(public api: ApiService) {
    
  }
  getHello() {
    this.api.getHello().subscribe((res: any)=> {
      console.log(res);
    })
  }
}
