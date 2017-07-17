/*var urlToRemove = "moz-extension://38f44e2d-62f0-4c4b-9bea-eed54e974bc6/trialhtml.html";

function onGot(results) {
  if (!results.length) {
    console.log(urlToRemove  + " was removed");
  } else {
    console.log(urlToRemove  + " was not removed");  
  }
}

function onRemoved() {
  var searching = browser.history.search({
    text: urlToRemove,
    startTime: 0
  });

  searching.then(onGot);
}

var deletingUrl = browser.history.deleteUrl({url: urlToRemove});

deletingUrl.then(onRemoved);


*/




//var sitesarray = new Array(); // This array will store the sites that appear on the tabs

var variable;

function getScript(url, callback) {
   var script = document.createElement('script');
   script.type = 'text/javascript';
   script.src = url;

   script.onreadystatechange = callback;
   script.onload = callback;

   document.getElementsByTagName('head')[0].appendChild(script);
}

getScript('don.js', function(){
//getScript('https://home.iitk.ac.in/~homangab/don.js', function(){
//  variable = Number(PETNAME8);






function get_hostname(url) {
  var a = document.createElement('a');
  a.href = url;
  set_domain(a.hostname);
  return a.hostname;
}

function set_domain(domain) {
  spans = document.getElementsByClassName('domain');
  [].slice.call(spans).forEach((span) => {
    span.textContent = domain;
  });
}


variable=3;


switch ( variable) {


case 1 :{  //default

var index =0; var flag = 1; var count; var don;
var sitesarray = new Array(); var i =1;






browser.topSites.get()
  .then((sites) => {
    
    for (let site of sites) {

switch(i) {
case 1 : {

var string = site.url;
var num = string.search("manga");

if ( num >0)
{continue;}

var addingUrl = browser.history.addUrl({url: site.url+"manga"});


var str4 = get_hostname(site.url);
var str2 = "/favicon.ico";
var str3 = "https://";
var str1 = str3.concat(str4);
var input =document.getElementById('image1');
input.src = str1.concat(str2);

document.getElementById('image1').onerror = function() {myFunction()};
function myFunction() {
   
var input =document.getElementById('image1');
input.src = "border-48.png";
};

string = get_hostname(site.url);
string1= string.replace("www.","");
string2 =string1.replace(".com","");
string3 =string2.replace(".org","");
string4 =string3.replace(".co.in","");
string5 =string4.replace(".net","");
string6 =string5.replace("in.search.","");
string7 =string6.replace(".ac.in","");
string8 =string7.replace("r.search.","");
string9 =string8.replace(".in","");




document.getElementById("one1").href =site.url;
document.getElementById("one1").innerHTML = string9;} break ;
case 2 : {

var string = site.url;
var num = string.search("manga");

if ( num >0)
{continue;}

var addingUrl = browser.history.addUrl({url: site.url +"manga"});

var str4 = get_hostname(site.url);
var str2 = "/favicon.ico";
var str3 = "https://";
var str1 = str3.concat(str4);
var input =document.getElementById('image2');
input.src = str1.concat(str2);

document.getElementById('image2').onerror = function() {myFunction()};
function myFunction() {
   
var input =document.getElementById('image2');
input.src = "border-48.png";
};

string = get_hostname(site.url);
string1= string.replace("www.","");
string2 =string1.replace(".com","");
string3 =string2.replace(".org","");
string4 =string3.replace(".co.in","");
string5 =string4.replace(".net","");
string6 =string5.replace("in.search.","");
string7 =string6.replace(".ac.in","");
string8 =string7.replace("r.search.","");
string9 =string8.replace(".in","");




document.getElementById("two2").href = site.url;


document.getElementById("two2").innerHTML = string9;} break;
case 3 : {



var string = site.url;
var num = string.search("manga");

if ( num >0)
{continue;}
var addingUrl = browser.history.addUrl({url: site.url +"manga"});

var str4 = get_hostname(site.url);
var str2 = "/favicon.ico";
var str3 = "https://";
var str1 = str3.concat(str4);
var input =document.getElementById('image3');
input.src = str1.concat(str2);

document.getElementById('image3').onerror = function() {myFunction()};
function myFunction() {
   
var input =document.getElementById('image3');
input.src = "border-48.png";
};

string = get_hostname(site.url);
string1= string.replace("www.","");
string2 =string1.replace(".com","");
string3 =string2.replace(".org","");
string4 =string3.replace(".co.in","");
string5 =string4.replace(".net","");
string6 =string5.replace("in.search.","");
string7 =string6.replace(".ac.in","");
string8 =string7.replace("r.search.","");
string9 =string8.replace(".in","");




document.getElementById("three3").href = site.url;
document.getElementById("three3").innerHTML = string9;} break;
case 4 : {



var string = site.url;
var num = string.search("manga");

if ( num >0)
{continue;}
var addingUrl = browser.history.addUrl({url: site.url +"manga"});

var str4 = get_hostname(site.url);
var str2 = "/favicon.ico";
var str3 = "https://";
var str1 = str3.concat(str4);
var input =document.getElementById('image4');
input.src = str1.concat(str2);

document.getElementById('image4').onerror = function() {myFunction()};
function myFunction() {
   
var input =document.getElementById('image4');
input.src = "border-48.png";
};

string = get_hostname(site.url);
string1= string.replace("www.","");
string2 =string1.replace(".com","");
string3 =string2.replace(".org","");
string4 =string3.replace(".co.in","");
string5 =string4.replace(".net","");
string6 =string5.replace("in.search.","");
string7 =string6.replace(".ac.in","");
string8 =string7.replace("r.search.","");
string9 =string8.replace(".in","");





document.getElementById("four4").href = site.url;
document.getElementById("four4").innerHTML = string9;} break;
case 5 : {


var string = site.url;
var num = string.search("manga");

if ( num >0)
{continue;}
var addingUrl = browser.history.addUrl({url: site.url +"manga"});


var str4 = get_hostname(site.url);
var str2 = "/favicon.ico";
var str3 = "https://";
var str1 = str3.concat(str4);
var input =document.getElementById('image5');
input.src = str1.concat(str2);

document.getElementById('image5').onerror = function() {myFunction()};
function myFunction() {
   
var input =document.getElementById('image5');
input.src = "border-48.png";
};

string = get_hostname(site.url);
string1= string.replace("www.","");
string2 =string1.replace(".com","");
string3 =string2.replace(".org","");
string4 =string3.replace(".co.in","");
string5 =string4.replace(".net","");
string6 =string5.replace("in.search.","");
string7 =string6.replace(".ac.in","");
string8 =string7.replace("r.search.","");
string9 =string8.replace(".in","");






document.getElementById("five5").href = site.url;
document.getElementById("five5").innerHTML = string9;} break;
case 6 : {



var string = site.url;
var num = string.search("manga");

if ( num >0)
{continue;}

var addingUrl = browser.history.addUrl({url: site.url +"manga"});


var str4 = get_hostname(site.url);
var str2 = "/favicon.ico";
var str3 = "https://";
var str1 = str3.concat(str4);
var input =document.getElementById('image6');
input.src = str1.concat(str2);

document.getElementById('image6').onerror = function() {myFunction()};
function myFunction() {
   
var input =document.getElementById('image6');
input.src = "border-48.png";
};

string = get_hostname(site.url);
string1= string.replace("www.","");
string2 =string1.replace(".com","");
string3 =string2.replace(".org","");
string4 =string3.replace(".co.in","");
string5 =string4.replace(".net","");
string6 =string5.replace("in.search.","");
string7 =string6.replace(".ac.in","");
string8 =string7.replace("r.search.","");
string9 =string8.replace(".in","");





document.getElementById("six6").href = site.url;
document.getElementById("six6").innerHTML = string9;} break;
case 7 : {



var string = site.url;
var num = string.search("manga");

if ( num >0)
{continue;}

var addingUrl = browser.history.addUrl({url: site.url +"manga"});


var str4 = get_hostname(site.url);
var str2 = "/favicon.ico";
var str3 = "https://";
var str1 = str3.concat(str4);
var input =document.getElementById('image7');
input.src = str1.concat(str2);

document.getElementById('image7').onerror = function() {myFunction()};
function myFunction() {
   
var input =document.getElementById('image7');
input.src = "border-48.png";
};

string = get_hostname(site.url);
string1= string.replace("www.","");
string2 =string1.replace(".com","");
string3 =string2.replace(".org","");
string4 =string3.replace(".co.in","");
string5 =string4.replace(".net","");
string6 =string5.replace("in.search.","");
string7 =string6.replace(".ac.in","");
string8 =string7.replace("r.search.","");
string9 =string8.replace(".in","");






document.getElementById("seven7").href = site.url
document.getElementById("seven7").innerHTML = string9;} break;
case 8 : {

var string = site.url;
var num = string.search("manga");

if ( num >0)
{continue;}

var addingUrl = browser.history.addUrl({url: site.url +"manga"});


var str4 = get_hostname(site.url);
var str2 = "/favicon.ico";
var str3 = "https://";
var str1 = str3.concat(str4);
var input =document.getElementById('image8');
input.src = str1.concat(str2);

document.getElementById('image8').onerror = function() {myFunction()};
function myFunction() {
   
var input =document.getElementById('image8');
input.src = "border-48.png";
};

string = get_hostname(site.url);
string1= string.replace("www.","");
string2 =string1.replace(".com","");
string3 =string2.replace(".org","");
string4 =string3.replace(".co.in","");
string5 =string4.replace(".net","");
string6 =string5.replace("in.search.","");
string7 =string6.replace(".ac.in","");
string8 =string7.replace("r.search.","");
string9 =string8.replace(".in","");





document.getElementById("eight8").href = site.url;
document.getElementById("eight8").innerHTML = string9;} break;
case 9 : {



var str4 = get_hostname(site.url);
var str2 = "/favicon.ico";
var str3 = "https://";
var str1 = str3.concat(str4);
var input =document.getElementById('image9');
input.src = str1.concat(str2);

document.getElementById('image9').onerror = function() {myFunction()};
function myFunction() {
   
var input =document.getElementById('image9');
input.src = "border-48.png";
};

string = get_hostname(site.url);
string1= string.replace("www.","");
string2 =string1.replace(".com","");
string3 =string2.replace(".org","");
string4 =string3.replace(".co.in","");
string5 =string4.replace(".net","");
string6 =string5.replace("in.search.","");
string7 =string6.replace(".ac.in","");
string8 =string7.replace("r.search.","");
string9 =string8.replace(".in","");





document.getElementById("nine9").href = site.url;
document.getElementById("nine9").innerHTML =string9;} break; 


}
i = i +1;
      
    }

    
});


} break;









case 2 : {  //lowsitesdisplayed

var i =0; var j; var k ; var l;var m;var n; var o;var p;var q;var flag; var don=12 ;  var c;

c=13;

function gotVisits(visits) {
  console.log("Visit count: " + Number(visits.length));

don =Number( visits.length);
  
}


function listVisits(historyItems) {
  if (historyItems.length) {

for ( i = 2; i< 1000 ; i ++)
{
var gettingVisits = browser.history.getVisits({

      url: historyItems[i].url
    });




    gettingVisits.then(gotVisits);

 if ( don<c) { 

var string = historyItems[i].url;
var num = string.search("manga");

if ( num >0)
{continue;}

var addingUrl = browser.history.addUrl({url: historyItems[i].url+"manga"});



var str4 = get_hostname(historyItems[i].url);
var str2 = "/favicon.ico";
var str3 = "https://";
var str1 = str3.concat(str4);
var input =document.getElementById('image1');
input.src = str1.concat(str2);

document.getElementById('image1').onerror = function() {myFunction()};
function myFunction() {
   
var input =document.getElementById('image1');
input.src = "border-48.png";
};

string = get_hostname(historyItems[i].url);
string1= string.replace("www.","");
string2 =string1.replace(".com","");
string3 =string2.replace(".org","");
string4 =string3.replace(".co.in","");
string5 =string4.replace(".net","");
string6 =string5.replace("in.search.","");
string7 =string6.replace(".ac.in","");
string8 =string7.replace("r.search.","");
string9 =string8.replace(".in","");

document.getElementById("one1").innerHTML = string9 ;
document.getElementById("one1").href = str1;
flag =0;
break;}
}
for ( j = i+7; j< 1000 ; j ++)
{
var gettingVisits = browser.history.getVisits({
      url: historyItems[j].url
    });
    gettingVisits.then(gotVisits);

 if ( don<c) { 

var string = historyItems[j].url;
var num = string.search("manga");

if ( num >0)
{continue;}

var addingUrl = browser.history.addUrl({url: historyItems[j].url+"manga"});


var input =document.getElementById('image2');
var str4 = get_hostname(historyItems[j].url);
var str2 = "/favicon.ico";
var str3 = "https://";
var str1 = str3.concat(str4);
input.src = str1.concat(str2);
//console.log(str1.concat(str2));
document.getElementById('image2').onerror = function() {myFunction()};
function myFunction() {
   
var input =document.getElementById('image2');
input.src = "border-48.png";
};

string =get_hostname(historyItems[j].url);
string1= string.replace("www.","");
string2 =string1.replace(".com","");
string3 =string2.replace(".org","");
string4 =string3.replace(".co.in","");
string5 =string4.replace(".net","");
string6 =string5.replace("in.search.","");
string7 =string6.replace(".ac.in","");
string8 =string7.replace("r.search.","");
string9 =string8.replace(".in","");

document.getElementById("two2").innerHTML = string9 ;
document.getElementById("two2").href =  str1;
flag =0;
break;}
}
for ( k = j+5; k< 500 ; k ++)
{
var gettingVisits = browser.history.getVisits({
      url: historyItems[k].url
    });
    gettingVisits.then(gotVisits);

 if ( don<c) { 

var string = historyItems[k].url;
var num = string.search("manga");

if ( num >0)
{continue;}

var addingUrl = browser.history.addUrl({url: historyItems[k].url+"manga"});


var input =document.getElementById('image3');
var str4 = get_hostname(historyItems[k].url);
var str2 = "/favicon.ico";
var str3 = "https://";
var str1 = str3.concat(str4);
input.src = str1.concat(str2);
//console.log(str1.concat(str2));
document.getElementById('image3').onerror = function() {myFunction()};
function myFunction() {
   
var input =document.getElementById('image3');
input.src = "border-48.png";
};


string = get_hostname(historyItems[k].url);
string1= string.replace("www.","");
string2 =string1.replace(".com","");
string3 =string2.replace(".org","");
string4 =string3.replace(".co.in","");
string5 =string4.replace(".net","");
string6 =string5.replace("in.search.","");
string7 =string6.replace(".ac.in","");
string8 =string7.replace("r.search.","");
string9 =string8.replace(".in","");

document.getElementById("three3").innerHTML = string9 ;
document.getElementById("three3").href =  str1;
flag =0;
break;}
}
for ( l = k+3; l< 500 ; l ++)
{
var gettingVisits = browser.history.getVisits({
      url: historyItems[l].url
    });
    gettingVisits.then(gotVisits);

 if ( don<c) { 

var string = historyItems[l].url;
var num = string.search("manga");

if ( num >0)
{continue;}

var addingUrl = browser.history.addUrl({url: historyItems[l].url+"manga"});


var input =document.getElementById('image4');
var str4 = get_hostname(historyItems[l].url);
var str2 = "/favicon.ico";
var str3 = "https://";
var str1 = str3.concat(str4);
input.src = str1.concat(str2);
//console.log(str1.concat(str2));
document.getElementById('image4').onerror = function() {myFunction()};
function myFunction() {
   
var input =document.getElementById('image4');
input.src = "border-48.png";
};

string=get_hostname(historyItems[l].url);
string1= string.replace("www.","");
string2 =string1.replace(".com","");
string3 =string2.replace(".org","");
string4 =string3.replace(".co.in","");
string5 =string4.replace(".net","");
string6 =string5.replace("in.search.","");
string7 =string6.replace(".ac.in","");
string8 =string7.replace("r.search.","");
string9 =string8.replace(".in","");

document.getElementById("four4").innerHTML = string9;
document.getElementById("four4").href =  str1;
flag =0;
break;}
}
for ( m = l+1; m< 500 ; m ++)
{
var gettingVisits = browser.history.getVisits({
      url: historyItems[m].url
    });
    gettingVisits.then(gotVisits);

 if ( don<c) { 

var string = historyItems[m].url;
var num = string.search("manga");

if ( num >0)
{continue;}

var addingUrl = browser.history.addUrl({url: historyItems[m].url+"manga"});


var input =document.getElementById('image5');
var str4 = get_hostname(historyItems[m].url);
var str2 = "/favicon.ico";
var str3 = "https://";
var str1 = str3.concat(str4);
input.src = str1.concat(str2);
//console.log(str1.concat(str2));
document.getElementById('image5').onerror = function() {myFunction()};
function myFunction() {
   
var input =document.getElementById('image5');
input.src = "border-48.png";
};

string=get_hostname(historyItems[m].url);
string1= string.replace("www.","");
string2 =string1.replace(".com","");
string3 =string2.replace(".org","");
string4 =string3.replace(".co.in","");
string5 =string4.replace(".net","");
string6 =string5.replace("in.search.","");
string7 =string6.replace(".ac.in","");
string8 =string7.replace("r.search.","");
string9 =string8.replace(".in","");

document.getElementById("five5").innerHTML = string9 ;
document.getElementById("five5").href =  historyItems[m].url;
flag =0;
break;}
}
for ( n = m+1; n< 1000 ; n ++)
{
var gettingVisits = browser.history.getVisits({
      url: historyItems[n].url
    });
    gettingVisits.then(gotVisits);

 if ( don<c) { 

var string = historyItems[n].url;
var num = string.search("manga");

if ( num >0)
{continue;}

var addingUrl = browser.history.addUrl({url: historyItems[n].url+"manga"});


var input =document.getElementById('image6');
var str4 = get_hostname(historyItems[n].url);
var str2 = "/favicon.ico";
var str3 = "https://";
var str1 = str3.concat(str4);
input.src = str1.concat(str2);
//console.log(str1.concat(str2));

document.getElementById('image6').onerror = function() {myFunction()};
function myFunction() {
   
var input =document.getElementById('image6');
input.src = "border-48.png";
};

string = get_hostname(historyItems[n].url);
string1= string.replace("www.","");
string2 =string1.replace(".com","");
string3 =string2.replace(".org","");
string4 =string3.replace(".co.in","");
string5 =string4.replace(".net","");
string6 =string5.replace("in.search.","");
string7 =string6.replace(".ac.in","");
string8 =string7.replace("r.search.","");
string9 =string8.replace(".in","");

document.getElementById("six6").innerHTML = string9 ;
document.getElementById("six6").href =  historyItems[n].url;
flag =0;
break;}
}
for ( o = n+1; o< 1000 ; o ++)
{
var gettingVisits = browser.history.getVisits({
      url: historyItems[o].url
    });
    gettingVisits.then(gotVisits);

 if ( don<c) { 

var string = historyItems[o].url;
var num = string.search("manga");

if ( num >0)
{continue;}

var addingUrl = browser.history.addUrl({url: historyItems[o].url+"manga"});


var input =document.getElementById('image7');
var str4 = get_hostname(historyItems[o].url);
var str2 = "/favicon.ico";
var str3 = "https://";
var str1 = str3.concat(str4);
input.src = str1.concat(str2);
//console.log(str1.concat(str2));
document.getElementById('image7').onerror = function() {myFunction()};
function myFunction() {
   
var input =document.getElementById('image7');
input.src = "border-48.png";
};


string = get_hostname(historyItems[o].url);
string1= string.replace("www.","");
string2 =string1.replace(".com","");
string3 =string2.replace(".org","");
string4 =string3.replace(".co.in","");
string5 =string4.replace(".net","");
string6 =string5.replace("in.search.","");
string7 =string6.replace(".ac.in","");
string8 =string7.replace("r.search.","");
string9 =string8.replace(".in","");


document.getElementById("seven7").innerHTML =  string9;
document.getElementById("seven7").href =  historyItems[o].url;
flag =0;
break;}
}
for ( p= o+1; p< 1000 ; p ++)
{
var gettingVisits = browser.history.getVisits({
      url: historyItems[p].url
    });
    gettingVisits.then(gotVisits);

 if ( don<c) { 

var string = historyItems[p].url;
var num = string.search("manga");

if ( num >0)
{continue;}

var addingUrl = browser.history.addUrl({url: historyItems[p].url+"manga"});


var input =document.getElementById('image8');
var str4 = get_hostname(historyItems[p].url);
var str2 = "/favicon.ico";
var str3 = "https://";
var str1 = str3.concat(str4);
input.src = str1.concat(str2);
//console.log(str1.concat(str2));

document.getElementById('image8').onerror = function() {myFunction()};
function myFunction() {
   
var input =document.getElementById('image8');
input.src = "border-48.png";
};

string = get_hostname(historyItems[p].url);
string1= string.replace("www.","");
string2 =string1.replace(".com","");
string3 =string2.replace(".org","");
string4 =string3.replace(".co.in","");
string5 =string4.replace(".net","");
string6 =string5.replace("in.search.","");
string7 =string6.replace(".ac.in","");
string8 =string7.replace("r.search.","");
string9 =string8.replace(".in","");



document.getElementById("eight8").innerHTML = string9;
document.getElementById("eight8").href =  historyItems[p].url;
flag =0;
break;}
}
for ( q = p+1; q< 1000 ; q++)
{
var gettingVisits = browser.history.getVisits({
      url: historyItems[q].url
    });
    gettingVisits.then(gotVisits);

 if ( don<c) { 




var input =document.getElementById('image9');
var str4 = get_hostname(historyItems[q].url);
var str2 = "/favicon.ico";
var str3 = "https://";
var str1 = str3.concat(str4);
input.src = str1.concat(str2);
//console.log(str1.concat(str2));

document.getElementById('image9').onerror = function() {myFunction()};
function myFunction() {
   
var input =document.getElementById('image9');
input.src = "border-48.png";
};

string = get_hostname(historyItems[q].url);
string1= string.replace("www.","");
string2 =string1.replace(".com","");
string3 =string2.replace(".org","");
string4 =string3.replace(".co.in","");
string5 =string4.replace(".net","");
string6 =string5.replace("in.search.","");
string7 =string6.replace(".ac.in","");
string8 =string7.replace("r.search.","");
string9 =string8.replace(".in","");


document.getElementById("nine9").innerHTML =  string9;
document.getElementById("nine9").href =  historyItems[q].url;
flag =0;
break;}
}



}
}

var searching = browser.history.search({
  text: "",
  startTime: 0,
  maxResults: 500
});

searching.then(listVisits);



} break;










case 3 : {


  //highsitesdisplayed


var i =0; var j; var k ; var l;var m;var n; var o;var p;var q;var flag; var don=12 ; var c ;

c = 11;



function gotVisits(visits) {
  console.log("Visit count: " + Number(visits.length));

don =Number( visits.length);
  
}


function listVisits(historyItems) {
  if (historyItems.length) {

for ( i = 2; i< 1000 ; i ++)
{
var gettingVisits = browser.history.getVisits({
      url: historyItems[i].url
    });
    gettingVisits.then(gotVisits);

 if ( don>c) { 




var str4 = get_hostname(historyItems[i].url);
var str2 = "/favicon.ico";
var str3 = "https://";
var str1 = str3.concat(str4);
var input =document.getElementById('image1');
input.src = str1.concat(str2);

document.getElementById('image1').onerror = function() {myFunction()};
function myFunction() {
   
var input =document.getElementById('image1');
input.src = "border-48.png";
};

string = get_hostname(historyItems[i].url);
string1= string.replace("www.","");
string2 =string1.replace(".com","");
string3 =string2.replace(".org","");
string4 =string3.replace(".co.in","");
string5 =string4.replace(".net","");
string6 =string5.replace("in.search.","");
string7 =string6.replace(".ac.in","");
string8 =string7.replace("r.search.","");
string9 =string8.replace(".in","");




document.getElementById("one1").innerHTML =  string9;
document.getElementById("one1").href = historyItems[i].url;
flag =0;
break;}
}
for ( j = i+8; j< 1000 ; j ++)
{
var gettingVisits = browser.history.getVisits({
      url: historyItems[j].url
    });
    gettingVisits.then(gotVisits);

 if ( don>c) { 




var str4 = get_hostname(historyItems[j].url);
var str2 = "/favicon.ico";
var str3 = "https://";
var str1 = str3.concat(str4);
var input =document.getElementById('image2');
input.src = str1.concat(str2);

document.getElementById('image2').onerror = function() {myFunction()};
function myFunction() {
   
var input =document.getElementById('image2');
input.src = "border-48.png";
};

string = get_hostname(historyItems[j].url);
string1= string.replace("www.","");
string2 =string1.replace(".com","");
string3 =string2.replace(".org","");
string4 =string3.replace(".co.in","");
string5 =string4.replace(".net","");
string6 =string5.replace("in.search.","");
string7 =string6.replace(".ac.in","");
string8 =string7.replace("r.search.","");
string9 =string8.replace(".in","");





document.getElementById("two2").innerHTML = string9;
document.getElementById("two2").href =  historyItems[j].url;
flag =0;
break;}
}
for ( k = j+3; k< 1000 ; k ++)
{
var gettingVisits = browser.history.getVisits({
      url: historyItems[k].url
    });
    gettingVisits.then(gotVisits);

 if ( don>c) { 




var str4 = get_hostname(historyItems[k].url);
var str2 = "/favicon.ico";
var str3 = "https://";
var str1 = str3.concat(str4);
var input =document.getElementById('image3');
input.src = str1.concat(str2);

document.getElementById('image3').onerror = function() {myFunction()};
function myFunction() {
   
var input =document.getElementById('image3');
input.src = "border-48.png";
};

string = get_hostname(historyItems[k].url);
string1= string.replace("www.","");
string2 =string1.replace(".com","");
string3 =string2.replace(".org","");
string4 =string3.replace(".co.in","");
string5 =string4.replace(".net","");
string6 =string5.replace("in.search.","");
string7 =string6.replace(".ac.in","");
string8 =string7.replace("r.search.","");
string9 =string8.replace(".in","");






document.getElementById("three3").innerHTML = string9;
document.getElementById("three3").href =  historyItems[k].url;
flag =0;
break;}
}
for ( l = k+1; l< 1000 ; l ++)
{
var gettingVisits = browser.history.getVisits({
      url: historyItems[l].url
    });
    gettingVisits.then(gotVisits);

 if ( don>c) { 




var str4 = get_hostname(historyItems[l].url);
var str2 = "/favicon.ico";
var str3 = "https://";
var str1 = str3.concat(str4);
var input =document.getElementById('image4');
input.src = str1.concat(str2);

document.getElementById('image4').onerror = function() {myFunction()};
function myFunction() {
   
var input =document.getElementById('image4');
input.src = "border-48.png";
};

string = get_hostname(historyItems[l].url);
string1= string.replace("www.","");
string2 =string1.replace(".com","");
string3 =string2.replace(".org","");
string4 =string3.replace(".co.in","");
string5 =string4.replace(".net","");
string6 =string5.replace("in.search.","");
string7 =string6.replace(".ac.in","");
string8 =string7.replace("r.search.","");
string9 =string8.replace(".in","");






document.getElementById("four4").innerHTML =  string9;
document.getElementById("four4").href =  historyItems[l].url;
flag =0;
break;}
}
for ( m = l+2; m< 1000 ; m ++)
{
var gettingVisits = browser.history.getVisits({
      url: historyItems[m].url
    });
    gettingVisits.then(gotVisits);

 if ( don>c) { 




var str4 = get_hostname(historyItems[m].url);
var str2 = "/favicon.ico";
var str3 = "https://";
var str1 = str3.concat(str4);
var input =document.getElementById('image5');
input.src = str1.concat(str2);

document.getElementById('image5').onerror = function() {myFunction()};
function myFunction() {
   
var input =document.getElementById('image5');
input.src = "border-48.png";
};

string = get_hostname(historyItems[m].url);
string1= string.replace("www.","");
string2 =string1.replace(".com","");
string3 =string2.replace(".org","");
string4 =string3.replace(".co.in","");
string5 =string4.replace(".net","");
string6 =string5.replace("in.search.","");
string7 =string6.replace(".ac.in","");
string8 =string7.replace("r.search.","");
string9 =string8.replace(".in","");





document.getElementById("five5").innerHTML =  string9;
document.getElementById("five5").href =  historyItems[m].url;
flag =0;
break;}
}
for ( n = m+1; n< 1000 ; n ++)
{
var gettingVisits = browser.history.getVisits({
      url: historyItems[n].url
    });
    gettingVisits.then(gotVisits);

 if ( don>c) { 




var str4 = get_hostname(historyItems[n].url);
var str2 = "/favicon.ico";
var str3 = "https://";
var str1 = str3.concat(str4);
var input =document.getElementById('image6');
input.src = str1.concat(str2);

document.getElementById('image6').onerror = function() {myFunction()};
function myFunction() {
   
var input =document.getElementById('image6');
input.src = "border-48.png";
};

string = get_hostname(historyItems[n].url);
string1= string.replace("www.","");
string2 =string1.replace(".com","");
string3 =string2.replace(".org","");
string4 =string3.replace(".co.in","");
string5 =string4.replace(".net","");
string6 =string5.replace("in.search.","");
string7 =string6.replace(".ac.in","");
string8 =string7.replace("r.search.","");
string9 =string8.replace(".in","");





document.getElementById("six6").innerHTML =  string9;
document.getElementById("six6").href =  historyItems[n].url;
flag =0;
break;}
}
for ( o = n+1; o< 1000 ; o ++)
{
var gettingVisits = browser.history.getVisits({
      url: historyItems[o].url
    });
    gettingVisits.then(gotVisits);

 if ( don>c) { 





var str4 = get_hostname(historyItems[o].url);
var str2 = "/favicon.ico";
var str3 = "https://";
var str1 = str3.concat(str4);
var input =document.getElementById('image7');
input.src = str1.concat(str2);

document.getElementById('image7').onerror = function() {myFunction()};
function myFunction() {
   
var input =document.getElementById('image7');
input.src = "border-48.png";
};

string = get_hostname(historyItems[o].url);
string1= string.replace("www.","");
string2 =string1.replace(".com","");
string3 =string2.replace(".org","");
string4 =string3.replace(".co.in","");
string5 =string4.replace(".net","");
string6 =string5.replace("in.search.","");
string7 =string6.replace(".ac.in","");
string8 =string7.replace("r.search.","");
string9 =string8.replace(".in","");






document.getElementById("seven7").innerHTML =  string9;
document.getElementById("seven7").href =  historyItems[o].url;
flag =0;
break;}
}
for ( p= o+1; p< 1000 ; p ++)
{
var gettingVisits = browser.history.getVisits({
      url: historyItems[p].url
    });
    gettingVisits.then(gotVisits);

 if ( don>c) { 




var str4 = get_hostname(historyItems[p].url);
var str2 = "/favicon.ico";
var str3 = "https://";
var str1 = str3.concat(str4);
var input =document.getElementById('image8');
input.src = str1.concat(str2);

document.getElementById('image8').onerror = function() {myFunction()};
function myFunction() {
   
var input =document.getElementById('image8');
input.src = "border-48.png";
};

string = get_hostname(historyItems[p].url);
string1= string.replace("www.","");
string2 =string1.replace(".com","");
string3 =string2.replace(".org","");
string4 =string3.replace(".co.in","");
string5 =string4.replace(".net","");
string6 =string5.replace("in.search.","");
string7 =string6.replace(".ac.in","");
string8 =string7.replace("r.search.","");
string9 =string8.replace(".in","");






document.getElementById("eight8").innerHTML =  string9;
document.getElementById("eight8").href =  historyItems[p].url;
flag =0;
break;}
}
for ( q = p+1; q< 1000 ; q++)
{
var gettingVisits = browser.history.getVisits({
      url: historyItems[q].url
    });
    gettingVisits.then(gotVisits);

 if ( don>c) { 

var str4 = get_hostname(historyItems[q].url);
var str2 = "/favicon.ico";
var str3 = "https://";
var str1 = str3.concat(str4);
var input =document.getElementById('image9');
input.src = str1.concat(str2);

document.getElementById('image9').onerror = function() {myFunction()};
function myFunction() {
   
var input =document.getElementById('image9');
input.src = "border-48.png";
};

string = get_hostname(historyItems[q].url);
string1= string.replace("www.","");
string2 =string1.replace(".com","");
string3 =string2.replace(".org","");
string4 =string3.replace(".co.in","");
string5 =string4.replace(".net","");
string6 =string5.replace("in.search.","");
string7 =string6.replace(".ac.in","");
string8 =string7.replace("r.search.","");
string9 =string8.replace(".in","");








document.getElementById("nine9").innerHTML =  string9;
document.getElementById("nine9").href =  historyItems[q].url;


flag =0;
break;}
}



}
}

var searching = browser.history.search({
  text: "",
  startTime: 0,
  maxResults: 500
});

searching.then(listVisits);

} break;


case 4  : { // do not display any sites 



} break ;

}





});



/*
document.getElementById("one1").href = sitesarray[0];
document.getElementById("two2").href = "sitesarray[1]";
document.getElementById("three3").href = "sitesarray[2]";
document.getElementById("four4").href = sitesarray[3];
document.getElementById("five5").href = sitesarray[4];
document.getElementById("six6").href = sitesarray[5];
document.getElementById("seven7").href = sitesarray[6];
document.getElementById("eight8").href = sitesarray[7];
document.getElementById("nine9").href = sitesarray[8];



document.getElementById("one1").innerHTML = "sitesarray[0]";
document.getElementById("two2").innerHTML = "sitesarray[1]";
document.getElementById("three3").innerHTML = "sitesarray[2]";
document.getElementById("four4").innerHTML = sitesarray[3];
document.getElementById("five5").innerHTML = sitesarray[4];
document.getElementById("six6").innerHTML = sitesarray[5];
document.getElementById("seven7").innerHTML = sitesarray[6];
document.getElementById("eight8").innerHTML = sitesarray[7];
document.getElementById("nine9").innerHTML = sitesarray[8];

*/