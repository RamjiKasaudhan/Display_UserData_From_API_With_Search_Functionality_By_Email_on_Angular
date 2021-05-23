import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../user-api.service';

@Component({
  selector: 'app-user-cards2',
  templateUrl: './user-cards2.component.html',
  styleUrls: ['./user-cards2.component.css']
})
export class UserCards2Component implements OnInit {

  userData2 :any =[];
  searchValue : string;
  totalRecords: number;
  page: Number = 1;
  
  constructor(private userDataService: UserApiService) {}

  ngOnInit(){
    this.userDataService.getUserData2().subscribe((data) => {
      this.userData2=data;
    });
  }

}
