import React from "react";
import { ClipLoader } from "react-spinners";

interface Props {
    hasBg: boolean,
    isAllFilled: boolean
}

const Loader = ({ hasBg, isAllFilled }: Props) => {
    return (
        <div id="loader-test" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', position: 'fixed', top: 0, left: 0, zIndex: 1234567, background: isAllFilled ? '#ffffff' : hasBg ? 'rgba(0, 0, 0, 0.20)' : undefined }}>
            <ClipLoader
                color={'#a00c36'}
                loading={true}
                size={70}
                speedMultiplier={1}
            />
        </div>
    )
}

Loader.defaultProps = {
    hasBg: true,
    isAllFilled: false
}

export default Loader;