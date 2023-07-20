function updateDrinkCount() {
    if (localStorage.recipesAdded) {
        const drinksMixed = localStorage.recipesAdded;
        document.querySelector("#made").innerHTML = `You have added <strong>${drinksMixed}</strong> recipes.`;
    }
    else {
        document.querySelector("#made").innerHTML = "<strong>You</strong> haven't added any recipes yet!";
    }
}
updateDrinkCount();
