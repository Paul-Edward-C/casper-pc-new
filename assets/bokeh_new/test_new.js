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
    
    
    const element = document.getElementById("e9c53bd8-ca01-4f33-8636-81a736b7f062");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e9c53bd8-ca01-4f33-8636-81a736b7f062' but no matching script tag was found.")
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
    
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.4.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.4.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.4.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.4.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-2.4.3.min.js"];
      const css_urls = [];
    
      const inline_js = [    function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        function(Bokeh) {
          (function() {
            const fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                  const docs_json = '{"64cb4bc4-86e7-4cf1-b229-9d47dc346ae3":{"defs":[],"roots":{"references":[{"attributes":{},"id":"1047","type":"AllLabels"},{"attributes":{"line_alpha":0.2,"line_color":"blue","x":{"field":"Date"},"y":{"field":"A"}},"id":"1040","type":"Line"},{"attributes":{},"id":"1027","type":"HelpTool"},{"attributes":{"source":{"id":"1003"}},"id":"1042","type":"CDSView"},{"attributes":{"overlay":{"id":"1028"}},"id":"1024","type":"BoxZoomTool"},{"attributes":{},"id":"1025","type":"SaveTool"},{"attributes":{"label":{"value":"A"},"renderers":[{"id":"1041"}]},"id":"1055","type":"LegendItem"},{"attributes":{},"id":"1026","type":"ResetTool"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1028","type":"BoxAnnotation"},{"attributes":{"axis":{"id":"1014"},"coordinates":null,"group":null,"ticker":null},"id":"1017","type":"Grid"},{"attributes":{},"id":"1051","type":"UnionRenderers"},{"attributes":{},"id":"1052","type":"Selection"},{"attributes":{"callback":null,"formatters":{"@Date":"datetime"},"tooltips":[["Date","@Date{%F}"],["A","@{A}{0,0.0}"],["B","@{B}{0,0.0}"]]},"id":"1074","type":"HoverTool"},{"attributes":{"line_alpha":0.1,"line_color":"green","x":{"field":"Date"},"y":{"field":"B"}},"id":"1058","type":"Line"},{"attributes":{},"id":"1050","type":"AllLabels"},{"attributes":{"line_color":"green","x":{"field":"Date"},"y":{"field":"B"}},"id":"1057","type":"Line"},{"attributes":{},"id":"1049","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.2,"line_color":"green","x":{"field":"Date"},"y":{"field":"B"}},"id":"1059","type":"Line"},{"attributes":{},"id":"1023","type":"WheelZoomTool"},{"attributes":{"source":{"id":"1003"}},"id":"1061","type":"CDSView"},{"attributes":{},"id":"1008","type":"DataRange1d"},{"attributes":{"coordinates":null,"group":null,"text":"Trial"},"id":"1036","type":"Title"},{"attributes":{},"id":"1019","type":"BasicTicker"},{"attributes":{"label":{"value":"B"},"renderers":[{"id":"1060"}]},"id":"1073","type":"LegendItem"},{"attributes":{},"id":"1006","type":"DataRange1d"},{"attributes":{"below":[{"id":"1014"}],"center":[{"id":"1017"},{"id":"1021"},{"id":"1054"}],"left":[{"id":"1018"}],"renderers":[{"id":"1041"},{"id":"1060"}],"title":{"id":"1036"},"toolbar":{"id":"1029"},"x_range":{"id":"1006"},"x_scale":{"id":"1010"},"y_range":{"id":"1008"},"y_scale":{"id":"1012"}},"id":"1005","subtype":"Figure","type":"Plot"},{"attributes":{"coordinates":null,"group":null,"items":[{"id":"1055"},{"id":"1073"}]},"id":"1054","type":"Legend"},{"attributes":{"coordinates":null,"data_source":{"id":"1003"},"glyph":{"id":"1038"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1040"},"nonselection_glyph":{"id":"1039"},"view":{"id":"1042"}},"id":"1041","type":"GlyphRenderer"},{"attributes":{},"id":"1010","type":"LinearScale"},{"attributes":{"data":{"A":{"__ndarray__":"r/4ZwQHx8r8KKS9vIgv9vyQuKiEC7M6/A3Nwn7WV1T+o6NUNG5zvP0Fd1+aE6am/","dtype":"float64","order":"little","shape":[6]},"B":{"__ndarray__":"piC5tY4X378a/VxdatPVv6Qk11O1sOG/X75rJhrP/b8qyQhWBDuCv0wd1jiI4LS/","dtype":"float64","order":"little","shape":[6]},"C":{"__ndarray__":"zUUA9lxq8r+NnEWegO36PxH2ZjNew8G/TumWxeT16j+TDUELIUfKP8s9EiVhlvC/","dtype":"float64","order":"little","shape":[6]},"D":{"__ndarray__":"HjY8Dh+G4T+GJxbKL4nsP8eoYYw0Ies/l9XfSpvs3z9006KhXbT6P0o0N2yBHfE/","dtype":"float64","order":"little","shape":[6]},"Date":{"__ndarray__":"AAAA57Nrd0IAAMBMBmx3QgAAgLJYbHdCAABAGKtsd0IAAAB+/Wx3QgAAwONPbXdC","dtype":"float64","order":"little","shape":[6]}},"selected":{"id":"1052"},"selection_policy":{"id":"1051"}},"id":"1003","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"formatter":{"id":"1049"},"group":null,"major_label_policy":{"id":"1050"},"ticker":{"id":"1015"}},"id":"1014","type":"LinearAxis"},{"attributes":{"coordinates":null,"data_source":{"id":"1003"},"glyph":{"id":"1057"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1059"},"nonselection_glyph":{"id":"1058"},"view":{"id":"1061"}},"id":"1060","type":"GlyphRenderer"},{"attributes":{"line_color":"blue","x":{"field":"Date"},"y":{"field":"A"}},"id":"1038","type":"Line"},{"attributes":{},"id":"1012","type":"LinearScale"},{"attributes":{},"id":"1015","type":"BasicTicker"},{"attributes":{"axis":{"id":"1018"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"1021","type":"Grid"},{"attributes":{},"id":"1046","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"blue","x":{"field":"Date"},"y":{"field":"A"}},"id":"1039","type":"Line"},{"attributes":{},"id":"1022","type":"PanTool"},{"attributes":{"coordinates":null,"formatter":{"id":"1046"},"group":null,"major_label_policy":{"id":"1047"},"ticker":{"id":"1019"}},"id":"1018","type":"LinearAxis"},{"attributes":{"tools":[{"id":"1022"},{"id":"1023"},{"id":"1024"},{"id":"1025"},{"id":"1026"},{"id":"1027"},{"id":"1074"}]},"id":"1029","type":"Toolbar"}],"root_ids":["1005"]},"title":"Bokeh Application","version":"2.4.3"}}';
                  const render_items = [{"docid":"64cb4bc4-86e7-4cf1-b229-9d47dc346ae3","root_ids":["1005"],"roots":{"1005":"e9c53bd8-ca01-4f33-8636-81a736b7f062"}}];
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