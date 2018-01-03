imgPath = new Array;
SiClickGoTo = new Array;
version = navigator.appVersion.substring(0,1);
if (version >= 3)
	{
	i0 = new Image;
	i0.src = 'img/img1.png';
	SiClickGoTo[0] = "pages/garcon.html";
	imgPath[0] = i0.src;
	i1 = new Image;
	i1.src = 'img/img2.png';
	SiClickGoTo[1] = "pages/filles.html";
	imgPath[1] = i1.src;
	i2 = new Image;
	i2.src = 'img/img3.png';
	SiClickGoTo[2] = "pages/moinsde5ans.html";
	imgPath[2] = i2.src;
	}
a = 0;
function startAnim()
	{
	if (version >= 3)
		{
		document.write('<a href="#" onclick="ImgDest();return(false)"><img src="url_image0" border="0" alt="Menu" name="defil" /></a>');
		defilimg()
		}
	else
		{
		document.write('<a href="Lien0"><img src="url_image0" border="0" /></a>')
		}
	}
function ImgDest()
	{
	document.location.href = SiClickGoTo[a-1];
	}
function defilimg()
	{
	if (a == 3)
		{
		a = 0;
		}
	if (version >= 3)
		{
		document.defil.src = imgPath[a];
		tempo3 = setTimeout("defilimg()",3000);
		a++;
		}
	}
