// import React from 'react'

const IndiaVsAbroad = () => {
    return (
        <div className='main-container'>

            <div className="main-heading"
                style={{
                    color: 'white', boxShadow: '0 5px 5px bisque', width: '90%',
                    textAlign: 'center', paddingBottom: '10px', margin: '30px'
                }}>
                <h1>Study India vs Study Abroad</h1>
            </div>

            <div className="card-container"
                style={{ display: 'flex', flexDirection: 'row', width: '80%', marginTop: '40px' }}>

                <div className="card" style={{
                    backgroundColor: 'bisque', boxShadow: 'rgba(0, 0, 0, 0.653) 0px 5px 15px',
                    padding: '20px', borderRadius: '3%', width: '25%'
                }}>
                    <h2 style={{ borderBottom: '1px solid', padding: '5px 10px' }}>Details</h2>
                    <div className="details">
                        <p className="content" style={{ borderBottom: '2px solid gray', padding: '20px 10px' }} >Language</p>
                        <p className="content" style={{ borderBottom: '2px solid gray', padding: '20px 10px' }}>Living budget</p>
                        <p className="content" style={{ borderBottom: '2px solid gray', padding: '20px 10px' }}>Connectivity</p>
                        <p className="content" style={{ borderBottom: '2px solid gray', padding: '20px 10px' }}>VISA</p>
                        <p className="content" style={{ borderBottom: '2px solid gray', padding: '20px 10px' }}>Transport</p>
                        <p className="content" style={{ padding: '20px 10px' }}>University</p>
                    </div>
                </div>

                <div className="card" style={{
                    backgroundColor: 'white', boxShadow: 'rgba(0, 0, 0, 0.653) 0px 5px 15px',
                    padding: '20px', borderRadius: '3%', width: '35%', marginLeft: '-15px'
                }}>
                    <h2 style={{ borderBottom: '1px solid', padding: '5px 10px' }}>Study India</h2>
                    <div className="details">
                        <p className="content" style={{ borderBottom: '2px solid gray', padding: '20px 10px' }} >Language is no barrier</p>
                        <p className="content" style={{ borderBottom: '2px solid gray', padding: '20px 10px' }}>Living on a budget</p>
                        <p className="content" style={{ borderBottom: '2px solid gray', padding: '20px 10px' }}>Always connected with family and friends</p>
                        <p className="content" style={{ borderBottom: '2px solid gray', padding: '20px 10px' }}>No Visa problem</p>
                        <p className="content" style={{ borderBottom: '2px solid gray', padding: '20px 10px' }}>Good public transport facility</p>
                        <p className="content" style={{ padding: '20px 10px' }}>India boasts the largest university in the world</p>
                    </div>
                </div>

                <div className="card" style={{
                    backgroundColor: 'white', boxShadow: 'rgba(0, 0, 0, 0.653) 0px 5px 15px',
                    padding: '20px', borderRadius: '3%', width: '35%', marginLeft: '-15px'
                }}>
                    <h2 style={{ borderBottom: '1px solid', padding: '5px 10px' }}>Study Abroad</h2>
                    <div className="details">
                        <p className="content" style={{ borderBottom: '2px solid gray', padding: '20px 10px' }} >Language is a barrier in many abroad countries</p>
                        <p className="content" style={{ borderBottom: '2px solid gray', padding: '20px 10px' }}>High Living costs as compare to India</p>
                        <p className="content" style={{ borderBottom: '2px solid gray', padding: '20px 10px' }}>Connectivity with family is not as easy as in India</p>
                        <p className="content" style={{ borderBottom: '2px solid gray', padding: '20px 10px' }}>Lots of hurdles while applying for VISA</p>
                        <p className="content" style={{ borderBottom: '2px solid gray', padding: '20px 10px' }}>Not familiar with public transport</p>
                        <p className="content" style={{ padding: '20px 10px' }}>No university is as large as IGNOU Abroad</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default IndiaVsAbroad