import { useEffect, useRef, useState } from "react"
import { useThrottle } from "./useThrottle";

export const useViewportSize = () =>{
    const [height, setHeight] = useState();
    const [width, setWidth] = useState();
    const [resize, setResize] = useState(false);
    const throttledValueResize = useThrottle(resize)
    const count = useRef(0); 
    useEffect(()=>{
        setHeight(window.outerHeight);
        setWidth(window.outerWidth);
        count.current++;
        console.log("Rerender");
    },[throttledValueResize])
    useEffect(()=>{
        window.addEventListener("resize", ()=>{setResize(prev => !prev)})
    },[])
    return { height, width }
}