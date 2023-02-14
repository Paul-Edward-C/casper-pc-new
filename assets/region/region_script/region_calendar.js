    
        (function() {
  const fn = function() {
    Bokeh.safely(function() {
      (function(root) {
        function embed_document(root) {
        const docs_json = '{"94b5d0cf-f146-4a7c-a2ee-c3e76a8500fd":{"defs":[],"roots":{"references":[{"attributes":{"editor":{"id":"1013"},"field":"Release","formatter":{"id":"1004"},"title":"Release","width":600},"id":"1006","type":"TableColumn"},{"attributes":{"source":{"id":"1003"}},"id":"1010","type":"CDSView"},{"attributes":{},"id":"1014","type":"UnionRenderers"},{"attributes":{},"id":"1011","type":"StringFormatter"},{"attributes":{"data":{"Date":["Tue February 14","","","","","Wed February 15","","","","","","","","","","","Thu February 16","","","","","","Fri February 17"],"Release":["JP, BOJ Accounts","JP, GDP , first preliminary","JP, IP, final","KR, Monetary and Liquidity Aggregates","","CN, Central bank survey","CN, Depository corporations survey","CN, Foreign Exchange Settlement and Sales by Banks","CN, Foreign-related Receipts and Payments by Non-banking Sectors","CN, MLF rate and volume","JP, Retail sales, final","JP, Tertiary activity","KR, Export/import pricesJanuary 2023","KR, Full-month foreign trade, details","KR, Labour market","","CN, Property prices, monthly","JP, International Transactions in Securities, weekly","JP, Machinery Orders","JP, Real exports and imports, headline","JP, Trade Statistics(January 2023[Provisional])","","TW, Wages/Earnings"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]},"selected":{"id":"1015"},"selection_policy":{"id":"1014"}},"id":"1003","type":"ColumnDataSource"},{"attributes":{},"id":"1015","type":"Selection"},{"attributes":{"columns":[{"id":"1005"},{"id":"1006"}],"height":650,"index_position":null,"source":{"id":"1003"},"view":{"id":"1010"},"width":750},"id":"1008","type":"DataTable"},{"attributes":{"editor":{"id":"1012"},"field":"Date","formatter":{"id":"1011"},"title":"Date","width":150},"id":"1005","type":"TableColumn"},{"attributes":{},"id":"1012","type":"StringEditor"},{"attributes":{"template":"\\n    &lt;style&gt;\\n        .slick-headerRowHeight {height:120px} \\n        .slick-column-name {font-family: Georgia; font-weight: 900; font-size: x-large}\\n        .slick-cell {font-family: Georgia; font-size: large}\\n    &lt;/style&gt;\\n    &lt;%= value %&gt;"},"id":"1004","type":"HTMLTemplateFormatter"},{"attributes":{},"id":"1013","type":"StringEditor"}],"root_ids":["1008"]},"title":"Bokeh Application","version":"2.4.3"}}';
        const render_items = [{"docid":"94b5d0cf-f146-4a7c-a2ee-c3e76a8500fd","root_ids":["1008"],"roots":{"1008":"ea85b7aa-fa34-4dfa-8201-4165895470bc"}}];
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
    
