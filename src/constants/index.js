let OCTOBLU_URL = 'https://app.octoblu.com'
console.log('CONSTANTS:OCTOBLU_URL', OCTOBLU_URL);
console.log('CONSTANTS:process.env.NODE_ENV', process.env.NODE_ENV);
if (process.env.NODE_ENV == 'development') {
  OCTOBLU_URL = 'http://localhost:8080'
}

console.log('CONSTANTS:OCTOBLU_URL', OCTOBLU_URL);
const constants = {
  OCTOBLU_URL
}

console.log('CONSTANTS:constants', constants);

export default constants
