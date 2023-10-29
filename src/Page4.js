import key from "./images/key.png";

export default function Page4(props){
    return (
        <div id = "page4">
            <img src = {key} width = "100px" id = "page4-circle" onClick = {
                function(){
                    props.changePage("page5")
                }
            } alt = "key"/>
            <span id = "page4-text"></span>
        </div>
    );
}