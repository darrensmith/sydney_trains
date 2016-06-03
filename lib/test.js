function test(){
    return this;
}

test.prototype.db = {
	'test1': 'hello',
	'test2': 'world'
}

test.prototype.getWord = function(key){
	console.log(this.db[key]);
}

var testObject = new test();

testObject.getWord('test1');
