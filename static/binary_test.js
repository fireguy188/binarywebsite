// binhexdec functions, handling basic positive integers
function den_to_bin(num_to_convert) {
    if (num_to_convert == '0') {
        return '0';
    }

    for (var i=0; i<num_to_convert.length; i++) {
        if (!("0123456789".includes(num_to_convert[i]))) {
            alert("You have not entered a positive denary number");
            return;
        }
    }
    denary_val = parseInt(num_to_convert);

    var binary_val = "";
    while (denary_val > 0) {
        binary_val = (denary_val % 2).toString() + binary_val;
        denary_val = Math.floor(denary_val / 2);
    }
    return binary_val;
}

function den_to_hex(num_to_convert) {
    if (num_to_convert == '0') {
        return '0';
    }

    var hex_vals_to = {10:'A', 11:'B', 12:'C', 13:'D', 14:'E', 15:'F'};

    for (var i=0; i<num_to_convert.length; i++) {
        if (!("0123456789".includes(num_to_convert[i]))) {
            alert("You have not entered a positive denary number");
            return;
        }
    }
    denary_val = parseInt(num_to_convert);

    var hex_val = "";
    while (denary_val > 0) {
        var new_digit = denary_val % 16;
        if (new_digit >= 10) {
            hex_val = hex_vals_to[new_digit] + hex_val;
        } else {
            hex_val = (new_digit).toString() + hex_val;
        }
        denary_val = Math.floor(denary_val / 16)
    }
    return hex_val;
}

function bin_to_den(num_to_convert) {
    var denary_val = 0;
    var multiplier = 1;
    for (var i=num_to_convert.length-1; i>-1; i--) {
        if (num_to_convert[i] == '0' || num_to_convert[i] == '1') {
            denary_val += multiplier * parseInt(num_to_convert[i])
            multiplier *= 2
        } else {
            alert("You have not entered a positive binary number");
            return;
        }
    }
    return denary_val;
}

function bin_to_hex(num_to_convert) {
    return den_to_hex(bin_to_den(num_to_convert));
}

function hex_to_den(num_to_convert) {
    var hex_vals_from = {'A':10, 'B':11, 'C':12, 'D':13, 'E':14, 'F':15};
    var denary_val = 0;
    var multiplier = 1;
    for (var i=num_to_convert.length-1; i>-1; i--) {
        if ("0123456789ABCDEF".includes(num_to_convert[i])) {
            if ("ABCDEF".includes(num_to_convert[i])) {
                var value = hex_vals_from[num_to_convert[i]];
            } else {
                var value = parseInt(num_to_convert[i]);
            }
            denary_val += multiplier * value;
            multiplier *= 16;
        } else {
            alert("You have not entered a positive hex number");
            return;
        }
    }
    return denary_val;
}

function hex_to_bin(num_to_convert) {
    return den_to_bin(hex_to_den(num_to_convert));
}

// sign and magnitude to denary functions
function signmag_to_den(num_to_convert) {
    if (num_to_convert[0] != '0' && num_to_convert[0] != '1') {
        alert('You have not entered a valid binary number');
        return;
    }

    var denary_val = 0;
    var multiplier = 1;
    for (var i=num_to_convert.length-1; i>0; i--) {
        if (num_to_convert[i] == '0' || num_to_convert[i] == '1') {
            denary_val += multiplier * parseInt(num_to_convert[i])
            multiplier *= 2
        } else {
            alert("You have not entered a twos compliment binary number");
            return;
        }
    }

    if (num_to_convert[0] == '1'){
        denary_val *= -1;
    }

    return denary_val;
}

function den_to_signmag(num_to_convert) {
    if ("-0123456789".includes(num_to_convert[0])) {
        for (var i=1; i<num_to_convert.length; i++) {
            if (!("0123456789".includes(num_to_convert[i]))) {
                alert("You have not entered a suitable integer denary value");
                return;
            }
        }
    } else {
        alert("You have not entered a suitable integer denary value");
        return;
    }

    var denary_val = parseInt(num_to_convert);

    if (denary_val == 0) {
        return 0;
    }

    var positive_den_val = Math.abs(denary_val);

    var binary_val = "";
    while (positive_den_val > 0) {
        binary_val = (positive_den_val % 2).toString() + binary_val
        positive_den_val = Math.floor(positive_den_val / 2)
    }

    if (denary_val > 0) {
        binary_val = '0' + binary_val;
    } else {
        binary_val = '1' + binary_val;
    }

    return binary_val;
}

