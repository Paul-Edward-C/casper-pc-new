(function() {
  const fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      const force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      const element = document.getElementById("83b2bdca-fd5c-42c5-a50f-ae0c928bedbf");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '83b2bdca-fd5c-42c5-a50f-ae0c928bedbf' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-2.4.2.min.js"];
      const css_urls = [];
      
    
      const inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            const fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  const docs_json = '{"c8da1905-3c3c-4a67-ad70-2d0e791fd4d9":{"defs":[],"roots":{"references":[{"attributes":{"columns":[{"id":"1092"},{"id":"1094"}],"index_position":null,"source":{"id":"1090"},"view":{"id":"1098"},"width":700},"id":"1096","type":"DataTable"},{"attributes":{"format":"%A %B %e"},"id":"1089","type":"DateFormatter"},{"attributes":{"template":"\\n    &lt;style&gt;\\n        .AS_POS {color: #0000FF; font-weight: bold;}\\n        .AS_NEG {color: #0000FF; font-weight: bold;}\\n        .OP_POS {color: #1aaa0d; font-style: bold;}\\n        .OP_NEG {color: #f40000;font-style: bold;}\\n        .NEG_POS {font-style: italic;}\\n        .NEG_NEG {color: #f40000; font-style: italic;}\\n        .INT_POS {color: #1aaa0d; font-style: italic;}\\n        .INT_NEG {color: #f40000; font-style: italic;}\\n    &lt;/style&gt;\\n    &lt;%= value %&gt;"},"id":"1091","type":"HTMLTemplateFormatter"},{"attributes":{},"id":"1108","type":"StringEditor"},{"attributes":{"source":{"id":"1090"}},"id":"1098","type":"CDSView"},{"attributes":{"data":{"Date":{"__ndarray__":"AACA/a34d0IAAID9rfh3QgAAgP2t+HdCAACA/a34d0IAAID9rfh3QgAAQGMA+XdCAABAYwD5d0IAAEBjAPl3QgAAQGMA+XdCAABAYwD5d0IAAEBjAPl3QgAAQGMA+XdCAABAYwD5d0IAAADJUvl3QgAAAMlS+XdCAAAAyVL5d0IAAADJUvl3QgAAAMlS+XdCAAAAyVL5d0IAAADJUvl3QgAAwC6l+XdCAADALqX5d0IAAMAupfl3QgAAAGCc+ndCAADAxe76d0I=","dtype":"float64","order":"little","shape":[25]},"Release":["KR, Export/import prices, monthly","CN, Activity data, monthly","CN, Central bank survey","KR, Full-month foreign trade, details","CN, Depository corporations survey","JP, Revised Report on Indices of Industrial Production, Shipments, Inventories and Inventory Ratio (January 2022)","JP, Monthly Report on Current Production Statistics (January 2022)","JP, BOJ Current Account Balances by Sector ","JP, Developments in Real Exports and Real Imports","JP, Trade Statistics(February 2022[Provisional]) ","KR, Labour market","JP, Monthly Report on the Current Survey of Commerce (January 2022)","CN, Property prices, monthly","TW, CBC, monetary policy meeting","JP, Machinery Orders","JP, The Time Series Data on Current Production Statistics","KR, HH loans, monthly","KR, Money, monthly","JP, Flow of Funds Accounts of 4th Quarter 2021 ","JP, International Transactions in Securities, weekly ","CN, Merchandise trade, comprehensive","JP, Statement on Monetary Policy","JP, Indices of Tertiary Industries Activity (January 2022)","KR, 20-day foreign trade","JP, Developments in Real Exports and Real Imports "],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],"st":["06:00","06:00","06:00","06:00","06:00","06:00","06:00","06:00","06:00","06:00","06:00","06:00","06:00","06:00","06:00","06:00","06:00","06:00","06:00","06:00","06:00","06:00","06:00","06:00","06:00"],"std":{"__ndarray__":"AADwlsL4d0IAAPCWwvh3QgAA8JbC+HdCAADwlsL4d0IAAPCWwvh3QgAAsPwU+XdCAACw/BT5d0IAALD8FPl3QgAAsPwU+XdCAACw/BT5d0IAALD8FPl3QgAAsPwU+XdCAACw/BT5d0IAAHBiZ/l3QgAAcGJn+XdCAABwYmf5d0IAAHBiZ/l3QgAAcGJn+XdCAABwYmf5d0IAAHBiZ/l3QgAAMMi5+XdCAAAwyLn5d0IAADDIufl3QgAAcPmw+ndCAAAwXwP7d0I=","dtype":"float64","order":"little","shape":[25]}},"selected":{"id":"1110"},"selection_policy":{"id":"1109"}},"id":"1090","type":"ColumnDataSource"},{"attributes":{},"id":"1107","type":"StringEditor"},{"attributes":{},"id":"1110","type":"Selection"},{"attributes":{"editor":{"id":"1107"},"field":"Date","formatter":{"id":"1089"},"title":"Date","width":200},"id":"1092","type":"TableColumn"},{"attributes":{"editor":{"id":"1108"},"field":"Release","formatter":{"id":"1091"},"title":"Release","width":500},"id":"1094","type":"TableColumn"},{"attributes":{},"id":"1109","type":"UnionRenderers"}],"root_ids":["1096"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"c8da1905-3c3c-4a67-ad70-2d0e791fd4d9","root_ids":["1096"],"roots":{"1096":"83b2bdca-fd5c-42c5-a50f-ae0c928bedbf"}}];
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
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (let i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();