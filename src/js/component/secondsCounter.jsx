import React from 'react';



export const SecondsCounter = (props) => {
    return < div className='d-flex justify-content-center'>
        < div className='digit'><i class="fa-regular fa-clock"></i></ div>
        < div className='digit'>{props.sixth}</ div>
        < div className='digit'>{props.fifth}</ div>
        < div className='digit'>{props.fourth}</ div>
        < div className='digit'>{props.third}</ div>
        < div className='digit'>{props.second}</ div>
        < div className='digit'>{props.first}</ div>
            </ div>
}