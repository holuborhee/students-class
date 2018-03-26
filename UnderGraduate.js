const Student = require('./Student.js')

class UnderGraduate extends Student {
  constructor(name, matricNo){
    super(name);
    this.matricNo = matricNo;
  }
  
  get grade(){
    const score = this.testAverage;
    if(score>79)
      return 'A'
    else if(score > 59)
      return 'B'
    else if(score > 49)
      return 'C'
    else if(score > 44)
      return 'D'
    else if(score > 39)
      return 'E'
    else
      return 'F'
  }
}

module.exports = UnderGraduate;