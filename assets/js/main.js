window.addEventListener('load', (event) => {
    searchMenu('');
});

document.getElementById('menuSearch').addEventListener('keyup', function (event) {
    // Access the input value using event.target.value
    let inputValue = event.target.value;

    searchMenu(inputValue);
});


function searchMenu(inputValue) {
    let menu = document.getElementById('menu')
    let searchResults = document.getElementById('searchResults')

    if (!inputValue) {
        if (menu) {
            // Set display property to 'none' to hide the div
            menu.style.display = 'block';
        }

        if (searchResults) {
            // Set display property to 'none' to hide the div
            searchResults.style.display = 'none';
        }
    } else {
        if (menu) {
            // Set display property to 'none' to hide the div
            menu.style.display = 'none';
        }

        if (searchResults) {
            inputValue = inputValue.toLowerCase();

            menuSections.forEach(function (section) {
                section.dishes.forEach(function (dish) {
                    let divDish = document.getElementById(dish.id)
                    if (dish.name.toLowerCase().includes(inputValue) || dish.description.toLowerCase().includes(inputValue) || dish.price.toLowerCase().includes(inputValue)) {
                        if (divDish)
                            divDish.style.display = 'block';
                        else
                            divDish.style.display = 'none';
                    } else {
                        if (divDish)
                            divDish.style.display = 'none';
                        else
                            divDish.style.display = 'block';
                    }
                });
            });

            // Set display property to 'none' to hide the div
            searchResults.style.display = 'block';
        }
    }
}
