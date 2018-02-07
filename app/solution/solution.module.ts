import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SolutionComponent } from './solution.component';
import { TotalCost } from './totalcost/totalcost.component';
import { FormsModule } from '@angular/forms';
@NgModule({
   imports: [SharedModule, FormsModule],
   declarations: [SolutionComponent, TotalCost],
   exports: [SolutionComponent]
})
export class SolutionModule { }
