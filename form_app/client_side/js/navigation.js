
//insert onclick="nextpage()" etc

//function nextpage(){}

function nav(){
	if (document.getElementById("main-nav").style.display =="none")
		{
		document.getElementById("main-nav").style.display="inline";
		}
	else {
		document.getElementById("main-nav").style.display="none";
	}
}




function displayPage(page) {
	// Create the <style> tag
	var style = document.createElement("style");

	// Add a media (and/or media query) here if you'd like!
	// style.setAttribute("media", "screen")
	// style.setAttribute("media", "@media only screen and (max-width : 1024px)")

	// WebKit hack :(
	style.appendChild(document.createTextNode(""));

	// Add the <style> element to the page
	document.head.appendChild(style);

	return style.sheet;
}

