import React from 'react'

export default function GraphButtons() {
    return (
        <div className='onboarding-content'>
            <h2>Update the Graph</h2> 
            <p>
                <b>Graph: </b>
                Creates your custom model which draws lines between
                cancer positive and cancer negative patients
            </p> 
           <p>
               Blue regions are where your model thinks cancer positive 
               patients are and red regions are where your model thinks 
               cancer negative patients are
           </p>
        
        </div>
    );
}