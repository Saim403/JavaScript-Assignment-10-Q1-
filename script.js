
        // Create an array of fruits
        let fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

        // Access the unordered list element
        let fruitsList = document.getElementById("fruitsList");

        // Loop through the fruits array and add each fruit to the unordered list
        fruits.forEach(function(fruit) {
            // Create list item element
            let listItem = document.createElement("li");
            // Set text content of list item to fruit name
            listItem.textContent = fruit;
            // Append list item to the unordered list
            fruitsList.appendChild(listItem);
        });
