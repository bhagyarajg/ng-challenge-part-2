import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import {FaasPlatformService} from '../impl/faasPlatform.service';
const fnIds:string[] = ['1', '2', '3', '4', '5', '6', '7', '8'];

@Component({
   moduleId: __moduleName,
   selector: 'my-solution',
   templateUrl: 'solution.component.html'
})
export class SolutionComponent implements OnInit{ 
    getFaasCompleteInfo: any[] = [];
    totalCost : number =0;
   // getUsageInfo;
    constructor(private faasPlatformService: FaasPlatformService){
      
    }
    ngOnInit(){
      fnIds.forEach(element => {
        this.faasPlatformService.getFaasInfo$(element)
        .subscribe(info => {//console.log(info);
            this.getFaasCompleteInfo.push(info)},
                  error => console.log(error));
                });
    this.getFaasCompleteInfo.forEach(element => {
        this.faasPlatformService.getFaasUsage$(element.id)
        .subscribe(usage => {//console.log(usage);
            element.totalMonthlyCost = usage.totalMonthlyInvocations * element.invocationCost +
            usage.totalMonthlyRuntime * element.runtimeCost; 
            this.totalCost += element.totalMonthlyCost;
        },
        error => console.log(error));
        console.log(element);
    });
    console.log(this.totalCost);

}

}