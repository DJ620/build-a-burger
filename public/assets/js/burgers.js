// This file has all my client-side javascript
// Function to make sure the page loads before any functions run
$(() => {
    // When the 'eat-burger' button is clicked, data is collected and turned into a PUT request to update the status of the burger
    $(".eat-burger").on("click", event => {
        const id = $(event.currentTarget).data("id");
        const eaten = {
            devoured: true
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: eaten
        }).then(()=>{
            console.log(`Customer devoured a(n) ${$(event.currentTarget).data("burger")}!`);
            // Reloads the page so that the new data will populate
            location.reload();
        });
    });

    // When a user submits a new burger, the data is collected and turned into a POST request to be inserted into the database
    $(".build-burger").on("submit", event => {
        event.preventDefault();
        const newBurger = {
            burger_name: `${$("#burg").val().trim()}`
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(() => {
            console.log("Added a new burger!");
            location.reload();
        });
    });
});