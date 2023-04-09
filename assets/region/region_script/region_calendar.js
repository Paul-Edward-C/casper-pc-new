    
        (function() {
  const fn = function() {
    Bokeh.safely(function() {
      (function(root) {
        function embed_document(root) {
        const docs_json = '{"38fb6d62-62a8-40c6-8a6f-3461c627ab3c":{"defs":[],"roots":{"references":[{"attributes":{},"id":"1013","type":"StringEditor"},{"attributes":{"data":{"Date":["Mon April 10","","","","","","","","Tue April 11","","","","","Wed April 12","","","","","","","Thu April 13","","","","","","Fri April 14","","","Sat April 15","",""],"Release":["CN, Monetary supply and credit (earliest date in 5-day window)","JP, BOP, preliminary","JP, Consumer Confidence Survey","JP, Direct Investment by Region and Industry","JP, Economy Watchers","JP, International Transactions in Securities, monthly","TW, International reserves","","CN, CPI &amp; PPI, monthly","KR, BOK monetary policy meeting","TW, CPI and PPI","TW, Merchandise trade","","JP, 93rd Opinion Survey","JP, BOJ Accounts","JP, Corporate Goods Price Index","JP, Machinery Orders","KR, Labour market","TW, Central bank survey","","CN, Merchandise trade, preliminary","JP, International Transactions in Securities, weekly","JP, Money Stock","KR, Export/import prices ","TW, Wages/Earnings","","KR, HH loans ","KR, Money ","","CN, MLF rate and volume","CN, Property prices, monthly","KR, Full-month foreign trade, details"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"selected":{"id":"1015"},"selection_policy":{"id":"1014"}},"id":"1003","type":"ColumnDataSource"},{"attributes":{"template":"\\n    &lt;style&gt;\\n        .slick-headerRowHeight {height:120px} \\n        .slick-column-name {font-family: Georgia; font-weight: 900; font-size: x-large}\\n        .slick-cell {font-family: Georgia; font-size: large}\\n    &lt;/style&gt;\\n    &lt;%= value %&gt;"},"id":"1004","type":"HTMLTemplateFormatter"},{"attributes":{},"id":"1011","type":"StringFormatter"},{"attributes":{},"id":"1014","type":"UnionRenderers"},{"attributes":{"editor":{"id":"1012"},"field":"Date","formatter":{"id":"1011"},"title":"Date","width":150},"id":"1005","type":"TableColumn"},{"attributes":{"source":{"id":"1003"}},"id":"1010","type":"CDSView"},{"attributes":{"editor":{"id":"1013"},"field":"Release","formatter":{"id":"1004"},"title":"Release","width":600},"id":"1006","type":"TableColumn"},{"attributes":{},"id":"1015","type":"Selection"},{"attributes":{},"id":"1012","type":"StringEditor"},{"attributes":{"columns":[{"id":"1005"},{"id":"1006"}],"height":830,"index_position":null,"source":{"id":"1003"},"view":{"id":"1010"},"width":750},"id":"1008","type":"DataTable"}],"root_ids":["1008"]},"title":"Bokeh Application","version":"2.4.3"}}';
        const render_items = [{"docid":"38fb6d62-62a8-40c6-8a6f-3461c627ab3c","root_ids":["1008"],"roots":{"1008":"084910c1-eb7e-4c61-bbf5-b6004fd43d7d"}}];
        root.Bokeh.embed.embed_items(docs_json, render_items);
        }
        if (root.Bokeh !== undefined) {
          embed_document(root);
        } else {
          let attempts = 0;
          const timer = setInterval(function(root) {
            if (root.Bokeh !== undefined) {
              clearInterval(timer);
              embed_document(root);
            } else {
              attempts++;
              if (attempts > 100) {
                clearInterval(timer);
                console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
              }
            }
          }, 10, root)
        }
      })(window);
    });
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
    
