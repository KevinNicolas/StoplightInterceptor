import type { IConfig } from "@/types/config"
import type { IServiceInfo } from "@/types/services-info.type"
import { Storages } from "@/types/storages"

function _getStorage() {
  return chrome.storage.sync;
}

// NOTE - Configurations

export async function getStorageConfig(): Promise<IConfig> {
  const configurations = await _getStorage().get(Storages.config) as { [Storages.config]: IConfig }
  return configurations[Storages.config];
}

export async function setStorageConfig(newConfig: Partial<IConfig>) {
  const actualConfig = await getStorageConfig();
  const updatedConfig: IConfig = Object.assign(actualConfig, newConfig);
  await _getStorage().set({ [Storages.config]: updatedConfig})
}

// NOTE - Services information
export async function getStorageServicesInfo(): Promise<IServiceInfo[]> {
  const servicesInfo = await _getStorage().get(Storages.servicesInfo) as { [Storages.servicesInfo]: IServiceInfo[] };
  return servicesInfo[Storages.servicesInfo];
}

