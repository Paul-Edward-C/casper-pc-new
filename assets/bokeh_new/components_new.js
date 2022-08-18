
        (function() {
  const fn = function() {
    Bokeh.safely(function() {
      (function(root) {
        function embed_document(root) {
        const docs_json = '{"b6579203-5312-4be8-8d34-b8b2b6b7a575":{"defs":[],"roots":{"references":[{"attributes":{"callback":null,"formatters":{"@Date":"datetime"},"tooltips":[["Date","@Date{%F}"],["A","@{A}{0,0.0}"],["B","@{B}{0,0.0}"]]},"id":"1074","type":"HoverTool"},{"attributes":{},"id":"1015","type":"BasicTicker"},{"attributes":{"below":[{"id":"1014"}],"center":[{"id":"1017"},{"id":"1021"},{"id":"1054"}],"left":[{"id":"1018"}],"renderers":[{"id":"1041"},{"id":"1060"}],"title":{"id":"1036"},"toolbar":{"id":"1029"},"x_range":{"id":"1006"},"x_scale":{"id":"1010"},"y_range":{"id":"1008"},"y_scale":{"id":"1012"}},"id":"1005","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":0.1,"line_color":"green","x":{"field":"Date"},"y":{"field":"B"}},"id":"1058","type":"Line"},{"attributes":{"coordinates":null,"data_source":{"id":"1003"},"glyph":{"id":"1038"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1040"},"nonselection_glyph":{"id":"1039"},"view":{"id":"1042"}},"id":"1041","type":"GlyphRenderer"},{"attributes":{},"id":"1010","type":"LinearScale"},{"attributes":{"tools":[{"id":"1022"},{"id":"1023"},{"id":"1024"},{"id":"1025"},{"id":"1026"},{"id":"1027"},{"id":"1074"}]},"id":"1029","type":"Toolbar"},{"attributes":{"line_color":"green","x":{"field":"Date"},"y":{"field":"B"}},"id":"1057","type":"Line"},{"attributes":{},"id":"1012","type":"LinearScale"},{"attributes":{"line_alpha":0.2,"line_color":"green","x":{"field":"Date"},"y":{"field":"B"}},"id":"1059","type":"Line"},{"attributes":{},"id":"1027","type":"HelpTool"},{"attributes":{"line_alpha":0.2,"line_color":"blue","x":{"field":"Date"},"y":{"field":"A"}},"id":"1040","type":"Line"},{"attributes":{"source":{"id":"1003"}},"id":"1061","type":"CDSView"},{"attributes":{},"id":"1046","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1028","type":"BoxAnnotation"},{"attributes":{},"id":"1047","type":"AllLabels"},{"attributes":{"label":{"value":"B"},"renderers":[{"id":"1060"}]},"id":"1073","type":"LegendItem"},{"attributes":{"line_color":"blue","x":{"field":"Date"},"y":{"field":"A"}},"id":"1038","type":"Line"},{"attributes":{},"id":"1049","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"1028"}},"id":"1024","type":"BoxZoomTool"},{"attributes":{},"id":"1025","type":"SaveTool"},{"attributes":{},"id":"1026","type":"ResetTool"},{"attributes":{},"id":"1050","type":"AllLabels"},{"attributes":{},"id":"1023","type":"WheelZoomTool"},{"attributes":{"line_alpha":0.1,"line_color":"blue","x":{"field":"Date"},"y":{"field":"A"}},"id":"1039","type":"Line"},{"attributes":{},"id":"1022","type":"PanTool"},{"attributes":{},"id":"1019","type":"BasicTicker"},{"attributes":{"source":{"id":"1003"}},"id":"1042","type":"CDSView"},{"attributes":{"coordinates":null,"group":null,"items":[{"id":"1055"},{"id":"1073"}]},"id":"1054","type":"Legend"},{"attributes":{"label":{"value":"A"},"renderers":[{"id":"1041"}]},"id":"1055","type":"LegendItem"},{"attributes":{"axis":{"id":"1018"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"1021","type":"Grid"},{"attributes":{"axis":{"id":"1014"},"coordinates":null,"group":null,"ticker":null},"id":"1017","type":"Grid"},{"attributes":{},"id":"1008","type":"DataRange1d"},{"attributes":{"coordinates":null,"formatter":{"id":"1046"},"group":null,"major_label_policy":{"id":"1047"},"ticker":{"id":"1019"}},"id":"1018","type":"LinearAxis"},{"attributes":{"coordinates":null,"group":null,"text":"Trial"},"id":"1036","type":"Title"},{"attributes":{},"id":"1051","type":"UnionRenderers"},{"attributes":{"coordinates":null,"formatter":{"id":"1049"},"group":null,"major_label_policy":{"id":"1050"},"ticker":{"id":"1015"}},"id":"1014","type":"LinearAxis"},{"attributes":{"coordinates":null,"data_source":{"id":"1003"},"glyph":{"id":"1057"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1059"},"nonselection_glyph":{"id":"1058"},"view":{"id":"1061"}},"id":"1060","type":"GlyphRenderer"},{"attributes":{},"id":"1006","type":"DataRange1d"},{"attributes":{"data":{"A":{"__ndarray__":"IbIrOouQAMCXnhEhHH+iP4bwLh9FH/W/6MFpefug6799RqQxzcjnv989GfGC4Pi/","dtype":"float64","order":"little","shape":[6]},"B":{"__ndarray__":"1QN64nzR8j+pS6jsylXxv99/PNCCpuS/CGqqnjMGCkA7x1qlu8jlvztxE1ix0PW/","dtype":"float64","order":"little","shape":[6]},"C":{"__ndarray__":"QU6n2zgEtz9M54qQNnHxP8VfgaCW87A/z7aW0vDY4z9Znlqaf7DFP8btRYt++NK/","dtype":"float64","order":"little","shape":[6]},"D":{"__ndarray__":"VTiJGZr+0D+dweS21YDmv83Oz0md1vM/hacK7iGtvT8CGok6rgfkv7JB5am9IQfA","dtype":"float64","order":"little","shape":[6]},"Date":{"__ndarray__":"AAAA57Nrd0IAAMBMBmx3QgAAgLJYbHdCAABAGKtsd0IAAAB+/Wx3QgAAwONPbXdC","dtype":"float64","order":"little","shape":[6]}},"selected":{"id":"1052"},"selection_policy":{"id":"1051"}},"id":"1003","type":"ColumnDataSource"},{"attributes":{},"id":"1052","type":"Selection"}],"root_ids":["1005"]},"title":"Bokeh Application","version":"2.4.3"}}';
        const render_items = [{"docid":"b6579203-5312-4be8-8d34-b8b2b6b7a575","root_ids":["1005"],"roots":{"1005":"97275029-bcbd-4df0-a9bd-e95e1e3da32c"}}];
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

