export default function Instruction(props){
    return (
        <div id = "instructionPage">
            <div id = "instructionPage-text" onClick = {function(){
                props.changePage("blackScreen");
            }}>START</div>
        </div>
    )
}