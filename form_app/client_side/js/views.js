
//menu display

var menu_visible = false;

function displayMenu() {
    
    if (document.getElementById('canvas').className == 'shifted') {
        document.getElementById('canvas').className = '';
        menu_visible = false;
    } else {
        document.getElementById('canvas').className = 'shifted';
        menu_visible = true;
    }
}

document.getElementById("menu_button").addEventListener("click", displayMenu);

function activateBackButton() {
    console.log('test');
    var button_for_back = document.getElementById("back_button");
    if (current_page == 'page_one'){
        button_for_back.disabled = true;
    } else{
        button_for_back.disabled = false;
    }       
};

// Page display/transition:

var current_page = "page_one";
var last_page = "page_one";

function forwardPage(page_from, page_to) {
    
    document.getElementById(page_to).className = 'page visible';
    document.getElementById("back_button").disabled = false;
    
    current_page = page_to;
    last_page = page_from;
    
    activateBackButton();
}

function backPage(page_from, page_to) {
    document.getElementById(page_from).className = 'page';
    activateBackButton();
    current_page=lage_page;
    
}

document.getElementById("one_to_two").addEventListener("click",
    function(){
        forwardPage("page_one", "page_two");
    }
    ,false);

// BACK Button

function goBack() {
    if (current_page != 'page_one'){
        backPage(current_page, last_page);
    }
};

document.getElementById("back_button").addEventListener("click", goBack);

activateBackButton();

// add a batey button

document.getElementById("btn_add_batey").addEventListener("click",function(){
        forwardPage("page_two", "add_batey");
    }
    ,false);

