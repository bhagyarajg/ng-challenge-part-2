
import { Pipe, PipeTransform} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CurrencyConverter } from '../currency-converter/currencyConverter.service';


@Pipe({
    name: 'convertTocurrency'
})
export class CurrencyConversion implements PipeTransform {
    constructor(private currencyConversionService: CurrencyConverter) { }
    transform(value: number, ...args: string[]): Observable <number> {
      return  this.currencyConversionService.convertToCurrency(value, args[0]);
    }
}
