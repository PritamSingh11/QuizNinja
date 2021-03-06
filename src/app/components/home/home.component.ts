import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'quizNinja';

  loginStatus: boolean;
  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.loginStatusObservable.subscribe(loginStatus => this.loginStatus = loginStatus);
  }

}
