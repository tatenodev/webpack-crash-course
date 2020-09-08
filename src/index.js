import _ from 'lodash'
// import {NiJou, NAME} from './utilities'
// import * as utilities from './utilities'
// import {NAME as NAME_OF_WD} from './utilities'
import Tiger from './utilities'

// console.log(utilities.NiJou(10))
// console.log(NAME_OF_WD)
console.log(Tiger.say())

function component() {
    const element = document.createElement('div');
    const array = ['Hello', 'webpack', '!!!']
    element.innerHTML = _.join(array, ' ')
    return element;
}

document.body.appendChild(component());
