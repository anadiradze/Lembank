import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyCustomFormat',
  standalone: true,
})
export class CurrencyCustomFormatPipe implements PipeTransform {
  transform(
    value: number,
    locale: string = 'en-US',
    currency: string = 'USD'
  ): string {
    const formatter = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    const formattedNumber = formatter.format(value);
    let [integerPart, decimalPart] = formattedNumber
      .replace(/[^\d.]/g, '')
      .split('.');

    return `${
      formattedNumber.split('.')[0]
    }.<span class="decimal">${decimalPart}</span>`;
  }
}
