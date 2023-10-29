import ghost from "./images/ghost.png";

export default function Home(props){
    return (
        <div id = "homePage">
            <img src={ghost} width="500px" alt="ghost" id = "ghost1"/>
            <img src={ghost} width="500px" alt="ghost" id = "ghost2"/>
            <div id = "homePage-text">
                Escape The Haunted House
            </div>
            <button id = "homePage-button" onClick = {function(){props.changePage("instruction")}}>Play</button>
        </div>
    )
}