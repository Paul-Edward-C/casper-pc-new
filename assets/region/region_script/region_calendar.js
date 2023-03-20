    
        (function() {
  const fn = function() {
    Bokeh.safely(function() {
      (function(root) {
        function embed_document(root) {
        const docs_json = '{"bb6b7642-2669-48ab-b821-508c07f06392":{"defs":[],"roots":{"references":[{"attributes":{"template":"\\n    &lt;style&gt;\\n        .slick-headerRowHeight {height:120px} \\n        .slick-column-name {font-family: Georgia; font-weight: 900; font-size: x-large}\\n        .slick-cell {font-family: Georgia; font-size: large}\\n    &lt;/style&gt;\\n    &lt;%= value %&gt;"},"id":"1004","type":"HTMLTemplateFormatter"},{"attributes":{},"id":"1013","type":"StringEditor"},{"attributes":{"data":{"Date":["Mon March 20","","","Tue March 21","","","Wed March 22","","Thu March 23","","","","","Fri March 24","","","",""],"Release":["CN, LPR","JP, Summary of Opinions at the Monetary Policy Meeting","","KR, 20-day foreign trade","KR, PPI ","","JP, Real exports and imports, details","","JP, BOJ Accounts","TW, CBC, monetary policy meeting","TW, Depository corporations survey","TW, Production Index","","CN, Transactions in the Chinese Foreign Exchange Market","JP, International Transactions in Securities, weekly","JP, National, CPI","KR, IPR trade in 2022, preliminary","TW, Labour market"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]},"selected":{"id":"1015"},"selection_policy":{"id":"1014"}},"id":"1003","type":"ColumnDataSource"},{"attributes":{"columns":[{"id":"1005"},{"id":"1006"}],"height":500,"index_position":null,"source":{"id":"1003"},"view":{"id":"1010"},"width":750},"id":"1008","type":"DataTable"},{"attributes":{},"id":"1014","type":"UnionRenderers"},{"attributes":{"editor":{"id":"1012"},"field":"Date","formatter":{"id":"1011"},"title":"Date","width":150},"id":"1005","type":"TableColumn"},{"attributes":{"source":{"id":"1003"}},"id":"1010","type":"CDSView"},{"attributes":{},"id":"1011","type":"StringFormatter"},{"attributes":{},"id":"1015","type":"Selection"},{"attributes":{},"id":"1012","type":"StringEditor"},{"attributes":{"editor":{"id":"1013"},"field":"Release","formatter":{"id":"1004"},"title":"Release","width":600},"id":"1006","type":"TableColumn"}],"root_ids":["1008"]},"title":"Bokeh Application","version":"2.4.3"}}';
        const render_items = [{"docid":"bb6b7642-2669-48ab-b821-508c07f06392","root_ids":["1008"],"roots":{"1008":"34ebd8ef-c22b-437d-844b-1f56d6fa60ee"}}];
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
    
