    
        (function() {
  const fn = function() {
    Bokeh.safely(function() {
      (function(root) {
        function embed_document(root) {
        const docs_json = '{"0c17cbb5-c4ca-4c8f-8012-ad00cafa2760":{"defs":[],"roots":{"references":[{"attributes":{"template":"\\n    &lt;style&gt;\\n        .slick-headerRowHeight {height:120px} \\n        .slick-column-name {font-family: Georgia; font-weight: 900; font-size: x-large}\\n        .slick-cell {font-family: Georgia; font-size: large}\\n    &lt;/style&gt;\\n    &lt;%= value %&gt;"},"id":"1004","type":"HTMLTemplateFormatter"},{"attributes":{},"id":"1013","type":"StringEditor"},{"attributes":{},"id":"1012","type":"StringEditor"},{"attributes":{},"id":"1014","type":"UnionRenderers"},{"attributes":{"editor":{"id":"1012"},"field":"Date","formatter":{"id":"1011"},"title":"Date","width":150},"id":"1005","type":"TableColumn"},{"attributes":{},"id":"1011","type":"StringFormatter"},{"attributes":{"columns":[{"id":"1005"},{"id":"1006"}],"index_position":null,"source":{"id":"1003"},"view":{"id":"1010"}},"id":"1008","type":"DataTable"},{"attributes":{"source":{"id":"1003"}},"id":"1010","type":"CDSView"},{"attributes":{"editor":{"id":"1013"},"field":"Release","formatter":{"id":"1004"},"title":"Release","width":350},"id":"1006","type":"TableColumn"},{"attributes":{},"id":"1015","type":"Selection"},{"attributes":{"data":{"Date":["Mon December  5","","Tue December  6","","","","Wed December  7","","","","","","","Thu December  8","","","","","Fri December  9","","","","Sat December 10"],"Release":["TW, International reserves","","JP, Household survey","JP, Wages, Provisional","TW, CPI","","CN, Merchandise trade, preliminary","JP, Business conditions index, preliminary","JP, Consumption Activity Index","JP, Monetary Base and the BOJ&#x27;s Transactions","JP, Trade, 20D, provisional","TW, Merchandise trade","","JP, Balance of Payments, October 2022, preliminary","JP, Economy Watchers","JP, GDP, second preliminary","JP, International Transactions in Securities, monthly","","CN, CPI &amp; PPI, monthly","JP, Money Stock","KR, BOP , preliminary","","CN, Monetary supply and credit (earliest date in 5-day window)"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]},"selected":{"id":"1015"},"selection_policy":{"id":"1014"}},"id":"1003","type":"ColumnDataSource"}],"root_ids":["1008"]},"title":"Bokeh Application","version":"2.4.3"}}';
        const render_items = [{"docid":"0c17cbb5-c4ca-4c8f-8012-ad00cafa2760","root_ids":["1008"],"roots":{"1008":"be617eed-ac40-4c08-83cd-81e2ce1bd137"}}];
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
    
