export const DEFAULT_NETWORK = 'ETHEREUM';

import { Requester } from '@chainlink/external-adapter';

export const makeConfig = (prefix?: string) => {
  const config = Requester.getDefaultConfig(prefix);

  config.api.baseURL = config.api.baseURL || 'http://localhost:18081';

  return config;
}