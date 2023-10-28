//DEXI 
//DEV ECS
import fetch from 'node-fetch';


//get token data
export const getSushiCandles = (primary_address, second_address, time) => { 


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

    const api_website_pro = 'https://www.dexi.tools/candles/sushi/'+primary_address+'/'+second_address+'?frame='+time;

    return fetch(api_website_pro)
        .then(response => response.json())
        .then((data) => {
            return data;
        });
}

getBinanceDefault();