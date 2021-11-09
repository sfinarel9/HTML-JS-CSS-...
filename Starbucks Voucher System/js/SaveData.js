var x = 0;
var array = Array();//fname
var array1 = Array(); //lname 
var array2 = Array(); //fathers name 
var array3 = Array(); // birthday
var array4 = Array(); // afm
var array5 = Array(); //amka 
var array6 = Array(); //arithmos kartas anergias
var array7 = Array(); //duration 
var array8 = Array(); //status

function add_element_to_array() {                       //Εγγραφή

	let fname = document.getElementById("Fname").value;
	let lname = document.getElementById("Lname").value;
	let fathername = document.getElementById("Fathername").value;
	let bd = document.getElementById("BD").value;
	let afm = document.getElementById("AFMM").value;
	let amka = document.getElementById("AMKAA").value;
	let numcard = document.getElementById("NumCard").value;
	let duration = document.getElementById("duration").value;
	let status = document.getElementById("status").value;
	let checkBox = document.getElementById("checkboxx");

	if (!(fname && lname && fathername && bd && afm && amka && numcard && duration && status && checkBox.checked) || numcard.toString().length!= 16 || afm.toString().length!= 9 || amka.toString().length!= 11 ) {   //Εάν λείπει κάποιο στοιχείο
		alert("Δεν ήταν δυνατή η εγγραφή. Ελέγξτε την ακεραιότητα των στοιχείων και συμφωνήστε με τους όρους χρήσης!");
	} else {
		if (array4.includes(afm) && array5.includes(amka) && array6.includes(numcard)) {    // Εάν αφμ,αμκα,αριθμος καρτας ανεργίας ειναι ήδη καταχωρημένα
			alert("Τα στοιχεία σας υπάρχουν ήδη!");

		} else {


			array.push('' + fname);
			array1.push('' + lname);
			array2.push('' + fathername);
			array3.push('' + bd);
			array4.push('' + afm);
			array5.push('' + amka);
			array6.push('' + numcard);
			array7.push('' + duration);
			array8.push('' + status);
	
			alert("κ. " + array1[x] + " η εγγραφή σας ήταν επιτυχής!!");
			x++;
		}
	}
}

function display_array() {
	var cards_container = $('#t02');
	cards_container.empty();

	for (var y = 0; y < array.length; y++) {
		cards_container.append('' +
			// '<div class="table-responsive">' +

			// '<table class="table">' +
			// '	<thead>' +
			// '	  <tr>' +
			// '		<th>Lastname</th>' +
			// '		<th>Firstname</th>' +

			// '		<th>Firstname</th>' +

			// '		<th>B.Date</th>' +
			// '		<th>AFM</th>' +
			// '		<th>AMKA</th>' +
			// '		<th>NUM CARD</th>' +
			// '		<th>Duration</th>' +
			// '		<th>Status</th>' +
			// '	  </tr>' +
			// '	</thead>' +
			// '	<tbody>' +

			'	  <tr>' +
			'		<td >' + array[y] + '</td>' +
			'		<td>' + array1[y] + '</td>' +

			'		<td>' + array2[y] + '</td>' +
			'		<td>' + array3[y] + '</td>' +
			'		<td>' + array4[y] + '</td>' +
			'		<td>' + array5[y] + '</td>' +
			'		<td>' + array6[y] + '</td>' +
			'		<td>' + array7[y] + '</td>' +
			'		<td>' + array8[y] + '</td>' +
			'	  </tr>' 

			// '	</tbody>' +
			// ' </table>' +
			// '</div>'

		);
		keep_values();
	}

}
function Login() {

	var afm = document.getElementById("AFMNew").value;
	var amka = document.getElementById("AMKANew").value;
	if (array4.includes(afm) && array5.includes(amka)) {
		console.log("OKEY");
		localStorage.setItem("logged_afm", afm);
		localStorage.setItem("logged_amka", amka);
		keep_values();
		location.replace("Coupon_request.html");
	}
	else {
		alert("Δεν ήταν δυνατή η σύνδεση. Ελέγξτε τα στοιχεία σας.");

		console.log("NO OKEY");
	}

}


function checkCode() {

	var numcard = document.getElementById("NumCardNew").value;
	for (var y = -1; y < array.length; y++) {
		if (array6.includes(numcard)) {
			console.log("OKEY");
			localStorage.setItem("logged_numcard", numcard);
			keep_values();
			location.replace("Coupon.html");
		}
		else {
			console.log("ERROR");
			alert("Μη δεκτός κωδικός!Έλεγξε τα στοιχεία σου!");
		}
	}
}

function htmlEncode(value) {
	return $('<div/>').text(value)
		.html();
}

function keep_values() {
	localStorage.setItem("array", JSON.stringify(array));
	localStorage.setItem("array1", JSON.stringify(array1));
	localStorage.setItem("array2", JSON.stringify(array2));
	localStorage.setItem("array3", JSON.stringify(array3));
	localStorage.setItem("array4", JSON.stringify(array4));
	localStorage.setItem("array5", JSON.stringify(array5));
	localStorage.setItem("array6", JSON.stringify(array6));
	localStorage.setItem("array7", JSON.stringify(array7));
	localStorage.setItem("array8", JSON.stringify(array8));
}


