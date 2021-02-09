import projectA from ':project-a'
import Lib1 from ':project-a/lib1'

console.log('webapp executed and projectA value is ', projectA)
console.log('lib1: ', Lib1)


function Greet(name) {
    console.log('Hello, ', name)
}

Greet('John')