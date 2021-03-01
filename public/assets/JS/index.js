$(document).ready(function() {
    const eatBtn = $(".eat-button");
    const createBtn = $("#create-button");

    eatBtn.click(function(event) {
        const eatenId = $(this).data("id");

        let justEaten = {
            id: eatenId,
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
        const createBurger = {
            burger_name: $(".burgerInput").val()
        }

        event.preventDefault();

        $.ajax("/api/burgers", {
            type: "POST",
            data: createBurger
        }).then(function(){
            console.log(createBurger);
            location.reload();
        })
    });
})