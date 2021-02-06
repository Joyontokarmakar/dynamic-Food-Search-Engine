document.getElementById('submit').addEventListener("click", function(){
    const firstChar = mealInput.value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstChar.charAt(0)}`)
    .then(res => res.json())
    .then(data => displayMeal(data))

    const displayMeal = mealData => {

        console.log(mealData.meals)

        const mealsDiv = document.getElementById('allMeals');
        const allMeal = mealData.meals
        allMeal.forEach(meals => {
            const mealDiv = document.createElement('div');
            mealDiv.className = 'col-4 my-2';
    
            const mealInfo = `
                <a onclick="mealDetail('${meals.strMeal}')" href="" class="pt-2">
                    <div class="single_meal p-3 text-center rounded shadow border child_height">

                        <img src="${meals.strMealThumb}">
                        <h4>${meals.strMeal}</h4>
                        
                    </div>
                </a>
            `
            mealDiv.innerHTML = mealInfo;
            mealsDiv.appendChild(mealDiv);
        })
    }

})

    // const countryDetail = name =>{
    //     const url = `https://restcountries.eu/rest/v2/name/${name}`
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(data => countryInfo(data[0]))
    // }
    
    // const countryInfo = country => {
    //     console.log(country)
    //     const countryDiv = document.getElementById('country_information');
    //     countryDiv.innerHTML = `
    //         <img src="${country.flag}" class="border shadow-1">
    //         <h4 class="text-center">${country.name}</h4>
    //         <hr>
    
    //         <p><b>Native Name:</b> ${country.nativeName}</p>
    //         <p><b>Capital:</b> ${country.capital}</p>
    //         <p><b>Region:</b> ${country.region}</p>
    //         <p><b>Sub-Region:</b> ${country.subregion}</p>
    //         <p><b>Area:</b> ${country.area}</p>
    //         <p><b>Population:</b> ${country.population}</p>
    //         <p><b>Timezones:</b> ${country.timezones[0]}</p>
    //         <p><b>Currency Name:</b> ${country.currencies[0].name}</p>
    //         <p><b>Currency Code:</b> ${country.currencies[0].code}</p>
    //         <p><b>Currency Symbol:</b> ${country.currencies[0].symbol}</p>
    
    //     `
    // }