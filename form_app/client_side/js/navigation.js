
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

var page_no="page"+i
	

var get_page=document.getElementById(page_no);

function nextPage() {
		j=i+1
		page_next="page"+j
	if (document.getElementById(page_next))
	{
		get_page.className="off-screen-right";
		i++;
		page_no="page"+(i);
		get_page=document.getElementById(page_no);
		get_page.className="visible";
		get_page.addEventListener('click',nextPage);
		alert(page_no);
	}
};


get_page.addEventListener('click' ,nextPage);

    

