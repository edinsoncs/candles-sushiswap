function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=/*#__PURE__*/e(require("node-fetch"));getBinanceDefault(),exports.getSushiCandles=function(e,n,u){return t.default("https://www.dexi.tools/candles/sushi/"+e+"/"+n+"?frame="+u).then(function(e){return e.json()}).then(function(e){return e})};
//# sourceMappingURL=index.cjs.map
