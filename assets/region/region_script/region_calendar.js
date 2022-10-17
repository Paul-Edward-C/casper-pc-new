

    (function() {
          const fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                const docs_json = '{"a55f6cd7-9ede-42b7-b3c4-845776499b31":{"defs":[],"roots":{"references":[{"attributes":{},"id":"1013","type":"StringEditor"},{"attributes":{},"id":"1014","type":"UnionRenderers"},{"attributes":{"editor":{"id":"1013"},"field":"Release","formatter":{"id":"1004"},"title":"Release","width":350},"id":"1006","type":"TableColumn"},{"attributes":{"template":"\\n    &lt;style&gt;\\n        .slick-headerRowHeight {height:120px} \\n        .slick-column-name {font-family: Georgia; font-weight: 900; font-size: x-large}\\n        .slick-cell {font-family: Georgia; font-size: large}\\n    &lt;/style&gt;\\n    &lt;%= value %&gt;"},"id":"1004","type":"HTMLTemplateFormatter"},{"attributes":{"columns":[{"id":"1005"},{"id":"1006"}],"index_position":null,"source":{"id":"1003"},"view":{"id":"1010"}},"id":"1008","type":"DataTable"},{"attributes":{},"id":"1015","type":"Selection"},{"attributes":{"editor":{"id":"1012"},"field":"Date","formatter":{"id":"1011"},"title":"Date","width":150},"id":"1005","type":"TableColumn"},{"attributes":{"source":{"id":"1003"}},"id":"1010","type":"CDSView"},{"attributes":{},"id":"1012","type":"StringEditor"},{"attributes":{"data":{"Date":["Mon October 17","","","","Tue October 18","","","","","","Wed October 19","","","","Thu October 20","","","","","","Fri October 21","","","","","",""],"Release":["JP, IP, final","JP, Retail sales, final","JP, Tertiary activity","","CN, Activity data, monthly","CN, GDP, quarterly","CN, Merchandise trade, comprehensive","KR, Household Loans of Depository Corporations","KR, Monetary and Liquidity Aggregates","","CN, IP, quarterly","CN, Property prices, monthly","KR, Financial analysis statement, quarterly","","CN, LPR","JP, International Transactions in Securities, weekly","JP, Real exports and imports, headline","JP, Trade Statistics(September 2022[Provisional])","TW, Export orders","","CN, Foreign Exchange Settlement and Sales by Banks","CN, Foreign-related Receipts and Payments by Non-banking Sectors","JP, Financial System Report","JP, National, CPI","KR, 20-day foreign trade","KR, Producer Price Index","KR, Trade Settlement Currency in H1 2022"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]},"selected":{"id":"1015"},"selection_policy":{"id":"1014"}},"id":"1003","type":"ColumnDataSource"},{"attributes":{},"id":"1011","type":"StringFormatter"}],"root_ids":["1008"]},"title":"Bokeh Application","version":"2.4.2"}}';
                const render_items = [{"docid":"a55f6cd7-9ede-42b7-b3c4-845776499b31","root_ids":["1008"],"roots":{"1008":"4fc95cf5-1eb7-4c85-9248-d9b3e1078f81"}}];
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
