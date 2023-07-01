# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode
- Pagination

### Screenshot

#### Homepage
**Desktop:**

- Light mode: 

  ![image](https://github.com/ThuTrang5631/REST-Countries-API/assets/70875419/680d8b0b-c14e-43d2-b6ea-8a765b49d9ae)

- Dark mode: 

  ![image](https://github.com/ThuTrang5631/REST-Countries-API/assets/70875419/fd5aa2a3-e9fd-4032-9f0c-f3becf4ac0d5)

**Mobile**

- Light mode:

  ![image](https://github.com/ThuTrang5631/REST-Countries-API/assets/70875419/8e290545-41cc-46f5-9a04-3cd251650048)

- Dark mode:

  ![image](https://github.com/ThuTrang5631/REST-Countries-API/assets/70875419/05d97f3d-b33a-45a9-b41d-5521a76e6dee)

2. Detail Page
**Desktop:**

- Light mode:

  ![image](https://github.com/ThuTrang5631/REST-Countries-API/assets/70875419/b7a0ff94-841c-467d-b511-9d7cdd5e30cf)

- Dark mode:

  ![image](https://github.com/ThuTrang5631/REST-Countries-API/assets/70875419/5da85fc2-22f7-431f-817a-11bee58241ff)

**Mobile:**

- Light mode:
  
  ![image](https://github.com/ThuTrang5631/REST-Countries-API/assets/70875419/3311328c-d449-44a3-a746-ffe8ac053629)

- Dark mode:
  
  ![image](https://github.com/ThuTrang5631/REST-Countries-API/assets/70875419/f0c286d2-fc4b-4ef2-a773-b7119994af65)


### Links

- Solution URL: https://github.com/ThuTrang5631/REST-Countries-API.git
- Live Site URL: https://frontendmentor-rest-countries-phi.vercel.app/

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- SCSS
- React Router dom, Axios


### What I learned
1. Use `Axios` to call API

```const getAllCountries = () => {
    axios.get(getAllCountriesURL).then((res) => {
      const data = res.data;
      setDataCountry(data);
    });
  };
```
2. Use `react-router-dom`, use `useParams` to get params to call api

```
<BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="detail/:name" element={<CountryDetail />} />
      </Routes>
    </BrowserRouter>
```
`detail/:name` => name is params

3. To back previous page
```
import { useNavigate, useParams } from "react-router-dom";
const navigate = useNavigate();
<button
          onClick={() => navigate(-1)}
          className="countrydetail-btn"
          style={
            darkMode === "dark"
              ? styleBtnBack.btnBackDark
              : styleBtnBack.btnBackLight
          }
        >
          <i className="fa fa-long-arrow-left"></i>Back
</button>
```
And so more....

### Continued development

Pagination for homepage, optimize code.

## Author

- Frontend Mentor - [@thutrang](https://www.frontendmentor.io/profile/ThuTrang5631)
- LinkedIn - [@thutrang](https://www.linkedin.com/in/thutrang5631/)

