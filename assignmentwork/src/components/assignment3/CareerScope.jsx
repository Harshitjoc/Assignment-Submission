// import React from 'react'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import EngineeringIcon from '@mui/icons-material/Engineering'
import ComputerIcon from '@mui/icons-material/Computer'
import MedicalServicesIcon from '@mui/icons-material/MedicalServices'


const CareerScope = () => {
    return (
        <div className='career-scope-container'>
            <div>
                <div className='Heading-Section'
                    style={{ display: 'flex', justifyContent: 'center' }}>
                    <h1 style={{ width: '20%', textAlign: 'center', borderLeft: '5px solid rgb(255, 153, 0)', padding: '0px 30px' }}>
                        Career Scope for Students
                    </h1>
                </div>

                <div className="Details"
                    style={{
                        display: 'flex', justifyContent: 'center', padding: '50px 20%'
                        , color: 'black', fontWeight: 'lighter', fontSize: '15px'
                    }}>
                    <p>
                        There are lots of career scopes for students who completed their
                        degrees in India. Students can choose any of the courses from
                        different programs in management, engineering, medical, etc.
                        We have mentioned below the scope for students after completing the
                        degree in India from popular colleges of the country.
                    </p>
                </div>

                <div className="Card-Container"
                    style={{
                        display: 'flex', justifyContent: 'center', padding: '50px'
                        , color: 'black', fontWeight: 'lighter', fontSize: '15px',
                        margin: '0px 100px', textAlign: 'center', alignItems: 'center'
                    }}>

                    <div className="Card"
                        style={{
                            boxShadow: '12px 12px 2px 1px rgb(117, 73, 19)', backgroundColor: 'white',
                            borderRadius: '10px', width: '30%', margin: '20px'
                        }}>

                        <div className="Image"
                            style={{
                                backgroundColor: 'black', color: 'white', display: 'flex',
                                justifyContent: 'center', alignItems: 'center', width: '10%'
                                , borderRadius: '0px 20px', padding: '10px', margin: '-20px'
                            }}>
                            <ManageAccountsIcon />
                        </div>
                        <div style={{
                            display: 'flex', justifyContent: 'center', alignItems: "center",
                            flexDirection: 'column', padding: '10px'
                        }}>
                            <h4>Management</h4>
                            <p style={{ fontSize: '12px', padding: '10px 25px', lineHeight: '1.8' }}>
                                Supervisor/ Front-line manager/ Senior Manager/ Board of Director/ CEO/ President of the Organization
                            </p>
                        </div>
                    </div>

                    <div className="Card"
                        style={{
                            boxShadow: '12px 12px 2px 1px rgb(117, 73, 19)', backgroundColor: 'white',
                            borderRadius: '10px', width: '30%', margin: '20px'
                        }}>

                        <div className="Image"
                            style={{
                                backgroundColor: 'black', color: 'white', display: 'flex',
                                justifyContent: 'center', alignItems: 'center', width: '10%'
                                , borderRadius: '0px 20px', padding: '10px', margin: '-20px'
                            }}>
                            <EngineeringIcon />
                        </div>
                        <div style={{
                            display: 'flex', justifyContent: 'center', alignItems: "center",
                            flexDirection: 'column', padding: '10px'
                        }}>
                            <h4>Engineering</h4>
                            <p style={{ fontSize: '12px', padding: '10px 25px', lineHeight: '1.8' }}>
                                Students can start working to build a better future and can apply for ME/ M.Tech./ M.S.
                            </p>
                        </div>
                    </div>

                    <div className="Card"
                        style={{
                            boxShadow: '12px 12px 2px 1px rgb(117, 73, 19)', backgroundColor: 'white',
                            borderRadius: '10px', width: '30%', margin: '20px'
                        }}>

                        <div className="Image"
                            style={{
                                backgroundColor: 'black', color: 'white', display: 'flex',
                                justifyContent: 'center', alignItems: 'center', width: '10%'
                                , borderRadius: '0px 20px', padding: '10px', margin: '-20px'
                            }}>
                            <ComputerIcon />
                        </div>
                        <div style={{
                            display: 'flex', justifyContent: 'center', alignItems: "center",
                            flexDirection: 'column', padding: '10px'
                        }}>
                            <h4>Computer Science</h4>
                            <p style={{ fontSize: '12px', padding: '10px 25px', lineHeight: '1.8' }}>
                                Software Developer, Engineers, and Programmers
                            </p>
                        </div>
                    </div>

                    <div className="Card"
                        style={{
                            boxShadow: '12px 12px 2px 1px rgb(117, 73, 19)', backgroundColor: 'white',
                            borderRadius: '10px', width: '30%', margin: '20px'
                        }}>

                        <div className="Image"
                            style={{
                                backgroundColor: 'black', color: 'white', display: 'flex',
                                justifyContent: 'center', alignItems: 'center', width: '10%'
                                , borderRadius: '0px 20px', padding: '10px', margin: '-20px'
                            }}>
                            <MedicalServicesIcon />
                        </div>
                        <div style={{
                            display: 'flex', justifyContent: 'center', alignItems: "center",
                            flexDirection: 'column', padding: '10px'
                        }}>
                            <h4>Medical</h4>
                            <p style={{ fontSize: '12px', padding: '10px 25px', lineHeight: '1.8' }}>
                                Medical specialist, Open personal clinic, join major hospitals and private
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default CareerScope