import React from 'react';


type TLaoutProps={
    children:React.ReactNode
}

const layout:React.FC<TLaoutProps> = ({children}) => {
    return (
        <div>
            <h1>Dashboard Layout</h1>
            {children}
        </div>
    );
};

export default layout;