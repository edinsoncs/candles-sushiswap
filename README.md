# Candles Sushiswap DEX FREE

![Dexi](https://i.ibb.co/ZBk2v0b/dexi.png)

![Sushi](https://i.ibb.co/b1xc9MN/swap.png)


With this module, you can retrieve JSON data regarding the trading pairs created on SushiSwap. It allows you to obtain OHLC (Open, High, Low, Close) candlestick data for intervals of 12 hours and any other timeframes you desire. This data will prove invaluable for creating charts and visualizations using libraries like TradingView and other similar resources.



## Installation
Install using npm:
```sh
npm install sushiswapcandles --save
```

## Usage
Require library
```javascript
import { getSushiCandles } from 'sushiswapcandles'
```

```javascript
    /**
     *  Parameters
     * A => token_main example ( mytoken address) or ( 0x6B3595068778DD592e39A122f4f5a5cF09C90fE2 )
     * B => token_pair example (WETH) or (ETH) or (USDT) ( 0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2 ) 
     * C => time => default 720
    */

   /**
     * 1440 => 24 hours => recommended
     * 720 => 12 hours => recommended
     * 120 => 2 hour => recommended
     * 60 => 1 hour => recommended
     * 15 => 15 minute
     * 5 => 5 minute
     * 1 => 1 minute
    */

```


```javascript
(async () => {
    const result = await getSushiCandles('0x6B3595068778DD592e39A122f4f5a5cF09C90fE2',
    '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', '720');
    console.log(result);
})();
```

[DEXI](https://www.dexi.tools)