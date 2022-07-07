import { useSelector } from "react-redux";

export function BallBox() {

    const balls = useSelector((state)=> state.balls.value)

    return(
        <div id="ballComponentContainer">
            <span>Pokeballs: {balls.pokeballs}</span><br/>
            <span>Greatballs: {balls.greatballs}</span><br/>
            <span>Ultraballs: {balls.ultraballs}</span><br/>
            <span>Masterballs: {balls.masterballs}</span><br/>
        </div>
    )
}