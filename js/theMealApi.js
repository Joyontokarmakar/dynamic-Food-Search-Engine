document.getElementById('submit').addEventListener("click", function(){
    const firstChar = mealInput.value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstChar.charAt(0)}`)
    .then(res => res.json())
    .then(data => displayMeal(data))

    const displayMeal = mealData => {

        console.log(mealData.meals)

        const mealsDiv = document.getElementById('allMeals');
        const allMeal = mealData.meals;
        mealsDiv.innerHTML = " ";

        allMeal.forEach(meals => {

            const mealDiv = document.createElement('div');
            mealDiv.className = 'col-4 my-2';

            if(allMeal.length > 1){
                const mealInfo = `
                    <div onclick="mealDetail('${meals.idMeal}')" class="single_meal meal_hover p-3 text-center rounded shadow border child_height">
                        <img src="${meals.strMealThumb}" class="border border-1">
                        <h4>${meals.strMeal}</h4>
                    </div>
                `
                mealDiv.innerHTML = mealInfo;
                mealsDiv.appendChild(mealDiv);
                
                
            }

            else if(!allMeal){
                const mealInfo = `
                    <div class="text-danger text-center">
                        <h4>Sorry, We Don't find any result. Try Again!!</h4>
                    </div>
                `

                mealDiv.innerHTML = mealInfo;
                mealsDiv.appendChild(mealDiv);
            }
            
        })
        
    }

})

function mealDetail(mealName) {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealName}`)
    .then(res => res.json())
    .then(data => {
        const details = data.meals;
        console.log(details);

        const mealDetails = document.getElementById('meal_information');
        mealDetails.className = 'single_meal';
        details.forEach(eachMeal => {
        mealDetails.innerHTML = `
            <div class="text-center">
                <img  src="${eachMeal.strMealThumb}" alt="food image">
                <h4>${eachMeal.strMeal}</h4>
            </div>
            <hr>  
            <p><b>Ingredients :</b></p>
            <p><span>${eachMeal.strMeasure1}</span> <span>${eachMeal.strIngredient1}</span> </p>
            <p><span ${eachMeal.strMeasure2}</span> <span>${eachMeal.strIngredient2}</span> </p>
            <p><span>${eachMeal.strMeasure3}</span> <span>${eachMeal.strIngredient3}</span> </p>
            <p><span>${eachMeal.strMeasure4}</span> <span>${eachMeal.strIngredient4}</span> </p>
            <p><span>${eachMeal.strMeasure5}</span> <span>${eachMeal.strIngredient5}</span> </p>
            <p><span>${eachMeal.strMeasure6}</span> <span>${eachMeal.strIngredient6}</span> </p>
            <p><span>${eachMeal.strMeasure7}</span> <span>${eachMeal.strIngredient7}</span> </p>
            <p><span>${eachMeal.strMeasure8}</span> <span>${eachMeal.strIngredient8}</span> </p>
            <p><span>${eachMeal.strMeasure9}</span> <span>${eachMeal.strIngredient9}</span> </p>
            <p><span>${eachMeal.strMeasure10}</span> <span>${eachMeal.strIngredient10}</span> </p>
            <p><span>${eachMeal.strMeasure11}</span> <span>${eachMeal.strIngredient11}</span> </p>
        `
        })
    })
}