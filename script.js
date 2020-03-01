// Here we will be fetch two APIs endpoint to get exchange rate based on a currency and the country list

//APIs are given below

//
//

// We will be using axios for fetching data over the internet

const axios = require("axios");

// Function that determines exchange rate of base currency

async function exchangeCurrency(fromCurrency, toCurrency) {
  //ADDITIONAL INFORMATION FOR MAKING REQUEST FOR DATA
  const ACCESS_KEYS = "0926f6c01d4152d24429313bb07f0a72";
  const API_ENDPOINT = "http://api.currencylayer.com/";
  const RESPONSE_TYPE = "live";
  const FORMAT = 1;

  try {
    const response = await axios.get(
      API_ENDPOINT +
        RESPONSE_TYPE +
        "?" +
        "access_key=" +
        ACCESS_KEYS +
        "&" +
        "currencies=" +
        fromCurrency +
        "," +
        toCurrency +
        "&" +
        "format=" +
        FORMAT
    );
  } catch (err) {
    console.log(err);
  }

  console.log(response.data);
}

exchangeCurrency("USD", "BDT");
