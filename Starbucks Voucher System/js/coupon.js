// BACKGROUNDS https://wallpapercave.com/starbucks-coffee-wallpapers 

var array = JSON.parse(localStorage.getItem("array"));
var array1 = JSON.parse(localStorage.getItem("array1"));
var array2 = JSON.parse(localStorage.getItem("array2"));
var array3 = JSON.parse(localStorage.getItem("array3"));
var array4 = JSON.parse(localStorage.getItem("array4"));
var array5 = JSON.parse(localStorage.getItem("array5"));
var array6 = JSON.parse(localStorage.getItem("array6"));
var array7 = JSON.parse(localStorage.getItem("array7"));
var array8 = JSON.parse(localStorage.getItem("array8"));


// localStorage.setItem("array", JSON.stringify(array)) and JSON.parse(localStorage.getItem("array"))
// var array = Array(); //fname
// var array1 = Array(); //lname 
// var array2 = Array(); //fathers name 
// var array3 = Array(); // birthday
// var array4 = Array(); // afm
// var array5 = Array(); //amka 
// var array6 = Array(); //arithmos kartas anergias
// var array7 = Array(); //duration 
// var array8 = Array(); //status

var afm_request = Array(); // AΦΜ αιτούντων
var amka_request = Array();  //ΑΜΚΑ αιτούντων

function request_check() {

    let amka = document.getElementById("AMKAA").value;
    let afm = document.getElementById("AFMM").value;

    let label = document.getElementById("main_label");

    console.log("ok?");
    //εάν έχει ξαναγίνει αίτηση

    if (!array4.includes("" + afm) || !array5.includes("" + amka)) {    //εάν δεν έχει κάνει εγγραφή
        label.innerHTML = "Λυπούμαστε. Δεν είστε καταχωρημένος/η στο σύστημα! Κάντε εγγραφή πρώτα!";
        close_modal();

    } else {
        if (afm_request.includes("" + afm) && amka_request.includes("" + amka)) {      //εάν έχει ξαναγίνει αίτηση
            label.innerHTML = "Λυπούμαστε. Έχετε υπερβεί το όριο των διαθέσιμων αιτήσεων!";
            close_modal();
        } else {

            //εάν υπερβαίνει το όριο ηλικίας ή είναι ανενεργή η αίτηση
            if ((array3[array4.indexOf(afm)] <= "1984-12-31") && (array8[array4.indexOf(afm)] == "2")) {
                label.innerHTML = "Λυπούμαστε. Δεν ικανοποιούνται τα κριτήρια ηλικίας και ανεργίας!";
                close_modal();

            }
            else if (array3[array4.indexOf(afm)] <= "1984-12-31") {
                label.innerHTML = "Λυπούμαστε. Δεν ικανοποιείται το κριτήριο ηλικίας!";
                close_modal();
            }
            else if (array8[array4.indexOf(afm)] == "2") {
                label.innerHTML = "Λυπούμαστε. Δεν ικανοποιείται το κριτήριο ανεργίας  !";
                close_modal();
            }
            else {
                close_modal();
                afm_request.push(afm);
                amka_request.push(amka);
                localStorage.setItem("afm_request", JSON.stringify(afm_request));
                // localStorage.setItem("amka_request", JSON.stringify(amka_request));

                label.innerHTML = "Η αίτηση ολοκληρώθηκε επιτυχώς!";

            }
        }
    }
}

function close_modal() {
    $('#activation').modal('hide');
}


function checkCode() {

    var numcard = document.getElementById("NumCardNew").value;
    for (var y = -1; y < array.length; y++) {
        if (array6.includes(numcard)) {
            console.log("OKEY");
            // alert("Καλώς ορίσατε κ. " + array1[array4.indexOf(afm)] + " ! Επιτυχής Σύνδεση!");
            // window.location.href = 'Coupon.html';
            localStorage.setItem("logged_numcard", numcard);
            keep_values();
            location.replace("GiveCoupon.html");
        }
        else {
            console.log("ERROR");
            alert("Μη δεκτός κωδικός!Έλεγξε τα στοιχεία σου!");
        }
    }
}

function moriodotisi() {
    let afm_request = JSON.parse(localStorage.getItem("afm_request"));
    // let amka_request = JSON.parse(localStorage.getItem("amka_request"));
    var btn = document.getElementById("bbtn");
    btn.remove();

    var ttable = $('#t01');
    ttable.empty();
    ttable.append('' +
        '<tr>' +
        '<th>Κατάταξη</th>' +
        '<th>Επίθετο</th>' +
        '<th>AFM</th>' +
        '<th>Μόρια</th>' +
        '</tr>'
    );
    for (var y = 0; y < afm_request.length; y++) {
        min = 200 - (y * 10);
        max = 200 - (y * 10 + 9);
        let moria = Math.floor(Math.random() * (max - min + 1) + min);
        if (y < 3) {
            ttable.append('' +
                '<tr class = "tr01" >' +
                '<td>' + (y + 1) + '</td>' +
                '<td>' + array1[afm_request.indexOf(afm_request[y])] + '</td>' +
                '<td>' + afm_request[y] + '</td>' +
                '<td>' + moria + '</td>' +
                '</tr>'
            );
        }
        else {
            ttable.append('' +
                '<tr>' +
                '<td>' + (y + 1) + '</td>' +
                '<td>' + array1[afm_request.indexOf(afm_request[y])] + '</td>' +
                '<td>' + afm_request[y] + '</td>' +
                '<td>' + moria + '</td>' +
                '</tr>'
            );
        }
    }

    var change_p = document.getElementById("p01");
    change_p.innerHTML = "Επιλέξτε Ενεργοποίηση κουπονιού εάν είστε ένας απο τους 3 τυχερούς!";

    var change_div = $('#div_activationbtn');
    change_div.append('' +
        '<div style = "padding-top: 10px;">' +
        ' <button onclick="checkCoupon();" style="--content: \'Ενεργοποίηση κουπονιού\';">' +
        ' <div class="left"></div>' +
        'Ενεργοποίηση κουπονιού' +
        '<div class="right"></div>' +
        '</button>' +
        '</div>'

    );

}

function checkCoupon() {
    let afm_request = JSON.parse(localStorage.getItem("afm_request"));
    let logged_afm = JSON.parse(localStorage.getItem("logged_afm"));
    console.log(afm_request);
    console.log(logged_afm);

    if (!afm_request.includes(logged_afm) && afm_request.indexOf(logged_afm) >= 3) {
        alert("Λυπούμαστε. Δεν σταθήκατε τυχερός/ή σε αυτή τη κλήρωση! Σας ευχόμαστε καλή επιτυχία στους επόμενους!");
    }
    else {

        location.replace("GiveCoupon.html");
    }
}