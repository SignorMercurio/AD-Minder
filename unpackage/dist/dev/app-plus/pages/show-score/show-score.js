
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["wx-view { text-align: center !important; }\nwx-view.",[1],"has-mgt-61 { margin-top: ",[0,80]," !important; }\nwx-view.",[1],"my-mgt-infty { margin-top: ",[0,200]," !important; }\nwx-view.",[1],"my-mgt-infty .",[1],"_button { display: inline-block; width: 42%; margin-left: 3%; }\n",],undefined,{path:"./pages/show-score/show-score.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/show-score/show-score.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      