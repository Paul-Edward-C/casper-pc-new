

    (function() {
          const fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                const docs_json = '{"6fbc836b-68ad-41c0-8707-f34306f6cd94":{"defs":[],"roots":{"references":[{"attributes":{"columns":[{"id":"1005"},{"id":"1006"}],"index_position":null,"source":{"id":"1003"},"view":{"id":"1010"}},"id":"1008","type":"DataTable"},{"attributes":{},"id":"1011","type":"StringFormatter"},{"attributes":{},"id":"1014","type":"UnionRenderers"},{"attributes":{},"id":"1013","type":"StringEditor"},{"attributes":{"editor":{"id":"1013"},"field":"Release","formatter":{"id":"1004"},"title":"Release","width":350},"id":"1006","type":"TableColumn"},{"attributes":{"source":{"id":"1003"}},"id":"1010","type":"CDSView"},{"attributes":{"data":{"Date":["Mon October 31","","","","","","","","Tue November  1","","","Wed November  2","","","","","Fri November  4","",""],"Release":["CN, PMI","CN, Template on International Reserves and Foreign Currency Liquidity","JP, Consumer Confidence Survey","JP, IP, preliminary","JP, Outlook for Economic Activity and Prices","JP, Retail sales, preliminary","KR, Monthly Industrial Statistics","","KR, Full-month foreign trade, headlines","TW, NDC PMI","","JP, BOJ Accounts","JP, Minutes of the Monetary Policy Meeting","JP, Monetary Base","KR, CPI","","CN, Balance of payments, preliminary","JP, International Transactions in Securities, weekly","TW, International reserves"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]},"selected":{"id":"1015"},"selection_policy":{"id":"1014"}},"id":"1003","type":"ColumnDataSource"},{"attributes":{"template":"\\n    &lt;style&gt;\\n        .slick-headerRowHeight {height:120px} \\n        .slick-column-name {font-family: Georgia; font-weight: 900; font-size: x-large}\\n        .slick-cell {font-family: Georgia; font-size: large}\\n    &lt;/style&gt;\\n    &lt;%= value %&gt;"},"id":"1004","type":"HTMLTemplateFormatter"},{"attributes":{},"id":"1012","type":"StringEditor"},{"attributes":{},"id":"1015","type":"Selection"},{"attributes":{"editor":{"id":"1012"},"field":"Date","formatter":{"id":"1011"},"title":"Date","width":150},"id":"1005","type":"TableColumn"}],"root_ids":["1008"]},"title":"Bokeh Application","version":"2.4.2"}}';
                const render_items = [{"docid":"6fbc836b-68ad-41c0-8707-f34306f6cd94","root_ids":["1008"],"roots":{"1008":"f6ca5d5f-af41-4bfe-a601-03a23e7e691d"}}];
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
