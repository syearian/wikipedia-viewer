function spacesToPlus(str) {
  var strPlus = str.replace(/ /g,"+");
  return strPlus;
}

function spacesToUnderscore(str) {
  var strUnderscore = str.replace(/ /g,"_");
  return strUnderscore;
}

function getSearchVal() {
  var searchTerms = document.getElementById('search').value;
  return searchTerms;
}

function getContent(search) {
  getSearchVal();
  var searchUrl = spacesToPlus(search);
  var jsonUrl = "https://en.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&list=search&srsearch=" + searchUrl;
  var json = {};
  $getJSON(jsonUrl, function(data) {
    json = data;
  });
  return json;
}

function strip(html)
{
   var tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   return tmp.textContent;
} // found at http://stackoverflow.com/questions/822452/strip-html-from-text-javascript; slightly edited

function setContent (data) {
  getContent();
  var searchData = data.query.search;

}

$(document).ready(function() {

});