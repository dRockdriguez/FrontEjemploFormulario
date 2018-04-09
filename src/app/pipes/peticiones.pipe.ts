import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peticiones'
})
export class PeticionesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
