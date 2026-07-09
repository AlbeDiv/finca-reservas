export interface StayRate {
  nights: number;
  totalPrice: number;
  pricePerPerson: number;
  discountPercentage?: number;
  featured?: boolean;
}

export const stayRates: StayRate[] = [
  {
    nights: 1,
    totalPrice: 1200000,
    pricePerPerson: 100000,
    discountPercentage: 0,
    featured: false,
  },
  {
    nights: 2,
    totalPrice: 2160000,
    pricePerPerson: 90000,
    discountPercentage: 10,
    featured: false,
  },
  {
    nights: 3,
    totalPrice: 3000000,
    pricePerPerson: 83333,
    discountPercentage: 16.7,
    featured: true,
  },
  {
    nights: 5,
    totalPrice: 4800000,
    pricePerPerson: 80000,
    discountPercentage: 20,
    featured: false,
  },
];
