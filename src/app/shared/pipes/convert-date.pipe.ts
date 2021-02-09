import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertDate'
})
export class ConvertDatePipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(value: any) {
    // console.log(value);
    var date = value.toFixed(0)
    // console.log(date)
    return date
  }

}
