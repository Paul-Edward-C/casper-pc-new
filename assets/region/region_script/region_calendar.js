

    (function() {
          const fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                const docs_json = '{"02c72d84-3667-4d51-b6fa-11f03292b968":{"defs":[],"roots":{"references":[{"attributes":{},"id":"1013","type":"StringEditor"},{"attributes":{"columns":[{"id":"1005"},{"id":"1006"}],"index_position":null,"source":{"id":"1003"},"view":{"id":"1010"}},"id":"1008","type":"DataTable"},{"attributes":{"editor":{"id":"1012"},"field":"Date","formatter":{"id":"1011"},"title":"Date","width":150},"id":"1005","type":"TableColumn"},{"attributes":{"data":{"Date":["Mon December 19","","Tue December 20","","","","Wed December 21","","","Thu December 22","","","","","Fri December 23","","","",""],"Release":["JP, Flow of Funds","","CN, LPR","JP, Real exports and imports, details","JP, Statement on Monetary Policy","","JP, Wages, Final","KR, 20-day foreign trade","","JP, BOJ Accounts","JP, International Transactions in Securities, weekly","KR, Producer Price Index","TW, Labor market","","CN, Foreign Exchange Settlement and Sales by Banks","CN, Foreign-related Receipts and Payments by Non-banking Sectors","JP, Minutes of the Monetary Policy Meeting","JP, National, CPI","TW, Production Index"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]},"selected":{"id":"1015"},"selection_policy":{"id":"1014"}},"id":"1003","type":"ColumnDataSource"},{"attributes":{"template":"\\n    &lt;style&gt;\\n        .slick-headerRowHeight {height:120px} \\n        .slick-column-name {font-family: Georgia; font-weight: 900; font-size: x-large}\\n        .slick-cell {font-family: Georgia; font-size: large}\\n    &lt;/style&gt;\\n    &lt;%= value %&gt;"},"id":"1004","type":"HTMLTemplateFormatter"},{"attributes":{"editor":{"id":"1013"},"field":"Release","formatter":{"id":"1004"},"title":"Release","width":350},"id":"1006","type":"TableColumn"},{"attributes":{},"id":"1011","type":"StringFormatter"},{"attributes":{"source":{"id":"1003"}},"id":"1010","type":"CDSView"},{"attributes":{},"id":"1012","type":"StringEditor"},{"attributes":{},"id":"1015","type":"Selection"},{"attributes":{},"id":"1014","type":"UnionRenderers"}],"root_ids":["1008"]},"title":"Bokeh Application","version":"2.4.2"}}';
                const render_items = [{"docid":"02c72d84-3667-4d51-b6fa-11f03292b968","root_ids":["1008"],"roots":{"1008":"0bb81592-f237-4577-b4a6-6983576a73b4"}}];
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
