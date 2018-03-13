class SmartCalculator {
  constructor(initialValue) {
	this.initialValue =  initialValue;
	this.answerCount = 5;
    this.rezArr = [];
	this.rezArr[0] = initialValue;
  }

  add(number) {
    this.rezArr.push('+');
    this.rezArr.push(number);
    return this;
  }
  
  subtract(number) {
    this.rezArr.push('-');
    this.rezArr.push(number);
    return this;
  }

  multiply(number) {
    this.rezArr.push('*');
    this.rezArr.push(number);
    return this;
  }

  devide(number) {
    this.rezArr.push('/');
    this.rezArr.push(number);
    return this;
  }

  pow(number) {
    this.rezArr.push('**');
    this.rezArr.push(number);
    return this;
  }
	
	
  toString(){
    for(var i=0; i < this.answerCount; i++){
      	for(var k=0; k < this.rezArr.length; k++){
//			console.log(this.exampleZn[i]);
			if(this.rezArr[k] == '**') {
//			console.log('пров');
			this.rezArr[k] = Math.pow(this.rezArr[k-1],this.rezArr[k+1]);
			this.rezArr.splice(k + 1, 1);
			this.rezArr.splice(k - 1, 1);
			k = 0;
			}

		}
	}
	  
	  
	  for(var i=0; i < this.answerCount; i++){
      	for(var k=0; k < this.rezArr.length; k++){

				if(this.rezArr[k] == '*'){
				  this.rezArr[k] = (this.rezArr[k+1]) * (this.rezArr[k-1]);
				  this.rezArr.splice(k + 1, 1);
				  this.rezArr.splice(k - 1, 1);
				  k = 0;
				}

		}
	  }
	  
	  
	  for(var i=0; i < this.answerCount; i++){
      	for(var k=0; k < this.rezArr.length; k++){
			if(this.rezArr[k] == '/'){
			  this.rezArr[k] = (this.rezArr[k-1]) / (this.rezArr[k+1]);
			  this.rezArr.splice(k + 1, 1);
			  this.rezArr.splice(k - 1, 1);
			  k = 0;
			}
		}
	  }
	  
	  
	  for(var i=0; i < this.answerCount; i++){
      	for(var k = 0; k<this.rezArr.length; k++){
			if(this.rezArr[k] == '-'){
			  this.rezArr[k] = (this.rezArr[k-1]) - (this.rezArr[k+1]);
			  this.rezArr.splice(k + 1, 1);
			  this.rezArr.splice(k - 1, 1);
			  k = 0;
			}
		}
	  }
	  
	  
	  for(var i=0; i < this.answerCount; i++){
      	for(var k = 0; k < this.rezArr.length; k++){
			if(this.rezArr[k] == '+'){
				this.rezArr[k] = (this.rezArr[k+1]) + (this.rezArr[k-1]);
				this.rezArr.splice(k + 1, 1);
				this.rezArr.splice(k - 1, 1);
				k = 0;
			}
      	}
    }
	
    return this.rezArr[0];
  }
 }


module.exports = SmartCalculator;
