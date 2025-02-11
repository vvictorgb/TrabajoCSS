document.addEventListener("DOMContentLoaded", function() {
    
    const cardBerlin = document.getElementById("cardBerlin");

    if (cardBerlin) {
        cardBerlin.addEventListener("click", function() {
            window.location.href = "indexRestauranteBerlin.html";
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    
    const cardBerlin = document.getElementById("cardBangkok");

    if (cardBerlin) {
        cardBerlin.addEventListener("click", function() {
            window.location.href = "indexRestauranteBangkok.html";
        });
    }
});
