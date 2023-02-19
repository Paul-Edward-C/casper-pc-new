    
        (function() {
  const fn = function() {
    Bokeh.safely(function() {
      (function(root) {
        function embed_document(root) {
        const docs_json = '{"3178bdcf-d376-4cd1-8a7d-4750c19be9b9":{"defs":[],"roots":{"references":[{"attributes":{"data":{"Date":["Mon February 20","","","","","Tue February 21","","","","","Wed February 22","","","","","","","Thu February 23","","","","","","Fri February 24","","","","","","",""],"Release":["CN, LPR","TW, Balance of payments","TW, Export orders","TW, External debt","","JP, Real exports and imports, details","KR, 20-day foreign trade","KR, Consumer confidence, Febrary 2023","KR, HH credit, quarterly","","JP, BOJ Accounts","JP, Services Producer Price Index","KR, Business sentiment, February 2023","KR, IIP, quarterly","TW, Labour market","TW, National accounts","","KR, BOK monetary policy meeting","KR, PPIJanuary 2023","TW, IP","TW, Production Index","TW, Retail sales","","CN, Trade in goods and services","CN, Transactions in the Chinese Foreign Exchange Market","JP, International Transactions in Securities, weekly","JP, National, CPI","JP, Trade Statistics Jan. 2023(Export: Detailed; Import: 9-digit Provisional)","JP, Trade, 10D, provisional","JP, Wages, Final","TW, Depository corporations survey"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]},"selected":{"id":"1015"},"selection_policy":{"id":"1014"}},"id":"1003","type":"ColumnDataSource"},{"attributes":{},"id":"1014","type":"UnionRenderers"},{"attributes":{},"id":"1011","type":"StringFormatter"},{"attributes":{"template":"\\n    &lt;style&gt;\\n        .slick-headerRowHeight {height:120px} \\n        .slick-column-name {font-family: Georgia; font-weight: 900; font-size: x-large}\\n        .slick-cell {font-family: Georgia; font-size: large}\\n    &lt;/style&gt;\\n    &lt;%= value %&gt;"},"id":"1004","type":"HTMLTemplateFormatter"},{"attributes":{},"id":"1015","type":"Selection"},{"attributes":{"editor":{"id":"1013"},"field":"Release","formatter":{"id":"1004"},"title":"Release","width":600},"id":"1006","type":"TableColumn"},{"attributes":{"columns":[{"id":"1005"},{"id":"1006"}],"height":650,"index_position":null,"source":{"id":"1003"},"view":{"id":"1010"},"width":750},"id":"1008","type":"DataTable"},{"attributes":{},"id":"1012","type":"StringEditor"},{"attributes":{"source":{"id":"1003"}},"id":"1010","type":"CDSView"},{"attributes":{"editor":{"id":"1012"},"field":"Date","formatter":{"id":"1011"},"title":"Date","width":150},"id":"1005","type":"TableColumn"},{"attributes":{},"id":"1013","type":"StringEditor"}],"root_ids":["1008"]},"title":"Bokeh Application","version":"2.4.3"}}';
        const render_items = [{"docid":"3178bdcf-d376-4cd1-8a7d-4750c19be9b9","root_ids":["1008"],"roots":{"1008":"5f7e0c7c-9b32-4bd7-a47f-ec6a2576d806"}}];
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
    
