import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class CurrencyConverter {
    constructor(private http: Http){}
    convertToCurrency(value, toCurrency): Observable <any>{
         if(toCurrency === 'USD'){
            return Observable.of(value);
         } else {
         return this.http.get('https://api.fixer.io/latest?base=USD')
                        .map(response => response.json())
                        .map(xchange =>  value * xchange.rates[toCurrency])
                        .catch(error => Observable.throw(error.statusText));
         }
    }
}