// twoscompliment to denary functions
function twos_to_den(num_to_convert) {
    if (num_to_convert[0] != '0' && num_to_convert[0] != '1') {
        alert('You have not entered a valid binary number');
        return;
    }

    var denary_val = 0;
    var multiplier = 1;
    for (var i=num_to_convert.length-1; i>0; i--) {
        if (num_to_convert[i] == '0' || num_to_convert[i] == '1') {
            denary_val += multiplier * parseInt(num_to_convert[i]);
            multiplier *= 2;
        } else {
            alert("You have not entered a twos compliment binary number");
            return;
        }
    }

    denary_val += -multiplier * parseInt(num_to_convert[0]);

    return denary_val;
}

function den_to_twos(num_to_convert) {
    if (num_to_convert == '0') {
        return '0';
    }

    if ("-0123456789".includes(num_to_convert[0])) {
        for (var i=1; i<num_to_convert.length; i++) {
            if (!("0123456789".includes(num_to_convert[i]))) {
                alert("You have not entered a suitable integer denary value");
                return;
            }
        }
    } else {
        alert("You have not entered a suitable integer denary value");
        return;
    }

    var denary_val = parseInt(num_to_convert);

    var positive_den_val = Math.abs(denary_val);

    var binary_val = "";
    while (positive_den_val > 0) {
        binary_val = (positive_den_val % 2).toString() + binary_val;
        positive_den_val = Math.floor(positive_den_val / 2);
    }

    binary_val = '0' + binary_val;
    
    if (denary_val < 0) {
        var twoscompliment_num = flip_sign(binary_val);
    } else {
        var twoscompliment_num = binary_val;
    }

    // trim off ones and zeros from beginning to simplify
    while (twoscompliment_num.length >= 2 && twoscompliment_num[0] == twoscompliment_num[1]) {
        twoscompliment_num = twoscompliment_num.slice(1, twoscompliment_num.length+1);
    }

    return twoscompliment_num;
}

// fixed point to denary functions
function fixed_to_den(num_to_convert) {
    // Convert number to format I can handle and check for multiple decimal points
    var points = 0;
    for (var i=0; i<num_to_convert.length; i++) {
        if (num_to_convert[i] == '.') {
            points += 1;
        }
    }

    if (points == 0) {
        num_to_convert += '.';
    } else if (points > 1) {
        alert("Your number contains multiple decimal points");
        return;
    }

    // Number they enter can be decimal
    num_to_convert = num_to_convert.split('.');

    var denary_val = 0;

    // Work out whole number part
    var whole = num_to_convert[0];
    if (whole.length > 0) {
        if (whole[0] != '0' && whole[0] != '1') {
            alert('You have not entered a valid binary number');
            return;
        }

        var multiplier = 1;
        for (var i=whole.length-1; i>0; i--) {
            if (whole[i] == '0' || whole[i] == '1') {
                denary_val += multiplier * parseInt(whole[i])
                multiplier *= 2
            } else {
                alert("You have not entered a twos compliment binary number");
                return;
            }
        }

        denary_val += -multiplier * parseInt(whole[0]);
    }

    // Work out fractional part
    var fractional = num_to_convert[1];
    if (fractional.length > 0) {
        if (fractional[0] != '0' && fractional[0] != '1') {
            alert('You have not entered a valid binary number');
            return;
        }

        var multiplier = 0.5;
        for (var i=0; i<fractional.length; i++) {
            if (fractional[i] == '0' || fractional[i] == '1') {
                denary_val += multiplier * parseInt(fractional[i])
                multiplier /= 2
            } else {
                alert("You have not entered a twos compliment binary number");
                return;
            }
        }
    }

    return denary_val;
}

