export default function Page2(props){
    return (
        <div id = "page2">
            <span id = "page2-circle" onClick = {
                function(){
                    document.getElementById("page2-text").style.opacity = "1";
                    setTimeout( ()=>{props.changePage("page3")}, 3000)
                }
            }></span>
            <span id = "page2-text">Enter through secret tunnel</span>
        </div>
    );
}