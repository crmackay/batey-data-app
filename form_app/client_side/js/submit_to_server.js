
THIS WILL HAVE TO BE VIA AJAX...!!

//creates a hidden form with the returned data
function post_to_url(path, params, method) {
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




//get number of clinic records in database - set as a variable
//get number of encounter records in database - set as a variable
//for every clinic record
	//for every encounter record
		//	return data
		// enter into hiddep form
		// submit hidden form 
		// query database (should be part of the submit python script?)


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