var _CurrentPath = document.location.toString();

$( window ).resize(function() {
	var w = $(window).width();
	if(w>768)
	{
		
	}else{

	}
});


function resizeContent(){
	
}

function openMap1(){
	$.fancybox.open({
		padding : 0,
		width:800,
		height:600,
		href:'gmap_nefsatisofisi.html',
		type: 'script'
		});
		
	
}

function openMap2(){
	$.fancybox.open({
		padding : 0,
		width:800,
		height:600,
		href:'gmap_nefatakoy.html',
		type: 'iframe'
	});
}

function openFoldhomeDirect(){
	openGaleri();
	selectedGallery = 3;
	setTimeout("openGalleryFold();closeNefkesif();","100");
	ga('send', 'pageview', '/gallery-fold');
}

function successForm(){
	
}

function hedehodo(par){ 
	if(par.sonuc == "1"){
		$("#form").fadeOut();
		$(".talep-right .content").html("<p>Formunuz başarıyla ulaştı. En kısa sürede sizinle iletişime geçeceğiz, ilginize teşekkür ederiz.</p>");
		return false;
	}
}



$(document).ready(function() {
	$('.cinput').bind('keyup', function (event) {
		var str = $(this).val();
		str = str.replace(/[^A-Za-zÇŞÜĞÖçşüğöıİ0-9@.-_]/g, '')
		var res = str.substring(0, 1);
		if(res == 'i'){
			res = 'İ';
		}
		var sres = str.substring(1, $(this).val().length);
		this.value = res.toUpperCase()+''+sres.toLowerCase();
	})
	$('.GSMphone').inputmask("0-999-9999999");


	
	
	$("#contactform").submit(function(){
		var ad = $("#ad").val();
		var soyad = $("#soyad").val();
		var eposta = $("#eposta").val();
		var telefon = $("#telefon").val();
		var msj = $("#msj").val();
		var counter = 0;
		
		$("#contactform .hatamesaj").remove();
		
		if(ad.length==0)
		{
			counter++;
			$("#ad").addClass("error");
			$("#contactform").prepend("<p class='hatamesaj'>Lütfen adınızı giriniz</p>");
		}else{
			$("#ad").removeClass("error");
		}
		
		if(soyad.length==0)
		{
			counter++;
			$("#soyad").addClass("error");
			$("#contactform").prepend("<p class='hatamesaj'>Lütfen soyadınızı giriniz</p>");
		}else{
			$("#soyad").removeClass("error");
		}
		
		if(eposta.length==0)
		{
			counter++;
			$("#eposta").addClass("error");
			$("#contactform").prepend("<p class='hatamesaj'>Lütfen epostanızı giriniz</p>");
		}else{
			var filter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{2,4}$/;
			if(filter.test(eposta))
			{
				$("#eposta").removeClass("error");
			}else{
				counter++;
				$("#contactform").prepend("<p class='hatamesaj'>Lütfen geçerli bir eposta giriniz</p>");
				$("#eposta").addClass("error");
			}
		}
		
		
		
		if(telefon.length==0)
		{
			counter++;
			$("#telefon").addClass("error");
			$("#contactform").prepend("<p class='hatamesaj'>Lütfen telefonunuzu giriniz</p>");
		}else{
			$("#telefon").removeClass("error");
		}
		
		
		/*
		if(telefon.hasClass("error"))
		{
			counter++;
			$("#telefon").addClass("error");
		}else{
			$("#telefon").removeClass("error");
		}*/
		
		if(counter==0)
		{
			var duyuru = "Evet";
			if($("#checkbox01").prop("checked")==false)
				duyuru = "Hayır";
			
			
			$("#contactform").prepend("<p class='sendmesaj'>Gönderiliyor</p>");
			
			var data = $('#contactform').serialize();
			$.ajax({
			  type: "GET",
			  url: 'test.asp',
			  data: data,
			  success: function( response ) {
			  if( response=="200" ){
				$("#form").fadeOut();
				$(".talep-right .content").html("<p>Formunuz başarıyla ulaştı. En kısa sürede sizinle iletişime geçeceğiz, ilginize teşekkür ederiz.</p>");
				ga('send', 'pageview', '/thanks');
				return false;} }
			});
			
			
			return false;
		}else{
		
		}
		
		return false;
	});

	$("#gallery-kat-photos .photo").click(function(){
		if($(this).hasClass("zoomin")==true)
		{
			$(this).removeClass("zoomin");
		}else{
			$(this).addClass("zoomin");
		}
	});
	 
	  
	$('.fancyinline-2').fancybox({
		maxWidth	: 800,
		maxHeight	: 400,
		padding:0,
		fitToView	: false,
		width		: '90%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});

	$(".various").fancybox({
		maxWidth	: 800,
		maxHeight	: 600,
		fitToView	: false,
		width		: '70%',
		height		: '70%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});
});

function loadMapBase(id){
L.mapbox.accessToken = 'pk.eyJ1Ijoic2FiaXJhaG1haGJvb2IiLCJhIjoiY2pkemx4MGZ5MW9kZzJxczRqZnRldTIxMiJ9.rclfKGirYzrG9lC7UoT9aQ';
var map = L.mapbox.map(id, 'scopedigital.jod35iln')
    .setView([6.436792, 3.420170], 15);

// Start with a fixed marker.
var fixedMarker = L.marker(new L.LatLng(6.436792, 3.420170), {
    icon: L.mapbox.marker.icon({
        'marker-color': 'ff8888'
    })
}).bindPopup('NEF Şişli 25').addTo(map);

// Store the fixedMarker coordinates in a variable.
var fc = fixedMarker.getLatLng();

// Create a featureLayer that will hold a marker and linestring.
var featureLayer = L.mapbox.featureLayer().addTo(map);

// When a user clicks on the map we want to
// create a new L.featureGroup that will contain a
// marker placed where the user selected the map and
// a linestring that draws itself between the fixedMarkers
// coordinates and the newly placed marker.
map.on('click', function(ev) {
    // ev.latlng gives us the coordinates of
    // the spot clicked on the map.
    var c = ev.latlng;

    var geojson = [
      {
        "type": "Feature",
        
        "properties": {
          "marker-color": "#ff8888"
        }
      }, {
        "type": "Feature",
        "geometry": {
         
          "coordinates": [
            [fc.lng, fc.lat],
            [c.lng, c.lat]
          ]
        },
        "properties": {
          "stroke": "#f00",
          "stroke-opacity": 0.5,
          "stroke-width": 4
        }
      }
    ];

    featureLayer.setGeoJSON(geojson);

    // Finally, print the distance between these two points
    // on the screen using distanceTo().
    var container = document.getElementById('distance-estimate');
    container.innerHTML = "Yaklaşık mesafe " + (fc.distanceTo(c)).toFixed(0) + 'm';
});
}

var selectedGallery = -1;
$(window).load(function() {
	var w = $(window).width();
	if(w>768)
	{
		resizeContent();
	}
	loadMapBase("map");
	
	$("#loading").fadeOut();
	setTimeout("webSiteReady();","1000");
	
	$(".row").click(function(){
		$(this).addClass("touched");
	},function(){
		$(this).removeClass("touched");
	});
	
	$("#gallery .rows div").click(function(){
		$("#gallery .rows div").removeClass("select");
		$(this).addClass("select");
		
		var a = $(this).attr("data-id");
		if(a=="1")
		{
			selectedGallery =1;
			setTimeout("openGalleryDis();","100");
		}
		
		if(a=="2")
		{
			selectedGallery = 2;
			setTimeout("openGalleryIc();","100");
		}
		
		if(a=="3")
		{
			selectedGallery = 3;
			setTimeout("openGalleryFold();","100");
		}
		
		if(a=="4")
		{
			selectedGallery = 4;
			setTimeout("openGalleryKat();","100");
		}
	});
});





function webSiteReady(){
	$('body').addClass("ready");
	$('#home').addClass("come");
	if(_CurrentPath.indexOf('bilgi')!=-1)
	{
		openBilgiTalep();
	}
}

function go(id){ $('html, body').animate({ scrollTop: $("#"+id).offset().top}, 400,"linear"); }

/**** concept functions ****/
var conceptFlag = false;
var conceptArrowFlag = false;
var conceptCounter = 0;

function conceptSlider(){
	if(conceptArrowFlag==false)
	{
		$(".concept-current-slide").removeClass("concept-current-slide");
		$(".current-concept-thumb").removeClass("current-concept-thumb");
		conceptCounter++;
		var pos = conceptCounter%3;
		$("#concept-slide-"+pos).addClass("concept-current-slide");
		$("#concept-thumb-"+pos).addClass("current-concept-thumb");
	}
	conceptArrowFlag=false;
	if(conceptFlag)
		setTimeout("conceptSlider();","5000");
}

function rightConcept(){
	conceptArrowFlag=true;
	$(".concept-current-slide").removeClass("concept-current-slide");
	$(".current-concept-thumb").removeClass("current-concept-thumb");
	conceptCounter++;
	var pos = conceptCounter%3;
	$("#concept-slide-"+pos).addClass("concept-current-slide");
		$("#concept-thumb-"+pos).addClass("current-concept-thumb");
}

function leftConcept(){
	conceptArrowFlag=true;
	$(".concept-current-slide").removeClass("concept-current-slide");
	$(".current-concept-thumb").removeClass("current-concept-thumb");
	conceptCounter+=2;
	var pos = conceptCounter%3;
	$("#concept-slide-"+pos).addClass("concept-current-slide");
		$("#concept-thumb-"+pos).addClass("current-concept-thumb");
}

function openConcept(){
	var w = $(window).width();
	if(w>768)
	{
		$("section").show();
		$("#sectionCover").removeClass();
		$("#sectionCover").addClass("go1")
		$("#concept").addClass("come");
	}else{
		$("section").hide();
		$("#home").show();
		$("#concept").show();
		go("concept");
	}
	conceptFlag = true;
	conceptCounter = 0;
	$(".concept-slide").addClass("concept-current-slide");
	setTimeout("conceptSlider();","5000");
	ga('send', 'pageview', '/concept');
}
function closeConcept(){
	conceptFlag = false;
	
	var w = $(window).width();
	if(w>768)
	{
		$("#sectionCover").removeClass("go1")
		$("#concept").addClass("exit");
		setTimeout("freeConcept();","2000");
	}else{
		go("home");
		$("section").hide();
		$("#home").show();
	}
}
function freeConcept(){
	$("#concept").removeClass();
}

/**** location functions ****/
function openLocation(){
	var w = $(window).width();
	if(w>768)
	{
		$("#sectionCover").removeClass();
		$("#sectionCover").addClass("go1")
		$("#location").addClass("come");
	}else{
		$(".location-left").html("<div id='newmap'></div>")
		$("section").hide();
		$("#home").show();
		$("#location").show();
		go("location");
		loadMapBase("newmap");
	}
	ga('send', 'pageview', '/location');
}
function closeLocation(){
	var w = $(window).width();
	if(w>768)
	{
		$("#sectionCover").removeClass("go1")
		$("#location").addClass("exit");
		setTimeout("freeLocation();","2000");
	}else{
		go("home");
		$("section").hide();
		$("#home").show();
		$("#location").hide();
	}
}
function freeLocation(){
	$("#location").removeClass();
}

/**** arch functions ****/
function openArch(){
	var w = $(window).width();
	if(w>768)
	{
		$("#sectionCover").removeClass();
		$("#sectionCover").addClass("go1")
		$("#arch").addClass("come");
	}else{
		$("section").hide();
		$("#home").show();
		$("#arch").show();
		go("arch");
	}
	ga('send', 'pageview', '/architecture');
}
function closeArch(){
	var w = $(window).width();
	if(w>768)
	{
		$("#sectionCover").removeClass("go1")
		$("#arch").addClass("exit");
		setTimeout("freeArch();","2000");
	}else{
		$("section").hide();
		$("#home").show();
		$("#arch").hide();
		go("home");
	}
}

function freeArch(){
	$("#arch").removeClass();
}

/**** nefkesif functions ****/
function openNef(){
	
	var w = $(window).width();
	if(w>768)
	{
		$("#sectionCover").removeClass();
		$("#sectionCover").addClass("go1")
		$("#nefkesif").addClass("come");
	}else{
		$("section").hide();
		$("#home").show();
		$("#nefkesif").show();
		go("nefkesif");
	}
	ga('send', 'pageview', '/discover-nef');
}
function closeNefkesif(){
	var w = $(window).width();
	if(w>768)
	{
		$("#sectionCover").removeClass("go1")
		$("#nefkesif").addClass("exit");
		
		setTimeout("freeNefkesif();","1000");
	}else{
		$("section").hide();
		$("#home").show();
		$("#nefkesif").hide();
		go("home");
	}
}
function freeNefkesif(){
	$("#nefkesif").removeClass();
	$("#nef-kesif-detay-cover").removeClass("up");
	$(".current-nef-kesif-detay").removeClass("current-nef-kesif-detay");
}
function nefKesif(id)
{
	$(".nef-kesif-counter span").text(id+1);
	$("#nef-kesif-detay-cover").addClass("up");
	setTimeout("openNefKesif("+id+");","1000");
}
var nefCounter = 0;
function openNefKesif(id){
	nefCounter = id;
	$("#nef-kesif-detay-"+id).addClass("current-nef-kesif-detay");
	var w = $(window).width();
	if(w<768)
	{
		go("nef-kesif-detay-"+id);
	}
	ga('send', 'pageview', '/discover-nef-detail');
}
function nefKesifUp(){
	 $(".current-nef-kesif-detay").removeClass("current-nef-kesif-detay");
	 nefCounter+=3;
	 var pos = nefCounter%4;
	 $(".nef-kesif-counter span").text(pos+1);
	 $("#nef-kesif-detay-"+pos).addClass("current-nef-kesif-detay");
}
function nefKesifDown(){
	 $(".current-nef-kesif-detay").removeClass("current-nef-kesif-detay");
	 nefCounter++;
	 var pos = nefCounter%4;
	 $(".nef-kesif-counter span").text(pos+1);
	 $("#nef-kesif-detay-"+pos).addClass("current-nef-kesif-detay");
}

/**** gallery functions ****/
function leftGallery(){
	$(".cphoto").removeClass("cphoto");
	gcount--;
	
	if(selectedGallery==1)
	{
		var limit = $("#gallery-dis-photos .photo").size();
		if(gcount<1)
			gcount += limit;
		var pos = gcount % limit;
		$("#dis"+pos).addClass("cphoto");
	}
	
	if(selectedGallery==2)
	{
		var limit = $("#gallery-ic-photos .photo").size();
		if(gcount<1)
			gcount += limit;
		var pos = gcount % limit;
		$("#ic"+pos).addClass("cphoto");
	}
	
	if(selectedGallery==3)
	{
		var limit = $("#gallery-fold-photos .photo").size();
		if(gcount<1)
			gcount += limit;
		var pos = gcount % limit;
		
		if(pos==0)$("#gallery-fold-photos").text("Guest Room");
		if(pos==1)$("#gallery-fold-photos").text("Private Cinema");
		if(pos==2)$("#gallery-fold-photos").text("Guest Room");
		if(pos==3)$("#gallery-fold-photos").text("Fitness");
		if(pos==4)$("#gallery-fold-photos").text("Private Cinema");
		if(pos==5)$("#gallery-fold-photos").text("Fitness");
		if(pos==6)$("#gallery-fold-photos").text("Private Cinema");
		if(pos==7)$("#gallery-fold-photos").text("Private Cinema");
		
		$("#fold"+pos).addClass("cphoto");
	}
	
	if(selectedGallery==4)
	{
		var limit = $("#gallery-kat-photos .photo").size();
		if(gcount<1)
			gcount += limit;
		var pos = gcount % limit;
		
		if(pos==0)$("#gallery-kat-photos h2").text("1. Zemin Kat");
		if(pos==1)$("#gallery-kat-photos h2").text("1. Kat");
		if(pos==2)$("#gallery-kat-photos h2").text("2. Zemin Kat");
		if(pos==3)$("#gallery-kat-photos h2").text("2. Kat");
		if(pos==4)$("#gallery-kat-photos h2").text("3. Zemin Kat");
		if(pos==5)$("#gallery-kat-photos h2").text("4. Zemin Kat");
		if(pos==6)$("#gallery-kat-photos h2").text("5. Zemin Kat");
		if(pos==7)$("#gallery-kat-photos h2").text("Zemin Kat");
		$("#kat"+pos).addClass("cphoto");
	}
}

function rightGallery(){
	$(".cphoto").removeClass("cphoto");
	gcount++;
	
	var limit = 0;
	if(selectedGallery==1)
	{
		limit = $("#gallery-dis-photos .photo").size();
		
		var pos = gcount % limit;
		$("#dis"+pos).addClass("cphoto");
	}
	
	if(selectedGallery==2)
	{
		limit = $("#gallery-ic-photos .photo").size();
		
		var pos = gcount % limit;
		$("#ic"+pos).addClass("cphoto");
	}
	
	if(selectedGallery==3)
	{
		limit = $("#gallery-fold-photos .photo").size();
		
		var pos = gcount % limit;
		
		if(pos==0)$("#gallery-fold-photos h2").text("Guest Room");
		if(pos==1)$("#gallery-fold-photos h2").text("Private Cinema");
		if(pos==2)$("#gallery-fold-photos h2").text("Guest Room");
		if(pos==3)$("#gallery-fold-photos h2").text("Fitness");
		if(pos==4)$("#gallery-fold-photos h2").text("Private Cinema");
		if(pos==5)$("#gallery-fold-photos h2").text("Fitness");
		if(pos==6)$("#gallery-fold-photos h2").text("Private Cinema");
		if(pos==7)$("#gallery-fold-photos h2").text("Private Cinema");
		
		$("#fold"+pos).addClass("cphoto");
	}
	
	if(selectedGallery==4)
	{
		limit = $("#gallery-kat-photos .photo").size();
		
		var pos = gcount % limit;
		
		if(pos==0)$("#gallery-kat-photos h2").text("1. Zemin Kat");
		if(pos==1)$("#gallery-kat-photos h2").text("1. Kat");
		if(pos==2)$("#gallery-kat-photos h2").text("2. Zemin Kat");
		if(pos==3)$("#gallery-kat-photos h2").text("2. Kat");
		if(pos==4)$("#gallery-kat-photos h2").text("3. Zemin Kat");
		if(pos==5)$("#gallery-kat-photos h2").text("4. Zemin Kat");
		if(pos==6)$("#gallery-kat-photos h2").text("5. Zemin Kat");
		if(pos==7)$("#gallery-kat-photos h2").text("Zemin Kat");
		$("#kat"+pos).addClass("cphoto");
	}
}

var gcount = 0;
function openGalleryIc(){
	gcount = 0;
	var w = $(window).width();
	if(w<768){
		$(".gallery-photos").hide();
		var h = $(window).height();
		$(".gallery-photos").css({"height":h+"px"});
	}
	$("#gallery-ic-photos").show(function(){
		$("#gallery-ic-photos .photo:first").addClass("cphoto");
		$(".leftGalleryArrow").fadeIn();
		$(".rightGalleryArrow").fadeIn();
		$(".closeGallery").fadeIn();
	});
	if(w<768){
		go("gallery-ic-photos");
	}
	ga('send', 'pageview', '/gallery-inner');
}

function openGalleryDis(){
	gcount = 0;
	var w = $(window).width();
	if(w<768){
		$(".gallery-photos").hide();
		var h = $(window).height();
		$(".gallery-photos").css({"height":h+"px"});
	}
	$("#gallery-dis-photos").show(function(){
		$("#gallery-dis-photos .photo:first").addClass("cphoto");
		$(".leftGalleryArrow").fadeIn();
		$(".rightGalleryArrow").fadeIn();
		$(".closeGallery").fadeIn();
	});
	if(w<768){
		go("gallery-dis-photos");
	}
	ga('send', 'pageview', '/gallery-outer');
}

function openGalleryFold(){
	gcount = 0;
	var w = $(window).width();
	if(w<768){
		$(".gallery-photos").hide();
		var h = $(window).height();
		$(".gallery-photos").css({"height":h+"px"});
	}
	$("#gallery-fold-photos").show(function(){
		$("#gallery-fold-photos .photo:first").addClass("cphoto");
		$(".leftGalleryArrow").fadeIn();
		$(".rightGalleryArrow").fadeIn();
		$(".closeGallery").fadeIn();
	});
	if(w<768){
		go("gallery-fold-photos");
	}
}

function openGalleryKat(){
	gcount = 0;
	var w = $(window).width();
	if(w<768){
		$(".gallery-photos").hide();
		var h = $(window).height();
		$(".gallery-photos").css({"height":h+"px"});
	}
	$("#gallery-kat-photos").show(function(){
		$("#gallery-kat-photos .photo:first").addClass("cphoto");
		$(".leftGalleryArrow").fadeIn();
		$(".rightGalleryArrow").fadeIn();
		$(".closeGallery").fadeIn();
	});
	if(w<768){
		go("gallery-kat-photos");
	}
	ga('send', 'pageview', '/gallery-plans');
}

function openGaleri(){
	var w = $(window).width();
	
	if(w>768)
	{
		$("#sectionCover").removeClass();
		$("#sectionCover").addClass("go1")
		$("#gallery").addClass("come");
	}else{
		$("section").hide();
		$("#home").show();
		$("#gallery").show();
		go("gallery");
	}
	ga('send', 'pageview', '/gallery');
}
function closeGalleryPanel(){
	if(selectedGallery==-1)
	{
		$("#sectionCover").removeClass("go1")
		$(gallery).addClass("exit");
		setTimeout("freeGallery();","2000");
	}else{
		closeGallery();
		selectedGallery=-1;
	}
	var w = $(window).width();
	if(w<768)
	{
		$("section").hide();
		$("#home").show();
		$("#gallery").hide();
		go("home");
	}
}
function freeGallery(){
	$("#gallery").removeClass();
}

function closeGallery(){
	$(".leftGalleryArrow").fadeOut();
	$(".rightGalleryArrow").fadeOut();
	$(".closeGallery").fadeOut();
	$(".gallery-photos").hide(function(){
		$(".select").removeClass("select");
	});
	var w = $(window).width();
	if(w<768)
	{
		$("section").hide();
		$("#home").show();
		$("#gallery").hide();
		go("home");
	}
}

/**** contact functions ****/
function openContact(){
	var w = $(window).width();
	if(w>768)
	{
		$("#sectionCover").removeClass();
		$("#sectionCover").addClass("go1")
		$("#contact").addClass("come");
	}else{
		$("section").hide();
		$("#home").show();
		$("#contact").show();
		go("contact");
	}
	ga('send', 'pageview', '/contact');
}
function closeContact(){
	var w = $(window).width();
	if(w>768)
	{
		$("#sectionCover").removeClass("go1")
		$("#contact").addClass("exit");
		setTimeout("freeContact();","2000");
	}else{
		go("home");
		$("section").hide();
		$("#home").show();
		$("#contact").hide();
	}
}
function freeContact(){
	$("#contact").removeClass();
}

/**** talep functions ****/
function openBilgiTalep(){
	var w = $(window).width();
	if(w>768)
	{
		$("#sectionCover").removeClass();
		$("#sectionCover").addClass("go1")
		$("#talep").addClass("come");
	}else{
		$("section").hide();
		$("#home").show();
		$("#talep").show();
		go("talep");
	}
	ga('send', 'pageview', '/form');
}
function closeTalep(){
	var w = $(window).width();
	if(w>768)
	{
		$("#sectionCover").removeClass("go1")
		$("#talep").addClass("exit");
		setTimeout("freeTalep();","2000");
	}else{
		go("home");
		$("section").hide();
		$("#home").show();
		$("#talep").hide();
	}
	
}
function freeTalep(){
	$("#talep").removeClass();
}


/**** nef-hakkinda functions ****/
function openNefHakkinda(){
	var w = $(window).width();
	if(w>768)
	{
		$("#sectionCover").removeClass();
		$("#sectionCover").addClass("go1")
		$("#nef-hakkinda").addClass("come");
	}else{
		$("section").hide();
		$("#home").show();
		$("#nef-hakkinda").show();
		go("nef-hakkinda");
	}
	ga('send', 'pageview', '/about-nef');
}
function closeNefHakkinda(){
	var w = $(window).width();
	if(w>768)
	{
		$("#sectionCover").removeClass("go1")
		$("#nef-hakkinda").addClass("exit");
		setTimeout("freeNefHakkinda();","2000");
	}else{
		$("section").hide();
		$("#home").show();
		$("#nef-hakkinda").hide();
		go("home");
	}
}
function freeNefHakkinda(){
	$("#nef-hakkinda").removeClass();
}

function closeAbout(){
	var w = $(window).width();
	
	if(w>768)
	{
		
	}else{
		$("about").hide();
		go("home");
	}
}

