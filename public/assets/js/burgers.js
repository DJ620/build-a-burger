$(() => {
    $(".eat-burger").on("click", event => {
        const id = $(this).data("id");
        const eaten = {
            devoured: true
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: eaten
        }).then(()=>{
            console.log(`Customer devoured a ${$(this).data("burger")}!`);
            location.reload();
        });
    });

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