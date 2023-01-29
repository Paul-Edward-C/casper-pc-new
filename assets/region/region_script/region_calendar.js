    
        (function() {
  const fn = function() {
    Bokeh.safely(function() {
      (function(root) {
        function embed_document(root) {
        const docs_json = '{"2fa75440-cf35-4ec3-b557-a25ccbf33313":{"defs":[],"roots":{"references":[{"attributes":{},"id":"1011","type":"StringFormatter"},{"attributes":{"data":{"Date":["Mon January 30","","Tue January 31","","","","","","","","","","","Wed February  1","","","","Thu February  2","","","","","Fri February  3"],"Release":["CN, Culture industries, quarterly","","CN, PMI","CN, Profits, monthly","Consumer Confidence Survey","JP, IP, preliminary","JP, Labour force survey","JP, Retail sales, preliminary","KR, Monthly Industrial Statistics","KR, Trade/Terms of Trade Index","TW, Depository corporations survey","TW, Export orders","","KR, Full-month foreign trade, headlines","TW, IP","TW, Retail sales","","JP, BOJ Accounts","JP, International Transactions in Securities, weekly","JP, Monetary Base","KR, CPI","","TW, International reserves"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]},"selected":{"id":"1015"},"selection_policy":{"id":"1014"}},"id":"1003","type":"ColumnDataSource"},{"attributes":{},"id":"1015","type":"Selection"},{"attributes":{},"id":"1012","type":"StringEditor"},{"attributes":{},"id":"1013","type":"StringEditor"},{"attributes":{"source":{"id":"1003"}},"id":"1010","type":"CDSView"},{"attributes":{"editor":{"id":"1013"},"field":"Release","formatter":{"id":"1004"},"title":"Release","width":600},"id":"1006","type":"TableColumn"},{"attributes":{"columns":[{"id":"1005"},{"id":"1006"}],"height":550,"index_position":null,"source":{"id":"1003"},"view":{"id":"1010"},"width":750},"id":"1008","type":"DataTable"},{"attributes":{"editor":{"id":"1012"},"field":"Date","formatter":{"id":"1011"},"title":"Date","width":150},"id":"1005","type":"TableColumn"},{"attributes":{"template":"\\n    &lt;style&gt;\\n        .slick-headerRowHeight {height:120px} \\n        .slick-column-name {font-family: Georgia; font-weight: 900; font-size: x-large}\\n        .slick-cell {font-family: Georgia; font-size: large}\\n    &lt;/style&gt;\\n    &lt;%= value %&gt;"},"id":"1004","type":"HTMLTemplateFormatter"},{"attributes":{},"id":"1014","type":"UnionRenderers"}],"root_ids":["1008"]},"title":"Bokeh Application","version":"2.4.3"}}';
        const render_items = [{"docid":"2fa75440-cf35-4ec3-b557-a25ccbf33313","root_ids":["1008"],"roots":{"1008":"b5b0d6d3-3d1e-4b54-b5ac-90e60c7c8714"}}];
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
    
