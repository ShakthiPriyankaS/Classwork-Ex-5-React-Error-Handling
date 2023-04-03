import React from 'react';

function Error()
{
    const name=["pasta","dhaal","wheat","rice"];
    const namelist=name.map((n,i)=><li key={i}>{n}</li>)
    return (
        <div>
            <ul>{namelist}</ul>
        </div>
    );
}

export default Error