

    (function() {
          const fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                const docs_json = '{"73187a84-4118-40c4-8505-6ac12b07ef9c":{"defs":[],"roots":{"references":[{"attributes":{"template":"\\n    &lt;style&gt;\\n        .slick-headerRowHeight {height:120px} \\n        .slick-column-name {font-family: Georgia; font-weight: 900; font-size: x-large}\\n        .slick-cell {font-family: Georgia; font-size: large}\\n    &lt;/style&gt;\\n    &lt;%= value %&gt;"},"id":"1004","type":"HTMLTemplateFormatter"},{"attributes":{"data":{"Date":["Mon November 21","","","","","Tue November 22","","","","","","","","Wed November 23","","","","","","Thu November 24","","","Fri November 25","","","","",""],"Release":["KR, 20-day foreign trade","TW, Balance of payments","TW, Export orders","TW, External debt","","JP, BOJ Accounts","JP, Measures of Underlying Inflation","JP, Real exports and imports, details","JP, Wages, Final","KR, Consumer confidence, November 2022","KR, HH credit, quarterly","TW, Labor market","","KR, Business sentiment, November 2022","KR, IIP, quarterly","TW, IP","TW, Production Index","TW, Retail sales","","KR, BOK monetary policy meeting","KR, Producer Price Index","","CN, Overseas portfolio assets by country","CN, Trade in goods and services","CN, Transactions in the Chinese Foreign Exchange Market","JP, International Transactions in Securities, weekly","JP, Services Producer Price Index","JP, Tokyo, CPI"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]},"selected":{"id":"1015"},"selection_policy":{"id":"1014"}},"id":"1003","type":"ColumnDataSource"},{"attributes":{"source":{"id":"1003"}},"id":"1010","type":"CDSView"},{"attributes":{"columns":[{"id":"1005"},{"id":"1006"}],"index_position":null,"source":{"id":"1003"},"view":{"id":"1010"}},"id":"1008","type":"DataTable"},{"attributes":{},"id":"1012","type":"StringEditor"},{"attributes":{},"id":"1014","type":"UnionRenderers"},{"attributes":{},"id":"1013","type":"StringEditor"},{"attributes":{},"id":"1011","type":"StringFormatter"},{"attributes":{},"id":"1015","type":"Selection"},{"attributes":{"editor":{"id":"1012"},"field":"Date","formatter":{"id":"1011"},"title":"Date","width":150},"id":"1005","type":"TableColumn"},{"attributes":{"editor":{"id":"1013"},"field":"Release","formatter":{"id":"1004"},"title":"Release","width":350},"id":"1006","type":"TableColumn"}],"root_ids":["1008"]},"title":"Bokeh Application","version":"2.4.2"}}';
                const render_items = [{"docid":"73187a84-4118-40c4-8505-6ac12b07ef9c","root_ids":["1008"],"roots":{"1008":"8aa4a7ee-3811-4c0e-a614-1317ed4cfbf7"}}];
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
