
//@ts-ignore
import NetworkScanner from 'network-scanner-js';
//@ts-ignore
import arp from 'node-arp';


const netScan = new NetworkScanner()



// Function to resolve MAC address
const getMacAddress = (ip: string) => {
  return new Promise((resolve, reject) => {
    arp.getMAC(ip, (err: any, mac: unknown) => {
      if (err || !mac) resolve('MAC not found');
      else resolve(mac);
    });
  });
};



// Function to scan the network and include MAC addresses
const getAllConnectedDevices = async () => {
  netScan.ipScan('192.168.1.0-254', async (host: { status: string; ip_address: string; }) => {
    if (host.status === 'online') {
      const mac = await getMacAddress(host.ip_address);
      console.log({
        ...host,
        mac_address: mac,
      });
    }
  });
};

getAllConnectedDevices();