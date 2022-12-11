

    (function() {
          const fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                const docs_json = '{"ae0d2bfc-af1c-4c4a-9968-08b27dcdfc47":{"defs":[],"roots":{"references":[{"attributes":{},"id":"1012","type":"StringEditor"},{"attributes":{},"id":"1014","type":"UnionRenderers"},{"attributes":{"data":{"Date":["Mon December 12","","","","Tue December 13","","","","Wed December 14","","","","","Thu December 15","","","","","","","","","","","",""],"Release":["JP, Business Outlook Survey (October-December 2022)","JP, Corporate Goods Price Index","TW, Wages","","JP, BOJ Accounts","KR, Household Loans of Depository Corporations","KR, Monetary and Liquidity Aggregates","","JP, IP, final","JP, Machinery Orders","JP, Tankan, summary","KR, Labour market","","CN, Activity data, monthly","CN, MLF rate and volume","CN, Property prices, monthly","JP, International Transactions in Securities, weekly","JP, Real exports and imports, headline","JP, Retail sales, final","JP, Tankan, details","JP, Tertiary activity","JP, Trade Statistics(November 2022[Provisional])","KR, Export/Import Price Index","KR, Financial analysis statement, quarterly","KR, Full-month foreign trade, details","TW, CBC, monetary policy meeting"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]},"selected":{"id":"1015"},"selection_policy":{"id":"1014"}},"id":"1003","type":"ColumnDataSource"},{"attributes":{"columns":[{"id":"1005"},{"id":"1006"}],"index_position":null,"source":{"id":"1003"},"view":{"id":"1010"}},"id":"1008","type":"DataTable"},{"attributes":{},"id":"1013","type":"StringEditor"},{"attributes":{"editor":{"id":"1013"},"field":"Release","formatter":{"id":"1004"},"title":"Release","width":350},"id":"1006","type":"TableColumn"},{"attributes":{"template":"\\n    &lt;style&gt;\\n        .slick-headerRowHeight {height:120px} \\n        .slick-column-name {font-family: Georgia; font-weight: 900; font-size: x-large}\\n        .slick-cell {font-family: Georgia; font-size: large}\\n    &lt;/style&gt;\\n    &lt;%= value %&gt;"},"id":"1004","type":"HTMLTemplateFormatter"},{"attributes":{"editor":{"id":"1012"},"field":"Date","formatter":{"id":"1011"},"title":"Date","width":150},"id":"1005","type":"TableColumn"},{"attributes":{},"id":"1011","type":"StringFormatter"},{"attributes":{"source":{"id":"1003"}},"id":"1010","type":"CDSView"},{"attributes":{},"id":"1015","type":"Selection"}],"root_ids":["1008"]},"title":"Bokeh Application","version":"2.4.2"}}';
                const render_items = [{"docid":"ae0d2bfc-af1c-4c4a-9968-08b27dcdfc47","root_ids":["1008"],"roots":{"1008":"c39a30bc-bdb9-473d-a5f5-66c0e016b544"}}];
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
