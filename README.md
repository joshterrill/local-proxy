# local-proxy

a proxy server that can be hit by a web page

#### installation / run
```
git clone https://github.com/joshterrill/local-proxy.git
cd local-proxy/
npm run build
npm start
```

#### usage
On any web page:
```javascript
var websites = ["http://google.com", "http://clearwavesoftware.com"];

for (var i = 0; i < websites.length; i++) {
  $.ajax({
    url: "http://localhost:9090/url",
    method: "POST",
    data: {"url": websites[i]}
  })
    .done(function( response ) {
      console.log(response)
    });
}
```