import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mathFixed'
})
export class MathFixedPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(value: any, fix) {
    var num = value.toFixed(fix)
    return num
  }

}
