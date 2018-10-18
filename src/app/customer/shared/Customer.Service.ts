import { Injectable, EventEmitter } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { ICustomer} from './Customer.model';

@Injectable()
export class CustomerService {
  getCustomers(): Observable<ICustomer[]> {
    let subject = new Subject<ICustomer[]>();
    setTimeout(() => {subject.next(CUSTOMERS); subject.complete(); }, 100);
    return subject;
  }

  getCustomer(id: number): ICustomer {
    return CUSTOMERS.find(customer => customer.id === id);
  }

  saveCustomer(customer: ICustomer) {
    const index = CUSTOMERS.findIndex(x => x.id === customer.id);
    if (index !== -1) {
        CUSTOMERS[index] = customer; }
    else {
      customer.id = 999;
      CUSTOMERS.push(customer);
    }
  }

  updateCustomer(customer : ICustomer) {
    const index = CUSTOMERS.findIndex(x => x.id === customer.id);
    if (index !== -1) {
        CUSTOMERS[index] = customer; }
    else { 
      this.saveCustomer(customer); }
  }
}

const CUSTOMERS: ICustomer[] = [
    {
      id: 1,
      fname: 'Angular Connect',
      lname: 'Angular Connect',
      PhotoImageUrl: '/assets/images/customer1.jpeg',
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
      adhaarID: '9382839823',
      adhaarImage: 'http://localhost:3030/33003.jpg'
    },
    {
      id: 2,
      fname: 'Nanda',
      lname: 'Baluchamy',
      PhotoImageUrl: '/assets/images/Customer2.jpeg',
      age: 12,
      phone: '+919486903343',
      location: {
        address1: '18615 4th AVE SE',
        address2:'',
        Landmark:'',
        city: 'Madurai',
        country: 'India',
        zipcode: '623707' 
      },
      latitude:  '-1939489223',
      longitude : '-103030303',
      referenceby: '1',
      adhaarID: '9382839823',
      adhaarImage: 'http://localhost:3030/33003.jpg'
    }
  ];

