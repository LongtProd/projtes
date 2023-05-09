var xbody = document.getElementsByTagName("BODY")[0];
var cobmes = document.querySelectorAll(".btn-mark-wall");
var redigroproqro = document.querySelector("#redigroproqro");
var redigroxrdg = document.querySelector("#redigroxrdg");

var kyrvfflxc = "";
dosofink();
function dosofink() {
    
    let gothashURL = window.location.hash;
    if(gothashURL == ""){
        furror();
    }else{
        bowmaus("0", "page");
    }
}

function bowmaus(iviv, whos) {
   var gotnewURL = window.location.hash;
   var newURL = gotnewURL.replace("#", "");
   let giftwindow = newURL;
   $.ajax({
       type: "POST",
       url: "https://bastestquest.000webhostapp.com//tromideian/", 
       dataType: "json",
       data: {giftwindow: giftwindow},
       success: function(responds){
        
           kyrvfflxc = responds;
           var vralx = JSON.stringify(kyrvfflxc.map(lcpk => lcpk.giftcode)).replace(/[\[\]"]+/g,""); 
           if(vralx.length == 4){
            furwork();
           }else{
               furror();
           }
           
           //newrannew();
       }, error : function(jqXHR, textStatus, errorThrown) {
           let useronline = teslaser();
           if (useronline == 0) {
               alert("Ooops! It seems your network is slow or disconnected")
           }else{
               alert("Ooops! This is not your fault. Try Again...");
           }
   }	 
   }); 
}

function furwork(){
    boxingworks();
    document.getElementById("redigroproheader").innerHTML = `Your Invite link is valid.`;
    document.getElementById("redigroprobody").innerHTML = `Once used in the raffle, you can't use this link again. Good Luck!!!`;
}
function furror(){
    boxingworks();
    runoffgifts()
    document.getElementById("redigroproheader").innerHTML = `Your Invite link has expired or its invalid.`;
    document.getElementById("redigroprobody").innerHTML = `Sorry! You need an invite link to participate in the raffle, to win a Tesla`;
}

function boxingworks(){
    document.getElementById("worping").style.display = "none";
    xbody.classList.remove('ldbody');
    xbody.classList.add('bodilies');
    document.getElementById("top").style.display  = "";
    redigroproqro.classList.add('active');
}
function runoffgifts() {
    cobmes.forEach(function (item, index, array) { 
        item.style.display = "none";
       
    });
}
/*
setTimeout(() => {
    document.getElementById("worping").style.display = "none";
    //document.getElementById("teslabody").removeAttribute('style');
    xbody.classList.remove('ldbody');
    xbody.classList.add('bodilies');
    document.getElementById("top").style.display  = "";
    redigroproqro.classList.add('active');
}, 5000);*/

cobmes.forEach(function (item, index, array) { 
    item.addEventListener("click", function() { 
        //document.getElementById("brighterCro").style.display = "none";

        document.getElementById("brighterCro").innerHTML = "";
        document.getElementById("worping").style.display = "";
        xbody.classList.remove('bodilies');
        xbody.classList.add('ldbody');
        document.getElementById("top").style.display  = "none";
        window.scrollTo(0, 0);
        var brighterCro = document.getElementById("brighterCro");

        var xhr = new XMLHttpRequest();
        var url = 'zoomcloser.html';
        xhr.open('GET', url, true);
        xhr.onload = function() {
        if (xhr.status === 200) {
            // Set the innerHTML property of the div element to display the fetched content
            //console.log(xhr.response)
            brighterCro.innerHTML = xhr.response;
            combesscri();
        }
        else {
            console.log('Request failed.  Returned status of ' + xhr.status);
        }
        };
        xhr.send();

        
    });
});

function combesscri(){
        var script = document.createElement('script');
        var surl = 'assets/js/index.min.js';
        script.src = surl;
        document.body.appendChild(script);
        var script = document.createElement('script');
        var scurl = 'assets/js/royinmath.js';
        script.src = scurl;
        document.body.appendChild(script);
        combesfin();
}
function combesfin() {
    xbody.classList.remove('ldbody');
    xbody.classList.add('bodilies');
    xbody.style.background = "#454954";
    document.getElementById("navli").style.display = "none";
    
    document.getElementById("worping").style.display = "none";
    document.getElementById("top").style.display  = "";
}

redigroxrdg.onclick = function(){
    redigroproqro.classList.remove('active');
    redigroproqro.classList.remove('active');
}


function teslaser() {
	if (navigator.onLine) {
		return 1;
	}else{
		return 0;
	}
}