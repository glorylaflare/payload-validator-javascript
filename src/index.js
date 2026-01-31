import { validate } from './validators/index.js';
import { rules } from './rules/payload.rules.js';
import payload from './payloads/payload.json';

const result = validate(payload, rules);

console.log(JSON.stringify(result, null, 2));
