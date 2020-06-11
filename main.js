$(function () {
    $("form").on("submit", function (event) {
        event.preventDefault()
        let search = $("#search").val()
        let url = `https://api.rawg.io/api/games?search=${search}`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                let view = $("#dataView")       //this is to handle the view
                debugger;
                $.each(data.results, function (index, game) {
                    // let name = game.name
                    // let release = game.released
                    // let rating = game.rating
                    // let cover = game.background_image
                    // let metacritic = game.metacritic
                    let str = `NAME: ${game.name}, ${game.released}, <img src = "${game.background_image}"></img>`
                    view.append(str)
                })
                console.log(data.results)

            });

    })


});

// Api - key:
// 374079 - WilliamS - CXCSDM5P
// URL: https:
//tastedive.com/read/api