import { getCurrencyData } from './derivativesData';

export const calculate = async (validated: any, data: any, context: any) => {
  console.log('validated data', validated.data);
  const result = await getCurrencyData({ params: { validated } });

  console.log('result calculate', result, data, context);

  return result;
} 
