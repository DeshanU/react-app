import React from 'react'
import { useState } from 'react';

const ClickCounter = () => {

    const [likes, updateLikes] = useState(0);

    const handleClick = () => {
        updateLikes(likes + 1);
    };
        
    return (
        <div className="bg-white rounded-xl shadow-md relative">
            <button onClick={handleClick} className="text-indigo-500 mb-5 hover:text-indigo-600">
                {likes} likes
            </button>
        </div>
    )
}

export default ClickCounter