/*const parsed = [
    {
    "name":"@barack",
    "stage":"3/10",
    "points":"1"
    },
    {
    "name":"@mike",
    "stage":"4/10",
    "points":"4"
    },
    {
    "name":"@br0ck",
    "stage":"3/10",
    "points":"6"
    },
    {
    "name":"@joe",
    "stage":"4/10",
    "points":"2"
    },
    {
    "name":"@hussein",
    "stage":"3/10",
    "points":"3"
    },
    ];*/
   // Example POST method implementation:
   let parsed = null;
   fetch('https://leaderboard-api-hng.herokuapp.com/data')
   .then(response => response.json())
   .then(data => {
     parsed =data;
    
        // EXTRACT VALUE FOR HTML HEADER. 
        // ('Book ID', 'Book Name', 'Category' and 'Price')
        var col = [];
        for (var i = 0; i < parsed.length; i++) {
            for (var key in parsed[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }
        shareField = 'share'
        col.push(shareField)
        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");

        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);                   // TABLE ROW.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < parsed.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = parsed[i][col[j]];
            }
        }

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
        
    });

    function socialWindow(url) {
      var left = (screen.width - 570) / 2;
      var top = (screen.height - 570) / 2;
      var params = "menubar=no,toolbar=no,status=no,width=570,height=570,top=" + top + ",left=" + left;
      window.open(url,"NewWindow",params);
  }
  
  function setShareLinks() {
      var pageUrl = encodeURIComponent(document.URL);
      var tweet = encodeURIComponent(jQuery("meta[property='og:description']").attr("content"));
      
      jQuery(".social-share.facebook").on("click", function() {
          url = "https://www.facebook.com/sharer.php?u=" + pageUrl;
          socialWindow(url);
      });
  
      jQuery(".social-share.twitter").on("click", function() {
          url = "https://twitter.com/intent/tweet?url=" + pageUrl + "&text=" + tweet;
          socialWindow(url);
      });
  
      jQuery(".social-share.linkedin").on("click", function() {
          url = "https://www.linkedin.com/shareArticle?mini=true&url=" + pageUrl;
          socialWindow(url);
      })
  }
  