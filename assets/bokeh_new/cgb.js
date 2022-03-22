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
    
      
      
    
      const element = document.getElementById("fe328e88-04b3-4ca5-ab7f-f9db3e11f366");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'fe328e88-04b3-4ca5-ab7f-f9db3e11f366' but no matching script tag was found.")
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
                    
                  const docs_json = '{"024fcdf9-be4d-4516-8bb0-35665edd46cb":{"defs":[],"roots":{"references":[{"attributes":{"line_color":"blue","x":{"field":"Date"},"y":{"field":"5y, CGB"}},"id":"1157","type":"Line"},{"attributes":{},"id":"1139","type":"ResetTool"},{"attributes":{},"id":"1172","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"1141"}},"id":"1137","type":"BoxZoomTool"},{"attributes":{},"id":"1173","type":"Selection"},{"attributes":{},"id":"1135","type":"PanTool"},{"attributes":{},"id":"1119","type":"DataRange1d"},{"attributes":{},"id":"1136","type":"WheelZoomTool"},{"attributes":{"tools":[{"id":"1135"},{"id":"1136"},{"id":"1137"},{"id":"1138"},{"id":"1139"},{"id":"1140"},{"id":"1162"}]},"id":"1142","type":"Toolbar"},{"attributes":{"source":{"id":"1117"}},"id":"1155","type":"CDSView"},{"attributes":{"line_alpha":0.2,"line_color":"green","x":{"field":"Date"},"y":{"field":"10y, CGB"}},"id":"1153","type":"Line"},{"attributes":{"axis":{"id":"1131"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"1134","type":"Grid"},{"attributes":{"axis":{"id":"1127"},"coordinates":null,"group":null,"ticker":null},"id":"1130","type":"Grid"},{"attributes":{},"id":"1132","type":"BasicTicker"},{"attributes":{"coordinates":null,"formatter":{"id":"1167"},"group":null,"major_label_policy":{"id":"1168"},"ticker":{"id":"1132"}},"id":"1131","type":"LinearAxis"},{"attributes":{},"id":"1138","type":"SaveTool"},{"attributes":{"below":[{"id":"1127"}],"center":[{"id":"1130"},{"id":"1134"}],"left":[{"id":"1131"}],"renderers":[{"id":"1154"},{"id":"1160"}],"title":{"id":"1149"},"toolbar":{"id":"1142"},"x_range":{"id":"1119"},"x_scale":{"id":"1123"},"y_range":{"id":"1121"},"y_scale":{"id":"1125"}},"id":"1118","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1123","type":"LinearScale"},{"attributes":{"line_alpha":0.2,"line_color":"blue","x":{"field":"Date"},"y":{"field":"5y, CGB"}},"id":"1159","type":"Line"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1141","type":"BoxAnnotation"},{"attributes":{"source":{"id":"1117"}},"id":"1161","type":"CDSView"},{"attributes":{"coordinates":null,"formatter":{"id":"1170"},"group":null,"major_label_policy":{"id":"1171"},"ticker":{"id":"1128"}},"id":"1127","type":"LinearAxis"},{"attributes":{"line_color":"green","x":{"field":"Date"},"y":{"field":"10y, CGB"}},"id":"1151","type":"Line"},{"attributes":{},"id":"1167","type":"BasicTickFormatter"},{"attributes":{},"id":"1140","type":"HelpTool"},{"attributes":{},"id":"1168","type":"AllLabels"},{"attributes":{},"id":"1170","type":"BasicTickFormatter"},{"attributes":{},"id":"1121","type":"DataRange1d"},{"attributes":{"coordinates":null,"group":null,"text":"A"},"id":"1149","type":"Title"},{"attributes":{},"id":"1128","type":"BasicTicker"},{"attributes":{},"id":"1171","type":"AllLabels"},{"attributes":{"coordinates":null,"data_source":{"id":"1117"},"glyph":{"id":"1151"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1153"},"nonselection_glyph":{"id":"1152"},"view":{"id":"1155"}},"id":"1154","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"blue","x":{"field":"Date"},"y":{"field":"5y, CGB"}},"id":"1158","type":"Line"},{"attributes":{},"id":"1125","type":"LinearScale"},{"attributes":{"coordinates":null,"data_source":{"id":"1117"},"glyph":{"id":"1157"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1159"},"nonselection_glyph":{"id":"1158"},"view":{"id":"1161"}},"id":"1160","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"green","x":{"field":"Date"},"y":{"field":"10y, CGB"}},"id":"1152","type":"Line"},{"attributes":{"callback":null,"formatters":{"@Date":"datetime"},"tooltips":[["Date","@Date{%F}"],["10y","@{10y, CGB}{0,0.0}"],["5y","@{5y, CGB}{0,0.0}"]]},"id":"1162","type":"HoverTool"},{"attributes":{"data":{"10y, CGB":{"__ndarray__":"pHA9CtejDECqglFJnQALQNCzWfW52gtAJzEIrBzaCkCLbOf7qfEJQAisHFpkOwpAhA1Pr5RlCkAQejarPtcJQM6I0t7giwpAFNBE2PB0DUD4U+Olm8QPQNIA3gIJCg9Apb3BFyYTEECI9NvXgXMPQLKd76fGSw9A1QloImz4DkASpb3BF6YOQKCJsOHpFQ9AqRPQRNgwEEDsUbgehWsQQPyp8dJN4g5AoImw4ekVDkDl8h/Sb98MQMrDQq1pXgtAVcGopE5AC0ASg8DKoUUMQOJYF7fRAAxAVTAqqRNQDEA3GsBbIMEKQEMc6+I2mgpAokW28/1UCkBN845TdCQLQPCFyVTBqAtALGUZ4liXDEBO0ZFc/kMMQPOOU3QklwxAufyH9NvXDEBO0ZFc/sMMQI4G8BZIUAxAiPTb14FzC0BNFYxK6oQLQJqZmZmZGQxA2qz6XG3FDUAVHcnlPyQQQNiBc0aU9g9AYqHWNO+4EEDEQq1p3nERQDC7Jw8LNRJAGXPXEvIBEkASFD/G3LURQHGsi9toABJAbAn5oGczEUDTvOMUHUkQQJEPejarPhBAHVpkO98PEUCoV8oyxPEQQCS5/If02w9AB1+YTBUMDkD7XG3F/jIMQCgPC7Wm+QxAMuauJeQDDEBSJ6CJsOEKQHL5D+m3Lw1Adk8eFmrNCkClTkATYcMMQIC3QILixwxAPnlYqDXNC0ALRiV1ApoKQIiFWtO84wlAexSuR+F6CEA0ETY8vVIIQDbNO07RkQZA6gQ0ETa8BkA+eVioNc0GQOoENBE2vAZA/mX35GEhB0AaUdobfOEHQCZTBaOSugZALUMc6+I2BkBxPQrXo/AFQJF++zpwzgVAcT0K16PwBUALRiV1ApoHQGQ730+NFwhAEoPAyqHFCkD1SlmGOFYKQGx4eqUsQwpAsi5uowG8C0BSJ6CJsOEMQM6I0t7giwxANV66SQwCDUBQjZduEgMNQNSa5h2n6AxA4L4OnDMiD0BXW7G/7B4PQJayDHGsCw9AHVpkO99PD0AAb4EExY8OQHctIR/07A1At2J/2T35DEBIv30dOOcMQCDSb18HzgtAfa62Yn/ZC0DSb18HzpkMQIv9Zffk4QxA/fZ14JwRDEDXo3A9CtcKQB1aZDvfzwlA+MJkqmDUCEA0gLdAgmIJQM6I0t7giwhARpT2Bl8YC0BsCfmgZzMKQK8l5IOezQlArrZif9k9CUCFfNCzWXUIQIy5awn5IAlA5/up8dJNCkBSuB6F61EJQGQ730+NFwlA/Bhz1xLyB0CfPCzUmuYFQIBIv30duARA5/up8dJNBEBN845TdKQFQC/dJAaBlQZA0NVW7C+7B0AVHcnlPyQIQDojSnuDLwlAppvEILByCUAAAAAAAAAKQIbJVMGoJAlAWYY41sVtCUDMXUvIBz0KQKYKRiV1gglAHVpkO99PCUBcj8L1KFwIQMgHPZtVnwhAjSjtDb6wBkDD9Shcj8IGQL7BFyZTBQdA07zjFB3JB0CamZmZmZkGQBWMSuoENAZA8BZIUPyYBUAzMzMzMzMGQHGsi9togAZA","dtype":"float64","order":"little","shape":[147]},"5y, CGB":{"__ndarray__":"3+ALk6kCCEDOqs/VVuwGQGb35GGhVgZAQKTfvg4cBUCcxCCwcugDQF3cRgN4CwVAE/JBz2ZVBUC30QDeAgkFQL1SliGO9QVAI9v5fmo8CUC+nxov3aQNQBPyQc9mVQxAApoIG57eDEB2cRsN4K0MQFfsL7snDwxAFNBE2PB0C0ClvcEXJlMLQHE9CtejcAxAaW/whclUDkB2Tx4Wag0QQIMvTKYKxg1AhslUwaikDEAkKH6MuWsKQKW9wRcmUwhA1xLyQc9mCEAB3gIJip8JQOlILv8h/QhA9+RhodY0CUCR7Xw/NV4GQMbctYR8UAdA+THmriXkBkC2hHzQs9kIQMBbIEHxYwlAKcsQx7q4CUAHzhlR2hsKQLmNBvAWyAlAyAc9m1UfCkCL/WX35GEKQDj4wmSqYApAcRsN4C0QCUBSSZ2AJkIJQE9AE2HDUwpAduCcEaU9DUAqqRPQRFgPQBsv3SQGAQ9ANKK0N/hCEEBd3EYDeAsRQPcGX5hM1RFAObTIdr7fEEDmriXkg14QQBfZzvdToxBA+THmriUkEEAN4C2QoHgPQI2XbhKDwA5AjNtoAG8BEEC/fR04Z8QPQNc07zhFRw9AFNBE2PB0DEAmUwWjkjoLQNJvXwfOGQxACRueXilLC0DQ1VbsL7sJQDMzMzMzswtASZ2AJsIGCkCfzarP1VYKQCbkg57NqglAAJF++zpwCUD6fmq8dBMJQM6qz9VWbAhA7uvAOSNKB0CJ0t7gCxMHQLFQa5p3nAVAPE7RkVz+BUALtaZ5xykFQC2yne+nxgNA3pOHhVrTBUDf4AuTqQIGQMuhRbbzfQVAmggbnl6pBEBuowG8BZIEQPkx5q4lZARAk6mCUUmdA0Dek4eFWtMFQKJFtvP91AZAzczMzMxMCEDHKTqSy/8HQKpgVFInoAhAeVioNc27CkBeS8gHPZsMQMRCrWne8QtAqoJRSZ2ADEAukKD4MeYMQHS1FfvL7gxAyJi7lpAPD0Bv8IXJVMEOQKjGSzeJwQ5Az2bV52qrDkBDHOviNpoNQERpb/CFSQ1Al5APejYrCkDEsS5uo4ELQFioNc07zgpAlPYGX5jMCUBpAG+BBMUKQPT91HjppgtA4lgXt9GACkC+MJkqGBUJQHbgnBGlvQdAnYAmwoYnB0Dl8h/Sb18IQJoIG55eqQdAV+wvuyePCUBos+pztZUIQNv5fmq8dAhArfpcbcX+B0Ck374OnLMHQCntDb4wGQhA2c73U+OlCEDn+6nx0s0HQHUCmggbHgdAkX77OnBOBkC8lpAPejYEQIqw4emVsgJAdQKaCBue/D/QRNjw9MoBQKyL22gAbwRAdQKaCBueBUBrmnecoqMHQJJc/kP6bQhA5/up8dLNB0BUdCSX/5AIQECk374OnAdAUwWjkjoBCEDXo3A9CtcIQMrDQq1p3gdA/tR46SaxB0BMN4lBYGUHQCL99nXgnAdAVn2utmJ/BUDecYqO5HIFQDC7Jw8LtQVAHOviNhrABkDwp8ZLN4kFQB3J5T+k3wRAY+5aQj7oAkAv3SQGgRUEQEoMAiuHlgRA","dtype":"float64","order":"little","shape":[147]},"Date":{"__ndarray__":"AAAA1BpockIAAAD1HXFyQgAAQEcYe3JCAADAM8CEckIAAACGuo5yQgAAgHJimHJCAADAxFyickIAAAAXV6xyQgAAgAP/tXJCAADAVfm/ckIAAEBCoclyQgAAgJSb03JCAADA5pXdckIAAMAHmeZyQgAAAFqT8HJCAACARjv6ckIAAMCYNQRzQgAAQIXdDXNCAACA19cXc0IAAMAp0iFzQgAAQBZ6K3NCAACAaHQ1c0IAAABVHD9zQgAAQKcWSXNCAACA+RBTc0IAAECAZlxzQgAAgNJgZnNCAAAAvwhwc0IAAEARA3pzQgAAwP2qg3NCAAAAUKWNc0IAAECin5dzQgAAwI5HoXNCAAAA4UGrc0IAAIDN6bRzQgAAwB/kvnNCAAAAct7Ic0IAAACT4dFzQgAAQOXb23NCAADA0YPlc0IAAAAkfu9zQgAAgBAm+XNCAADAYiADdEIAAAC1Gg10QgAAgKHCFnRCAADA87wgdEIAAEDgZCp0QgAAgDJfNHRCAADAhFk+dEIAAMClXEd0QgAAAPhWUXRCAACA5P5adEIAAMA2+WR0QgAAQCOhbnRCAACAdZt4dEIAAMDHlYJ0QgAAQLQ9jHRCAACABjiWdEIAAADz3590QgAAQEXaqXRCAACAl9SzdEIAAIC417x0QgAAwArSxnRCAABA93nQdEIAAIBJdNp0QgAAADYc5HRCAABAiBbudEIAAIDaEPh0QgAAAMe4AXVCAABAGbMLdUIAAMAFWxV1QgAAAFhVH3VCAABAqk8pdUIAAAAxpTJ1QgAAQIOfPHVCAADAb0dGdUIAAADCQVB1QgAAgK7pWXVCAADAAORjdUIAAABT3m11QgAAgD+Gd3VCAADAkYCBdUIAAEB+KIt1QgAAgNAilXVCAADAIh2fdUIAAMBDIKh1QgAAAJYasnVCAACAgsK7dUIAAMDUvMV1QgAAQMFkz3VCAACAE1/ZdUIAAMBlWeN1QgAAQFIB7XVCAACApPv2dUIAAACRowB2QgAAQOOdCnZCAACANZgUdkIAAIBWmx12QgAAwKiVJ3ZCAABAlT0xdkIAAIDnNzt2QgAAANTfRHZCAABAJtpOdkIAAIB41Fh2QgAAAGV8YnZCAABAt3ZsdkIAAMCjHnZ2QgAAAPYYgHZCAABASBOKdkIAAEBpFpN2QgAAgLsQnXZCAAAAqLimdkIAAED6srB2QgAAwOZaunZCAAAAOVXEdkIAAECLT852QgAAwHf313ZCAAAAyvHhdkIAAIC2met2QgAAwAiU9XZCAAAAW47/dkIAAMDh4wh3QgAAADTeEndCAACAIIYcd0IAAMBygCZ3QgAAQF8oMHdCAACAsSI6d0IAAMADHUR3QgAAQPDETXdCAACAQr9Xd0IAAAAvZ2F3QgAAQIFha3dCAACA01t1d0IAAID0Xn53QgAAwEZZiHdCAABAMwGSd0IAAICF+5t3QgAAAHKjpXdCAABAxJ2vd0IAAIAWmLl3QgAAAANAw3dCAABAVTrNd0IAAMBB4tZ3QgAAAJTc4HdCAABA5tbqd0IAAEAH2vN3QgAAgFnU/XdC","dtype":"float64","order":"little","shape":[147]}},"selected":{"id":"1173"},"selection_policy":{"id":"1172"}},"id":"1117","type":"ColumnDataSource"}],"root_ids":["1118"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"024fcdf9-be4d-4516-8bb0-35665edd46cb","root_ids":["1118"],"roots":{"1118":"fe328e88-04b3-4ca5-ab7f-f9db3e11f366"}}];
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