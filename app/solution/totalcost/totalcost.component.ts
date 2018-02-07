import { Component, Input  } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
const DEFAULT_CURRENCY = 'USD';
@Component({
   moduleId: __moduleName,
   selector: 'total-cost',
   templateUrl: 'totalcost.component.html'
})
export class TotalCost implements OnInit {
    @Input() totalCostInUSD: number;
 //   totalCost: number = 1400;
 availableCurrencies = ['USD', 'GBP', 'EUR'];
 selectedCurrency: string = DEFAULT_CURRENCY;
 switchCurrency(currency) {
    this.selectedCurrency = this.availableCurrencies.includes(currency) ?
      currency : DEFAULT_CURRENCY;
      console.log(currency);
  }
    constructor(){ }
    ngOnInit(){ }
 }
