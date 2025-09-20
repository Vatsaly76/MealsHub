import React from 'react'

const Cuisines = ({ cuisine, setCuisine }) => {
    return (
        <div className='CuisinesContainer'>
            <button
                className={`btn ${cuisine === 'Canadian' ? 'active' : ''}`}
                onClick={() => setCuisine('Canadian')}
            >
                Canadian
            </button>
            <button
                className={`btn ${cuisine === 'Italian' ? 'active' : ''}`}
                onClick={() => setCuisine('Italian')}
            >
                Italian
            </button>
            <button
                className={`btn ${cuisine === 'Chinese' ? 'active' : ''}`}
                onClick={() => setCuisine('Chinese')}
            >
                Chinese
            </button>
            <button
                className={`btn ${cuisine === 'Indian' ? 'active' : ''}`}
                onClick={() => setCuisine('Indian')}
            >
                Indian
            </button>
            <button
                className={`btn ${cuisine === 'American' ? 'active' : ''}`}
                onClick={() => setCuisine('American')}
            >
                American
            </button>
            <button
                className={`btn ${cuisine === 'Mexican' ? 'active' : ''}`}
                onClick={() => setCuisine('Mexican')}
            >
                Mexican
            </button>
            <button className={`btn ${cuisine === 'Thai' ? 'active' : ''}`}
                onClick={() => setCuisine('Thai')}
            >
                Thai
            </button>
        </div>
    )
}

export default Cuisines;
