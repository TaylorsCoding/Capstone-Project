function main() {
    $(".fa-gamepad").on("click", function (event) {
        $("#landingPage").addClass("hide");
        $("#searchPage").removeClass("hide");
    });
    $("form").on("submit", function (event) {
        event.preventDefault();
        let search = $("#search").val();
        let url = `https://api.rawg.io/api/games?search=${search}`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                let view = $("#dataView");
                view.empty()
                if (data.count === 0) {
                    view.append("No Results");
                    return;
                };
                $.each(data.results, function (index, game) {
                    let str = `<div class = "card Game">Name: ${game.name}, <br> Release Date:${game.released},<br> Rating:${game.rating},<br><img src = "${game.background_image}"></img></div>`;
                    view.append(str);

                });
                console.log(data.results);
            });
    });
};
$(main());
