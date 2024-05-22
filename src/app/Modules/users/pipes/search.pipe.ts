import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(userListArray:any[],searchKey:string): any[] {
    const result:any = [];//result of the search

    if(!userListArray || searchKey==""){
      return userListArray
    }
    else{
      userListArray.map((item:any)=>{
        //item.name==searchKey ? result.push(item) 
          if(item.name?.toLowerCase().trim().includes(searchKey.trim().toLowerCase())){
            return result.push(item)
          }

      })
    }
    return result;
  }

}
