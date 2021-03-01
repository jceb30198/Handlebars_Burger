$(document).ready(function() {
    const eatBtn = $(".eat-button");
    const createBtn = $("#create-button");

    eatBtn.click(function(event) {
        const nameEaten = $(this).data("name");
        const eatenId = $(this).data("id");
        console.log(`${nameEaten} with ID: ${eatenId} was just enjoyed!`);

        let justEaten = {
            devoured: eatenId
        }

        $.ajax(`/api/burgers/${eatenId}`, {
            type: "PUT",
            data: justEaten
        }).then(function(){
            console.log(justEaten);
            location.reload();
        })
    });

    createBtn.click(function(event) {
        event.preventDefault();

        const createBurger = {
            burgerName: $(".burgerInput").val()
        }

        $.ajax("/api/burgers", {
            type: "POST",
            data: createBurger
        }).then(function(){
            console.log(createBurger);
        })
    });
})