import { getId as m1Id } from '@module-one';
import { getId as m2Id, MyComponent } from '@alias-mapping/module-two';
import TTree from '@module-ts';


function Greet(name) {
    console.log('Hello, ', name)
}

Greet('John')

ReactDOM.render(document.getElementById('root'), <MyComponent><TTree /></MyComponent>)

export default `Full ID: ${m1Id} - ${m2Id}`;