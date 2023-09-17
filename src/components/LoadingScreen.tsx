import React from "react";
import Loader from "./Loader";

const LoadingScreen = () => {
    return (
        <div style={style}>
            <Loader hasBg={false} />
        </div>
    )
}

const style = {
    backgroundColor: '#fff',
    width: '100%',
    height: '100vh'
}

export default LoadingScreen;