import { Component } from '@angular/core';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  isLoading = false;
  passwordEyeIcon = "on";
  passwordInputFieldId = "password_input"

  constructor(private navService: NavigationService){ 

  }

  doLogin(){

    this.navService.openPage("");

  }

  tooglePasswordType() {

    let element : HTMLElement = document.getElementById(this.passwordInputFieldId)!;

    if(element.getAttribute("type") == "password"){
      element.setAttribute("type", "text");
      this.passwordEyeIcon = "off"
    }else{
      element.setAttribute("type", "password");
      this.passwordEyeIcon = "on"
    }

	};

}
