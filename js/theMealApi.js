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
                <div onclick="mealDetail('${meals.strMeal}')" class="single_meal p-3 text-center rounded shadow border child_height">

                    <img src="${meals.strMealThumb}">
                    <h4>${meals.strMeal}</h4>
                    
                </div>
            `
            mealDiv.innerHTML = mealInfo;
            mealsDiv.appendChild(mealDiv);
        })
        
    }

})

const mealDetail = list =>{
    const ingredientDiv = document.getElementById('meal_information');
    ingredientDiv.innerHTML = `       
        <h4>Ingredient List will show here</h4>
    `
}