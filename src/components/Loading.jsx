import React from 'react'
import { Commet } from 'react-loading-indicators'

const Loading = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div>
                <Commet color="#ff8427" size="large" text="" textColor="" />
            </div>
        </div>
    )
}

export default Loading