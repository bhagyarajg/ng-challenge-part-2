import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SolutionComponent } from './solution.component';
import { TotalCost } from './totalcost/totalcost.component';
import { FormsModule } from '@angular/forms';
import { CurrencyConverter } from './currency-converter/currencyConverter.service';
import { HttpModule } from '@angular/http';
import { CurrencyConversion } from './pipes/currencyConversion.pipe';
@NgModule({
   imports: [SharedModule, FormsModule, HttpModule],
   declarations: [SolutionComponent, TotalCost, CurrencyConversion],
   providers:[CurrencyConverter],
   exports: [SolutionComponent]
})
export class SolutionModule { }
