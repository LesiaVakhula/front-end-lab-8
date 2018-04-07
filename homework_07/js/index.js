$(document).ready(function () {
    $("<h1>").text("Game Gomoku").appendTo("body");
    for (let i = 0; i < 4; i++) {
        let div = $("<div>");
        if (i === 0 || i === 3) {
            div.appendTo("body");
            if (i === 0) {
                div.addClass("players");
            } else {
                div.addClass("main");
            }
        } else if (i === 1 || i === 2) {
            $(".players").append(div);
            if (i === 1) {
                div.addClass("player-white active").text("White");
            } else {
                div.addClass("player-black").text("Black");
            }
        }
    }

    $("<div class='main-board'>").appendTo(".main");

    for (let i = 0; i < 15; i++) {
        $("<div>").addClass("item-row").appendTo(".main-board");
        for (let k = 0; k < 15; k++) {
            $(".item-row").eq(i).append("<div class='item'>");
        }
    }

    $("<div class='main-circle'>").appendTo(".main");

    for (let i = 0; i < 16; i++) {
        $("<div>").addClass("item-row").appendTo(".main-circle");
        for (let k = 0; k < 16; k++) {
            $(".main-circle .item-row").eq(i).append("<div class='item-circle active-hover'>");
        }
    }

    $(".item-circle").one("click", function (e) {
        let circle = e.target;
        let arr = $(".players div");
        let parent = $(circle).parent();
        let arrWite = [];
        let arrBlack = [];
        let mainParent = $(".main-circle").children();

        arr.toggleClass("active");

        for (let i = 0, l = arr.length; i < l; i++) {
            if (arr.eq(i).is(".active")) {
                if (arr.eq(i).is(".player-black")) {
                    $(circle).addClass("active-white");
                    $(circle).text("1").css({color: "transparent",fontSize:0});
                    $(circle).removeClass("active-hover")
                } else if (arr.is(".player-white")) {
                    $(circle).addClass("active-black");
                    $(circle).removeClass("active-hover")
                    $(circle).text("2").css({color: "transparent",fontSize:0});
                }
            }
        }

        function verify(item, itemNext) {
            if (item.text() === "1" && itemNext.text() === "1") {
                let itemWite = Array.from(item);
                    arrWite = arrWite.concat(itemWite);
                    if (arrWite.length === 3) {
                        let winner = $("<div class='winner'>").text("White is a winner!!!");
                            arrWite = arrWite.concat(Array.from(itemNext));
                            $(".player-black").before(winner);
                            $(".item-circle").off("click");
                            for (let j = 0; j < arrWite.length; j++) {
                                $(arrWite[j]).css({background: "red"});
                            }
                    }
            } else if (item.text() === "1" && itemNext.text() !== "1") {
                arrWite = [];
            } else if (item.text() === "2" && itemNext.text() === "2") {
                let itemBlack = Array.from(item);
                    arrBlack = arrBlack.concat(itemBlack);
                    if (arrBlack.length === 3) {
                        let winner = $("<div class='winner'>").text("Black is a winner!!!");
                            arrBlack = arrBlack.concat(Array.from(itemNext));
                            $(".player-black").before(winner);
                            $(".item-circle").off("click");
                            for (let k = 0; k < arrBlack.length; k++) {
                                $(arrBlack[k]).css({background: "red"});
                            }
                    }
            } else if (item.text() === "2" && itemNext.text() !== "2") {
                arrBlack = [];
            }
        }

        for (let i = 0; i < 16; i++) {
            let par = $($(parent).children()[i]);
            let parNext = par.next();
                verify(par, parNext);
        }

        for (let j = 0; j < 16; j++) {
            let parSibl = $(mainParent[j]);

            for (let i = 0; i < 16; i++) {
                let parSiblChild = $(parSibl.children()[i]);
                let parSiblChildNext = $(parSibl.next().children()[i]);
                    verify(parSiblChild, parSiblChildNext);
            }
        }

        for (let j = 0; j < 16; j++) {
            let parSibl = $(mainParent[j]);

            for (let i = 0; i < 16; i++) {
                let parSiblChild = $(parSibl.children()[i]);
                let parSiblChildNext = $(parSibl.next().children()[i + 1]);
                    verify(parSiblChild, parSiblChildNext);
            }
        }

        for (let j = 0; j < 16; j++) {
            let parSibl = $(mainParent[j]);

            for (let i = 0; i < 16; i++) {
                let parSiblChild = $(parSibl.children()[i]);
                let parSiblChildPrev = $(parSibl.next().children()[i - 1]);
                    verify(parSiblChild, parSiblChildPrev);
            }
        }
    })
});