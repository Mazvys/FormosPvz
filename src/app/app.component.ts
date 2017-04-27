import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userForm = new FormGroup ({
    vardas : new FormControl('',[Validators.minLength(3),Validators.maxLength(10)]),
    pavarde : new FormControl('',[Validators.minLength(2),Validators.maxLength(15)]),
    adresas : new FormControl(),
    miestas : new FormControl(),
    salis : new FormControl(),
    kodas : new FormControl(null, Validators.pattern('^[0-9][0-9]{4}$')),
    /* PROBLEM
    info : new FormGroup({
     })
    */
    telefonas : new FormControl('+370',[Validators.minLength(9),Validators.maxLength(12)]),
    emailas :new FormControl('', CustomValidators.email),
    skype : new FormControl(),


});
onSubmit(){
  console.log(this.userForm.value);
}

}