function den_to_fixed(num_to_convert) {
    if (num_to_convert == '0') {
        return '0';
    }

    if ("-.0123456789".includes(num_to_convert[0])) {
        for (var i=1; i<num_to_convert.length; i++) {
            if (!(".0123456789".includes(num_to_convert[i]))) {
                alert("You have not entered a suitable denary value");
                return;
            }
        }
    } else {
        alert("You have not entered a suitable denary value");
        return;
    }

    // Convert number to format I can handle and check for multiple decimal points
    var points = 0;
    for (var i=0; i<num_to_convert.length; i++) {
        if (num_to_convert[i] == '.') {
            points += 1;
        }
    }

    // Add decimal point to the end if there are no points specified
    if (points == 0) {
        num_to_convert += '.';
    } else if (points > 1) {
        alert("Your number contains multiple decimal points");
        return;
    }

    num_to_convert = num_to_convert.split('.');

    var whole_den = num_to_convert[0];
    var whole_bin = "";

    // Keep track if the number is negative or positive
    if (whole_den[0] == '-') {
        var positive = false;
        whole_den = whole_den.slice(1, whole_den.length);
    } else {
        var positive = true;
    }

    // Working out whole
    var denary_val = parseInt(whole_den);
    while (denary_val > 0) {
        whole_bin = (denary_val % 2).toString() + whole_bin;
        denary_val = Math.floor(denary_val / 2);
    }

    whole_bin = '0' + whole_bin;

    // Calculating fractional part
    var fractional_den = parseFloat("0." + num_to_convert[1]);
    var fractional_bin = "";

    while (fractional_den != 0) {
        fractional_den *= 2
        if (fractional_den >= 1) {
            fractional_bin += '1';
            fractional_den -= 1;
        } else {
            fractional_bin += '0';
        }
    }

    var final_num = whole_bin + '.' + fractional_bin;

    if (!positive) {
        final_num = flip_sign(final_num);
    }

    if (final_num[final_num.length-1] == '.') {
        final_num = final_num.slice(0, final_num.length-1);
    }
    return final_num;
}

function floating_to_den(mantissa, exponent) {
    if (mantissa == '') {
        alert('You have not entered a mantissa');
        return;
    } else if (exponent == '') {
        alert('You have not entered an exponent');
        return;
    }

    // Convert number to format I can handle and check for multiple decimal points
    var points = 0;
    for (var i=0; i<mantissa.length; i++) {
        if (mantissa[i] == '.') {
            points += 1;
        }
    }

    if (points == 0) {
        mantissa += '.';
    } else if (points > 1) {
        alert("Your number contains multiple decimal points");
        return;
    }

    var denary_val = fixed_to_den(mantissa);
    if (denary_val == undefined) {
        return;
    }

    var den_exponent = 0;
    var multiplier = 1;
    for (var i=exponent.length-1; i>0; i--) {
        if (exponent[i] == '0' || exponent[i] == '1') {
            den_exponent += multiplier * parseInt(exponent[i])
            multiplier *= 2
        } else {
            alert("You have not entered a twos compliment exponent");
            return;
        }
    }

    den_exponent += -multiplier * parseInt(exponent[0]);

    return denary_val * 2**den_exponent;
}

function den_to_floating(num_to_convert) {
    if (num_to_convert == '0') {
        return '0';
    }

    if ("-.0123456789".includes(num_to_convert[0])) {
        for (var i=1; i<num_to_convert.length; i++) {
            if (!(".0123456789".includes(num_to_convert[i]))) {
                alert("You have not entered a suitable denary value");
                return;
            }
        }
    } else {
        alert("You have not entered a suitable denary value");
        return;
    }

    // Convert number to format I can handle and check for multiple decimal points
    var points = 0;
    for (var i=0; i<num_to_convert.length; i++) {
        if (num_to_convert[i] == '.') {
            points += 1;
        }
    }

    // Add decimal point to the end if there are no points specified
    if (points == 0) {
        num_to_convert += '.';
    } else if (points > 1) {
        alert("Your number contains multiple decimal points");
        return;
    }

    num_to_convert = num_to_convert.split('.');

    var whole_den = num_to_convert[0];
    var whole_bin = "";

    // Keep track if the number is negative or positive
    if (whole_den[0] == '-') {
        var positive = false;
        whole_den = whole_den.slice(1, whole_den.length);
    } else {
        var positive = true;
    }

    // Working out whole
    var denary_val = parseInt(whole_den);
    while (denary_val > 0) {
        whole_bin = (denary_val % 2).toString() + whole_bin;
        denary_val = Math.floor(denary_val / 2);
    }

    whole_bin = '0' + whole_bin;

    // Calculating fractional part
    var fractional_den = parseFloat("0." + num_to_convert[1]);
    var fractional_bin = "";

    while (fractional_den != 0) {
        fractional_den *= 2
        if (fractional_den >= 1) {
            fractional_bin += '1';
            fractional_den -= 1;
        } else {
            fractional_bin += '0';
        }
    }

    var final_num = whole_bin + '.' + fractional_bin;

    if (!positive) {
        final_num = flip_sign(final_num);
    }

    var norm_num = final_num.replace('.', '');

    for (var i=1; i<norm_num.length; i++) {
        if (norm_num[i] != norm_num[i-1]) {
            norm_num = norm_num[i-1] + '.' + norm_num.slice(i, norm_num.length);
            break;
        }
    }

    var exponent = final_num.indexOf('.') - i;

    if (exponent >= 0) {
        var positive = true;
    } else {
        var positive = false;
    }

    exponent = Math.abs(exponent);
    // Convert exponent to binary
    var bin_exponent = '';
    while (exponent > 0) {
        bin_exponent = (exponent % 2).toString() + bin_exponent;
        exponent = Math.floor(exponent / 2);
    }

    bin_exponent = '0' + bin_exponent;
    if (!positive) {
        bin_exponent = flip_sign(bin_exponent);
    }

    // trim off zeros from end to simplify
    while (norm_num.length >= 2 && norm_num[norm_num.length-1] == '0') {
        norm_num = norm_num.slice(0, norm_num.length-1);
    }

    // trim off ones/zeros from beginning to simplify
    while (norm_num.length >= 2 && norm_num[0] == norm_num[1]) {
        norm_num = norm_num.slice(1, norm_num.length);
    }

    // trim off decimal point if unnecessary
    if (norm_num[norm_num.length-1] == '.') {
        norm_num = norm_num.slice(0, norm_num.length-1);
    }
    
    return [norm_num, bin_exponent];
}

