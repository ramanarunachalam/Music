function OnSearch(input) {
    if(input.value == "") {
        alert("You either clicked the X or you searched for nothing.");
    }
    else {
        alert("You searched for " + input.value);
    }
}

$(document).ready(function(){
    $('.nav li').bind('click', function() {
       $(this).addClass('active').siblings().removeClass('active');
    });

    sessionStorage.clear();
});

function set_iframe_load_params(obj)
{
    obj.style.visibility = 'visible';

    /* obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px'; */

    var height = document.documentElement.clientHeight;
    height -= obj.offsetTop;
    
    height -= 20;
    
    obj.style.height = height + 'px';
}

function getDocHeight(doc)
{
    // from http://stackoverflow.com/questions/1145850/get-height-of-entire-document-with-javascript
    doc = doc || document;
    var body = doc.body;
    var html = doc.documentElement;
    var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
    return height;
}

function setNewIframeHeight(obj)
{
    /* var iframe = document.getElementById(id); */

    var doc = obj.contentDocument ? obj.contentDocument : obj.contentWindow.document;
    obj.style.visibility = 'hidden';
    obj.style.height = "10px"; // reset to minimal height in case going from longer to shorter doc
    obj.style.height = getDocHeight( doc ) + 10 + "px";
    obj.style.visibility = 'visible';
}

function set_iframe_scroll_height(obj)
{
    set_iframe_load_params(obj)
}

function set_iframe_no_scroll(obj)
{
    set_iframe_load_params(obj);

    /* 
    setNewIframeHeight(obj);
    */
}
