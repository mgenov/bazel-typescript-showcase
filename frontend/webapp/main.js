import { getId as m1Id } from '@alias-mapping/module-one';
import { getId as m2Id, MyComponent } from '@alias-mapping/module-two';


function Greet(name) {
    console.log('Hello, ', name)
}

Greet('John')

ReactDOM.render(document.getElementById('root'), <MyComponent />)

export default `Full ID: ${m1Id} - ${m2Id}`;