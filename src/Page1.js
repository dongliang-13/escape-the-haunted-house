export default function Page1(props){
    return (
        <div id = "page1">
            <span id = "page1-circle" onClick = {
                function(){
                    document.getElementById("page1-text").style.opacity = "1";
                    setTimeout( ()=>{props.changePage("page2")}, 3000)
                }
            }></span>
            <span id = "page1-text">Walk down the basement</span>
        </div>
    );
}