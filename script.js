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

// var data = {};

function getContent(search) {
  var searchUrl = spacesToPlus(search);
  var jsonUrl = "https://en.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&list=search&srsearch=" + searchUrl + "&callback=?";
  // var json = {};
  $.getJSON(jsonUrl, function(json) {
    var data = json;
    setContent(data);
  });
}

function strip(html)
{
   var tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   return tmp.textContent;
} // found at http://stackoverflow.com/questions/822452/strip-html-from-text-javascript; slightly edited

function removeContent() {
  document.getElementById('list').innerHTML = "";
}

function setContent (data) {
  removeContent();
  var searchData = data.query.search;
  for (k in searchData) {
    var title = searchData[k].title;
    var snippet = searchData[k].snippet;
    var url = "https://en.wikipedia.org/wiki/" + spacesToUnderscore(title);
    $('#list').append('<a class="articleLink" href="' + url + '" target="_blank"><div class="articleDiv"><h4>' + title + '</h4><p">' + snippet + '</p></div></a>');
  }
}

function getArticleList() {
  var search = getSearchVal();
  var data = getContent(search);
}

$(document).ready(function() {
  document.getElementById('searchForm').onsubmit = function(e) {
    e.preventDefault();
    return getArticleList()
  }
});