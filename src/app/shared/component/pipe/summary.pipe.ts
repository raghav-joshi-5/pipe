import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary',
})
export class SummaryPipe implements PipeTransform {
  //   this is the ES-6 short hand
  transform(value: any, limit: number = 50) {
    return value.substring(0, limit) + '...';
  }

  //   transform(value: string, limit?: number): string {
  //     if (!limit) {
  //       limit = 50;
  //     }
  //     // if the user does not give the limit number dynamically then the the above condition will set the default limit is 50
  //     return value.substring(0, limit) + '...';
  //   }

  //   transform(value: string): string {
  // return `i love angular`;
  // this will return the i love angular , but taking the input value from title property of app-component
  // return value.toLowerCase();
  // this will return the title property of app-component in lowercase
  // return value.toUpperCase();
  //  this will return the title property of app-component in uppercase
  // return value.substring(0, 50) + '...';
  // this will return the first 50 char from the title property of app-component, but taking the input value from title property of app-component
  //   }
}
