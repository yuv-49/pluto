# Example

```shell
$ npm install pluto-planet  --save
```

```javascript
const {plutoPlanet} = require('pluto-planet'); 
// ES2015 modules
import {plutoPlanet} from 'pluto-planet';

const sensitiveWords = 
    plutoPlanet(
        'the new macbook pro will have a touchbar.', 
        ['pro', 'touchbar']
    );

console.log(sensitiveWords);
// the new macbook ***** will have a ****.

```