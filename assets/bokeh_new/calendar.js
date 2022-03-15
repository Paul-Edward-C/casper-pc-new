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
    
      
      
    
      const element = document.getElementById("5b01b692-f322-45e4-bd19-79e045a12b43");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '5b01b692-f322-45e4-bd19-79e045a12b43' but no matching script tag was found.")
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
                    
                  const docs_json = '{"6887923d-7980-4a2b-91ea-b7b8b6896d3f":{"defs":[],"roots":{"references":[{"attributes":{},"id":"1013","type":"StringEditor"},{"attributes":{"editor":{"id":"1014"},"field":"Release","formatter":{"id":"1005"},"title":"Release"},"id":"1008","type":"TableColumn"},{"attributes":{"template":"\\n    &lt;style&gt;\\n        .AS_POS {color: #0000FF; font-weight: bold;}\\n        .AS_NEG {color: #0000FF; font-weight: bold;}\\n        .OP_POS {color: #1aaa0d; font-style: bold;}\\n        .OP_NEG {color: #f40000;font-style: bold;}\\n        .NEG_POS {font-style: italic;}\\n        .NEG_NEG {color: #f40000; font-style: italic;}\\n        .INT_POS {color: #1aaa0d; font-style: italic;}\\n        .INT_NEG {color: #f40000; font-style: italic;}\\n    &lt;/style&gt;\\n    &lt;%= value %&gt;"},"id":"1005","type":"HTMLTemplateFormatter"},{"attributes":{"editor":{"id":"1013"},"field":"Date","formatter":{"id":"1003"},"title":"Date"},"id":"1006","type":"TableColumn"},{"attributes":{"autosize_mode":"fit_viewport","columns":[{"id":"1006"},{"id":"1008"}],"index_position":null,"source":{"id":"1004"},"view":{"id":"1012"}},"id":"1010","type":"DataTable"},{"attributes":{},"id":"1014","type":"StringEditor"},{"attributes":{"data":{"Date":{"__ndarray__":"AACA/a34d0IAAID9rfh3QgAAgP2t+HdCAACA/a34d0IAAID9rfh3QgAAQGMA+XdCAABAYwD5d0IAAEBjAPl3QgAAQGMA+XdCAABAYwD5d0IAAEBjAPl3QgAAQGMA+XdCAABAYwD5d0IAAADJUvl3QgAAAMlS+XdCAAAAyVL5d0IAAADJUvl3QgAAAMlS+XdCAAAAyVL5d0IAAADJUvl3QgAAwC6l+XdCAADALqX5d0IAAMAupfl3QgAAAGCc+ndCAADAxe76d0I=","dtype":"float64","order":"little","shape":[25]},"Release":["KR, Export/import prices, monthly","CN, Activity data, monthly","CN, Central bank survey","KR, Full-month foreign trade, details","CN, Depository corporations survey","JP, Revised Report on Indices of Industrial Production, Shipments, Inventories and Inventory Ratio (January 2022)","JP, Monthly Report on Current Production Statistics (January 2022)","JP, BOJ Current Account Balances by Sector ","JP, Developments in Real Exports and Real Imports","JP, Trade Statistics(February 2022[Provisional]) ","KR, Labour market","JP, Monthly Report on the Current Survey of Commerce (January 2022)","CN, Property prices, monthly","TW, CBC, monetary policy meeting","JP, Machinery Orders","JP, The Time Series Data on Current Production Statistics","KR, HH loans, monthly","KR, Money, monthly","JP, Flow of Funds Accounts of 4th Quarter 2021 ","JP, International Transactions in Securities, weekly ","CN, Merchandise trade, comprehensive","JP, Statement on Monetary Policy","JP, Indices of Tertiary Industries Activity (January 2022)","KR, 20-day foreign trade","JP, Developments in Real Exports and Real Imports "],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],"st":["06:00","06:00","06:00","06:00","06:00","06:00","06:00","06:00","06:00","06:00","06:00","06:00","06:00","06:00","06:00","06:00","06:00","06:00","06:00","06:00","06:00","06:00","06:00","06:00","06:00"],"std":{"__ndarray__":"AADwlsL4d0IAAPCWwvh3QgAA8JbC+HdCAADwlsL4d0IAAPCWwvh3QgAAsPwU+XdCAACw/BT5d0IAALD8FPl3QgAAsPwU+XdCAACw/BT5d0IAALD8FPl3QgAAsPwU+XdCAACw/BT5d0IAAHBiZ/l3QgAAcGJn+XdCAABwYmf5d0IAAHBiZ/l3QgAAcGJn+XdCAABwYmf5d0IAAHBiZ/l3QgAAMMi5+XdCAAAwyLn5d0IAADDIufl3QgAAcPmw+ndCAAAwXwP7d0I=","dtype":"float64","order":"little","shape":[25]}},"selected":{"id":"1016"},"selection_policy":{"id":"1015"}},"id":"1004","type":"ColumnDataSource"},{"attributes":{"format":"%A %B %e"},"id":"1003","type":"DateFormatter"},{"attributes":{"source":{"id":"1004"}},"id":"1012","type":"CDSView"},{"attributes":{},"id":"1016","type":"Selection"},{"attributes":{},"id":"1015","type":"UnionRenderers"}],"root_ids":["1010"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"6887923d-7980-4a2b-91ea-b7b8b6896d3f","root_ids":["1010"],"roots":{"1010":"5b01b692-f322-45e4-bd19-79e045a12b43"}}];
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