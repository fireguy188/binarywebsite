var conv_from = null;

function select_from(button) {
    if (button != conv_from) {
        document.getElementById(button).style.backgroundColor = "rgb(30, 238, 11)";
        if (conv_from != null) {
            document.getElementById(conv_from).style.backgroundColor = "white";
            document.getElementById(conv_from+'_select').style.display = 'none';
        }
        document.getElementById(button+'_select').style.display = 'block';
        conv_from = button;
    } else {
        document.getElementById(button).style.backgroundColor = "white";
        document.getElementById(button+'_select').style.display = 'none';
        conv_from = null;
    }
}

function convert_num() {
    if (conv_from == null) {
        alert("You have not selected a number system to convert from");
        return;
    }

    if (conv_from == "bin_from_button") {
        var mantissa = document.getElementById("mantissa").value.trim().toUpperCase();
        var exponent = document.getElementById("exponent").value.trim().toUpperCase();

        var result = floating_to_den(mantissa, exponent);
        if (result != undefined) {
            document.getElementById("result_box").value = result;
        }
    } else {
        var num_to_convert = document.getElementById("conv_from").value.trim().toUpperCase();
        
        var result = den_to_floating(num_to_convert);
        if (result != undefined) {
            document.getElementById("result_mantissa").value = result[0];
            document.getElementById("result_exponent").value = result[1];
        }

    }
}