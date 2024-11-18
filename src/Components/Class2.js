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
    return (
            <div>
                <h2>Classes</h2>
                {Object.keys(CLASS_LIST).map((name) => (
                    <div key={name} style = {{color:meetsClassRequirements(attributes,CLASS_LIST[name])?"red":"" }}> {name} 
                    {/* <span>meet? { meetsClassRequirements(attributes,CLASS_LIST[name])?'yes':'no' }</span> */}
                    </div>
                ))}
            </div>
     );
}
export default Class2;