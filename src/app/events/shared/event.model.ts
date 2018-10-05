export interface IEvent {
  id: number
  name: string
  date: Date
  time: string
  price: number
  imageUrl: string
  Customername: String
  HandymanName: String
  Customerid: string 
  Handymanid: string
  Noofdays: number
  location?: {
    address: string
    city: string
    country: string
  },
  onlineUrl?: string,
  sessions: ISession[],
  status: string
}

export interface ISession {
  id: number
  name: string
  presenter: string
  duration: number
  level: string
  abstract: string
  voters: string[]
}