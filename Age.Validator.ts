import { AbstractControl, ValidationErrors } from "@angular/forms";

export class AgeValidation
{
    //typescript validation method
    static ageRangeValidator(controlobj: AbstractControl):ValidationErrors | null
    {
        if (controlobj.value !== undefined && (isNaN(controlobj.value)|| controlobj.value < 18 ))
        {
        return { 'Vwits_ageRangeValidator': true };//fails
        }
        return null;//not fails
    
    }

}