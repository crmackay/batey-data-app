
var current_page = "page_one";

var last_page = "page_one";

var menu_visible = false;

//Menu Display

function displayMenu() {
    
    if (menu_visible == false) {
        document.getElementById('canvas').style.left = '175px';
        menu_visible = true;
    } else {
        document.getElementById('canvas').style.left = '0px';
        menu_visible = false;
    }
}

// Whether to Activate the Back Button

function activateBackButton() {
    var button_for_back = document.getElementById("back_button");
    if (current_page == 'page_one') {
        button_for_back.disabled = true;
    } else {
        button_for_back.disabled = false;
    }
}

// Page display/transition---------------

function forwardPage(page_from, page_to) {
    
    document.getElementById(page_to).style.right = '0';
    document.getElementById("back_button").disabled = false;
    
    current_page = page_to;
    last_page = page_from;
    
    activateBackButton();
}

function backPage(page_from, page_to) {
    document.getElementById(page_from).style.right = '-125%';
    activateBackButton();
    current_page = lage_page;   
}

// Back Button Functionality

function goBack() {
    if (current_page != 'page_one') {
        backPage(current_page, last_page);
    }
}

activateBackButton();

// Add Event Listeners

document.getElementById("one_to_two").addEventListener("click",
    function(){
        forwardPage("page_one", "page_two");
    }
    ,false);

document.getElementById("menu_button").addEventListener("click", displayMenu);

document.getElementById("back_button").addEventListener("click", goBack);

document.getElementById("btn_add_batey").addEventListener("click", 
    function(){
        forwardPage("page_two", "add_batey");
    }, false);

