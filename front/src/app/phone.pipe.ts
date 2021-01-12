import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    let newstr = "(+33) " + value.charAt(1) + " " + value.substr(2,2) + " " + value.substr(4,2)
               + " " + value.substr(6,2) + " " + value.substr(8,2);
    return newstr;
  }

}
