import CountriesList from "../components/Countries";
import Menu from '../components/Menu';

const Countries = () => {
  return (
    <section className="countriesView page">
      <Menu />
      <CountriesList />
    </section>
  )
}

export default Countries
