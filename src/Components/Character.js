import Attributes from "./Attributes";

const Character = ({characterIndex,attributes}) => {
    return(
        <div>
            <h1 >Character: #{characterIndex}</h1>
            <Attributes attributes={attributes}/>
        </div>
    )
}
export default Character;
