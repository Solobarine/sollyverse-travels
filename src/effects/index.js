// import Joi from 'joi'
// const Joi = {}
export const toggleMenu = (button, container, links) => {
  button.current.classList.toggle('close')
  if (button.current.classList.contains('close')) {
    container.forEach(element => element.classList.toggle('shrinkMenu'))
    links.forEach(link=> {
      if (link.classList.contains('nav-links')) {
        link.children[0].children[1].style.scale = 1
        link.style.width = 'auto'
      }
      if (link.classList.contains('menu_link')) {
        link.children[1].style.scale = 1
        link.style.width = 'auto'
      }
    });
  } else {
    container.forEach(element => element.classList.toggle('shrinkMenu'))
    links.forEach(link => {
      if (link.classList.contains('nav-links')) {
        link.children[0].children[1].style.scale = 0
        link.style.width = '30px'
      }
      if (link.classList.contains('menu_link')) {
        link.children[1].style.scale = 0
        link.style.width = '30px'
      }
    })
  }
}


  //Toggle visibility of each section
export const handleClick = (e, buttonArray, sectionArray) => {
  buttonArray.forEach((button, index) => {
    if (e.target !== button.current) {
      button.current.classList.remove('showAdminDestination')
      button.current.style.backgroundColor = '#c8e6c8'
      button.current.style.color = '#000'
      sectionArray[index].current.classList.remove('showDestination')
      sectionArray[index].current.classList.add('hideDestination')
    } else {
      button.current.classList.add('showAdminDestination')
      button.current.style.backgroundColor = '#20b970'
      button.current.style.color = '#fff'
      sectionArray[index].current.classList.add('showDestination')
      sectionArray[index].current.classList.remove('hideDestination')
    }
  })
}

export const chooseContinent = (shortName) => {
  switch (shortName) {
    case 'AF':
      return 'Africa'
    case 'AN':
      return 'Antartica'
    case 'AS':
      return 'Asia'
    case 'EU':
      return 'Europe'
    case 'NA':
      return 'North America'
    case 'OC':
      return 'Oceania'
    case 'SA':
      return 'South America'
    default:
      return 'Not a Country' 
  }
}


export const handleChange = (e, stateFunction) => {
  const { name, value } = e.target
  stateFunction(prev => {
    return {...prev, [name]: value }
  }) 
}


export const toggleLike = (e) => {
  if (e.target.classList.contains('fa-regular')) {
    e.target.classList.remove('fa-regular')
    e.target.classList.add('fa-solid')
  } else if (e.target.classList.contains('fa-solid')) {
    e.target.classList.remove('fa-solid')
    e.target.classList.add('fa-regular')
  }
}


export const clickStar = (e, stars) => {
  const starArray = Array.from(stars.current.children)
  const i = starArray.indexOf(e.target)
  starArray.forEach((star, index) => {
    if (index <= i) {
      if (star.classList.contains('fa-solid')) {
        return
      } else {
        star.classList.toggle('fa-regular')
        star.classList.toggle('fa-solid')
      }
    } else {
      if (star.classList.contains('fa-regular')) {
        return
      } else {
        star.classList.toggle('fa-regular')
        star.classList.toggle('fa-solid')
      }
    }
  })
}

export const postForm = (form, images) => {
  form.images = images
  console.log(form)
}

// Form Validations
// export const validateCreateCity = Joi.Object({

// })

// export const validateUpdateCity = Joi.Object({

// })

// export const validateCreateCountry = Joi.Object({

// })

// export const validateUpdateCountry = Joi.Object({
  
// })

export const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  console.log(file)
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
});