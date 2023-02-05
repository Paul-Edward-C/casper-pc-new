

    (function() {
          const fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                const docs_json = '{"a4841909-5d8e-43b3-9ae6-5fdecbb5a1f4":{"defs":[],"roots":{"references":[{"attributes":{"data":{"Date":["Tue February  7","","","","","","","","","Wed February  8","","","","","Thu February  9","","","","Fri February 10","","","","",""],"Release":["CN, International reserves","JP, Consumption Activity Index","JP, Household survey","JP, Indexes of Business Conditions(Preliminary Release)","JP, Monetary Base and the BOJ&#x27;s Transactions","JP, Trade, 20D, provisional","JP, Wages, Provisional","TW, Merchandise trade","","JP, BOP","JP, Economy Watchers","JP, International Transactions in Securities, monthly","KR, BOP , preliminary","","JP, International Transactions in Securities, weekly","JP, Money Stock","TW, CPI and PPI","","CN, CPI &amp; PPI, monthly","CN, Monetary supply and credit (earliest date in 5-day window)","JP, Central Government Debt(As of December 31, 2022)","JP, Corporate Goods Price Index","TW, Central bank survey","TW, PMI"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]},"selected":{"id":"1015"},"selection_policy":{"id":"1014"}},"id":"1003","type":"ColumnDataSource"},{"attributes":{},"id":"1014","type":"UnionRenderers"},{"attributes":{"editor":{"id":"1013"},"field":"Release","formatter":{"id":"1004"},"title":"Release","width":600},"id":"1006","type":"TableColumn"},{"attributes":{"columns":[{"id":"1005"},{"id":"1006"}],"height":550,"index_position":null,"source":{"id":"1003"},"view":{"id":"1010"},"width":750},"id":"1008","type":"DataTable"},{"attributes":{},"id":"1011","type":"StringFormatter"},{"attributes":{"template":"\\n    &lt;style&gt;\\n        .slick-headerRowHeight {height:120px} \\n        .slick-column-name {font-family: Georgia; font-weight: 900; font-size: x-large}\\n        .slick-cell {font-family: Georgia; font-size: large}\\n    &lt;/style&gt;\\n    &lt;%= value %&gt;"},"id":"1004","type":"HTMLTemplateFormatter"},{"attributes":{},"id":"1015","type":"Selection"},{"attributes":{"editor":{"id":"1012"},"field":"Date","formatter":{"id":"1011"},"title":"Date","width":150},"id":"1005","type":"TableColumn"},{"attributes":{},"id":"1012","type":"StringEditor"},{"attributes":{"source":{"id":"1003"}},"id":"1010","type":"CDSView"},{"attributes":{},"id":"1013","type":"StringEditor"}],"root_ids":["1008"]},"title":"Bokeh Application","version":"2.4.2"}}';
                const render_items = [{"docid":"a4841909-5d8e-43b3-9ae6-5fdecbb5a1f4","root_ids":["1008"],"roots":{"1008":"2141c7ad-a758-4da5-9474-493071e84b2c"}}];
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