// helper function for converting between negative and positive for twoscompliment
function flip_sign(num) {
    // flip the bits
    var flipped_num = ""
    for (var i=0; i<num.length; i++) {
        if (num[i] == '1') {
            flipped_num += '0';
        } else if (num[i] == '0') {
            flipped_num += '1';
        } else {
            flipped_num += '.';
        }
    }

    // add 1 to it
    var twoscompliment_num = "";
    var carrying = 1;
    for (var i=flipped_num.length-1; i>-1; i--) {
        if (flipped_num[i] == '0') {
            if (carrying == 1) {
                twoscompliment_num = "1" + twoscompliment_num;
                carrying = 0;
            } else {
                twoscompliment_num = "0" + twoscompliment_num;
            }
        } else if (flipped_num[i] == '1') {
            if (carrying == 1) {
                twoscompliment_num = "0" + twoscompliment_num;
            } else {
                twoscompliment_num = "1" + twoscompliment_num;
            }
        } else {
            twoscompliment_num = '.' + twoscompliment_num;
        }
    }

    return twoscompliment_num;
}

function gen_bin() {
    var bin_num = den_to_bin(gen_den());
    if (Math.random() < 0.5) {
        bin_num = '0' + bin_num.slice(1, bin_num.length);
    }
    return bin_num;
}

function gen_den() {
    return Math.floor(Math.random() * 255).toString();
}

function gen_hex() {
    return den_to_hex(gen_den());
}

var num = null;
var answer = null;
var correct = 0;
var q_num = 1;

