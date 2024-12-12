export interface ConnectedDeviceType  {
host: string,
  ip_address: string,
  status: string,
  res_avg: string,
  times: number[],
  packet_loss: string,
  log: string,
  mac_address:string 
}

export interface HostType {
     status: string; 
     ip_address: string; 
}