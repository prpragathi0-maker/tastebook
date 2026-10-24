const recipes = [
  {
    name: "Idli",
    tamil: "இட்லி",
    emoji: "🍚",
    category: "Breakfast",
    time: "20 minutes",
    ingredients: "Rice, urad dal, salt",
    description: "Soft and fluffy traditional idli."
  },
  {
    name: "Dosa",
    tamil: "தோசை",
    emoji: "🥞",
    category: "Breakfast",
    time: "15 minutes",
    ingredients: "Dosa batter, oil",
    description: "Crispy dosa served with chutney."
  },
  {
    name: "Sambar",
    tamil: "சாம்பார்",
    emoji: "🍲",
    category: "Lunch",
    time: "30 minutes",
    ingredients: "Dal, vegetables, tamarind",
    description: "Homemade South Indian sambar."
  },
  {
    name: "Lemon Rice",
    tamil: "எலுமிச்சை சாதம்",
    emoji: "🍋",
    category: "Lunch",
    time: "15 minutes",
    ingredients: "Rice, lemon, mustard, peanuts",
    description: "Fresh and flavourful lemon rice."
  },
  {
    name: "Pongal",
    tamil: "பொங்கல்",
    emoji: "🥣",
    category: "Breakfast",
    time: "25 minutes",
    ingredients: "Rice, moong dal, pepper, cumin",
    description: "Comforting traditional ven pongal."
  },
  {
    name: "Rasam",
    tamil: "ரசம்",
    emoji: "🥘",
    category: "Lunch",
    time: "20 minutes",
    ingredients: "Tomato, tamarind, pepper",
    description: "Homemade pepper rasam."
  }
];

const recipeList = document.getElementById("recipe-list");
const searchInput = document.getElementById("search");

function displayRecipes(items) {
  recipeList.innerHTML = "";

  if (items.length === 0) {
    recipeList.innerHTML =
      "<p>No recipes found. Try another search!</p>";
    return;
  }

  items.forEach((recipe) => {
    const card = document.createElement("article");
    card.className = "recipe-card";

    card.innerHTML = `
      <div class="recipe-image">${recipe.emoji}</div>
      <div class="recipe-content">
        <span class="recipe-tag">${recipe.category}</span>
        <h3>${recipe.name} · ${recipe.tamil}</h3>
        <p>${recipe.description}</p>
        <p><strong>⏱ Time:</strong> ${recipe.time}</p>
        <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
      </div>
    `;

    recipeList.appendChild(card);
  });
}

displayRecipes(recipes);

searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.toLowerCase().trim();

  const filtered = recipes.filter((recipe) => {
    return (
      recipe.name.toLowerCase().includes(keyword) ||
      recipe.tamil.includes(keyword) ||
      recipe.category.toLowerCase().includes(keyword) ||
      recipe.ingredients.toLowerCase().includes(keyword)
    );
  });

  displayRecipes(filtered);
});

// Cooking assistant
const chatForm = document.getElementById("chat-form");
const questionInput = document.getElementById("question");
const chatBox = document.getElementById("chat-box");

chatForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const question = questionInput.value.trim();
  if (!question) return;

  const userMessage = document.createElement("p");
  userMessage.className = "user";
  userMessage.textContent = question;
  chatBox.appendChild(userMessage);

  const botMessage = document.createElement("p");
  botMessage.className = "bot";
  botMessage.textContent =
    "Samayal assistant-ku backend connect pannina udane AI answer kidaikkum! Ippo ingredients vechu recipe search pannunga. 🍲";
  chatBox.appendChild(botMessage);

  questionInput.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
});
