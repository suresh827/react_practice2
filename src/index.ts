import { Phone } from "./models/Warehouse";

let detroitWarehouse: Phone[] = [
  {
    name: "iPhone SE",
    price: 399,
    fiveG: false,
  },
  {
    name: "iPhone XR",
    price: 499,
    fiveG: false,
  },
  {
    name: "iPhone 11",
    price: 599,
    fiveG: false,
  },
  {
    name: "iPhone 12 Mini",
    price: 729,
    fiveG: true,
  },
  {
    name: "iPhone 12",
    price: 829,
    fiveG: true,
  },
  {
    name: "iPhone 12 Pro",
    price: 999,
    fiveG: true,
  },
  {
    name: "iPhone 12 Max",
    price: 1099,
    fiveG: true,
  },
  {
    name: "Pixel 4a",
    price: 349,
    fiveG: false,
  },
  {
    name: "Pixel 5",
    price: 699,
    fiveG: true,
  },
];

let newyorkWarehouse: Phone[] = [
  {
    name: "iPhone SE",
    price: 399,
    fiveG: false,
  },
  {
    name: "Pixel 5",
    price: 699,
    fiveG: true,
  },
  {
    name: "Pixel 4a 5G",
    price: 499,
    fiveG: true,
  },
  {
    name: "Pixel 4a 5G",
    price: 499,
    fiveG: true,
  },
  {
    name: "Pixel 4a 5G",
    price: 499,
    fiveG: true,
  },
  {
    name: "Pixel 4a",
    price: 349,
    fiveG: false,
  },
  {
    name: "Pixel 4a",
    price: 349,
    fiveG: false,
  },
  {
    name: "Galaxy S10",
    price: 750,
    fiveG: false,
  },
  {
    name: "Galaxy S10+",
    price: 1500,
    fiveG: true,
  },
];

let chicagoWarehouse: Phone[] = [
  {
    name: "Galaxy S10",
    price: 750,
    fiveG: false,
  },
  {
    name: "Galaxy S10+",
    price: 1500,
    fiveG: true,
  },
  {
    name: "Galaxy S10+",
    price: 1500,
    fiveG: true,
  },
  {
    name: "Galaxy S10+",
    price: 1500,
    fiveG: true,
  },
  {
    name: "iPhone 12",
    price: 829,
    fiveG: true,
  },
  {
    name: "iPhone 12 Pro",
    price: 999,
    fiveG: true,
  },
  {
    name: "iPhone 12 Max",
    price: 1099,
    fiveG: true,
  },
  {
    name: "Pixel 4a",
    price: 349,
    fiveG: false,
  },
  {
    name: "Pixel 5",
    price: 699,
    fiveG: true,
  },
];

const addPhone = (
  warehouse: Phone[],
  new_name: string,
  new_price: number,
  new_fiveG: boolean
): void => {
  const newPhone: Phone = {
    name: new_name,
    price: new_price,
    fiveG: new_fiveG,
  };

  warehouse.push(newPhone);
};

const deletePhoneByIndex = (warehouse: Phone[], index: number): void => {
  warehouse.splice(index, 1);
};

const filter5G = (warehouse: Phone[]): Phone[] => {
  let phones: Phone[] = [];
  warehouse.forEach((phone) => {
    if (phone.fiveG === true) phones.push(phone);
  });
  return phones;
};

const filterPriceLessThan = (warehouse: Phone[], price: number): Phone[] => {
  let phones: Phone[] = [];
  warehouse.forEach((phone) => {
    if (phone.price <= price) phones.push(phone);
  });
  return phones;
};

const filterPriceGreaterThan = (warehouse: Phone[], price: number): Phone[] => {
  let phones: Phone[] = [];
  warehouse.forEach((phone) => {
    if (phone.price >= price) phones.push(phone);
  });
  return phones;
};

const findPhoneByName = (
  warehouse: Phone[],
  name: string
): Phone | undefined => {
  warehouse.forEach((phone) => {
    if (phone.name === name) return phone;
  });
  return undefined;
};

const calcAverageCost = (warehouse: Phone[]): number | undefined => {
  if (warehouse.length === 0) return undefined;
  let totalPrice: number = 0;
  warehouse.forEach((phone) => {
    totalPrice = totalPrice + phone.price;
  });
  return totalPrice / warehouse.length;
};

const doWeHaveA5GPhone = (warehouse: Phone[]): boolean => {
  warehouse.forEach((phone) => {
    if (phone.fiveG === true) return true;
  });
  return false;
};

const phoneFlashSale = (
  warehouse: Phone[],
  discount_percentage: number
): Phone[] => {
  let salePhones: Phone[] = [];

  warehouse.forEach((phone) => {
    let new_phone: Phone = {
      name: phone.name,
      price: phone.price - (phone.price * discount_percentage) / 100,
      fiveG: phone.fiveG,
    };
    salePhones.push(new_phone);
  });

  return salePhones;
};

const phoneFlashSaleV2 = (
  warehouse: Phone[],
  specific_names: string[],
  discount_percentage: number
): Phone[] => {
  let salePhones: Phone[] = [];

  warehouse.forEach((phone) => {
    if (specific_names.includes(phone.name)) {
      let new_phone: Phone = {
        name: phone.name,
        price: phone.price - (phone.price * discount_percentage) / 100,
        fiveG: phone.fiveG,
      };
      salePhones.push(new_phone);
    }
  });

  return salePhones;
};
