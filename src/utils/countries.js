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