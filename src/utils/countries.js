export const getCountries = (pais) => {
    const countries = Object.keys(pais).map((key) => {
        return {
          name: pais[key].name,
          key: key,
          phone: pais[key].phone
        }
    })
    
    return countries.sort((a, b) => a.name < b.name ? -1 : 1)
}

export const getCountryIso = (countryName, countries) => (
  (typeof countryName === 'string' || countryName instanceof String)
  ? countries.map(country => {
    if (country.name ===countryName) {
      return country.iso2
    } else {
      return ''
    }
  })
  : ''
)

export const getCountryList = async() => { 
  const apiKey = 'UTdudzNza3k2c3pSekxYR3NEa2Q0d0VteVgwVXFhZlpEdFZvVmVnNA=='
  let requestOptions = {
    method: 'GET',
    headers: {
      "X-CSCAPI-KEY": apiKey,
      "Content-Type": "application/json"
    },
    //  redirect: 'follow'
  };

  try {
    const response = await fetch("https://api.countrystatecity.in/v1/countries", requestOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching country list:", error);
    return [];
  }
}

export const getStateByCountry = async (countryISO) => {
  const apiKey = 'UTdudzNza3k2c3pSekxYR3NEa2Q0d0VteVgwVXFhZlpEdFZvVmVnNA=='
var headers = new Headers();
headers.append("X-CSCAPI-KEY", apiKey);

var requestOptions = {
   method: 'GET',
   headers: headers,
   redirect: 'follow'
};

try {
    const response = await fetch(`https://api.countrystatecity.in/v1/countries/${countryISO}/states`, requestOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching country list:", error);
    return []
  }
}

export const getCitiesByStateAndCountry = async (countryISO, stateISO) => {
  const apiKey = 'UTdudzNza3k2c3pSekxYR3NEa2Q0d0VteVgwVXFhZlpEdFZvVmVnNA=='
const headers = new Headers();
headers.append("X-CSCAPI-KEY", apiKey);

const requestOptions = {
   method: 'GET',
   headers: headers,
   redirect: 'follow'
};

try {
  const response = await fetch(`https://api.countrystatecity.in/v1/countries/${countryISO}/states/${stateISO}/cities`, requestOptions);
  const data = await response.json();
  console.log(data);
  return data;
} catch (error) {
  console.error("Error fetching country list:", error);
  return []
}
}