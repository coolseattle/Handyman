import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HandymanService } from './shared/Handyman.Service';
import { IHandyMan } from './shared/Handyman.model';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { TOASTR_TOKEN, Toastr } from '../common/toastr.service';
import { createTemplateData } from '@angular/core/src/view/refs';

@Component({
  templateUrl: './Handyman-Create.componentold.html',
  styles: [`
    em {float:right; color:#E05C65; padding-left: 10px;}
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color:#999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})
export class HandymanCreateComponentold implements OnInit {
  handymanForm: FormGroup;
  private addMode = false;
  private handyman: IHandyMan;
  private fname: FormControl;
  private lname: FormControl;
  private  phone: FormControl;
  private  age:  FormControl;
  private  PhotoImageUrl: FormControl;
  private  address1: FormControl;
  private  address2: FormControl;
  private  Landmark: FormControl ;
  private  city: FormControl;
  private  country: FormControl;
  private  zipcode: FormControl;
  private  latitude: FormControl;
  private  longitude: FormControl;
  private  adhaarID: FormControl;
  private  adhaarImage: FormControl;
  private  referenceby: FormControl;
  private  DataMode = 'Add';
  constructor(private router: ActivatedRoute,
    private handymanservice: HandymanService,
    private rediretrouter: Router,
    @Inject(TOASTR_TOKEN) private toastr: Toastr
    ) {
  }

  ngOnInit() {
      this.router.params.forEach((params: Params) => {
        this.handyman = this.handymanservice.getHandyman(+params['id']);
        this.addMode = false;
        if (this.handyman) {
          this.DataMode = 'Edit';
           }
          else {
            this.createEmptyHandyman();
          }
      });
      this.InitFormControl();
     }

  InitFormControl() {
    this.fname = new FormControl (this.handyman.fname, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lname = new FormControl( this.handyman.lname, Validators.required);
    this.phone = new FormControl( this.handyman.phone, [Validators.required, Validators.minLength(9), Validators.maxLength(15)]);
    this.PhotoImageUrl = new FormControl( this.handyman.PhotoImageUrl);
    this.age  = new FormControl(this.handyman.age,
          [Validators.required, Validators.min(17) ,  Validators.max(199), Validators.pattern('^[0-9]*$')]);
    this.latitude  = new FormControl(this.handyman.latitude);
    this.longitude  = new FormControl( this.handyman.longitude);
    this.adhaarID  = new FormControl(this.handyman.adhaarID);
    this.adhaarImage  = new FormControl( this.handyman.adhaarImage);
    this.referenceby  = new FormControl(this.handyman.referenceby);

    this.handymanForm = new FormGroup({
       fname :  this.fname,
       lname :  this.lname,
       phone : this.phone,
       PhotoImageUrl: this.PhotoImageUrl,
        age: this.age,
        latitude:  this.latitude,
        longitude: this.longitude,
        adhaarID :   this.adhaarID,
        adhaarImage :  this.adhaarImage,
        referenceby :   this.referenceby
    }); 
  }
  
  createEmptyHandyman() {
          this.handyman = {
            id: Math.floor((Math.random() * 100) + 1),
            fname: '',
            lname: '',
            PhotoImageUrl: '',
            age: 0,
            enrolledDate: new Date('9/26/2018'),
            yearsofExperience: 10,
            phone: '',
            location: {
              address1: 'T',
              address2:'',
              Landmark:'',
              city: '',
              country: '',
              zipcode: '' 
            },
            latitude: '',
            longitude : '',
            adhaarID: '',
            adhaarImage: '',
            InsuranceImage: '',
            InsuranceProvider: '',
            InsuranceID: '',
            DrivingLicense: '',
            DrivingLicenseImage: '',
            referenceby: '',
            referencebyID: 0,
            ratingaverage: 0,
            serviceType: ''
        }; 
   } // Create empty customer

  FillvaluefromForm(formValues)
  {
    if (!this.handyman){
      return;
    }
    this.handyman.id = Math.floor((Math.random() * 100) + 1);
    this.handyman.fname =  formValues.fname;
    this.handyman.lname = formValues.lname;
    this.handyman.PhotoImageUrl = formValues.PhotoImageUrl;
    this.handyman.age = formValues.age;
    this.handyman.phone = formValues.phone;
    this.handyman.location.address1 = '1057 DT';
    this.handyman.location.address2 = 'address2';
    this.handyman.location.Landmark = 'Next to NY tower';
    this.handyman.location.city = 'London';
    this.handyman.location.country = 'England';
    this.handyman.location.zipcode = '623707';
    this.handyman.latitude = formValues.latitude;
    this.handyman.longitude = formValues.longitude;
    this.handyman.referenceby =  formValues.referenceby;
    this.handyman.adhaarID = formValues.adhaarID;
    this.handyman.adhaarImage = formValues.adhaarImage;

  }


  saveCustomer(formValues) {
    if (!this.handymanForm.valid) {
        return;
      }
    
    if (this.handyman === undefined) {
        this.createEmptyHandyman();
     }
     this.FillvaluefromForm(formValues);
     
      console.warn(' Cusotmer ID  :' + this.handyman.id);
      this.handymanservice.saveHandyman(this.handyman);
      this.toastr.success('Profile Saved');
  }

  validateFirstName() {
    return this.fname.valid || this.fname.untouched;
  }
  validateLastName() {
    return this.lname.valid || this.lname.untouched;
  }
  cancel() {
    this.rediretrouter.navigate(['handyman\list']);
  }
  getGeoLocation() {
     if (navigator.geolocation) {
          const options = {timeout:60000};
          navigator.geolocation.getCurrentPosition(this.fillPosition, this.errorHandler, options);
        } else { 
          console.error('Geo Location not supported by this browser');
        }
  }

 errorHandler(err) {
    if (err.code === 1) {
       console.error('Access denied');
    } else if ( err.code === 2) {
       console.error('Error: Position is unavailable!');
    }
 }

 fillPosition(position) {
      this.longitude.setValue( position.coords.longitude);
      this.latitude.setValue( position.coords.latitude);
  }

  
}
