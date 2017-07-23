import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeSpaces'
})
export class RemoveSpacesPipe implements PipeTransform {

  transform(value: string, args?: boolean): any {
    if(args !== undefined && args === true)
      return value.replace(/ /g, "");
    else 
      return value;
  }

}
