    
        (function() {
  const fn = function() {
    Bokeh.safely(function() {
      (function(root) {
        function embed_document(root) {
        const docs_json = '{"c54585ba-3310-4dc1-99eb-a1404b80516f":{"defs":[],"roots":{"references":[{"attributes":{},"id":"1011","type":"StringFormatter"},{"attributes":{"columns":[{"id":"1005"},{"id":"1006"}],"height":700,"index_position":null,"source":{"id":"1003"},"view":{"id":"1010"},"width":750},"id":"1008","type":"DataTable"},{"attributes":{"editor":{"id":"1013"},"field":"Release","formatter":{"id":"1004"},"title":"Release","width":600},"id":"1006","type":"TableColumn"},{"attributes":{"data":{"Date":["Mon April 17","","","","Tue April 18","","","","Wed April 19","","","Thu April 20","","","","","","","","Fri April 21","","","","","","",""],"Release":["CN, Central bank survey","CN, Depository corporations survey","JP, Retail sales, final","","CN, Activity data, monthly","CN, GDP, quarterly","CN, Merchandise trade, comprehensive","","CN, IP, quarterly","JP, IP, final","","CN, LPR","JP, International Transactions in Securities, weekly","JP, Regional Economic Report","JP, Tertiary activity","JP, Trade Statistics(  &amp; Calender Year - 2022[Provisional])","KR, Trade Settlement Currency in Korea 2022","TW, Export orders","","CN, Foreign Exchange Settlement and Sales by Banks","CN, Foreign-related Receipts and Payments by Non-banking Sectors","JP, Financial System Report","JP, National, CPI","JP, Senior Loan Officer Opinion Survey","JP, Wages, Final","KR, 20-day foreign trade","KR, PPI "],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]},"selected":{"id":"1015"},"selection_policy":{"id":"1014"}},"id":"1003","type":"ColumnDataSource"},{"attributes":{},"id":"1014","type":"UnionRenderers"},{"attributes":{"source":{"id":"1003"}},"id":"1010","type":"CDSView"},{"attributes":{},"id":"1012","type":"StringEditor"},{"attributes":{},"id":"1015","type":"Selection"},{"attributes":{"template":"\\n    &lt;style&gt;\\n        .slick-headerRowHeight {height:120px} \\n        .slick-column-name {font-family: Georgia; font-weight: 900; font-size: x-large}\\n        .slick-cell {font-family: Georgia; font-size: large}\\n    &lt;/style&gt;\\n    &lt;%= value %&gt;"},"id":"1004","type":"HTMLTemplateFormatter"},{"attributes":{},"id":"1013","type":"StringEditor"},{"attributes":{"editor":{"id":"1012"},"field":"Date","formatter":{"id":"1011"},"title":"Date","width":150},"id":"1005","type":"TableColumn"}],"root_ids":["1008"]},"title":"Bokeh Application","version":"2.4.3"}}';
        const render_items = [{"docid":"c54585ba-3310-4dc1-99eb-a1404b80516f","root_ids":["1008"],"roots":{"1008":"82804063-199d-4f85-808e-374343c48351"}}];
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
    
