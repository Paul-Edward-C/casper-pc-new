

    (function() {
          const fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                const docs_json = '{"fb0962fe-299d-4297-93c8-1876978c04a1":{"defs":[],"roots":{"references":[{"attributes":{},"id":"1014","type":"UnionRenderers"},{"attributes":{"columns":[{"id":"1005"},{"id":"1006"}],"index_position":null,"source":{"id":"1003"},"view":{"id":"1010"}},"id":"1008","type":"DataTable"},{"attributes":{},"id":"1012","type":"StringEditor"},{"attributes":{},"id":"1015","type":"Selection"},{"attributes":{"editor":{"id":"1013"},"field":"Release","formatter":{"id":"1004"},"title":"Release","width":350},"id":"1006","type":"TableColumn"},{"attributes":{"editor":{"id":"1012"},"field":"Date","formatter":{"id":"1011"},"title":"Date","width":150},"id":"1005","type":"TableColumn"},{"attributes":{"source":{"id":"1003"}},"id":"1010","type":"CDSView"},{"attributes":{"template":"\\n    &lt;style&gt;\\n        .slick-headerRowHeight {height:120px} \\n        .slick-column-name {font-family: Georgia; font-weight: 900; font-size: x-large}\\n        .slick-cell {font-family: Georgia; font-size: large}\\n    &lt;/style&gt;\\n    &lt;%= value %&gt;"},"id":"1004","type":"HTMLTemplateFormatter"},{"attributes":{},"id":"1013","type":"StringEditor"},{"attributes":{},"id":"1011","type":"StringFormatter"},{"attributes":{"data":{"Date":["Mon November 28","","Tue November 29","","","","","","Wed November 30","","","","","","","Thu December  1","","","","","","","","","Fri December  2","","","",""],"Release":["TW, Leading indicator","","JP, Labour force survey","JP, Retail sales, preliminary","JP, Trade Statistics Oct. 2022(Export: Detailed; Import: 9-digit Provisional)","JP, Trade Statistics Sep. 2022(Import: Detailed)","JP, Trade, 10D, provisional","","CN, PMI","CN, Template on International Reserves and Foreign Currency Liquidity","JP, IP, preliminary","KR, Monthly Industrial Statistics","KR, Trade/Terms of Trade Index","TW, National accounts","","JP, Bond Market Survey","JP, Consumer Confidence Survey","JP, Financial Statements Statistics of Corporations by Industry(FY2022,July-September)","JP, International Transactions in Securities, weekly","JP, MOF, corporate profits","KR, Full-month foreign trade, headlines","KR, GNI, quarterly","TW, NDC PMI","","JP, BOJ Accounts","JP, Keynote speech by Governor KURODA at the ASEAN+3 Economic Cooperation and Financial Stability Forum hosted by AMRO","JP, Monetary Base","KR, CPI","KR, Industrial loans, quarterly"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]},"selected":{"id":"1015"},"selection_policy":{"id":"1014"}},"id":"1003","type":"ColumnDataSource"}],"root_ids":["1008"]},"title":"Bokeh Application","version":"2.4.2"}}';
                const render_items = [{"docid":"fb0962fe-299d-4297-93c8-1876978c04a1","root_ids":["1008"],"roots":{"1008":"95b50d61-4495-44b3-baf3-6177d0e25a28"}}];
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
