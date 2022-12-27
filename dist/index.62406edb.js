const recipeContainer = document.querySelector(".recipe");
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
//  https://forkify-api.herokuapp.com/v2
///////////////////////////////////////
const showRecipe = async function() {
    try {
        const response = await fetch(// 'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886'
        "https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bcc7e");
        const data = await response.json();
        if (!response.ok) throw new Error(`${data.message} ${response.status}`);
        console.log(response, data);
        //we use destructuring because otherwise we would need to use recipe on both sides
        let { recipe  } = data.data;
        recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.source_url,
            image: recipe.image_url,
            servings: recipe.servings,
            cookingTime: recipe.cooking_time,
            ingredients: recipe.ingredients
        };
        console.log(recipe);
    } catch (err) {
        console.log(err);
    }
};
showRecipe();

//# sourceMappingURL=index.62406edb.js.map
