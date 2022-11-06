

    (function() {
          const fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                const docs_json = '{"5523a8a5-d946-4621-84ab-91ceedabe289":{"defs":[],"roots":{"references":[{"attributes":{},"id":"1015","type":"Selection"},{"attributes":{"columns":[{"id":"1005"},{"id":"1006"}],"index_position":null,"source":{"id":"1003"},"view":{"id":"1010"}},"id":"1008","type":"DataTable"},{"attributes":{},"id":"1012","type":"StringEditor"},{"attributes":{},"id":"1013","type":"StringEditor"},{"attributes":{},"id":"1011","type":"StringFormatter"},{"attributes":{},"id":"1014","type":"UnionRenderers"},{"attributes":{"source":{"id":"1003"}},"id":"1010","type":"CDSView"},{"attributes":{"editor":{"id":"1012"},"field":"Date","formatter":{"id":"1011"},"title":"Date","width":150},"id":"1005","type":"TableColumn"},{"attributes":{"data":{"Date":["Mon November  7","","Tue November  8","","","","","","","","","","","Wed November  9","","","","","","Thu November 10","","","","","Fri November 11",""],"Release":["CN, Merchandise trade, preliminary","","JP, Business conditions index, preliminary","JP, Consumption Activity Index","JP, Household survey","JP, Monetary Base and the BOJ&#x27;s Transactions","JP, Summary of Opinions at the Monetary Policy Meeting","JP, Trade, 20D, provisional","JP, Wages, Provisional","KR, BOP , preliminary","TW, CPI","TW, Merchandise trade","","CN, CPI &amp; PPI, monthly","JP, Balance of Payments, September 2022, preliminary,Calendar Year January - June 2022C.Y., preliminary, 2nd quarter 2022C.Y.","JP, Economy Watchers","JP, International Transactions in Securities, monthly","KR, Labour market","","CN, Monetary supply and credit (earliest date in 5-day window)","JP, International Transactions in Securities, weekly","JP, Money Stock","TW, Wages","","JP, Corporate Goods Price Index","JP, Trade Statistics 2021(Fixed)"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]},"selected":{"id":"1015"},"selection_policy":{"id":"1014"}},"id":"1003","type":"ColumnDataSource"},{"attributes":{"template":"\\n    &lt;style&gt;\\n        .slick-headerRowHeight {height:120px} \\n        .slick-column-name {font-family: Georgia; font-weight: 900; font-size: x-large}\\n        .slick-cell {font-family: Georgia; font-size: large}\\n    &lt;/style&gt;\\n    &lt;%= value %&gt;"},"id":"1004","type":"HTMLTemplateFormatter"},{"attributes":{"editor":{"id":"1013"},"field":"Release","formatter":{"id":"1004"},"title":"Release","width":350},"id":"1006","type":"TableColumn"}],"root_ids":["1008"]},"title":"Bokeh Application","version":"2.4.2"}}';
                const render_items = [{"docid":"5523a8a5-d946-4621-84ab-91ceedabe289","root_ids":["1008"],"roots":{"1008":"1f03532f-e2bf-4808-ad92-06865059227f"}}];
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
