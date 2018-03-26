class Student {
  constructor(name){
    this.name = name;
    this.tests = [];
  }
  
  get testAverage(){
    let sum =0;
    this.tests.map(test => {
      sum += test;
    })
    
    return sum / this.tests.length;
    
  }
  
  get grade(){
    const score = this.testAverage;
    if(score>79)
      return 'A'
    else if(score > 49)
      return 'C'
    else if(score > 39)
      return 'P'
    else
      return 'F'
  }
  
  addScore(score){
    this.tests.push(score)
  }
}

module.exports = Student;