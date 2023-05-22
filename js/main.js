const API_KEY = "SUA_CHAVE_API_AQUI";
const recipeListEl = document.getElementById("recipe-list")

function displayRecipes(recipes) {
    recipeListEl.innerHTML = "";
    recipes.forEach((recipe) => {
        const recipeItemEl = document.createElement("li");
        recipeItemEl
            .classList
            .add("recipe-item");
        recipeImageEl = document.createElement("img");
        recipeImageEl.src = recipe.image
        recipeImageEl.alt = "recipe image";

        recipeTitleEl = document.createElement("h2");
        recipeTitleEl.innerText = recipe.title;

        recipeIngredientsEl = document.createElement("p");
        recipeIngredientsEl.innerHTML = `
            <strong>Ingredients: </strong> ${recipe
            .extendedIngredients
            .map((ingredients) => ingredients.original)
            .join(", ")}
        `
        recipeLinkEl = document.createElement("a");
        recipeLinkEl.href = recipe.sourceUrl;
        recipeLinkEl.innerText = "View Recipe";

        recipeItemEl.appendChild(recipeImageEl);
        recipeItemEl.appendChild(recipeTitleEl);
        recipeItemEl.appendChild(recipeIngredientsEl);
        recipeItemEl.appendChild(recipeLinkEl);
        recipeListEl.appendChild(recipeItemEl);
    })
}
async function getRecipes() {
    const response = await fetch(
        `https://api.spoonacular.com/recipes/random?number=15&apiKey=${API_KEY}`
    )

    const data = await response.json();

    return data.recipes;

};

async function init() {
    const recipes = await getRecipes();
    displayRecipes(recipes);

};

init();
