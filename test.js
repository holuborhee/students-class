var chai = require('chai');
const { expect } = chai;
const UnderGraduate = require('./UnderGraduate.js')
const Graduate = require('./Graduate.js')

const Student = require('./Student.js')



describe('Student Class', () => {

  let student = new Student('John David');
  it('should create an instance of student', (done) => {
    expect(student).to.be.an('Object').and.to.be.an.instanceof(Student);
    done();
  });
});


describe('Graduate Class', () => {

  let graduate = new Graduate('Adeola');
  graduate.isMasters = true
  graduate.addScore(70);
  graduate.addScore(80);
  graduate.addScore(78);
  it('should create an instance of Graduate Student', (done) => {
    expect(graduate).to.be.an('Object').and.to.be.an.instanceof(Graduate);
    done();
  });

  it('should return A for Grade', (done) => {
    expect(graduate.grade).to.be.a('String').and.to.equal('A');
    done();
  })

  it('should return Masters as Students programme', (done) => {
    expect(graduate.type).to.be.a('String').and.to.equal('MASTERS');
    done();
  })
});



describe('UnderGraduate Class', () => {

  let underGrad = new UnderGraduate('John David', '10/1058');
  underGrad.addScore(70);
  underGrad.addScore(80);
  underGrad.addScore(78);
  it('should create an instance of UnderGraduate Student', (done) => {
    expect(underGrad).to.be.an('Object').and.to.be.an.instanceof(UnderGraduate);
    done();
  });

  it('should return A for Grade', (done) => {
    expect(underGrad.grade).to.be.a('String').and.to.equal('B');
    done();
  })
});
