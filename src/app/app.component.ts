import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CrecomStudents';

    constructor(private ruoter: Router){

      //this.ruoter.navigate(['/login'])
    }

}
