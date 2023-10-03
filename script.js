const recipes = [
  {
    name: "Veggie Delight",
    imageSrc: "https://source.unsplash.com/random?veggies",
    time: "30 min",
    type: "veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Chicken Grill",
    imageSrc: "https://source.unsplash.com/random?chicken",
    time: "45 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Cheese Pizza",
    imageSrc: "https://source.unsplash.com/random?pizza",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.1,
  },
  {
    name: "Steak",
    imageSrc: "https://source.unsplash.com/random?steak",
    time: "60 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.7,
  },
  {
    name: "Grilled Salmon",
    imageSrc: "https://source.unsplash.com/random?salmon",
    time: "50 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Tomato Pasta",
    imageSrc: "https://source.unsplash.com/random?pasta",
    time: "35 min",
    type: "veg",
    isLiked: false,
    rating: 4.0,
  },
  {
    name: "Vegan Salad",
    imageSrc: "https://source.unsplash.com/random?salad",
    time: "20 min",
    type: "veg",
    isLiked: false,
    rating: 3.9,
  },
  {
    name: "Fried Chicken",
    imageSrc: "https://source.unsplash.com/random?friedChicken",
    time: "55 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Mushroom Risotto",
    imageSrc: "https://source.unsplash.com/random?risotto",
    time: "45 min",
    type: "veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Burger",
    imageSrc: "https://source.unsplash.com/random?burger",
    time: "30 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Paneer Tikka",
    imageSrc: "https://source.unsplash.com/random?paneerTikka",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.4,
  },
  {
    name: "BBQ Ribs",
    imageSrc: "https://source.unsplash.com/random?ribs",
    time: "70 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Caesar Salad",
    imageSrc: "https://source.unsplash.com/random?caesarSalad",
    time: "25 min",
    type: "veg",
    isLiked: false,
    rating: 3.8,
  },
  {
    name: "Fish Tacos",
    imageSrc: "https://source.unsplash.com/random?fishTacos",
    time: "35 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Chocolate Cake",
    imageSrc: "https://source.unsplash.com/random?chocolateCake",
    time: "90 min",
    type: "veg",
    isLiked: false,
    rating: 4.9,
  },
];

const recipeContainer = document.getElementById("recipeContainer");
const searchInput = document.getElementById("searchInput");
const showAllBtn = document.getElementById("showAllBtn");
const showVegBtn = document.getElementById("showVegBtn");
const showNonVegBtn = document.getElementById("showNonVegBtn");
const ratingAboveRadio = document.getElementById("ratingAbove");
const ratingBelowRadio = document.getElementById("ratingBelow");

// fetch the data and dynamically generate the recipe cards.
function generateRecipeCard(recipe) {
  const card = document.createElement("div");
  card.classList.add("recipe-card");

  const image = document.createElement("img");
  image.src = recipe.imageSrc;
  card.appendChild(image);

  const name = document.createElement("h3");
  name.textContent = recipe.name;
  card.appendChild(name);

  const type = document.createElement("p");
  type.textContent = `${recipe.type}`;
  card.appendChild(type);

  const time = document.createElement("p");
  time.textContent = `${recipe.time}`;
  card.appendChild(time);

  const rating = document.createElement("p");
  rating.textContent = `⭐ ${recipe.rating}`;
  card.appendChild(rating);

  const likeButton = document.createElement("span");
  likeButton.classList.add("like-button");
  likeButton.addEventListener("click", () => {
    recipe.isLiked = !recipe.isLiked;
    likeButton.textContent = recipe.isLiked ? "❤️" : "🖤"; // Adjusted content
  });

  // Initial content based on whether the recipe is liked or not
  likeButton.textContent = recipe.isLiked ? "❤️" : "🖤";

  card.appendChild(likeButton);

  recipeContainer.appendChild(card);
}

function filterRecipes(searchQuery) {
  // Clear existing recipes
  recipeContainer.innerHTML = "";

  // Filter recipes based on the search query
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Generate cards for filtered recipes
  filteredRecipes.forEach((recipe) => {
    generateRecipeCard(recipe);
  });
}

// Listen for input in the search bar
searchInput.addEventListener("input", (event) => {
  const searchQuery = event.target.value.trim();
  filterRecipes(searchQuery);
});

// functionality to toggle recipe types (veg, non-veg, all).
function toggleRecipeDisplay(type) {
  // Clear existing recipes
  recipeContainer.innerHTML = "";

  // Filter recipes based on the selected type
  let filteredRecipes;
  if (type === "all") {
    filteredRecipes = recipes;
  } else {
    filteredRecipes = recipes.filter((recipe) => recipe.type === type);
  }

  // Generate cards for filtered recipes
  filteredRecipes.forEach((recipe) => {
    generateRecipeCard(recipe);
  });
}
// Event listeners for toggle buttons
showAllBtn.addEventListener("click", () => toggleRecipeDisplay("all"));
showVegBtn.addEventListener("click", () => toggleRecipeDisplay("veg"));
showNonVegBtn.addEventListener("click", () => toggleRecipeDisplay("non-veg"));

function filterRecipesByRating() {
  // Clear existing recipes
  recipeContainer.innerHTML = "";

  let filteredRecipes;
  if (ratingAboveRadio.checked) {
    filteredRecipes = recipes.filter((recipe) => recipe.rating > 4.0);
  } else if (ratingBelowRadio.checked) {
    filteredRecipes = recipes.filter((recipe) => recipe.rating < 4.0);
  } else {
    filteredRecipes = recipes;
  }

  // Generate cards for filtered recipes
  filteredRecipes.forEach((recipe) => {
    generateRecipeCard(recipe);
  });
}

// Event listeners for radio buttons
ratingAboveRadio.addEventListener("change", filterRecipesByRating);
ratingBelowRadio.addEventListener("change", filterRecipesByRating);

// Map over the recipes and generate cards for each recipe
recipes.forEach((recipe) => {
  generateRecipeCard(recipe);
});
