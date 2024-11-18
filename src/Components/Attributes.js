import {ATTRIBUTE_LIST} from '../consts'

const Attributes = ({attributes}) => {
    // console.log(attributes)
    return(
        <div>
        <h2>Attributes</h2>
        <ul>
            {ATTRIBUTE_LIST.map((attributeName) => (
                <ul key={attributeName}>{attributeName}:{attributes[attributeName]}</ul>
            ))}
        </ul>
        </div>
    )
}
export default Attributes;
