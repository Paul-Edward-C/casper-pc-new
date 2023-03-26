

    (function() {
          const fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                const docs_json = '{"5c3f22c6-efa1-4b1f-87fa-1598318b3714":{"defs":[],"roots":{"references":[{"attributes":{},"id":"1014","type":"UnionRenderers"},{"attributes":{"source":{"id":"1003"}},"id":"1010","type":"CDSView"},{"attributes":{},"id":"1011","type":"StringFormatter"},{"attributes":{"data":{"Date":["Mon March 27","","","","","Tue March 28","","","","","Wed March 29","","Thu March 30","","","","","","","Fri March 31","","","","","","","","","","","","Sat April  1"],"Release":["CN, Profits, monthly","JP, Indexes of Business Conditions(Revision of the Preliminary Release)","JP, Services Producer Price Index","TW, Consumer confidence","","JP, Measures of Underlying Inflation","JP, Quarterly Survey of Overseas Subsidiaries (Survey from  to  2022)","JP, Remarks by Governor KURODA at the FIN/SUM ","KR, ToT ","","KR, Consumer confidence,  ","","CN, External Financial Assets and Liabilities of China&#x27;s Banking Sector","JP, International Transactions in Securities, weekly","JP, Trade Statistics Feb. (Export: Detailed; Import: 9-digit Provisional)","JP, Trade Statistics Jan. (Import: Detailed)","JP, Trade, 10D, provisional","KR, Business sentiment,  ","","CN, Balance of payments, final","CN, External debt","CN, International investment position","CN, Template on International Reserves and Foreign Currency Liquidity","CN, Trade in goods and services","JP, IP, preliminary","JP, Labour force survey","JP, Retail sales, preliminary","JP, Tokyo, CPI","KR, Interest rates ","KR, Monthly Industrial Statistics","","KR, Full-month foreign trade, headlines"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"selected":{"id":"1015"},"selection_policy":{"id":"1014"}},"id":"1003","type":"ColumnDataSource"},{"attributes":{},"id":"1015","type":"Selection"},{"attributes":{},"id":"1012","type":"StringEditor"},{"attributes":{"editor":{"id":"1013"},"field":"Release","formatter":{"id":"1004"},"title":"Release","width":600},"id":"1006","type":"TableColumn"},{"attributes":{"columns":[{"id":"1005"},{"id":"1006"}],"height":900,"index_position":null,"source":{"id":"1003"},"view":{"id":"1010"},"width":750},"id":"1008","type":"DataTable"},{"attributes":{"editor":{"id":"1012"},"field":"Date","formatter":{"id":"1011"},"title":"Date","width":150},"id":"1005","type":"TableColumn"},{"attributes":{},"id":"1013","type":"StringEditor"},{"attributes":{"template":"\\n    &lt;style&gt;\\n        .slick-headerRowHeight {height:120px} \\n        .slick-column-name {font-family: Georgia; font-weight: 900; font-size: x-large}\\n        .slick-cell {font-family: Georgia; font-size: large}\\n    &lt;/style&gt;\\n    &lt;%= value %&gt;"},"id":"1004","type":"HTMLTemplateFormatter"}],"root_ids":["1008"]},"title":"Bokeh Application","version":"2.4.2"}}';
                const render_items = [{"docid":"5c3f22c6-efa1-4b1f-87fa-1598318b3714","root_ids":["1008"],"roots":{"1008":"34e1b5df-a881-4195-99d9-4d758a70eb12"}}];
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
