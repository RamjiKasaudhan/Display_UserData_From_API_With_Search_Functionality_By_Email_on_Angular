import { Pipe, PipeTransform } from '@angular/core';
import { UserApiService } from './user-api.service';

@Pipe({
  name: 'searchFilterPipe2'
})
export class SearchFilterPipe2Pipe implements PipeTransform {

  data: any;
  constructor(private userDataService: UserApiService) {
    this.data = new Array<any>();

  }

  transform(user: any, searchValue: string): any {
    this.userDataService.getUserData2().subscribe((data) => {
      user = data;
      console.log()
    })
    if(!user || !searchValue){
      return user;
    }
    return user.filter(user=>
      user.email.toLocaleLowerCase().match(searchValue.toLocaleLowerCase())  
    );
  }

}
