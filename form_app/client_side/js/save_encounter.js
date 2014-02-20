


// create a javascript object that has all input names and values
//	var inputs={name1:value1,name2:value2...namei, valuei}
// insert this object into the taffydb database	
//	encounters.insert(inputs);

function saveEncounter()
	{
	var systolic1 = document.getElementById("systolic1").value;

	var diastolic1 = document.getElementById("diastolic1").value;
	
	var clinicID = document.getElementByID("clinicID").value;
	
	//insert variables into the ENCOUNTERS database
	encounters.insert({"systolic1":systolic1},{"diastolic1":diastolic1},{"clinicID":clinicID});
	
	alert(encounters({systolic1:"120"}).count());
	
	}