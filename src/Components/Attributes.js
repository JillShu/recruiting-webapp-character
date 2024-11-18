import {ATTRIBUTE_LIST} from '../consts'

const Attributes = ({attributes}) => {
    // console.log(attributes)
    return(
        <div>
        <ul>
            {ATTRIBUTE_LIST.map((attributeName) => (
                <ul key={attributeName}>{attributeName}:{attributes[attributeName]}</ul>
            ))}
        </ul>
        </div>
    )
}
export default Attributes;
