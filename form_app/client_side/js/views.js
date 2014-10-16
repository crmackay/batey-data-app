
var current_page = "page_one";

var last_page = "page_one";

var menu_visible = false;

//Menu Display

function displayMenu() {
    
    if (menu_visible == false) {
        document.getElementById('canvas').style.left = '80%';
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
    current_page = last_page;   
    activateBackButton();
}

// Back Button Functionality

function goBack() {
    if (current_page != 'page_one') {
        backPage(current_page, last_page);
    }
}

activateBackButton();

var start_target = null;
var end_target = null;

function detectTap(start_target,end_target, e) {
    console.log(start_target);
    console.log(end_target);
    
    if (start_target === end_target){
        displayMenu();
        console.log('tap event fired');
        e.preventDefault();
    }
    var start_target = null;
    var end_target = null;
}

// Add Event Listeners

document.getElementById("one_to_two").addEventListener("click",
    function(e){
        forwardPage("page_one", "page_two");
    }
    ,false);

document.getElementById("menu_button").addEventListener("click", displayMenu);
document.getElementById("menu_button").addEventListener("touchstart", 
    function(e) {
        e.preventDefault();
    });

document.getElementById("menu_button").addEventListener("touchend", 
    function(e) {
        var last_touch = e.changedTouches[0];
        end_x = last_touch.clientX;
        end_y = last_touch.clientY;
        var start_target = last_touch.target;
        var end_target = document.elementFromPoint(end_x,end_y);
        detectTap(start_target,end_target, e);
    });





document.getElementById("back_button").addEventListener("click", goBack);

document.getElementById("button-add-batey").addEventListener("click", 
    function(e){
        document.getElementById('add-batey-modal').classList.toggle('visible');
    }, false);

document.getElementById('page_one').style.right='0';

document.getElementById('get-position').addEventListener('click', getPosition);

document.getElementById('close-add-batey').addEventListener('click', 
    function(e){
        document.getElementById('add-batey-modal').classList.toggle('visible');
});

