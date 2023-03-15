import Destination from './Destination';

const Cities = () => {
  const cities = 13
  return (
    <section className="cities">
      <h1>Detinations to Love</h1>
      {cities.map(() => {
        <Destination />
      })}
    </section>
  )
}

export default Cities
