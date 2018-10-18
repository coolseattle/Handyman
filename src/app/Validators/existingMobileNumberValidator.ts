import { Directive } from '@angular/core';
import { AsyncValidatorFn, AsyncValidator, NG_ASYNC_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable} from "rxjs";
import { HandymanService } from '../Handyman/shared/Handyman.Service';
import {IHandyMan} from '../Handyman/shared/Handyman.model';
import { map } from 'rxjs/operators'; 

export function existingMobileNumberValidator(handymanservice: HandymanService,  oldvalue: string,   entrymode: boolean): AsyncValidatorFn {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    
      return  new  Observable (observer => {
          if (!control.touched && !control.dirty) {
              observer.next(null);
          }
          else if (!entrymode && control.value === oldvalue )  {
            observer.next(null);
          }
          else {
            var handyman = handymanservice.getUserByMobileNumber(control.value);
            if (handyman){
              console.warn('mobile number match');
              observer.next ({mobNumExists: true});
            }
            else {
              console.warn('mobile number doesnt match');
              observer.next(null);
            }
          }
        observer.complete();
        return observer;
    } );

  };
}

@Directive({
  selector: '[mobNumExists][formControlName],[mobNumExists][formControl],[mobNumExists][ngModel]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: ExistingMobileNumberValidatorDirective, multi: true}]
})
export class ExistingMobileNumberValidatorDirective implements AsyncValidator {
  public oldvalue: string;
  public entrymode: boolean;

  constructor(private handymanservice: HandymanService) {  }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
     return existingMobileNumberValidator(this.handymanservice, this.oldvalue, this.entrymode)(control);
  }
} 