// main test functions
function check() {
    document.getElementById('checkButton').style.display = "none";
    document.getElementById('continueButton').style.display = "block";
    var user_answer = document.getElementById("answer").value.trim().toUpperCase();
    var original_answer = user_answer;

    // trim off zeros from beginning to simplify only if first 2 questions
    while (user_answer.length >= 2 && user_answer[0] == '0' && q_num <= 2) {
        user_answer = user_answer.slice(1, user_answer.length);
    }

    // trim off 0's from beginning and add a 0 if any zeros were trimmed off, for sign and mag
    if (user_answer.length >= 2 && user_answer[0] == '0' && (q_num == 3 || q_num == 4)) {
        while (user_answer.length >= 2 && user_answer[0] == '0') {
            user_answer = user_answer.slice(1, user_answer.length);
        }
        user_answer = '0' + user_answer;
    }

    // trim off ones/zeros from beginning to simplify for rest of questions, not sign and magnitude
    while (user_answer.length >= 2 && user_answer[0] == user_answer[1] && (q_num == 5 || q_num == 6)) {
        user_answer = user_answer.slice(1, user_answer.length);
    }

    if (q_num == 7 || q_num == 8) {
        if (!user_answer.includes('.')) {
            user_answer += '.'
        }

        user_answer = user_answer.split('.');
        var whole = user_answer[0];
        var fractional = '.'+user_answer[1];
        // trim off ones/zeros from beginning to simplify
        while (whole.length >= 2 && whole[0] == whole[1]) {
            whole = whole.slice(1, whole.length);
        }
        // trim off zeros from end to simplify
        while (fractional.length >= 1 && ".0".includes(fractional[fractional.length-1])) {
            fractional = fractional.slice(0, fractional.length-1);
        }
        user_answer = whole + fractional;
    }

    if (q_num == 9 || q_num == 10) {
        var split_answer = user_answer.split(" ");
        var mantissa = split_answer[0];

        if (split_answer.length == 1) {
            var exponent = "0";
        } else {
            var exponent = split_answer[1];
        }

        if (!user_answer.includes('.')) {
            user_answer += '.'
        }

        // clean mantissa
        mantissa = mantissa.split('.');
        var whole = mantissa[0];
        var fractional = '.'+mantissa[1];
        // trim off ones/zeros from beginning to simplify
        while (whole.length >= 2 && whole[0] == whole[1]) {
            whole = whole.slice(1, whole.length);
        }
        // trim off zeros from end to simplify
        while (fractional.length >= 1 && ".0".includes(fractional[fractional.length-1])) {
            fractional = fractional.slice(0, fractional.length-1);
        }
        mantissa = whole + fractional;

        // clean exponent
        // trim off ones/zeros from beginning to simplify
        while (exponent.length >= 2 && exponent[0] == exponent[1]) {
            exponent = exponent.slice(1, exponent.length);
        }

        user_answer = mantissa + ' ' + exponent;
    }

    if (user_answer.length == 0) {
        user_answer = "0";
    }

    if (user_answer == answer || original_answer == answer) {
        document.getElementById('result').style.color = "green";
        document.getElementById('result').innerHTML = 'Correct';
        correct += 1;
    } else {
        document.getElementById('result').style.color = "red";
        document.getElementById('result').innerHTML = 'Incorrect, the answer was ' + answer;
    }
    q_num += 1;
}

