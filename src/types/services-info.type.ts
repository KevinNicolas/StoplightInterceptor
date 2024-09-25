interface IExample {
  code: number;
  name: string;
}

export interface IServiceInfo {
  serviceId: number;
  endpoint: string;
  examples: IExample[];
}