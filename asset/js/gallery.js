$(".carousel").on("click", function (e) {
    console.log("This works")
    var currentImg = document.querySelector(".carousel-item.active").querySelector("img");
        // urlSwap();

        fetch('https://picsum.photos/1280/720?grayscale')
            .then(response => response.url)
            .then(data => currentImg.src = data);
    });