function gen_q() {
    if (q_num == 1 || q_num == 2) {
        document.getElementById("q_type").innerHTML = "<b>" + q_num + ".</b> Conversion between binary, denary and hexadecimal";
        var converting = ['binary', 'denary', 'hexadecimal'];

        var choice = Math.floor(Math.random()*3);
        var first_conversion = converting[choice];
        
        converting.splice(choice, 1);

        choice = Math.floor(Math.random()*2);
        var second_conversion = converting[choice];

        if (first_conversion == 'binary') {
            num = gen_bin()
            if (second_conversion == 'denary') {
                answer = bin_to_den(num);
            } else {
                answer = bin_to_hex(num);
            }
        } else if (first_conversion == 'denary') {
            num = gen_den()
            if (second_conversion == 'binary') {
                answer = den_to_bin(num);
            } else {
                answer = den_to_hex(num);
            }
        } else if (first_conversion == 'hexadecimal') {
            num = gen_hex()
            if (second_conversion == 'denary') {
                answer = hex_to_den(num);
            } else {
                answer = hex_to_bin(num);
            }
        }

        var question = "Convert <b>" + num + "</b> (" + first_conversion + ") to " + second_conversion;
    } else if (q_num == 3 || q_num == 4) {
        document.getElementById("q_type").innerHTML = "<b>" + q_num + ".</b> Conversion between 'sign and magnitude' and denary";
        var converting = ["sign and magnitude", "denary"];

        var choice = Math.floor(Math.random()*2);
        var first_conversion = converting[choice];
        converting.splice(choice, 1);
        var second_conversion = converting[0];

        if (first_conversion == "sign and magnitude") {
            num = gen_bin();
            // trim off 0's from beginning and add a 0 if any zeros were trimmed off, for sign and mag
            if (num.length >= 2 && num[0] == '0' && (q_num == 3 || q_num == 4)) {
                while (num.length >= 2 && num[0] == '0' && (q_num == 3 || q_num == 4)) {
                    num = num.slice(1, num.length);
                }
                num = '0' + num;
            }
            answer = signmag_to_den(num);
        } else {
            num = gen_den();
            if (Math.random() < 0.5) {
                num = '-' + num
            }
            answer = den_to_signmag(num);
        }

        var question = "Convert <b>" + num + "</b> (" + first_conversion + ") to " + second_conversion;
    } else if (q_num == 5 || q_num == 6) {
        document.getElementById("q_type").innerHTML = "<b>" + q_num + ".</b> Conversion between 'twos compliment' and denary";
        var converting = ["twos compliment", "denary"];

        var choice = Math.floor(Math.random()*2);
        var first_conversion = converting[choice];
        converting.splice(choice, 1);
        var second_conversion = converting[0];

        if (first_conversion == "twos compliment") {
            num = gen_bin();
            // trim off ones/zeros from beginning to simplify
            while (num.length >= 2 && num[0] == num[1]) {
                num = num.slice(1, num.length);
            }
            answer = twos_to_den(num);
        } else {
            num = gen_den();
            if (Math.random() < 0.5) {
                num = '-' + num
            }
            answer = den_to_twos(num);
        }

        var question = "Convert <b>" + num + "</b> (" + first_conversion + ") to " + second_conversion;
    } else if (q_num == 7 || q_num == 8) {
        document.getElementById("q_type").innerHTML = "<b>" + q_num + ".</b> Conversion between 'fixed point' and denary";
        var converting = ["fixed point", "denary"];

        var choice = Math.floor(Math.random()*2);
        var first_conversion = converting[choice];
        converting.splice(choice, 1);
        var second_conversion = converting[0];

        var whole = gen_bin().slice(0, 4);
        // trim off ones/zeros from beginning to simplify
        while (whole.length >= 2 && whole[0] == whole[1]) {
            whole = whole.slice(1, whole.length);
        }
        var fractional = '.'+gen_bin().slice(0, 4);
        // trim off zeros from end to simplify
        while (fractional.length >= 1 && ".0".includes(fractional[fractional.length-1])) {
            fractional = fractional.slice(0, fractional.length-1);
        }
        num = whole + fractional

        if (first_conversion == "fixed point") {
            answer = fixed_to_den(num);
        } else {
            num = fixed_to_den(num).toString();
            answer = den_to_fixed(num);
        }

        var question = "Convert <b>" + num + "</b> (" + first_conversion + ") to " + second_conversion;
    } else if (q_num == 9 || q_num == 10) {
        document.getElementById("q_type").innerHTML = "<b>" + q_num + ".</b> Conversion between 'floating point' and denary";
        var converting = ["floating point", "denary"];

        var choice = Math.floor(Math.random()*2);
        var first_conversion = converting[choice];
        converting.splice(choice, 1);
        var second_conversion = converting[0];

        var whole = gen_bin().slice(0, 4);
        // trim off ones/zeros from beginning to simplify
        while (whole.length >= 2 && whole[0] == whole[1]) {
            whole = whole.slice(1, whole.length);
        }
        var fractional = '.'+gen_bin().slice(0, 4);
        // trim off zeros from end to simplify
        while (fractional.length >= 1 && ".0".includes(fractional[fractional.length-1])) {
            fractional = fractional.slice(0, fractional.length-1);
        }
        num = whole + fractional

        if (first_conversion == "floating point") {
            num = fixed_to_den(num).toString();
            num = den_to_floating(num);
            answer = floating_to_den(num[0], num[1]);
            num = num[0] + " " + num[1]
        } else {
            num = fixed_to_den(num).toString();
            answer = den_to_floating(num);
            if (answer[1] == undefined) {
                answer = answer[0];
            } else {
                answer = answer[0] + " " + answer[1];
            }
        }

        var question = "Convert <b>" + num + "</b> (" + first_conversion + ") to " + second_conversion;

        if (first_conversion == "denary") {
            question += " (put space between mantissa and exponent)";
        }
    } else {
        document.getElementById("q_type").innerHTML = "Results";
        document.getElementById('checkButton').style.display = "none";
        document.getElementById('continueButton').style.display = "none";
        document.getElementById('answer').style.display = "none";
        document.getElementById("question").innerHTML = "The results are in";
        document.getElementById('result').innerHTML = "You got " + correct + "/10 correct";
        return;
    }
    document.getElementById("question").innerHTML = question;
}

function _continue() {
    document.getElementById('checkButton').style.display = "block";
    document.getElementById('continueButton').style.display = "none";
    document.getElementById('answer').value = "";
    document.getElementById('result').innerHTML = "";
    gen_q();
}

// only generate questions if we are on the test page
var path = window.location.pathname;
var page = path.split("/").pop();

if (page == 'test.html') {
    gen_q();
}