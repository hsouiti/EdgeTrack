
//@ts-ignore
import { ConnectedDeviceType, HostType } from '@/types';
//@ts-ignore
import NetworkScanner from 'network-scanner-js';
//@ts-ignore
import arp from 'node-arp';



const netScan = new NetworkScanner()



// Function to resolve MAC address
const getMacAddress = (ip: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    arp.getMAC(ip, (err: any, mac: string) => {
      if (err || !mac) resolve('MAC not found');
      else resolve(mac);
    });
  });
};




export const scanNetwork  = async (): Promise<ConnectedDeviceType[]> => {
  const connectedDevices: ConnectedDeviceType[] = [];
  const hosts:ConnectedDeviceType[] = [];
  console.log('Starting network scan...');
  // Return a promise to ensure we wait for the scan to finish
  await new Promise<void>((resolve, reject) => {
    netScan.ipScan('192.168.1.0-50', (host: ConnectedDeviceType) => {
      if (host) {
        hosts.push(host); // Collect each host
      }
    });

    // Check if netScan has an "end" or similar event to signal completion
    if (typeof netScan.on === 'function') {
      netScan.on('end', () => {
        resolve(); // Resolve the promise when the scan completes
      });
    } else {
      // Fallback timeout as a failsafe
      setTimeout(resolve, 10000); 
    }
  });

  // Process each host and fetch its MAC address
  for (const host of hosts) {
    if (host.status === 'online') {
      const mac = await getMacAddress(host.ip_address);
      connectedDevices.push({ ...host, mac_address: mac });
    }
  }
  console.log('Device collection completed.');
  return connectedDevices;
};


