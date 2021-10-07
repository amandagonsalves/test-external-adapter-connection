import { expose } from '@chainlink/ea-bootstrap';
import { execute, makeExecute } from './adapter';
import { makeConfig } from './config';

const NAME = 'GAUGE_COMPOSITE';
const { server } = expose(NAME, execute);

// export = { NAME, makeExecute, makeConfig, ...expose(makeExecute()) }

export { NAME, server };