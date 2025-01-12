import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notepad',
})
export class NotepadPipe implements PipeTransform {
  transform(value: string, limit: number = 10): string {
    if (!value) return '';
    //splits the string into an array using split method and [/\s+/] \
    const words = value.split(/\s+/);
    return words.length > limit ? words.slice(0, limit).join(' ') : value;
  }
}
