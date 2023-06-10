import React from 'react';

const MyLogo = ({ style = {}, fill = '#000', width = '100%', className = '', viewBox = '0 0 40 26' }) => (
    <svg
        id="Layer_2"
        data-name="Layer 2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 37.21 43.08"
        width={width}
        style={style}
        height={width}
        // viewBox={viewBox}
        className={`svg-icon ${className || ''}`}
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <g id="Layer_2-2" data-name="Layer 2">
            <path
                fill={fill}
                d="M.94,39.35S-5.4,19.67,14.88,13.22C35.16,6.77,36.63,0,36.63,0c0,0,8.05,58.1-35.69,39.35Z"
            />
        </g>
    </svg>
);
export default MyLogo;
