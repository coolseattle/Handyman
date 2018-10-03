export interface ICustomer {
    id: number;
    fname: string;
    lname: string;
    phone: string;
    age: number;
    PhotoImageUrl: string;
    location?: {
        address1: string;
        address2: string;
        Landmark: string ;
        city: string;
        country: string;
        zipcode: string;
    }
    latitude: string;
    longitude: string;
    adhaarID: string;
    adhaarImage: string;
    referenceby: string;
  }

 export interface ICustomerTemplateModel {
    fname: string;
    lname: string;
    phone: string;
    age: number;
    PhotoImageUrl: string;
    latitude: string;
    longitude: string;
    adhaarID: string;
    adhaarImage: string;
    referenceby: string;
 }

export interface IAddress {
    address1: string;
    address2: string;
    Landmark: string ;
    city: string;
    country: string;
    zipcode: string;
}
 