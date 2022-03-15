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
    
      
      
    
      const element = document.getElementById("23355480-8880-4d53-b08a-fd38f080c28c");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '23355480-8880-4d53-b08a-fd38f080c28c' but no matching script tag was found.")
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
                    
                  const docs_json = '{"7f94bb0f-3a4c-415d-8130-8c65794f83cf":{"defs":[],"roots":{"references":[{"attributes":{"source":{"id":"1034"}},"id":"1039","type":"CDSView"},{"attributes":{},"id":"1025","type":"HelpTool"},{"attributes":{"axis_label":"Most recent: March 2022; Source: BOJ, Cabinet Office","coordinates":null,"formatter":{"id":"1058"},"group":null,"major_label_policy":{"id":"1047"},"ticker":{"id":"1013"}},"id":"1012","type":"LinearAxis"},{"attributes":{"coordinates":null,"group":null,"items":[{"id":"1052"}],"label_text_font_size":"15pt","location":"top_left"},"id":"1051","type":"Legend"},{"attributes":{},"id":"1048","type":"UnionRenderers"},{"attributes":{},"id":"1008","type":"LinearScale"},{"attributes":{},"id":"1047","type":"AllLabels"},{"attributes":{"months":["%b %Y"]},"id":"1058","type":"DatetimeTickFormatter"},{"attributes":{},"id":"1013","type":"BasicTicker"},{"attributes":{},"id":"1049","type":"Selection"},{"attributes":{},"id":"1004","type":"DataRange1d"},{"attributes":{},"id":"1006","type":"DataRange1d"},{"attributes":{},"id":"1056","type":"NumeralTickFormatter"},{"attributes":{"coordinates":null,"formatter":{"id":"1056"},"group":null,"major_label_policy":{"id":"1044"},"ticker":{"id":"1017"}},"id":"1016","type":"LinearAxis"},{"attributes":{},"id":"1010","type":"LinearScale"},{"attributes":{"below":[{"id":"1012"}],"center":[{"id":"1015"},{"id":"1019"},{"id":"1051"}],"left":[{"id":"1016"}],"renderers":[{"id":"1038"}],"sizing_mode":"stretch_both","title":{"id":"1040"},"toolbar":{"id":"1027"},"x_range":{"id":"1004"},"x_scale":{"id":"1008"},"y_range":{"id":"1006"},"y_scale":{"id":"1010"}},"id":"1003","subtype":"Figure","type":"Plot"},{"attributes":{"axis":{"id":"1012"},"coordinates":null,"group":null,"ticker":null},"id":"1015","type":"Grid"},{"attributes":{"axis":{"id":"1016"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"1019","type":"Grid"},{"attributes":{},"id":"1017","type":"BasicTicker"},{"attributes":{},"id":"1021","type":"WheelZoomTool"},{"attributes":{},"id":"1020","type":"PanTool"},{"attributes":{"overlay":{"id":"1026"}},"id":"1022","type":"BoxZoomTool"},{"attributes":{},"id":"1023","type":"SaveTool"},{"attributes":{},"id":"1024","type":"ResetTool"},{"attributes":{"data":{"x":{"__ndarray__":"AACAL+swZkIAAIBRJGxmQgAAgHNdp2ZCAAAAyvHhZkIAAABV4RtnQgAAAHcaV2dCAAAAmVOSZ0IAAIDv58xnQgAAAEZ8B2hCAAAAaLVCaEIAAACK7n1oQgAAgOCCuGhCAACAa3LyaEIAAICNqy1pQgAAgK/kaGlCAAAABnmjaUIAAACRaN1pQgAAALOhGGpCAAAA1dpTakIAAIArb45qQgAAgLZeyGpCAACA2JcDa0IAAID60D5rQgAAAFFleWtCAACAp/mza0IAAIDJMu9rQgAAgOtrKmxCAAAAQgBlbEIAAADN755sQgAAAO8o2mxCAAAAEWIVbUIAAIBn9k9tQgAAgPLliW1CAACAFB/FbUIAAIA2WABuQgAAAI3sOm5CAAAAGNx0bkIAAAA6FbBuQgAAAFxO625CAACAsuIlb0IAAAAJd2BvQgAAACuwm29CAAAATenWb0IAAMDRvghwQgAAQJe2JXBCAABAKFNDcEIAAEC572BwQgAAgOQ5fnBCAAAAqjGbcEIAAAA7zrhwQgAAAMxq1nBCAABA97TzcEIAAMC8rBBxQgAAwE1JLnFCAADA3uVLcUIAAAAKMGlxQgAAQDV6hnFCAABAxhakcUIAAEBXs8FxQgAAgIL93nFCAAAASPX7cUIAAADZkRlyQgAAAGouN3JCAABAlXhUckIAAMBacHFyQgAAwOsMj3JCAADAfKmsckIAAACo88lyQgAAgG3r5nJCAACA/ocEc0IAAICPJCJzQgAAwLpuP3NCAAAA5rhcc0IAAAB3VXpzQgAAAAjyl3NCAABAMzy1c0IAAMD4M9JzQgAAwInQ73NCAADAGm0NdEIAAABGtyp0QgAAgAuvR3RCAACAnEtldEIAAIAt6IJ0QgAAwFgyoHRCAABAHiq9dEIAAECvxtp0QgAAQEBj+HRCAACAa60VdUIAAMCW9zJ1QgAAwCeUUHVCAADAuDBudUIAAADkeot1QgAAgKlyqHVCAACAOg/GdUIAAIDLq+N1QgAAwPb1AHZCAABAvO0ddkIAAEBNijt2QgAAQN4mWXZCAACACXF2dkIAAADPaJN2QgAAAGAFsXZCAAAA8aHOdkIAAEAc7Ot2QgAAgEc2CXdCAACA2NImd0IAAIBpb0R3QgAAwJS5YXdCAABAWrF+d0IAAEDrTZx3QgAAQHzquXdCAACApzTXd0IAAABtLPR3Qg==","dtype":"float64","order":"little","shape":[113]},"y":{"__ndarray__":"AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H/UtfY+VdU1QL4Qct7//yxAUNfa+1RVDUAAAAAAAAAAAKhr7X2qqgZAoffGEAAAIkB1rb1PVVUoQCxKCcGqqipATvlrDQAAKkDUtfY+VVUBQBalhGBVVRHALEoJwaqqLcAO1TmrqqpAwBalhGBVlULApDFaR1UVQsDqWnufqqo9wKhr7X2qqiHAsCglBKuqEkDqWnufqioyQOpae5+qKjlA6lp7n6oqOECLUkKwqio2QF8IOe///zJAQu+NIQAALUCAutbep6rqP+pae5+qqiXAda29T1XVN8CLUkKwqio8wBalhGBVVTTAAAAAAAAACMDUtfY+VVUhQAAAAAAAACxALEoJwaoqMEBQ19r7VFUbQAAAAAAAACFA6lp7n6qqKkDkVYypqio1QNB7YwgAADlA0HtjCAAAN0CLUkKwqqouQE35aw0AAAxAsCglBKuq8j8AAAAAAADwvyxKCcGqqgZAyKsYU1VVGUC+EHLe//8RQELvjSEAABRAAAAAAAAAEECoa+19qqoGQAAAAAAAAPA/WJQSglVVAcAWpYRgVVUXwM6wB0lVVSXABgXv9f//LMAAAAAAAIAywKQxWkdV1TzAh+qcVVXVR8BjcN5JVZVEwNS19j5V1TnAWJQSglVVHcAAAAAAAIA5QKQxWkdV1UBAjozV5v9/P0BGKSFYVdU3QAAAAAAAgDBAqGvtfaqqDsAAAAAAAAD4v1DX2vtUVfU/YFFKCFZV1T8cqnNWVVUoQL2hOmdVVQVAfCHkvP//C8BYlBKCVVX9vzY1+fv//wdAOFTnrKqqHkAAAAAAAAAyQItSQrCqKjRAra0SCwAAIUDUtfY+VVUBQFiUEoJVVQXAWJQSglVVE8BQ19r7VFX1P+pae5+qqhBAAAAAAAAAEEAAAAAAAADgv+pae5+qqhDA1LX2PlVVDcBYlBKCVVUBwFiUEoJVVQlAda29T1VVIECLUkKwqqojQBalhGBVVSNAqGvtfaqqHECwKCUEq6oOQAB1rb1PVcW/AAAAAAAA+L98IeS8//8XwITeG0MAAB7ALEoJwaqqHsAAAAAAAAAnwItSQrCqqjDARikhWFWVRMBGKSFYVdVBwItSQrCqqjPAAAAAAAAA+L8I0Eq1qio+QORVjKmqKjxA0HtjCAAAM0AcqnNWVVUhQA==","dtype":"float64","order":"little","shape":[113]}},"selected":{"id":"1049"},"selection_policy":{"id":"1048"}},"id":"1034","type":"ColumnDataSource"},{"attributes":{"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1035","type":"Line"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1026","type":"BoxAnnotation"},{"attributes":{},"id":"1044","type":"AllLabels"},{"attributes":{"coordinates":null,"group":null,"text":"Japan, RGDP lead","text_font_size":"25px"},"id":"1040","type":"Title"},{"attributes":{"tools":[{"id":"1020"},{"id":"1021"},{"id":"1022"},{"id":"1023"},{"id":"1024"},{"id":"1025"}]},"id":"1027","type":"Toolbar"},{"attributes":{"label":{"value":"Tankan Business Conditions"},"renderers":[{"id":"1038"}]},"id":"1052","type":"LegendItem"},{"attributes":{"coordinates":null,"data_source":{"id":"1034"},"glyph":{"id":"1035"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1037"},"nonselection_glyph":{"id":"1036"},"view":{"id":"1039"}},"id":"1038","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.2,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1037","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"1036","type":"Line"}],"root_ids":["1003"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"7f94bb0f-3a4c-415d-8130-8c65794f83cf","root_ids":["1003"],"roots":{"1003":"23355480-8880-4d53-b08a-fd38f080c28c"}}];
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