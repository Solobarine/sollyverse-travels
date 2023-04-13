import CountryComponent from '../components/Country'
import Menu from '../components/Menu'

const Country = () => {
  return (
    <section className="countryView page shrinkMenu">
      <Menu />
      <CountryComponent />
    </section>
  )
}

export default Country
