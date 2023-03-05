    
        (function() {
  const fn = function() {
    Bokeh.safely(function() {
      (function(root) {
        function embed_document(root) {
        const docs_json = '{"1eb98f76-2e76-42ca-b92f-3893a788f77d":{"defs":[],"roots":{"references":[{"attributes":{"data":{"Date":["Mon March  6","","Tue March  7","","","","","","","","","","Wed March  8","","","","","","Thu March  9","","","","","Fri March 10","","","","","",""],"Release":["KR, CPI","","CN, International reserves","CN, Merchandise trade, preliminary","JP, Consumption Activity Index","JP, Monetary Base and the BOJ&#x27;s Transactions","JP, Trade, 20D, provisional","JP, Wages, Provisional","KR, GNI, quarterly","TW, CPI and PPI","TW, Merchandise trade","","JP, BOP","JP, Economy Watchers","JP, Indexes of Business Conditions(Preliminary Release)","JP, International Transactions in Securities, monthly","KR, Industrial loans, quarterly","","CN, CPI &amp; PPI, monthly","JP, GDP, second preliminary","JP, International Transactions in Securities, weekly","JP, Money Stock","","CN, Monetary supply and credit (earliest date in 5-day window)","JP, Corporate Goods Price Index","JP, Household survey","JP, Statement on Monetary Policy","JP, Trade Statistics 2022(Revised)","KR, BOP , preliminary","TW, Central bank survey"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]},"selected":{"id":"1015"},"selection_policy":{"id":"1014"}},"id":"1003","type":"ColumnDataSource"},{"attributes":{},"id":"1012","type":"StringEditor"},{"attributes":{"editor":{"id":"1013"},"field":"Release","formatter":{"id":"1004"},"title":"Release","width":600},"id":"1006","type":"TableColumn"},{"attributes":{"template":"\\n    &lt;style&gt;\\n        .slick-headerRowHeight {height:120px} \\n        .slick-column-name {font-family: Georgia; font-weight: 900; font-size: x-large}\\n        .slick-cell {font-family: Georgia; font-size: large}\\n    &lt;/style&gt;\\n    &lt;%= value %&gt;"},"id":"1004","type":"HTMLTemplateFormatter"},{"attributes":{},"id":"1013","type":"StringEditor"},{"attributes":{"columns":[{"id":"1005"},{"id":"1006"}],"height":800,"index_position":null,"source":{"id":"1003"},"view":{"id":"1010"},"width":750},"id":"1008","type":"DataTable"},{"attributes":{"editor":{"id":"1012"},"field":"Date","formatter":{"id":"1011"},"title":"Date","width":150},"id":"1005","type":"TableColumn"},{"attributes":{"source":{"id":"1003"}},"id":"1010","type":"CDSView"},{"attributes":{},"id":"1014","type":"UnionRenderers"},{"attributes":{},"id":"1011","type":"StringFormatter"},{"attributes":{},"id":"1015","type":"Selection"}],"root_ids":["1008"]},"title":"Bokeh Application","version":"2.4.3"}}';
        const render_items = [{"docid":"1eb98f76-2e76-42ca-b92f-3893a788f77d","root_ids":["1008"],"roots":{"1008":"66753887-c4ff-42da-b80c-21e15c9f018e"}}];
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
    
