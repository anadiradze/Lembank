import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformClasses',
  standalone: true,
})
export class TransformClassesPipe implements PipeTransform {
  transform(value: { [key: string]: string }): string {
    return Object.values(value).join(' ');
  }
}
