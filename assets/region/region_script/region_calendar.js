    
        (function() {
  const fn = function() {
    Bokeh.safely(function() {
      (function(root) {
        function embed_document(root) {
        const docs_json = '{"1d5c8216-af90-421d-b010-1278a80e8bee":{"defs":[],"roots":{"references":[{"attributes":{},"id":"1012","type":"StringEditor"},{"attributes":{"columns":[{"id":"1005"},{"id":"1006"}],"height":800,"index_position":null,"source":{"id":"1003"},"view":{"id":"1010"},"width":750},"id":"1008","type":"DataTable"},{"attributes":{"editor":{"id":"1012"},"field":"Date","formatter":{"id":"1011"},"title":"Date","width":150},"id":"1005","type":"TableColumn"},{"attributes":{},"id":"1013","type":"StringEditor"},{"attributes":{"editor":{"id":"1013"},"field":"Release","formatter":{"id":"1004"},"title":"Release","width":600},"id":"1006","type":"TableColumn"},{"attributes":{"data":{"Date":["Mon February 27","","Tue February 28","","","","","","","","Wed March  1","","","","","","","Thu March  2","","","","","","","Fri March  3","","",""],"Release":["JP, Indexes of Business Conditions(Revision of the Preliminary Release)","","CN, 2022 Economic and social development report","CN, Template on International Reserves and Foreign Currency Liquidity","JP, IP, preliminary","JP, Measures of Underlying Inflation","JP, Retail sales, preliminary","KR, Interest rates ","KR, ToT ","","CN, PMI","JP, Bond Market Survey","JP, MOF, corporate profits","KR, Full-month foreign trade, headlines","TW, Consumer confidence","TW, Leading indicator","","JP, BOJ Accounts","JP, Consumer Confidence Survey","JP, Financial Statements Statistics of Corporations by Industry(FY2022,-)","JP, International Transactions in Securities, weekly","JP, Monetary Base","KR, Monthly Industrial Statistics","","JP, Labour force survey","JP, Tokyo, CPI","TW, International reserves","TW, PMI"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]},"selected":{"id":"1015"},"selection_policy":{"id":"1014"}},"id":"1003","type":"ColumnDataSource"},{"attributes":{"template":"\\n    &lt;style&gt;\\n        .slick-headerRowHeight {height:120px} \\n        .slick-column-name {font-family: Georgia; font-weight: 900; font-size: x-large}\\n        .slick-cell {font-family: Georgia; font-size: large}\\n    &lt;/style&gt;\\n    &lt;%= value %&gt;"},"id":"1004","type":"HTMLTemplateFormatter"},{"attributes":{},"id":"1014","type":"UnionRenderers"},{"attributes":{"source":{"id":"1003"}},"id":"1010","type":"CDSView"},{"attributes":{},"id":"1011","type":"StringFormatter"},{"attributes":{},"id":"1015","type":"Selection"}],"root_ids":["1008"]},"title":"Bokeh Application","version":"2.4.3"}}';
        const render_items = [{"docid":"1d5c8216-af90-421d-b010-1278a80e8bee","root_ids":["1008"],"roots":{"1008":"32db94da-b11a-4b2d-a211-2db5e81f387b"}}];
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
    
