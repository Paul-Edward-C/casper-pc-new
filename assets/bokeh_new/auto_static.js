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
    
      
      
    
      const element = document.getElementById("c03c899e-7f21-483d-b240-c1db963853ff");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c03c899e-7f21-483d-b240-c1db963853ff' but no matching script tag was found.")
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
                    
                  const docs_json = '{"c7ba0b56-327a-4ab1-818b-6290ea40ed18":{"defs":[],"roots":{"references":[{"attributes":{"overlay":{"id":"1234"}},"id":"1230","type":"BoxZoomTool"},{"attributes":{},"id":"1231","type":"SaveTool"},{"attributes":{},"id":"1229","type":"WheelZoomTool"},{"attributes":{},"id":"1257","type":"UnionRenderers"},{"attributes":{"axis":{"id":"1224"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"1227","type":"Grid"},{"attributes":{},"id":"1214","type":"DataRange1d"},{"attributes":{},"id":"1225","type":"BasicTicker"},{"attributes":{},"id":"1258","type":"Selection"},{"attributes":{"coordinates":null,"group":null,"items":[{"id":"1261"},{"id":"1279"}]},"id":"1260","type":"Legend"},{"attributes":{},"id":"1218","type":"LinearScale"},{"attributes":{"axis":{"id":"1220"},"coordinates":null,"group":null,"ticker":null},"id":"1223","type":"Grid"},{"attributes":{"coordinates":null,"data_source":{"id":"1209"},"glyph":{"id":"1244"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1246"},"nonselection_glyph":{"id":"1245"},"view":{"id":"1248"}},"id":"1247","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"1220"}],"center":[{"id":"1223"},{"id":"1227"},{"id":"1260"}],"left":[{"id":"1224"}],"renderers":[{"id":"1247"},{"id":"1266"}],"title":{"id":"1242"},"toolbar":{"id":"1235"},"x_range":{"id":"1212"},"x_scale":{"id":"1216"},"y_range":{"id":"1214"},"y_scale":{"id":"1218"}},"id":"1211","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"formatters":{"@Date":"datetime"},"tooltips":[["Date","@Date{%F}"],["A","@{A}{0,0.0}"],["B","@{B}{0,0.0}"]]},"id":"1280","type":"HoverTool"},{"attributes":{"line_alpha":0.1,"line_color":"green","x":{"field":"Date"},"y":{"field":"B"}},"id":"1264","type":"Line"},{"attributes":{},"id":"1212","type":"DataRange1d"},{"attributes":{"line_color":"green","x":{"field":"Date"},"y":{"field":"B"}},"id":"1263","type":"Line"},{"attributes":{"label":{"value":"A"},"renderers":[{"id":"1247"}]},"id":"1261","type":"LegendItem"},{"attributes":{"line_alpha":0.2,"line_color":"green","x":{"field":"Date"},"y":{"field":"B"}},"id":"1265","type":"Line"},{"attributes":{"coordinates":null,"formatter":{"id":"1252"},"group":null,"major_label_policy":{"id":"1253"},"ticker":{"id":"1225"}},"id":"1224","type":"LinearAxis"},{"attributes":{"source":{"id":"1209"}},"id":"1267","type":"CDSView"},{"attributes":{"coordinates":null,"formatter":{"id":"1255"},"group":null,"major_label_policy":{"id":"1256"},"ticker":{"id":"1221"}},"id":"1220","type":"LinearAxis"},{"attributes":{"line_alpha":0.2,"line_color":"blue","x":{"field":"Date"},"y":{"field":"A"}},"id":"1246","type":"Line"},{"attributes":{"label":{"value":"B"},"renderers":[{"id":"1266"}]},"id":"1279","type":"LegendItem"},{"attributes":{},"id":"1221","type":"BasicTicker"},{"attributes":{},"id":"1252","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"blue","x":{"field":"Date"},"y":{"field":"A"}},"id":"1245","type":"Line"},{"attributes":{},"id":"1216","type":"LinearScale"},{"attributes":{"data":{"A":{"__ndarray__":"qFtJXfvMpr/X4dbibpLuvzsdSABIE9s/kh/QUmt75j9qMmlST5jgv2ijTyXRC9a/","dtype":"float64","order":"little","shape":[6]},"B":{"__ndarray__":"nXFrnydk1D8PEIpUk0bjP8FmWqxVv9E/RQaxIFKm6L/ary0NAV7Xv+zozzk54dm/","dtype":"float64","order":"little","shape":[6]},"C":{"__ndarray__":"yTqNeeB15D861xPa/zrpvxJQh7ymxas/CqUw03HRBsDt4CGAERHvv34BTgzP7vw/","dtype":"float64","order":"little","shape":[6]},"D":{"__ndarray__":"EcQu8zou7D8Z6+QJJxzKP4mevAkyXQFAbMjqsEQ0378GlIDxZ4AAwPG5My2fV+E/","dtype":"float64","order":"little","shape":[6]},"Date":{"__ndarray__":"AAAA57Nrd0IAAMBMBmx3QgAAgLJYbHdCAABAGKtsd0IAAAB+/Wx3QgAAwONPbXdC","dtype":"float64","order":"little","shape":[6]}},"selected":{"id":"1258"},"selection_policy":{"id":"1257"}},"id":"1209","type":"ColumnDataSource"},{"attributes":{},"id":"1253","type":"AllLabels"},{"attributes":{"line_color":"blue","x":{"field":"Date"},"y":{"field":"A"}},"id":"1244","type":"Line"},{"attributes":{},"id":"1233","type":"HelpTool"},{"attributes":{},"id":"1255","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"data_source":{"id":"1209"},"glyph":{"id":"1263"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1265"},"nonselection_glyph":{"id":"1264"},"view":{"id":"1267"}},"id":"1266","type":"GlyphRenderer"},{"attributes":{},"id":"1256","type":"AllLabels"},{"attributes":{"tools":[{"id":"1228"},{"id":"1229"},{"id":"1230"},{"id":"1231"},{"id":"1232"},{"id":"1233"},{"id":"1280"}]},"id":"1235","type":"Toolbar"},{"attributes":{},"id":"1232","type":"ResetTool"},{"attributes":{"source":{"id":"1209"}},"id":"1248","type":"CDSView"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1234","type":"BoxAnnotation"},{"attributes":{"coordinates":null,"group":null,"text":"Trial"},"id":"1242","type":"Title"},{"attributes":{},"id":"1228","type":"PanTool"}],"root_ids":["1211"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"c7ba0b56-327a-4ab1-818b-6290ea40ed18","root_ids":["1211"],"roots":{"1211":"c03c899e-7f21-483d-b240-c1db963853ff"}}];
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