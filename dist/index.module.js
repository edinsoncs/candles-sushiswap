import n from"node-fetch";var t=function(t,e,r){return n("https://www.dexi.tools/candles/sushi/"+t+"/"+e+"?frame="+r).then(function(n){return n.json()}).then(function(n){return n})};getBinanceDefault();export{t as getSushiCandles};
//# sourceMappingURL=index.module.js.map
