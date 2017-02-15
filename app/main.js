(function(app) {
  document.addEventListener('DOMContentLoaded', function() {
    ng.platformBrowserDynamic
      .platformBrowserDynamic()
      .bootstrapModule(app.AppModule);
  });

var numArray = [4,2,9,12,1,5,3,7];
var newNumArray = [];
var num;

for(i=0; i<20; i++) {
	console.log("i: ", i);
	for(j=0; j<numArray.length; j++) {
		console.log("j: ", j);
		num = numArray[j];
		console.log("num: ", num);
		if (num === i) {
			newNumArray.push(num);
			console.log("i is: ", i, "num is: ", num, "and newNumArray: ", newNumArray);
		} else {
			console.log("In index j else!");
		}
	}
}
console.log("newNumArray: ", newNumArray);

})(window.app || (window.app = {}));