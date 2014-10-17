
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

var i=0;

var page_no="page"+i;
	
var current_page=document.getElementById(page_no);

function nextPage() {
		j=i+1;
		next_page="page"+j;
	if (document.getElementById(next_page))
	{
		current_page.className="off-screen-under";
		i++;
		page_no="page"+i;
		current_page=document.getElementById(page_no);
		current_page.className="visible";
		current_page.addEventListener('click',nextPage);
	}
};


current_page.addEventListener('click' ,nextPage);

    

