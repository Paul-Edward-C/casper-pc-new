

    (function() {
          const fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                const docs_json = '{"f4f364ea-e767-430e-ad95-0208e30031b0":{"defs":[],"roots":{"references":[{"attributes":{"template":"\\n    &lt;style&gt;\\n        .slick-headerRowHeight {height:120px} \\n        .slick-column-name {font-family: Georgia; font-weight: 900; font-size: x-large}\\n        .slick-cell {font-family: Georgia; font-size: large}\\n    &lt;/style&gt;\\n    &lt;%= value %&gt;"},"id":"1004","type":"HTMLTemplateFormatter"},{"attributes":{"data":{"Date":["Mon January 16","","","","","Tue January 17","","","","","","","Wed January 18","","","","","","","","","Thu January 19","","","","","Fri January 20","","","","Sat January 21"],"Release":["CN, Central bank survey","CN, Depository corporations survey","CN, Property prices, monthly","JP, Corporate Goods Price Index","","CN, Activity data, monthly","CN, GDP, quarterly","JP, Retail sales, final","JP, Tertiary activity","KR, Household Loans of Depository Corporations","KR, Monetary and Liquidity Aggregates","","CN, IP, quarterly","CN, Merchandise trade, comprehensive","JP, IP, final","JP, Outlook for Economic Activity and Prices","JP, Statement on Monetary Policy","Machinery Orders","TW, Labour market","TW, National accounts","","JP, International Transactions in Securities, weekly","JP, Outlook for Economic Activity and Prices","JP, Real exports and imports, headline","JP, Trade Statistics(December 2022[Provisional])","","CN, LPR","JP, National, CPI","KR, Producer Price Index","","KR, 20-day foreign trade"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]},"selected":{"id":"1015"},"selection_policy":{"id":"1014"}},"id":"1003","type":"ColumnDataSource"},{"attributes":{"source":{"id":"1003"}},"id":"1010","type":"CDSView"},{"attributes":{},"id":"1014","type":"UnionRenderers"},{"attributes":{},"id":"1011","type":"StringFormatter"},{"attributes":{"columns":[{"id":"1005"},{"id":"1006"}],"height":800,"index_position":null,"source":{"id":"1003"},"view":{"id":"1010"},"width":750},"id":"1008","type":"DataTable"},{"attributes":{},"id":"1015","type":"Selection"},{"attributes":{"editor":{"id":"1012"},"field":"Date","formatter":{"id":"1011"},"title":"Date","width":150},"id":"1005","type":"TableColumn"},{"attributes":{},"id":"1012","type":"StringEditor"},{"attributes":{"editor":{"id":"1013"},"field":"Release","formatter":{"id":"1004"},"title":"Release","width":600},"id":"1006","type":"TableColumn"},{"attributes":{},"id":"1013","type":"StringEditor"}],"root_ids":["1008"]},"title":"Bokeh Application","version":"2.4.2"}}';
                const render_items = [{"docid":"f4f364ea-e767-430e-ad95-0208e30031b0","root_ids":["1008"],"roots":{"1008":"c042c9d9-c460-4e55-9759-51609eea2a27"}}];
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
