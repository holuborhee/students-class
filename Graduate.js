const Student = require('./Student.js')

class Graduate extends Student {
  constructor(name){
    super(name)
    this.type = null;
  }
  
  set isMasters(val){
    if(val === true)
      this.type ="MASTERS"
    else if(val === false){
      this.type = "PH.D";
    }
  }
  
  get grade(){
    const score = this.testAverage;
    if(score>89)
      return 'A+'
    else if(score >69)
      return 'A';
    else if(score > 59)
      return 'B'
    else if(score > 49)
      return 'C'
    else if(score > 44)
      return 'D'
    else if(score > 39)
      return 'P'
  }
  
}

module.exports = Graduate;