import './Countries.css';

const Countries = () => {
  const showButton = (e) => {
    const button = e.target.children[1]
    console.log(button)
    button.style.position = 'relative'
    button.style.bottom = '-10px'
    button.style.opacity = 1
    button.style.pointerEvents = 'auto'
  }

  const hideButton = (e) => {
    const button = e.target.children[1]
    console.log('hi')
    button.style.position = 'absolute'
    button.style.bottom = '-50px'
    button.style.opacity = 0
    button.style.pointerEvents = 'none'
    button.style.transition = '.6s ease-in'
  }

  const handleClick = (a, b) => {
    console.log('gere')
    console.log(a.indexOf(b))
    alert(window.navigator/*.userAgentData.mobile*/)
  }

  const country = ['Egypt', 'Morroco', 'Mexico', 'Switzerland', 'Norway', 'Italy', 'Spain', 'United States', 'Turkey', 'Japan', 'UAE',
    'Thailand', 'Germany', 'England', 'France', 'Greece', 'South Korea', 'China', 'India', 'Saudi Arabia']
  return (
    <section className="countries">
    {country.map((item, index) => (
      <div key={index} onMouseEnter={showButton} onMouseLeave={hideButton} className={`country country-${index}`}>
        <h2>{item}</h2>
        <button onClick={() => handleClick(country, item)} className="moreCountry">See More</button>
      </div>
      ))}
    </section>
  )
}

export default Countries;
