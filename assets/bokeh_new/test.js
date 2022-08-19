    <script type="text/javascript">
        (function() {
  const fn = function() {
    Bokeh.safely(function() {
      (function(root) {
        function embed_document(root) {
        const docs_json = '{"eea81b11-b09a-457d-8a9a-ab83fd820b0a":{"defs":[],"roots":{"references":[{"attributes":{"below":[{"id":"1014"}],"center":[{"id":"1017"},{"id":"1021"},{"id":"1054"}],"left":[{"id":"1018"}],"renderers":[{"id":"1041"}],"sizing_mode":"stretch_width","title":{"id":"1036"},"toolbar":{"id":"1029"},"x_range":{"id":"1006"},"x_scale":{"id":"1010"},"y_range":{"id":"1008"},"y_scale":{"id":"1012"}},"id":"1005","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1027","type":"HelpTool"},{"attributes":{},"id":"1026","type":"ResetTool"},{"attributes":{"label":{"value":"A"},"renderers":[{"id":"1041"}]},"id":"1055","type":"LegendItem"},{"attributes":{"callback":null,"formatters":{"@Date":"datetime"},"tooltips":[["Date","@Date{%F}"],["A","@{A}{0,0.0}"],["B","@{B}{0,0.0}"]]},"id":"1056","type":"HoverTool"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1028","type":"BoxAnnotation"},{"attributes":{},"id":"1051","type":"UnionRenderers"},{"attributes":{"line_color":"blue","x":{"field":"Date"},"y":{"field":"A"}},"id":"1038","type":"Line"},{"attributes":{},"id":"1052","type":"Selection"},{"attributes":{"coordinates":null,"data_source":{"id":"1003"},"glyph":{"id":"1038"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1040"},"nonselection_glyph":{"id":"1039"},"view":{"id":"1042"}},"id":"1041","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"group":null,"text":"Trial"},"id":"1036","type":"Title"},{"attributes":{},"id":"1050","type":"AllLabels"},{"attributes":{"axis":{"id":"1014"},"coordinates":null,"group":null,"ticker":null},"id":"1017","type":"Grid"},{"attributes":{},"id":"1023","type":"WheelZoomTool"},{"attributes":{},"id":"1025","type":"SaveTool"},{"attributes":{},"id":"1008","type":"DataRange1d"},{"attributes":{"overlay":{"id":"1028"}},"id":"1024","type":"BoxZoomTool"},{"attributes":{},"id":"1049","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.2,"line_color":"blue","x":{"field":"Date"},"y":{"field":"A"}},"id":"1040","type":"Line"},{"attributes":{},"id":"1010","type":"LinearScale"},{"attributes":{"coordinates":null,"formatter":{"id":"1049"},"group":null,"major_label_policy":{"id":"1050"},"ticker":{"id":"1015"}},"id":"1014","type":"LinearAxis"},{"attributes":{"coordinates":null,"group":null,"items":[{"id":"1055"}]},"id":"1054","type":"Legend"},{"attributes":{},"id":"1006","type":"DataRange1d"},{"attributes":{},"id":"1015","type":"BasicTicker"},{"attributes":{"source":{"id":"1003"}},"id":"1042","type":"CDSView"},{"attributes":{},"id":"1012","type":"LinearScale"},{"attributes":{},"id":"1046","type":"BasicTickFormatter"},{"attributes":{},"id":"1019","type":"BasicTicker"},{"attributes":{"line_alpha":0.1,"line_color":"blue","x":{"field":"Date"},"y":{"field":"A"}},"id":"1039","type":"Line"},{"attributes":{"axis":{"id":"1018"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"1021","type":"Grid"},{"attributes":{},"id":"1047","type":"AllLabels"},{"attributes":{},"id":"1022","type":"PanTool"},{"attributes":{"data":{"A":{"__ndarray__":"FEoOh3pZ8L8uSJx/d6/Sv4C8lVa6Uuu/WoP3RQlu8b/aAwUazh3yP9j+3DvJP+S/","dtype":"float64","order":"little","shape":[6]},"B":{"__ndarray__":"o+2p8LSd9r9OaTcloiEBwGGWu9ZZD+u/fW1L303eyb+oiJ7cIpb0PxQazWpxqvE/","dtype":"float64","order":"little","shape":[6]},"C":{"__ndarray__":"ARKE9x6G9L8u1nJ/FQ/5P/wxjbeK8+S/VZqUY+N31b+T5KWVJJLKP7ZG5YypF/I/","dtype":"float64","order":"little","shape":[6]},"D":{"__ndarray__":"Hmpb38gX4D+Sig/YeRXzP/UN/P1mP+Q/t1U0Xhdn4b/BqYkapiLbP2OZp/xp2Oy/","dtype":"float64","order":"little","shape":[6]},"Date":{"__ndarray__":"AAAA57Nrd0IAAMBMBmx3QgAAgLJYbHdCAABAGKtsd0IAAAB+/Wx3QgAAwONPbXdC","dtype":"float64","order":"little","shape":[6]}},"selected":{"id":"1052"},"selection_policy":{"id":"1051"}},"id":"1003","type":"ColumnDataSource"},{"attributes":{"tools":[{"id":"1022"},{"id":"1023"},{"id":"1024"},{"id":"1025"},{"id":"1026"},{"id":"1027"},{"id":"1056"}]},"id":"1029","type":"Toolbar"},{"attributes":{"coordinates":null,"formatter":{"id":"1046"},"group":null,"major_label_policy":{"id":"1047"},"ticker":{"id":"1019"}},"id":"1018","type":"LinearAxis"}],"root_ids":["1005"]},"title":"Bokeh Application","version":"2.4.3"}}';
        const render_items = [{"docid":"eea81b11-b09a-457d-8a9a-ab83fd820b0a","root_ids":["1005"],"roots":{"1005":"bafab8d8-c3de-421b-9102-6f89f3d248a6"}}];
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
    </script>
