export interface ILoginState {
    Loggedin: boolean;
    role?: LoginRole;
    user?: {
        id: number;
        fname: string;
        lname: string;
        phone: string;
        lastlogindate: Date;
        PhotoImageUrl: string;
    };
  }

export const enum LoginRole {
    Admin,
    Handymen,
    Customer
}



