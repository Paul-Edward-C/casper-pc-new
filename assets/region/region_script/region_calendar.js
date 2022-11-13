

    (function() {
          const fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                const docs_json = '{"cab6425c-41c0-4aed-a74e-c87db41f1f84":{"defs":[],"roots":{"references":[{"attributes":{"template":"\\n    &lt;style&gt;\\n        .slick-headerRowHeight {height:120px} \\n        .slick-column-name {font-family: Georgia; font-weight: 900; font-size: x-large}\\n        .slick-cell {font-family: Georgia; font-size: large}\\n    &lt;/style&gt;\\n    &lt;%= value %&gt;"},"id":"1004","type":"HTMLTemplateFormatter"},{"attributes":{"editor":{"id":"1012"},"field":"Date","formatter":{"id":"1011"},"title":"Date","width":150},"id":"1005","type":"TableColumn"},{"attributes":{"columns":[{"id":"1005"},{"id":"1006"}],"index_position":null,"source":{"id":"1003"},"view":{"id":"1010"}},"id":"1008","type":"DataTable"},{"attributes":{"editor":{"id":"1013"},"field":"Release","formatter":{"id":"1004"},"title":"Release","width":350},"id":"1006","type":"TableColumn"},{"attributes":{"source":{"id":"1003"}},"id":"1010","type":"CDSView"},{"attributes":{},"id":"1014","type":"UnionRenderers"},{"attributes":{},"id":"1013","type":"StringEditor"},{"attributes":{},"id":"1011","type":"StringFormatter"},{"attributes":{},"id":"1012","type":"StringEditor"},{"attributes":{},"id":"1015","type":"Selection"},{"attributes":{"data":{"Date":["Mon November 14","","Tue November 15","","","","","","","","","Wed November 16","","","","Thu November 17","","","","Fri November 18","","",""],"Release":["JP, BOJ Accounts","","CN, Activity data, monthly","CN, MLF rate and volume","JP, GDP, first preliminary","JP, IP, final","JP, Retail sales, final","KR, Export/Import Price Index","KR, Full-month foreign trade, details","KR, Monetary and Liquidity Aggregates","","CN, Property prices, monthly","JP, Machinery Orders","JP, Tertiary activity","","JP, International Transactions in Securities, weekly","JP, Real exports and imports, headline","JP, Trade Statistics(October 2022[Provisional])","","CN, Foreign Exchange Settlement and Sales by Banks","CN, Foreign-related Receipts and Payments by Non-banking Sectors","CN, Merchandise trade, comprehensive","JP, National, CPI"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]},"selected":{"id":"1015"},"selection_policy":{"id":"1014"}},"id":"1003","type":"ColumnDataSource"}],"root_ids":["1008"]},"title":"Bokeh Application","version":"2.4.2"}}';
                const render_items = [{"docid":"cab6425c-41c0-4aed-a74e-c87db41f1f84","root_ids":["1008"],"roots":{"1008":"d1bc230f-bccd-49f2-a81d-b5a8a6e8090e"}}];
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
