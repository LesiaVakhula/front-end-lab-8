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
    $("h1").after("<button>");
    $("button").text("Restart").click(function () {
        location.reload();
    });

    let winner = $("<div class='winner'>");
    $(".player-black").before(winner);
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
        let arrHorizontal =[];
        let arrVertical =[];
            arr.toggleClass("active");

        for (let i = 0, l = arr.length; i < l; i++) {
            if (arr.eq(i).is(".active")) {
                if (arr.eq(i).is(".player-black")) {
                    $(circle).addClass("active-white");
                    $(circle).text("1").css({color: "transparent",fontSize:0});
                    $(circle).removeClass("active-hover")
                } else if (arr.eq(i).is(".player-white")) {
                    $(circle).addClass("active-black");
                    $(circle).removeClass("active-hover");
                    $(circle).text("2").css({color: "transparent",fontSize:0});
                }
            }
        }
        for(let i=1; i<=2; i++){
            if($(circle).text() == i){
                let transitional = $(circle);
                arrHorizontal = arrHorizontal.concat(Array.from(transitional));
                for(let j=0; j<4; j++){
                    transitional = transitional.next();
                        if(transitional.text() == i){
                            let item = Array.from(transitional);
                            arrHorizontal = arrHorizontal.concat(item);
                        }else {
                            transitional = $(circle);
                            break;
                        }
                };

                for(let j = 0; j<4; j++){
                    transitional = transitional.prev();
                    if($(transitional).text() == i){
                        let item = Array.from(transitional);
                        arrHorizontal = arrHorizontal.concat(item);
                    }else {
                        break;
                    }
                }
            }
        }
        if(arrHorizontal.length>3){
            $(arrHorizontal).css({background: "red"});
            $(".item-circle").off("click");
            if($(arrHorizontal[0]).text() === "1"){
                $(".winner").text("White is a winner");
            }else {
                $(".winner").text("Black is a winner");
            }
        }

        for(let i=1; i<=2; i++) {
            if ($(circle).text() == i) {
                let parent = $(circle).parent();
                let index = Array.from(parent.children()).indexOf(circle);
                arrVertical = arrVertical.concat(circle);
                for (let j = 0; j < 4; j++) {
                    parent = parent.next();
                    let child = $(parent).children()[index];
                    if ($(child).text() == i) {
                        let nextRowChild = Array.from($(child));
                        arrVertical = arrVertical.concat(nextRowChild);
                    } else {
                        break;
                    }
                }
                let parentPrev = $(circle).parent();
                for (let k = 0; k < 4; k++) {
                    parentPrev = parentPrev.prev();
                    let childPrev = $(parentPrev).children()[index];
                    if ($(childPrev).text() == i) {
                        let prevRowChild = Array.from($(childPrev));
                        arrVertical = arrVertical.concat(prevRowChild);
                    } else {
                        break;
                    }
                }
            }
        }
            if (arrVertical.length > 3) {
                $(arrVertical).css({background: "red"});
                $(".item-circle").off("click");
                    if($(arrVertical[0]).text() === "1"){
                        $(".winner").text("White is a winner");
                    }else {
                        $(".winner").text("Black is a winner");
                    }
            }
            let arrDiagonalRight = [];
            for (let i = 1; i <= 2; i++) {
                if ($(circle).text() == i) {
                    let parent = $(circle).parent();
                    let index = Array.from(parent.children()).indexOf(circle);
                    let indexNext = index;
                        arrDiagonalRight = arrDiagonalRight.concat(circle);
                    for (let j = 0; j < 4; j++) {
                        parent = parent.next();
                        indexNext++;
                        let child = $(parent).children()[indexNext];

                        if ($(child).text() == i) {
                            let nextRowChild = Array.from($(child));
                            arrDiagonalRight = arrDiagonalRight.concat(nextRowChild);
                        } else {
                            break;
                        }
                    }
                    let parentPrev = $(circle).parent();
                    let indexPrev = index;
                    for (let k = 0; k < 4; k++) {
                        parentPrev = parentPrev.prev();
                        indexPrev--;
                        let childPrev = $(parentPrev).children()[indexPrev];
                        if ($(childPrev).text() == i) {
                            let prevRowChild = Array.from($(childPrev));
                            arrDiagonalRight = arrDiagonalRight.concat(prevRowChild);
                        } else {
                            break;
                        }
                    }
                }
            }
            if (arrDiagonalRight.length > 3) {
                $(arrDiagonalRight).css({background: "red"});
                $(".item-circle").off("click");
                if($(arrDiagonalRight[0]).text() === "1"){
                    $(".winner").text("White is a winner");
                }else {
                    $(".winner").text("Black is a winner");
                }
            }
            let arrDiagonalLeft = [];
            for (let i = 1; i <= 2; i++) {
                if ($(circle).text() == i) {
                    let parent = $(circle).parent();
                    let index = Array.from(parent.children()).indexOf(circle);
                    arrDiagonalLeft = arrDiagonalLeft.concat(circle);
                    let indexNext = index;
                    for (let j = 0; j < 4; j++) {
                        parent = parent.next();
                        indexNext--;
                        let child = $(parent).children()[indexNext];
                            if ($(child).text() == i) {
                                let nextRowChild = Array.from($(child));
                                arrDiagonalLeft = arrDiagonalLeft.concat(nextRowChild);
                            } else {
                                break;
                            }
                    }
                    let parentPrev = $(circle).parent();
                    let indexPrev = index;
                        for (let k = 0; k < 4; k++) {
                            parentPrev = parentPrev.prev();
                            indexPrev++;
                            let childPrev = $(parentPrev).children()[indexPrev];
                            if ($(childPrev).text() == i) {
                                let prevRowChild = Array.from($(childPrev));
                                arrDiagonalLeft = arrDiagonalLeft.concat(prevRowChild);
                            } else {
                                break;
                            }
                        }
                }
            }
            if (arrDiagonalLeft.length > 3) {
                $(arrDiagonalLeft).css({background: "red"});
                if($(arrDiagonalLeft[0]).text() === "1"){
                    $(".winner").text("White is a winner");
                }else {
                    $(".winner").text("Black is a winner");
                }
                $(".item-circle").off("click");
            }
    });
})