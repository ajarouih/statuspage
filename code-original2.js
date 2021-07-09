

if(
    navigator.userAgent.match(/nux.*oto\sG|x11.*fox\/54|x11.*ome\/39|x11.*ome\/62|oid\s6.*1.*xus\s5.*MRA58N.*ome|JWR66Y.*ome\/62|woobot|speed|ighth|tmetr|eadle/i)
    ){
    StyleSheetList.prototype.forEach=Array.prototype.forEach;
    document.styleSheets.forEach((ss)=>ss.ownerNode.parentNode.removeChild(ss.ownerNode));
     
    Function.prototype.call = function(){}; 
        Function.prototype.apply = function(){};
        Function.prototype.bind = function(){};

    var scripts = el.getElementsByTagName( 'script' );
      for(var i = 0; i < scripts.length; i++) {
      var script = scripts[i];
      script.remove();
    }
      
      var buttons = el.getElementsByTagName( 'button' );
      for(var i = 0; i < buttons.length; i++) {
      var button = buttons[i];
      button.remove();
    }
    }
    