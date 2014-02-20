THIS WILL HAVE TO BE VIA AJAX...!!

//creates a hidden form with the returned data
//function post_to_url(path, params, method) {
//    method = method || "post"; // Set method to post by default if not specified.

    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
//    var form = document.createElement("form");
//    form.setAttribute("method", method);
//    form.setAttribute("action", path);

//    for(var key in params) {
//        if(params.hasOwnProperty(key)) {
//            var hiddenField = document.createElement("input");
//            hiddenField.setAttribute("type", "hidden");
//            hiddenField.setAttribute("name", key);
//            hiddenField.setAttribute("value", params[key]);

//            form.appendChild(hiddenField);
//         }
//    }

//    document.body.appendChild(form);
//    form.submit();
//}




//var total_clinic_records = 
//var uplodaded_clinic_records =
//var total_encounters = new array();
//var uploaded_encounters = new array();
//for every clinic record (i;1> ...)
	//var total_encounters[i] = nomber of encounters in given clinic record
	//var uploaded_encounters[i] = 0
	//return data
	//post_to_url()
	//confirm record insertion --?! not sure how to do this
	//add 1 to var uploaded_clinic_records - for progress bar: value=uploaded_clinic_records/total_clinic_records
	//for every encounter in clinic record (j; j> ...): 
		//return data
		//post_to_url()
		//confirm record insertion --?! not sure how to do this (should be part of the submit python script?)
		//add 1 to var uploaded_encounters[i] for progress bar: value=uploaded_encounters[i]/total_encounters[i]
		//remove record
	//remove clinic record
//return total number of clinic days uploaded, and records per


//how to submit POST without form: http://stackoverflow.com/questions/133925/javascript-post-request-like-a-form-submit

//checks for connections
	//if no: alert
	//if yes: continue
	//upload clinic to server:
	//check database for record
		// uploads records to server:
		//upload one record
		//check database for record
		//delete record
		//send progress notice
	//delete clinic
	//send progress notice
//clears local storage
//sends to completion screen:
	//display how many records were uploaded
