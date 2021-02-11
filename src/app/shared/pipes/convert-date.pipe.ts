import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertDate'
})
export class ConvertDatePipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(value: any) {
    const t = new Date(value);
    // const date = t.toUTCString() + " " + t.toLocaleTimeString("en-US");
    const date = t.toLocaleDateString("en-US") + " " + t.toLocaleTimeString("en-US")
    // console.log(t.toLocaleTimeString("en-US"));
    // console.log(value)
    // console.log(date)
    return date
  }

}
