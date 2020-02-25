var queryLength = 30;

function queryDev(queryLength, username, page){
    var request = new XMLHttpRequest();
    var articleData = {};
    var err = null;
    var dataLength = 0;

    request.onload = function(){
        var data = JSON.parse(this.response);
        dataLength = data.length;

        if (request.status >= 200 && request.status < 400) {
            data.forEach(function(article) {
                if (article.canonical_url == window.location.href)
                {
                    articleData.path = article.path;
                    articleData.positive_reactions_count = article.positive_reactions_count;
                }
            });
        } else {
            err = 'Error fetching data from Dev.to';
        }
        parseData(err, articleData, dataLength, username, page);
    }
    var url = "https://dev.to/api/articles?per_page=" + queryLength + "&username=" + username + "&page=" + parseInt(page,10);
    request.open("GET", url);
    request.setRequestHeader("content-type", "application/json");
    request.send();
}

function searchDev(username, page){
    var d = queryDev(queryLength, username, page);
}

function parseData(err, articleData, dataLength, username, page){
    if (err){
        console.error(err);
    }
    else {
        if (Object.entries(articleData).length === 0)
        {
            if (dataLength < queryLength)
            {
                console.info("No matching articles found on Dev.to");
            }
            else {
                searchDev(username, page + 1);
            }
        }
        else {
            writeBadge();
            updateBadge(articleData.positive_reactions_count, articleData.path);
        }
    }
}

function getMeta(metaName) {
    var metas = document.getElementsByTagName('meta');

    for (var i = 0; i < metas.length; i++) {
        if (metas[i].getAttribute('name') == metaName) {
            return metas[i].getAttribute('content');
        }
    }
    return '';
}

function findOnDev(){
    var username = getMeta('dev:username');
    if (typeof username !== 'undefined' && username)
    {
        searchDev(username, 1);
    }
}

function updateBadge(count, linkPath) {
    var t = document.getElementsByName("dev-social-badge-text")[0];
    var a = document.getElementsByName("dev-social-badge-link")[0];
    linkPath = linkPath ? linkPath : "";
    count = count ? count : 0;
    t.textContent = count;
    a.href="https://dev.to" + linkPath;
    a.style="border-color:initial;border-top:initial;border-bottom:initial;border-left:initial;border-right:initial;border:initial;color:initial;text-decoration:initial;";
}

function writeBadge() {
    var badge = document.getElementsByTagName("devbadge")[0];
    badge.innerHTML = '<a name="dev-social-badge-link" href="https://dev.to/" target="_blank" rel="noreferrer" style="display:none;"> <svg width="72" height="26"> <svg width="26" height="26" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path fill="#000000" d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58l-38.46 144.8z"/> </svg> <text name="dev-social-badge-text" fill="black" font-size="0.8em" font-family=\'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"\' x="60%" y="55%" dominant-baseline="middle" text-anchor="middle"/> <rect x="1" y="1" rx="5" ry="10" width="66" height="24"style="fill:none;stroke:black;stroke-width:3;opacity:1"/> </svg></a>'; //badge.htm - minified
}