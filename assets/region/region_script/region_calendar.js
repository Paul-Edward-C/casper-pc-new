    
        (function() {
  const fn = function() {
    Bokeh.safely(function() {
      (function(root) {
        function embed_document(root) {
        const docs_json = '{"fe2939b1-9992-4f31-ac0c-4da59a6cbe58":{"defs":[],"roots":{"references":[{"attributes":{},"id":"1011","type":"StringFormatter"},{"attributes":{},"id":"1015","type":"Selection"},{"attributes":{"data":{"Date":["Mon January 23","","","Tue January 24","","","","","Wed January 25","","Thu January 26","","","","","","Fri January 27","","","",""],"Release":["JP, Minutes of the Monetary Policy Meeting","JP, Senior Loan Officer Opinion Survey","","JP, BOJ Accounts","JP, Measures of Underlying Inflation","JP, Real exports and imports, details","JP, Wages, Final","","Indexes of Business Conditions(Revision of the Preliminary Release)","","JP, International Transactions in Securities, weekly","JP, Services Producer Price Index","JP, Summary of Opinions at the Monetary Policy Meeting","KR, Consumer confidence, January 2023","KR, GDP, advance estimate","","JP, Tokyo, CPI","JP, Trade Statistics Dec. 2022(Export: Detailed; Import: 9-digit Provisional)","JP, Trade Statistics Nov. 2022(Import: Detailed)","JP, Trade, 10D, provisional","KR, Business sentiment, January 2023"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]},"selected":{"id":"1015"},"selection_policy":{"id":"1014"}},"id":"1003","type":"ColumnDataSource"},{"attributes":{"editor":{"id":"1013"},"field":"Release","formatter":{"id":"1004"},"title":"Release","width":600},"id":"1006","type":"TableColumn"},{"attributes":{"editor":{"id":"1012"},"field":"Date","formatter":{"id":"1011"},"title":"Date","width":150},"id":"1005","type":"TableColumn"},{"attributes":{},"id":"1012","type":"StringEditor"},{"attributes":{},"id":"1014","type":"UnionRenderers"},{"attributes":{"columns":[{"id":"1005"},{"id":"1006"}],"height":700,"index_position":null,"source":{"id":"1003"},"view":{"id":"1010"},"width":750},"id":"1008","type":"DataTable"},{"attributes":{},"id":"1013","type":"StringEditor"},{"attributes":{"template":"\\n    &lt;style&gt;\\n        .slick-headerRowHeight {height:120px} \\n        .slick-column-name {font-family: Georgia; font-weight: 900; font-size: x-large}\\n        .slick-cell {font-family: Georgia; font-size: large}\\n    &lt;/style&gt;\\n    &lt;%= value %&gt;"},"id":"1004","type":"HTMLTemplateFormatter"},{"attributes":{"source":{"id":"1003"}},"id":"1010","type":"CDSView"}],"root_ids":["1008"]},"title":"Bokeh Application","version":"2.4.3"}}';
        const render_items = [{"docid":"fe2939b1-9992-4f31-ac0c-4da59a6cbe58","root_ids":["1008"],"roots":{"1008":"c1e92e65-c0b9-422c-8066-4c557e0fd9ac"}}];
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
    
