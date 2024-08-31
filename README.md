# tratao
JavaScript library for tratao.com
# main
```js
async function main(){
    const {tratao} = require('./tratao');
    const exchange= new tratao();
    let req=await exchange.coin_history("7d","USD/BTC")
    console.log(req)
}
main()
```
