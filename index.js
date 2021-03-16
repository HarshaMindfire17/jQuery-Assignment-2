var id1=1,id2=1;
$(document).ready(function() {
	$(".container").hide();
	$(".container").fadeIn(1000);
	$('#country').on('change', function() 
	{
		var states=[],country;
		country=$("#country").find("option:selected").text();

		if(country=="India")
		{   
		states=["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chandigarh","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh",
		"Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram",
		"Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttarakhand","Uttar Pradesh","West Bengal"];
		}
		else if(country=="U.S.A")
		{
		states=["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii",
 				"Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota",
 				"Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina",
 				"North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee",
 				"Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];
		}
		else if(country=="U.K")
		{
			states=["Scotland","Northern Ireland","Wales","North East","North West","Yorkshire and the Humber","West Midlands","East Midlands",
				"South West","South East","East of England","Greater London"];
		}
		else if(country=="Japan")
		{
			states=["Hokkaido","Tohoku","Kanto","Chubu","Kinki/Kansai","Chugoku","Shikoku","Kyushu"];
		}
		else if(country=="France")
		{
			states=["Grand-Est","Nouvelle-Aquitaine","Auvergne-Rhône-Alpes","Bourgogne-Franche-Comté","Occitanie","Hauts-de-France","Normandie",
				"Bretagne","Corse","Centre","Île-de-France","Pays de la Loire","Provence-Alpes-Côte d’Azur"];
		}
		else if(country=="Russia")
		{
			states=["Adygey", "Altai", "Bashkortostan", "Buryat", "Chechnya", "Chuvash", "Dagestan", "Ingushetia", "Kabardino-Balkar","Sakha", 
		"Kalmykia","Karachay-Cherkess","Karelia","Khakass","Komi","Mari El","Mordovia","North Ossetia-Alania", "Tatarstan","Tuva","Udmurt"];
		}
		var txt = ' <option value="">--Select one--</option>';
		for(i in states)
		{
        	txt = txt+'<option value="' + states[i] + '">' + states[i] + '</option>';
 		}
        $("#state").html(txt);
    });

	$(".plus1").click(function(){
		var txt1='<textarea id='+id1+'1 name="curr[]" rows=2></textarea>';
		var txt2='<i id="'+id1+'"onclick="deleteElements(this,1)" class="fa fa-minus-square" aria-hidden="true"></i>';
		id1+=1;
		$('.addresslist').append(txt1+txt2);
	});
	$(".plus2").click(function(){
		var txt1='<input type="tel" id='+id2+'2 class="mobile_no" name="phno[]" placeholder="+91 XXXXXXXXXX" pattern="[+91 ]{4}[0-9]{10}">';
		var txt2='<i id="'+id2+'"onclick="deleteElements(this,2)" class="fa fa-minus-square" aria-hidden="true"></i>';
		id2+=1;
		$('.contactlist').append(txt1+txt2);
	});
	$("#DOB").change(function(){
	var date=$("#DOB").val();
	var curr=new Date();
	if(new Date(date)>curr)
	{
		var txt = $('<p>Please enter a valid D.O.B</p>');
		$("#DOB").after(txt);
		txt.addClass("red");
		return false;
	}
	else
	{
		$(".red").remove();
	}});
});
function deleteElements(it,no)
{
	var id=$(it).attr('id');
	id="#"+id+no;
	$(id).remove();
	$(it).remove();
}
$(window).scroll(function() 
{
  if ($(window).scrollTop() >= (($(document).height() - $(window).height())- $('.container').height()/3)) {
    $("#arrow").fadeIn()
    .click(function()
    {
		$(window).scrollTop(0);
	});
  }
  if ($(window).scrollTop()==0) {
    $("#arrow").fadeOut();}
});

var a,b,result,operator;
function callCaptcha()
{
	a=Math.floor(Math.random() * 100)+1;//Math.random(1,99);
	b=Math.floor(Math.random() * 100);
	var operations=["+","-","*","/"];
	operator=operations[Math.floor(Math.random() * operations.length)];
	if(operator=="/")
	{
		while(((a/b)!=Math.round(a/b))||b==0)
		{
			a=Math.floor(Math.random() * 100)+1;//a may be prime
			b=Math.floor(Math.random() * 100);
		}
	}
	$("#calc").text(a+operator+b);
	switch(operator)
	{
		case "+":
			result=a+b;
			break;
		case "-":
			result=a-b;
			break;
		case "*":
			result=a*b;
			break;
		case "/":
			result=a/b;
			break;
	}
}

function validate()
{
	var elements=[],i,x,y,inputs,check1,check2,flag;
	inputs = $('input');
	
	for(i=0;i<inputs.length;i++)
	{
		elements.push(inputs[i].id.toString());
	}
	elements.pop();
	elements.push("address");

	inputs = $('select');
	for(i=0;i<inputs.length;i++)
	{
		elements.push(inputs[i].id.toString());
	}
	inputs=["middle_name","DOB","zip","male","female","other","pan"];
	for(i=0;i<elements.length;i++)
	{
		y=elements[i].toString();
		if (!(inputs.includes(y)))
		{
			x=$("#"+y).val();
			if (x == "") 
		    {
			    alert("Please fill '"+y.replace("_"," ")+"'");
			    return false;
		  	}
		}	
	}

	
	check1=$("#email_id").val();
	check1=check1.toLowerCase();
	if(!(check1.match(/^[a-z0-9_]+@[a-z]+[.]{1}[a-z]{2,3}$/)))
	{
		var txt = $('<p>Please enter a valid email id</p>');
		$("#email_id").after(txt);
		txt.addClass("red");
		return false;
	}
	else
	{
		$(".red").remove();
	}
	check1=$("#aadhar").val();
	if(!(check1.length==12))
	{	
		var txt = $('<p>Please enter a valid Aadhar number</p>');
		$("#aadhar").after(txt);
		txt.addClass("red");
		return false;
	}
	else
	{
		$(".red").remove();
	}
	check1=$(".mobile_no").val();
	if(!(check1.match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/)))
	{
		alert("Please enter a valid mobile no.");
		return false;
	}
	if(result!=$("#captcha").val())
	{
		$("#recap").addClass("red").css("display","block");
		$("#recap").text("Please re-enter captcha");
		callCaptcha();
		return false;
	}
	
	$("#recap").css("display","none");
	$("#captcha").val("");
	callCaptcha();
}

function toggle(id) 
{
	var decider=id;

    if (decider=="yes")
    {
        $("#no").removeAttr('checked');
    }    
    if (decider=="no")
    {
        $("#yes").removeAttr('checked');
    } 
 }