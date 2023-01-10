    
        (function() {
  const fn = function() {
    Bokeh.safely(function() {
      (function(root) {
        function embed_document(root) {
        const docs_json = '{"3b7afae3-6288-4fe5-815c-cebd856649d7":{"defs":[],"roots":{"references":[{"attributes":{},"id":"1013","type":"StringEditor"},{"attributes":{"columns":[{"id":"1005"},{"id":"1006"}],"height":700,"index_position":null,"source":{"id":"1003"},"view":{"id":"1010"},"width":750},"id":"1008","type":"DataTable"},{"attributes":{"template":"\\n    &lt;style&gt;\\n        .slick-headerRowHeight {height:120px} \\n        .slick-column-name {font-family: Georgia; font-weight: 900; font-size: x-large}\\n        .slick-cell {font-family: Georgia; font-size: large}\\n    &lt;/style&gt;\\n    &lt;%= value %&gt;"},"id":"1004","type":"HTMLTemplateFormatter"},{"attributes":{},"id":"1014","type":"UnionRenderers"},{"attributes":{},"id":"1011","type":"StringFormatter"},{"attributes":{"data":{"Date":["Tue January 10","","","","","Wed January 11","","","","","","","","","Thu January 12","","","","","","","","Fri January 13","","","",""],"Release":["CN, Monetary supply and credit (earliest date in 5-day window)","JP, Household survey","JP, Tokyo, CPI","KR, BOP , preliminary","","Indexes of Business Conditions(Preliminary Release)","JP, 92nd Opinion Survey","JP, Consumption Activity Index","JP, Monetary Base and the BOJ&#x27;s Transactions","JP, Trade, 20D, provisional","KR, Labour market","TW, Central bank survey","TW, Wages/Earnings","","CN, CPI &amp; PPI, monthly","JP, BOJ Accounts","JP, Balance of Payments, November 2022, preliminary","JP, Direct Investment by Region and Industry","JP, Economy Watchers","JP, International Transactions in Securities, monthly","JP, Regional Economic Report","","CN, Merchandise trade, preliminary","JP, International Transactions in Securities, weekly","JP, Money Stock","KR, BOK monetary policy meeting","KR, Export/Import Price Index"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]},"selected":{"id":"1015"},"selection_policy":{"id":"1014"}},"id":"1003","type":"ColumnDataSource"},{"attributes":{"editor":{"id":"1013"},"field":"Release","formatter":{"id":"1004"},"title":"Release","width":600},"id":"1006","type":"TableColumn"},{"attributes":{"editor":{"id":"1012"},"field":"Date","formatter":{"id":"1011"},"title":"Date","width":150},"id":"1005","type":"TableColumn"},{"attributes":{},"id":"1015","type":"Selection"},{"attributes":{},"id":"1012","type":"StringEditor"},{"attributes":{"source":{"id":"1003"}},"id":"1010","type":"CDSView"}],"root_ids":["1008"]},"title":"Bokeh Application","version":"2.4.3"}}';
        const render_items = [{"docid":"3b7afae3-6288-4fe5-815c-cebd856649d7","root_ids":["1008"],"roots":{"1008":"37a85d7c-b0f0-4e87-a731-c37f73d41d05"}}];
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
    
