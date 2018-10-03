export interface IHandyMan {
    id: number;
    fname: string;
    lname: string;
    phone: string;
    age: number;
    enrolledDate: Date;
    yearsofExperience: number;
    PhotoImageUrl: string;
    latitude: string;
    longitude: string;
    adhaarID: string;
    adhaarImage: string;
    InsuranceImage: string;
    InsuranceProvider: string;
    InsuranceID: string;
    DrivingLicense: string;
    DrivingLicenseImage: string;
    referenceby: string;
    referencebyID: number;
    ratingaverage: number;
    location?: {
        address1: string;
        address2: string;
        Landmark: string ;
        city: string;
        country: string;
        zipcode: string;
    }
    serviceType: string;
  }
