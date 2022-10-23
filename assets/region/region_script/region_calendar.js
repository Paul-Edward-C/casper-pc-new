

    (function() {
          const fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                const docs_json = '{"7f3722b9-125c-4f69-8972-56576257da96":{"defs":[],"roots":{"references":[{"attributes":{"editor":{"id":"1012"},"field":"Date","formatter":{"id":"1011"},"title":"Date","width":150},"id":"1005","type":"TableColumn"},{"attributes":{"source":{"id":"1003"}},"id":"1010","type":"CDSView"},{"attributes":{},"id":"1014","type":"UnionRenderers"},{"attributes":{},"id":"1015","type":"Selection"},{"attributes":{"editor":{"id":"1013"},"field":"Release","formatter":{"id":"1004"},"title":"Release","width":350},"id":"1006","type":"TableColumn"},{"attributes":{"columns":[{"id":"1005"},{"id":"1006"}],"index_position":null,"source":{"id":"1003"},"view":{"id":"1010"}},"id":"1008","type":"DataTable"},{"attributes":{},"id":"1012","type":"StringEditor"},{"attributes":{},"id":"1011","type":"StringFormatter"},{"attributes":{},"id":"1013","type":"StringEditor"},{"attributes":{"data":{"Date":["Mon October 24","","","","","","","Tue October 25","","","","","Wed October 26","","","Thu October 27","","","","","","Fri October 28","","","","","","","","",""],"Release":["JP, BOJ Accounts","JP, Senior Loan Officer Opinion Survey","TW, IP","TW, Labor market","TW, Production Index","TW, Retail sales","","JP, Measures of Underlying Inflation","JP, Real exports and imports, details","JP, Wages, Final","KR, Consumer confidence, October 2022","","JP, Services Producer Price Index","KR, Business sentiment, October 2022","","CN, Profits, monthly","JP, International Transactions in Securities, weekly","KR, GDP, advance estimate","KR, Trade/Terms of Trade Index","TW, Leading indicator","","CN, Trade in goods and services","CN, Transactions in the Chinese Foreign Exchange Market","JP, Labour force survey","JP, Outlook for Economic Activity and Prices","JP, Statement on Monetary Policy","JP, Tokyo, CPI","JP, Trade Statistics Aug. 2022(Import: Detailed)","JP, Trade Statistics Sep. 2022(Export: Detailed; Import: 9-digit Provisional)","JP, Trade, 10D, provisional","TW, National accounts"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]},"selected":{"id":"1015"},"selection_policy":{"id":"1014"}},"id":"1003","type":"ColumnDataSource"},{"attributes":{"template":"\\n    &lt;style&gt;\\n        .slick-headerRowHeight {height:120px} \\n        .slick-column-name {font-family: Georgia; font-weight: 900; font-size: x-large}\\n        .slick-cell {font-family: Georgia; font-size: large}\\n    &lt;/style&gt;\\n    &lt;%= value %&gt;"},"id":"1004","type":"HTMLTemplateFormatter"}],"root_ids":["1008"]},"title":"Bokeh Application","version":"2.4.2"}}';
                const render_items = [{"docid":"7f3722b9-125c-4f69-8972-56576257da96","root_ids":["1008"],"roots":{"1008":"1df57f9c-d8e0-4a3a-8743-458a94ab8792"}}];
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
