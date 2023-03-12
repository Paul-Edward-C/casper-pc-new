

    (function() {
          const fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                const docs_json = '{"85b6ff50-2bbe-457f-9b17-2dea428682d8":{"defs":[],"roots":{"references":[{"attributes":{},"id":"1013","type":"StringEditor"},{"attributes":{"editor":{"id":"1013"},"field":"Release","formatter":{"id":"1004"},"title":"Release","width":600},"id":"1006","type":"TableColumn"},{"attributes":{"source":{"id":"1003"}},"id":"1010","type":"CDSView"},{"attributes":{},"id":"1014","type":"UnionRenderers"},{"attributes":{"editor":{"id":"1012"},"field":"Date","formatter":{"id":"1011"},"title":"Date","width":150},"id":"1005","type":"TableColumn"},{"attributes":{},"id":"1011","type":"StringFormatter"},{"attributes":{},"id":"1015","type":"Selection"},{"attributes":{"template":"\\n    &lt;style&gt;\\n        .slick-headerRowHeight {height:120px} \\n        .slick-column-name {font-family: Georgia; font-weight: 900; font-size: x-large}\\n        .slick-cell {font-family: Georgia; font-size: large}\\n    &lt;/style&gt;\\n    &lt;%= value %&gt;"},"id":"1004","type":"HTMLTemplateFormatter"},{"attributes":{"data":{"Date":["Mon March 13","","Tue March 14","","","Wed March 15","","","","","","","","","","","","","Thu March 16","","","","","","","Fri March 17","","","Sat March 18"],"Release":["JP, Business Outlook Survey","","JP, BOJ Accounts","KR, Export/import prices ","","CN, Activity data, monthly","CN, Central bank survey","CN, Depository corporations survey","CN, Foreign Exchange Settlement and Sales by Banks","CN, Foreign-related Receipts and Payments by Non-banking Sectors","CN, MLF rate and volume","JP, Minutes of the Monetary Policy Meeting","KR, Full-month foreign trade, details","KR, HH loans ","KR, Labour market","KR, Money ","TW, Wages/Earnings","","CN, Property prices, monthly","JP, IP, final","JP, International Transactions in Securities, weekly","JP, Machinery Orders","JP, Retail sales, final","JP, Trade Statistics( [Provisional])","","JP, Flow of Funds","JP, Tertiary activity","","CN, Merchandise trade, comprehensive"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]},"selected":{"id":"1015"},"selection_policy":{"id":"1014"}},"id":"1003","type":"ColumnDataSource"},{"attributes":{},"id":"1012","type":"StringEditor"},{"attributes":{"columns":[{"id":"1005"},{"id":"1006"}],"height":800,"index_position":null,"source":{"id":"1003"},"view":{"id":"1010"},"width":750},"id":"1008","type":"DataTable"}],"root_ids":["1008"]},"title":"Bokeh Application","version":"2.4.2"}}';
                const render_items = [{"docid":"85b6ff50-2bbe-457f-9b17-2dea428682d8","root_ids":["1008"],"roots":{"1008":"4ec5f04b-e857-4f2e-bba1-2975a2f0f0c4"}}];
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
