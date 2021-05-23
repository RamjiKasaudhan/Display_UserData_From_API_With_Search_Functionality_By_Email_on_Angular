import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../user-api.service';

@Component({
  selector: 'app-user-cards',
  templateUrl: './user-cards.component.html',
  styleUrls: ['./user-cards.component.css']
})
export class UserCardsComponent implements OnInit {

  userData1 :any =[]
  searchValue: string 
  totalRecords: number
  page: Number = 1
  
  constructor(private userDataService: UserApiService) {}

  ngOnInit(){
    this.userDataService.getUserData1().subscribe((data) => {
      this.userData1=data;
    });
  }

  
}
