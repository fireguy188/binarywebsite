var conv_from = null;

function select_from(button) {
    if (button != conv_from) {
        document.getElementById(button).style.backgroundColor = "rgb(30, 238, 11)";
        if (conv_from != null) {
            document.getElementById(conv_from).style.backgroundColor = "white";
        }
        conv_from = button;
    } else {
        document.getElementById(button).style.backgroundColor = "white";
        conv_from = null;
    }
}

function convert_num() {
    var num_to_convert = document.getElementById("conv_from").value.trim().toUpperCase();

    if (num_to_convert == "") {
        alert("You have not entered a number to convert");
        return;
    } else if (conv_from == null) {
        alert("You have not selected a number system to convert from");
        return;
    }

    if (conv_from == "bin_from_button") {
        var result = fixed_to_den(num_to_convert);
        if (result != undefined) {
            document.getElementById("result_box").value = result;
        }
    } else {
        var result = den_to_fixed(num_to_convert);
        if (result != undefined) {
            document.getElementById("result_box").value = result;
        }
    }
}