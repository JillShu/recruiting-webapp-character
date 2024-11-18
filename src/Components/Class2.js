import { useState } from "react";
import { CLASS_LIST } from "../consts";
import {ATTRIBUTE_LIST} from '../consts'

function meetsClassRequirements(characterAttributes, minimumRequirements) {
    for (var attributeName of ATTRIBUTE_LIST) {
        if (characterAttributes[attributeName] < minimumRequirements[attributeName]) {
            return false;
        }
    }
    return true;
}

const Class2 = ({attributes}) => {
    const[selectedClass, setSelectedClass] = useState(Object.keys(CLASS_LIST)[0]);
    return (
            <div>
                <h2>Classes</h2>
                {Object.keys(CLASS_LIST).map((name) => (
                   <div key={name}> 
                        <div style = {{color:meetsClassRequirements(attributes,CLASS_LIST[name])?"red":"" }}> {name} </div>
                        <button onClick={() => setSelectedClass(name)}/>
                   </div> 
                ))}
                <ClassRequirements className={selectedClass} requirements={CLASS_LIST[selectedClass]}></ClassRequirements>
            </div>
     );
}

const ClassRequirements = ({className, requirements}) => {
    return (
        <div>
            <h3>requirements for: {className} </h3>
            {ATTRIBUTE_LIST.map((attributeName) => (
                <ul key={attributeName}>{attributeName}:{requirements[attributeName]}</ul>
            ))}
        </div>
    )
}

export default Class2;