export class Warehouse {
  wareHouseName: string;
  code: number;
  address: string;
constructor() {}
}

export class  subWarehouse {
  wareHouseName: string;
  code: number;
  address: string;
  parent: string;
  constructor() {}
}
