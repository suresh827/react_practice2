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

addPhone(newyorkWarehouse, "oneplus7pro", 499, true);

console.log(newyorkWarehouse);

const deletePhoneByIndex = (warehouse: Phone[], index: number): void => {
  warehouse.splice(index, 1);
};

deletePhoneByIndex(newyorkWarehouse, 9);
console.log(newyorkWarehouse);

const filter5G = (warehouse: Phone[]): Phone[] => {
  let phones: Phone[] = [];
  warehouse.forEach((phone) => {
    if (phone.fiveG === true) phones.push(phone);
  });
  return phones;
};

console.log(filter5G(detroitWarehouse));

const filterPriceLessThan = (warehouse: Phone[], price: number): Phone[] => {
  let phones: Phone[] = [];
  warehouse.forEach((phone) => {
    if (phone.price <= price) phones.push(phone);
  });
  return phones;
};

console.log(filterPriceLessThan(newyorkWarehouse, 500));

const filterPriceGreaterThan = (warehouse: Phone[], price: number): Phone[] => {
  let phones: Phone[] = [];
  warehouse.forEach((phone) => {
    if (phone.price >= price) phones.push(phone);
  });
  return phones;
};

console.log(filterPriceGreaterThan(newyorkWarehouse, 500));

const findPhoneByName = (
  warehouse: Phone[],
  name: string
): Phone | undefined => {
  //  warehouse.forEach((phone) => {
  //    if (name === phone.name) {
  //      return phone;
  //    }
  //  });
  return warehouse.find((phone) => phone.name === name);
};

console.log(findPhoneByName(chicagoWarehouse, "Galaxy S10"));
console.log(findPhoneByName(newyorkWarehouse, "Pixel 5"));

const calcAverageCost = (warehouse: Phone[]): number | undefined => {
  if (warehouse.length === 0) return undefined;
  let totalPrice: number = 0;
  warehouse.forEach((phone) => {
    totalPrice = totalPrice + phone.price;
  });
  return totalPrice / warehouse.length;
};

console.log(calcAverageCost(newyorkWarehouse));

const doWeHaveA5GPhone = (warehouse: Phone[]): boolean => {
  let fiveG_flag: boolean = false;
  warehouse.forEach((phone) => {
    if (phone.fiveG === true) fiveG_flag = true;
  });
  return fiveG_flag;
};

console.log(doWeHaveA5GPhone(newyorkWarehouse));

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

console.log(phoneFlashSale(newyorkWarehouse, 20));

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

console.log(phoneFlashSaleV2(newyorkWarehouse, ["Pixel 4a", "Pixel 5"], 10));
