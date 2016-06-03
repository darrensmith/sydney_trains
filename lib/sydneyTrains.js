function sydneyTrainsClass(){
    return this;
}

sydneyTrainsClass.prototype.lines = new Object();

sydneyTrainsClass.prototype.getLineDisplayNameFromObject = function(objectName){
	for (var i = 0; i < sydneyTrains.lineNames.length; i++) {
		if(sydneyTrains.lineNames[i].object == objectName){
			return sydneyTrains.lineNames[i].name;
		}
	}
}

sydneyTrainsClass.prototype.getLinesFromStation = function(stationName){
	var linesArray = [];
	for(line in this.lines){
		for (var i = 0; i < this.lines[line].length; i++) {
			if(this.lines[line][i].name == stationName){
				linesArray.push(this.getLineDisplayNameFromObject(line));
			}
		}
	}
	return linesArray;
}

sydneyTrainsClass.prototype.getStationsFromLine = function(lineName){
	var stationsArray = [];
	for (var i = 0; i < sydneyTrains.lineNames.length; i++) {
		if(sydneyTrains.lineNames[i].name == lineName)
			var lineObject = sydneyTrains.lineNames[i].object;
	}
	for (var i = 0; i < this.lines[lineObject].length; i++) {
		stationsArray.push(this.lines[lineObject][i].name);
	}
	return stationsArray;
}

/* Algorithm
	1. Fetch line of station 1
	2. Fetch line of station 2
	3. If lines match output station 1 and 2; else
	4. If any stations match between the lines - output these to a temporary array and pick closest station to 1
	   or Build a stop array for each possibility and grab stop array of shortest length
	5. If no stations match then loop over each line looking for a route   
*/

sydneyTrainsClass.prototype.getRouteBetweenStations = function(stationName1, stationName2){
	linesForStation1 = this.getLinesFromStation(stationName1);
	linesForStation2 = this.getLinesFromStation(stationName2);

	// Check for same line
	var sameLine = false;
	for (var i = 0; i < linesForStation1.length; i++) {
		for (var i = 0; i < linesForStation2.length; i++) {
			if(linesforStation1[i] == linesForStation2[i])
				sameLine = true;
		}
	}
	if(sameLine){
		var 
	}
}

sydneyTrainsClass.prototype.getStationProperties = function(stationName){

}

sydneyTrainsClass.prototype.getLineProperties = function(lineName){

}

sydneyTrainsClass.prototype.getAllLines = function(){

}

sydneyTrainsClass.prototype.getAllStations = function(){

}

// Instantiate a new object of the sydneyTrainsClass class
sydneyTrains = new sydneyTrainsClass();