import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tab5'
})
export class Tab5Pipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
