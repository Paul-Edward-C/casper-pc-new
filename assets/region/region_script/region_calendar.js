    
        (function() {
  const fn = function() {
    Bokeh.safely(function() {
      (function(root) {
        function embed_document(root) {
        const docs_json = '{"ef5008cf-373f-4bc4-8a47-f74df2bb0339":{"defs":[],"roots":{"references":[{"attributes":{},"id":"1015","type":"Selection"},{"attributes":{"columns":[{"id":"1005"},{"id":"1006"}],"height":600,"index_position":null,"source":{"id":"1003"},"view":{"id":"1010"},"width":750},"id":"1008","type":"DataTable"},{"attributes":{},"id":"1012","type":"StringEditor"},{"attributes":{"template":"\\n    &lt;style&gt;\\n        .slick-headerRowHeight {height:120px} \\n        .slick-column-name {font-family: Georgia; font-weight: 900; font-size: x-large}\\n        .slick-cell {font-family: Georgia; font-size: large}\\n    &lt;/style&gt;\\n    &lt;%= value %&gt;"},"id":"1004","type":"HTMLTemplateFormatter"},{"attributes":{"editor":{"id":"1012"},"field":"Date","formatter":{"id":"1011"},"title":"Date","width":150},"id":"1005","type":"TableColumn"},{"attributes":{},"id":"1013","type":"StringEditor"},{"attributes":{"source":{"id":"1003"}},"id":"1010","type":"CDSView"},{"attributes":{"editor":{"id":"1013"},"field":"Release","formatter":{"id":"1004"},"title":"Release","width":600},"id":"1006","type":"TableColumn"},{"attributes":{},"id":"1014","type":"UnionRenderers"},{"attributes":{"data":{"Date":["Mon April  3","","Tue April  4","","","","Wed April  5","","Thu April  6","","","","Fri April  7","","","","","","","","",""],"Release":["JP, Tankan, summary","","JP, Monetary Base","JP, Tankan, details","KR, CPI","","JP, Output Gap and Potential Growth Rate","","JP, International Transactions in Securities, weekly","KR, FoF, quarterly","TW, PMI","","CN, International reserves","JP, BOJ Accounts","JP, Consumption Activity Index","JP, Household survey","JP, Indexes of Business Conditions(Preliminary Release)","JP, Monetary Base and the BOJ&#x27;s Transactions","JP, Trade, 20D, provisional","JP, Wages, Final","JP, Wages, Provisional","KR, BOP , preliminary"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]},"selected":{"id":"1015"},"selection_policy":{"id":"1014"}},"id":"1003","type":"ColumnDataSource"},{"attributes":{},"id":"1011","type":"StringFormatter"}],"root_ids":["1008"]},"title":"Bokeh Application","version":"2.4.3"}}';
        const render_items = [{"docid":"ef5008cf-373f-4bc4-8a47-f74df2bb0339","root_ids":["1008"],"roots":{"1008":"d6f00c7e-6980-400a-8b10-e861c7515e0b"}}];
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
    
