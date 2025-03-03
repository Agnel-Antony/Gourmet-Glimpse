import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(allRecipe:any[],searchKey:string): any[] {  //allRecipe=[rg,rgss,regs] searchKey=rgss
    let result:any=[]//to hold search recipe content

    if(!allRecipe||searchKey==""){
      return allRecipe
    }
    else{
      result=allRecipe.filter((item:any)=>item.name.toLowerCase().trim().includes(searchKey.toLowerCase().trim()))
      return result;
    }

    
  }

}
