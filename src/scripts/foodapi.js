// fetch("http://localhost:8088/food")
//     .then(foods => foods.json())
//     .then(parsedFoods => {
//         console.table(parsedFoods)
//     })

// fetch("http://localhost:8088/food")
//     .then(foods => foods.json())
//     .then(parsedFoods => {

//         parsedFoods.forEach(food => {
//             //Print foods to DOM
// document.querySelector(".foodList").innerHTML += `<div><h1>${food.name}</h1><p>${food.category}</p><p>${food.ethnicity}</p></div>`
//         })

//     })

fetch("http://localhost:8088/food")
    .then(response => response.json())
    .then(myParsedFoods => {
        myParsedFoods.forEach(food => {
            console.log(food.barcode) // Should have a `barcode` property

            // Now fetch the food from the Food API
            fetch(`https://world.openfoodfacts.org/api/v0/product/${food.barcode}.json`)
                .then(response => response.json())
                .then(productInfo => {
                    food.ingredients = productInfo.product.ingredients_text;
                    food.country = productInfo.product.countries_hierarchy[0];
                    food.fat = productInfo.product.nutriments.fat_serving;
                    food.sugar = productInfo.product.nutriments.sugars;


                    document.querySelector(".foodList").innerHTML += `<div><h1>${food.name}</h1><h3>Category</h3> <p>${food.category}</p><h3>Ethnicity</h3> <p>${food.ethnicity}</p><h3>Ingredients</h3><p>${food.ingredients}</p><h3>Country</h3> <p>${food.country}</p><h3>Fat</h3> <p>${food.fat}</p><h3>Sugar</h3> <p>${food.sugar}</div>`
  
                })
 
        })
    })