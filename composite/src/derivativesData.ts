import { Requester } from '@chainlink/external-adapter';
import { API_KEY } from './constants';

const EXCHANGE_URL = `https://api.currencylayer.com/live?access_key=${API_KEY}`;

export const getCurrencyData = async ({ params }) => {
  const config = {
    url: EXCHANGE_URL,
    params: params.validated.data,
  }

  console.log('config get currency dat', config, params)

  const response = await Requester.request(config);
  const path = ['quotes'];

  console.log('response currency data', response);

  return 'response.data';
}
