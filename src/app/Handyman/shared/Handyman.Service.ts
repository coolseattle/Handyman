import { Injectable, EventEmitter } from '@angular/core';
import { Subject, Observable, observable } from 'rxjs';
import { IHandyMan} from './Handyman.model';

@Injectable()
export class HandymanService {
  getHandymen(): Observable<IHandyMan[]> {
    let subject = new Subject<IHandyMan[]>();
    try {
      setTimeout(() => {subject.next(HANDYMEN); subject.complete(); }, 100);
    }
    catch (err)
    {
      console.error(err);
      subject.error(err);
    }
    return subject;
  }
  
  getHandymanArray(): IHandyMan[] {
    return HANDYMEN;
  }

  getHandyman(id: number): IHandyMan {
    return HANDYMEN.find(customer => customer.id === id);
  }

  saveHandyman(customer: IHandyMan) {
    const index = HANDYMEN.findIndex(x => x.id === customer.id);
    if (index !== -1) {
      HANDYMEN[index] = customer; 
    }
    else {
      customer.id = 999;
      HANDYMEN.push(customer);
    }
  }

  getUserByMobileNumber(PhoneNumber: string) :  IHandyMan {
    const result = HANDYMEN.find(customer => customer.phone === PhoneNumber);
    return result; 
  }

  updateHandyman(customer : IHandyMan) {
    const index = HANDYMEN.findIndex(x => x.id === customer.id);
    if (index !== -1) {
      HANDYMEN[index] = customer; }
    else {
        this.saveHandyman(customer); }
  }
}

const HANDYMEN: IHandyMan[] = [
    {
      id: 1,
      fname: 'Angular Connect',
      lname: 'Angular Connect',
      PhotoImageUrl: '/assets/images/angularconnect-shield.png',
      enrolledDate: new Date('9/26/2017'),
      age:30,
      phone: '+919486903444',
      location: {
        address1: '1057 DT',
        address2:'',
        Landmark:'',
        city: 'London',
        country: 'England',
        zipcode: '623707' 
      },
      latitude:  '-1939489223',
      longitude : '-103030303',
      referenceby: '311',
      referencebyID: 113,
      adhaarID: '9382839823',
      adhaarImage: 'http://localhost:3030/33003.jpg',
      ratingaverage: 3,
      yearsofExperience: 10,
      InsuranceID: '3030003',
      InsuranceImage: '',
      InsuranceProvider: '',
      DrivingLicense: '',
      DrivingLicenseImage: '',
      serviceType: 'Plumbing'
    },
    {
      id: 2,
      fname: 'Ravi Gorkee',
      lname: 'Plumber',
      PhotoImageUrl: '/assets/images/angularconnect-shield.png',
      enrolledDate: new Date('9/26/2017'),
      age:30,
      phone: '+919486903444',
      location: {
        address1: '1057 DT',
        address2:'',
        Landmark:'',
        city: 'London',
        country: 'England',
        zipcode: '623707' 
      },
      latitude:  '-1939489223',
      longitude : '-103030303',
      referenceby: '1',
      referencebyID: 1,
      adhaarID: '9382839823',
      adhaarImage: 'http://localhost:3030/33003.jpg',
      ratingaverage: 3,
      yearsofExperience: 10,
      InsuranceID: '3030003',
      InsuranceImage: '',
      InsuranceProvider: '',
      DrivingLicense: '',
      DrivingLicenseImage: '',
      serviceType: 'Driving'
    }
  ];

