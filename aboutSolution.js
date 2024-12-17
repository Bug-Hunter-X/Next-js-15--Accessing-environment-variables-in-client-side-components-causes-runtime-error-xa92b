```javascript
// pages/aboutSolution.js
import { useRouter } from 'next/router';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export default function About() {
  // Access environment variables through the next/config module
  console.log(publicRuntimeConfig.MY_VARIABLE);
  return (
    <div>
      <h1>About Page</h1>
      <p>Environment variable: {publicRuntimeConfig.MY_VARIABLE}</p>
    </div>
  );
}
```
```javascript
// next.config.js
module.exports = {
  publicRuntimeConfig: {
    MY_VARIABLE: process.env.MY_VARIABLE,
  },
};
```