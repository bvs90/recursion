// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  // your code here
  var result = [];
  var target = className;
  var element = document.body;

  var checkDOM = function(node) {
    var element = node;
    
    for(var i = 0; i < element.childNodes.length; i++) {
      if(element.childNodes[i].nodeType === 1) {
        if(element.childNodes[i].classList.contains(className)) {
          result.push(element.childNodes[i]);
        }
        if(element.childNodes[i].hasChildNodes()) {
          if(element.childNodes[i].nodeType === 1) {
            checkDOM(element.childNodes[i]);    
          }
        }          
      }
    }
  };

  checkDOM(element);

  return result;  
};
