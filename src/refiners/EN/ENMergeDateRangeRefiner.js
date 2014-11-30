/*
  
*/
var Refiner = require('../refiner').Refiner;





exports.Refiner = function ENMergeDateRangeRefiner() {
    Refiner.call(this);

    this.refine = function(text, results, opt) {

        if (results.length < 2) return results;
        
        var mergedResult = []
        var currResult = null;
        var prevResult = null;
        
        for (var i=1; i<results.length; i++){
            
            currResult = results[i];
            prevResult = results[i-1];
            
            if (!prevResult.end && !currResult.end 
                && isAbleToMerge(text, prevResult, currResult)) {
              
                prevResult = mergeResult(text, prevResult, currResult);
                currResult = null;
                i += 1;
            }
            
            mergedResult.push(prevResult);
        }
        
        if (currResult != null) {
            mergedResult.push(currResult);
        }

        return mergedResult;
    }
}


var OVERLAP_PATTERN = /^\s*(to|\-)\s*$/i;

function isAbleToMerge(text, result1, result2) {
    var begin = result1.index + result1.text.length;
    var end   = result2.index;
    var textBetween = text.substring(begin,end);

    return textBetween.match(OVERLAP_PATTERN);
}



function mergeResult(text, fromResult, toResult){

    if (fromResult.start.date().getTime() > toResult.start.date()) {
        var tmp = fromResult;
        toResult = fromResult;
        fromResult = tmp;
    }

    fromResult.end = toResult.start;
        
    var startIndex = Math.min(fromResult.index, toResult.index);
    var endIndex = Math.max(fromResult.index + fromResult.text.length(), toResult.index + toResult.text.length());
        
    fromResult.index = startIndex;
    fromResult.text  = text.substring(startIndex, endIndex);
    return fromResult;
}