# Student Class

This repository is to demonstrate the concept of OOP, it uses three classes

- Student
- UnderGraduate
- Graduate

## Student Class

### Properties

- `name` - *String*
- `tests` - *Array*


### Computed/Getter

- `average`

### Functions

- `testAverage()`
- `addScores(score)`


## UnderGraduate *inherits from Student*


- `name` - *String*
- `tests` - *Array*
- `matricNo` - *String*

### Computed/Getter

- `average` - Override super classes' methods.

### Functions

- `testAverage()`
- `addScores(score)`


## Graduate *inherits from Student*


- `name` - *String*
- `tests` - *Array*
- `type` - *String*

### Computed/Getter

- `average` - Override super classes' methods.

### Functions

- `testAverage()`
- `addScores(score)`
