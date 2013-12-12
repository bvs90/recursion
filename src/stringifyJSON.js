// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:



var stringifyJSON = function (obj) {
  // your code goes here
  if(typeof(obj) !== 'object' || obj === null) {
    if(typeof(obj) !== 'string') {
      return String(obj);
    }else {
      return '"' + String(obj) + '"';
    }
  }else {
    var result = [];

      if(!Array.isArray(obj)) {

        for(var prop in obj) {
          if(typeof(obj[prop]) === 'function' || typeof(obj[prop]) === 'undefined' ) {
            delete obj[prop];
          }
          else if(typeof(obj[prop]) !== 'object') {
            
            if(typeof(obj[prop]) !== 'string') {
              result.push('"' + String(prop) + '"' + ":" + String(obj[prop]));
            }else {
              result.push('"' + String(prop) + '"' + ":" + '"' + String(obj[prop]) + '"');
            }

          }else {
            result.push('"' + String(prop) + '"' + ":" + stringifyJSON(obj[prop]));
          }
        }

      }else {

        for(var i = 0; i < obj.length; i++) {
          if(typeof(obj[i]) !== 'object') {
            
            if(typeof(obj[i]) !== 'string') {
              result.push(String(obj[i]));
            }else {
              result.push('"' + String(obj[i]) + '"');
            }

          }else {
            result.push(stringifyJSON(obj[i]));
          }
        }
      }

      if(!Array.isArray(obj)) {
        return '{' + String(result) + '}'
      }else{
        return '[' + String(result) + ']';
      }

  }
};
