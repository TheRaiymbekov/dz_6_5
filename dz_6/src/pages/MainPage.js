import {useDispatch, useSelector} from "react-redux";
import {mainInfo} from "../store/MainSlice";
import "./MainPage.css";

const MainPage = () => {

    const {title} = useSelector(state => state.mainReducer)
    const dispatch = useDispatch();

    const Increase = () =>{
        dispatch(mainInfo(
            {title: Math.max(title + 1)}
        ))
    }
    const Decrease = () =>{
        dispatch(mainInfo(
            {title:Math.max(title - 1, 0 )}
        ))
    }
    const Increases = () =>{
        dispatch(mainInfo(
            {title:Math.max(title + 10)}
        ))
    }
    const Decreases = () =>{
        dispatch(mainInfo(
            {title:Math.max(title - 10, 0 )}
        ))
    }
    const Reset = () =>{
        dispatch(mainInfo(
            {title: 0}
        ))
    }

    return(
        <div className="app">
            <h1>{title}</h1>
            <div className="buttons">
                <button className='increase' onClick={Increases}>+10</button>
                <button className='decrease' onClick={Increase}>+1</button>
                <button className='reset' onClick={Reset}>reset</button>
                <button className='increases' onClick={Decrease}>-1</button>
                <button className='decreases' onClick={Decreases}>-10</button>
            </div>
        </div>
    )
}
export default MainPage