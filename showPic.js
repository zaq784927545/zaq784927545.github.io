function prepareGallery()
{

     if(!documet.getElementsByTagName)
		return false;
     if(!documet.getElementById)
		return false;
     if(!documet.getElementById("imagegallery"))
		return false;
	var gallery = document.getElementById("imagegallery");
	var links=gallery.getElementsByTagName("a");

	for( var i=0;i<links.length;i++)
	{
		links[i].onclick = function()
			{
				
				return showPic(this) ? false : true;
			}
	}


}
 <!--  add -->
	function addLoadEvent(func)
		{	
			var oldonload = window.omload;
			if(typeof window.onload != 'function')
			{
				window.onload = func;
			}
			else
			{
				window.onload = function()
				{
					oldonload();
					func();
				}
			}
		}



function showPic(whicp)
{
		if(!document.getElementById("zwf"))
			return false;
		


	var soure = 	whicp.getAttribute("href");
	var pla = 	document.getElementById("zwf");

	if(pla.nodeName != "IMG" )
		return false;


	pla.setAttribute("src",soure);	
		
	if(document.getElementById("des"))

	{
			// 显示提示文字
	var text = whicp.getAttribute("title") ? whicp.getAttribute("title") :"";
	var des = document.getElementById("des");
	if(des.firstChild.nodeType==3)
		{
			des.firstChild.nodeValue = text;			
		}
	

	}


	return  true;
	
	
}











