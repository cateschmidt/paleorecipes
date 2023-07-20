function updateDrinkCount() {
    if (localStorage.drinksMixed) {
        const drinksMixed = localStorage.drinksMixed;
        document.querySelector("#made").innerHTML = `You have added <strong>${drinksMixed}</strong> recipes.`;
    }
    else {
        document.querySelector("#made").innerHTML = "<strong>You</strong> haven't added any recipes yet!";
    }
}
updateDrinkCount();
