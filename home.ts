import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms';
import { HomePageService} from './home-page.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  employeeForm : FormGroup;
  constructor(private HomePageService : HomePageService) { }
  ngOnInit() {
    this.employeeForm = new FormGroup({
      usr :new FormControl(),
      password : new FormControl(),
      confPassword : new FormControl(),
      Email : new FormControl(),
      PhoneNo : new FormControl(),
      checkbox : new FormControl(),
      inlineRadioOptions : new FormControl(),
    });
  }
  onSubmit() : void {
    console.log(this.employeeForm.value);
    console.log(this.HomePageService.getLocation().subscribe())
  }

}
