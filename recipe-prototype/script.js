function suggestRecipe() {
    const input = document.getElementById("ingredientsInput").value;
    if (input.trim() === "") {
      alert("Please enter some ingredients.");
      return;
    }
  
    // Placeholder functionality
    document.getElementById("recipeDisplay").style.display = "block";
    alert("Suggested: Pancakes with your ingredients!");
  }
  
  function saveRecipe() {
    const saved = JSON.parse(localStorage.getItem("recipes")) || [];
    saved.push("Pancakes");
    localStorage.setItem("recipes", JSON.stringify(saved));
    alert("Recipe saved to your library!");
  }
  