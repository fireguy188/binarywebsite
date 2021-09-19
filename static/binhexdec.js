var conv_from = null;
var conv_to = null;

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

function select_to(button) {
    if (button != conv_to) {
        document.getElementById(button).style.backgroundColor = "rgb(30, 238, 11)";
        if (conv_to != null) {
            document.getElementById(conv_to).style.backgroundColor = "white";
        }
        conv_to = button;
    } else {
        document.getElementById(button).style.backgroundColor = "white";
        conv_to = null;
    }
}

function convert_num() {
    var num_to_convert = document.getElementById("conv_from").value.trim().toUpperCase();
    if (conv_from == null) {
        alert("You have not selected a number system to convert from")
        return;
    }
    else if (conv_to == null) {
        alert("You have not selected a number system to convert to")
        return;
    }
    else if (num_to_convert == "") {
        alert("You have not entered a number to convert")
        return;
    }

    if (conv_from == "bin_from_button") {
        if (conv_to == "den_to_button") {
            var result = bin_to_den(num_to_convert);
            if (result != undefined) {
                document.getElementById("result_box").value = result;
            }
        } else if (conv_to == "hex_to_button") {
            var result = bin_to_hex(num_to_convert);
            if (result != undefined) {
                document.getElementById("result_box").value = result;
            }
        }
    } else if (conv_from == "den_from_button") {
        if (conv_to == "bin_to_button") {
            var result = den_to_bin(num_to_convert);
            if (result != undefined) {
                document.getElementById("result_box").value = result;
            }
        } else if (conv_to == "hex_to_button") {
            var result = den_to_hex(num_to_convert);
            if (result != undefined) {
                document.getElementById("result_box").value = result;
            }
        }
    } else {
        if (conv_to == "bin_to_button") {
            var result = hex_to_bin(num_to_convert);
            if (result != undefined) {
                document.getElementById("result_box").value = result;
            }
        } else if (conv_to == "den_to_button") {
            var result = hex_to_den(num_to_convert);
            if (result != undefined) {
                document.getElementById("result_box").value = result;
            }
        }
    }
}