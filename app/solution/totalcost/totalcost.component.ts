import { Component, Input  } from '@angular/core';
import { CurrencyConverter } from '../currency-converter/currencyConverter.service';

const DEFAULT_CURRENCY = 'USD';
@Component({
   moduleId: __moduleName,
   selector: 'total-cost',
   templateUrl: 'totalcost.component.html'
})
export class TotalCost{
 @Input() totalCostInUSD: number;
 convertedCost: number = this.totalCostInUSD;
 availableCurrencies = ['USD', 'GBP', 'EUR'];
 selectedCurrency: string = DEFAULT_CURRENCY;
 constructor(private currencyConverter: CurrencyConverter){ }
 changeCurrency(currency) {
    this.selectedCurrency = this.availableCurrencies.includes(currency) ?
      currency : DEFAULT_CURRENCY;
  }
 }
