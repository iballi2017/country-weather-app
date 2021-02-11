import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mathFixed'
})
export class MathFixedPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(value: any, fix) {
    // console.log(value);
    var num = value.toFixed(fix)
    // console.log(num)
    return num
  }

}
