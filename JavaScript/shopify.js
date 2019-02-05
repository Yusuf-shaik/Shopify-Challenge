var count=0;

function search(){
	var m;

	var xhttp=new XMLHttpRequest();
	xhttp.onreadystatechange=function(){
		if(this.readyState==4 && this.status==200){
			var fullInfo=JSON.parse(xhttp.responseText)
			
			var table=document.getElementById("table")
			document.getElementById("table").innerHTML=""

			

			for (var i = 0; i < fullInfo.length; i++) {
				for (var k=0; k< fullInfo[i].keywords.length; k++){
					var arr=Object.values(fullInfo[i].keywords.split(", "))

					if (document.getElementById("search").value== arr[k]) {

						
						
						var row=table.insertRow(0)

						var fav=row.insertCell(0)
						var button=document.createElement("BUTTON")
						button.setAttribute("id", "favourite")

						var titleColumn=row.insertCell(1)
						var infoColumn=row.insertCell(2)

						button.innerText= ""
						fav.appendChild(button)

						tempTitle=fullInfo[i].title
						tempBody=fullInfo[i].body

						titleColumn.innerHTML= fullInfo[i].title
						infoColumn.innerHTML=fullInfo[i].body

						
						var favList=document.getElementById("favourite")

						favList.onclick=function(){
							
							var favoList=document.getElementById("favList")

							var undoo=document.getElementById("undob")
							
							document.getElementById("favouritesId").innerHTML="Favourites"
							button.style.backgroundImage="url('../Images/greenStar.png')"


							var row2=favoList.insertRow(0)

							var fav2=row2.insertCell(0)
							var undoButton=document.createElement("BUTTON")
							undoButton.setAttribute("id", "undob")

							var titleColumn2=row2.insertCell(1)
							var infoColumn2=row2.insertCell(2)

							button.innerText=""
							fav2.appendChild(undoButton)

							titleColumn2.innerHTML=tempTitle
							infoColumn2.innerHTML=tempBody
							

						}
						var deletethisnow=document.getElementById("favList")
						deletethisnow.onclick=function(){
								// alert("delete this")
								button.style.backgroundImage="url('../Images/grayStar.png')"
								var td=event.target.parentNode
								var tr=td.parentNode
								tr.parentNode.removeChild(tr)

							}

							
						}

					}

					
					
					
				}
			}
		}
		xhttp.open("GET", "https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000", true)
		xhttp.send();
	}

	window.setInterval (function clearIfEmpty()
	{
		if (document.getElementById("search").value=="")
		{
			document.getElementById("table").innerHTML=""
		}
	}, 1);
