import { Requester, Validator } from '@chainlink/external-adapter';
import { calculate } from './compositeAverage';
import { makeConfig } from './config';

const customParams = {
  source: ['source'],
  endpoint: false,
}

console.log('custom params', customParams)

export const execute = async (request: any, config: any) => {
  const validator = new Validator(request, customParams);

  console.log('validator', validator)
  
  if (validator.error) {
    console.log('error validator', validator)

    // throw validator.error;
  };

  const jobRunID = validator.validated.id;

  console.log('job run id', jobRunID)

  const result = await calculate(validator.validated, request, config);

  console.log('result calculate', result, config)
  
  const response = { data: { result }, status: 200 };

  return Requester.success(jobRunID, response);
}

// console.log('after execute', execute({ id: 0, data: { source: 'AWG' } }, {}))

export const makeExecute = (config?: any) => {
  return async (request) => execute(request, config || makeConfig())
}