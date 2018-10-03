import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HandymanService } from './shared/Handyman.Service';
import { IHandyMan } from './shared/Handyman.model';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { TOASTR_TOKEN, Toastr } from '../common/toastr.service';
import { createTemplateData } from '@angular/core/src/view/refs';

@Component({
  templateUrl: './Handyman-Create.component.html',
  styles: [`
    em {float:right; color:#E05C65; padding-left: 10px;}
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color:#999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})
export class HandymanCreateComponent implements OnInit {
  customerForm: FormGroup;
  private addMode = false;
  private customer: IHandyMan;
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
    private customerService: HandymanService,
    private rediretrouter: Router,
    @Inject(TOASTR_TOKEN) private toastr: Toastr
    ) {
  }

  ngOnInit() {
       
      this.router.params.forEach((params: Params) => {
     this.customer = this.customerService.getHandyman(+params['id']);
        this.addMode = false;
        if (!this.customer) {
              this.DataMode = 'Add';
              this.createEmptyCustomer();
           }
      
      });
      console.warn( ' fname ' +  this.customer.fname);
      this.InitFormControl();
     }

  InitFormControl() {
    /*
    this.fname = new FormControl ('', [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lname = new FormControl( '', Validators.required);
    this.phone = new FormControl( '', [Validators.required, Validators.minLength(9), Validators.maxLength(15)]);
    this.PhotoImageUrl = new FormControl( '');
    this.age  = new FormControl('',
          [Validators.required, Validators.min(17) ,  Validators.max(199), Validators.pattern('^[0-9]*$')]);
    this.latitude  = new FormControl('');
    this.longitude  = new FormControl( '');
    this.adhaarID  = new FormControl('');
    this.adhaarImage  = new FormControl('');
    this.referenceby  = new FormControl(''); 
    */
    
    this.fname = new FormControl (this.customer.fname, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lname = new FormControl( this.customer.lname, Validators.required);
    this.phone = new FormControl( this.customer.phone, [Validators.required, Validators.minLength(9), Validators.maxLength(15)]);
    this.PhotoImageUrl = new FormControl( this.customer.PhotoImageUrl);
    this.age  = new FormControl(this.customer.age,
          [Validators.required, Validators.min(17) ,  Validators.max(199), Validators.pattern('^[0-9]*$')]);
    this.latitude  = new FormControl(this.customer.latitude);
    this.longitude  = new FormControl( this.customer.longitude);
    this.adhaarID  = new FormControl(this.customer.adhaarID);
    this.adhaarImage  = new FormControl( this.customer.adhaarImage);
    this.referenceby  = new FormControl(this.customer.referenceby);
  
    this.customerForm = new FormGroup({
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
  
  createEmptyCustomer() {
          this.customer = {
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

  saveCustomer(formValues) {
    if (!this.customerForm.valid) {
        return;
      }
    
    if (this.customer === undefined) {
        this.createEmptyCustomer();
     }
      this.customer.id = Math.floor((Math.random() * 100) + 1);
      this.customer.fname =  formValues.fname;
      this.customer.lname = formValues.lname;
      this.customer.PhotoImageUrl = formValues.PhotoImageUrl;
      this.customer.age = formValues.age;
      this.customer.phone = formValues.phone;
          this.customer.location.address1 = '1057 DT';
          this.customer.location.address2 = 'address2';
          this.customer.location.Landmark = 'Next to NY tower';
          this.customer.location.city = 'London';
          this.customer.location.country = 'England';
          this.customer.location.zipcode = '623707';
      this.customer.latitude = formValues.latitude;
      this.customer.longitude = formValues.longitude;
      this.customer.referenceby =  formValues.referenceby;
      this.customer.adhaarID = formValues.adhaarID;
      this.customer.adhaarImage = formValues.adhaarImage; 
     
      //this.customer = Object.assign({}, this.customerForm.value);
      console.warn(' Cusotmer ID  :' + this.customer.id)
      this.customerService.saveHandyman(this.customer);
      this.toastr.success('Profile Saved');
  }

  validateFirstName() {
    return this.fname.valid || this.fname.untouched;
  }
  validateLastName() {
    return this.lname.valid || this.lname.untouched;
  }
  cancel() {
    this.rediretrouter.navigate(['customer\list']);
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
