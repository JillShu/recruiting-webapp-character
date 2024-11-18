import Attributes from "./Attributes";
import Class2 from "./Class2"

const Character = ({characterIndex,attributes}) => {
    return(
        <div>
            <h1 >Character: #{characterIndex}</h1>
            <Attributes attributes={attributes}/>
            <Class2 attributes={attributes}/>
        </div>
    )
}
export default Character;
