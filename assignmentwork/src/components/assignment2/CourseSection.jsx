// import React from 'react'
import '../../style/Style.css'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import main from '../../assets/CourseSection/mainimage.png'
import { courses } from '../../data/Courses'

export const CourseSection = () => {
    return (
        <div className='course-section-container'>
            <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                margin: '100px 50px'
            }}>
                <div>
                    <h1>
                        Top Courses to Study India
                    </h1>
                </div>

                <div style={{ padding: '50px 100px' }}>
                    <Typography sx={{ fontSize: '15px', color: 'GrayText' }} component="h6">
                        India has a profitable economy and a high academic system. As a result, it is a good choice for students to study India. Selecting the right course after the
                        Intermediate is an important decision for students. Among all the courses, Engineering is on top of the list among Indian students. Candidates can search for
                        the best engineering Colleges in India and apply there easily.
                    </Typography>
                    <Typography sx={{ fontSize: '15px', color: 'GrayText', paddingTop: '10px' }} component="h6">
                        There are so many undergraduate and postgraduate programs available in Engineering, Management, and Medical for students.
                    </Typography>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                    <div style={{ width: '50%' }}>
                        <img style={{ borderRadius: '3%', width: '100%' }} src={main} alt="main" />
                    </div>

                    <div style={{
                        width: '18%', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                        borderRadius: '10%', padding: '20px 10px', margin: '-30px',
                        backgroundColor: 'white'
                    }}>
                        <Container sx={{ display: 'contents' }}>
                            <div style={{ padding: '0px 10px' }}>
                                <h3 style={{
                                    color: 'rgb(233, 6, 67)', borderBottom: 'dotted'
                                }}>
                                    Computer Courses
                                </h3>
                            </div>
                            <div style={{ paddingRight: "20px" }}>
                                <Typography sx={{
                                    display: 'flex', alignItems: 'center',
                                    borderBottom: '3px solid lightgrey', paddingTop: '15px'
                                }} variant="subtitle1" component="div">
                                    <img style={{ width: '15%', padding: '0px 20px' }}
                                        src={courses[0].image} alt={courses[0].title} />
                                    {courses[0].title}
                                </Typography>
                                <Typography sx={{
                                    display: 'flex', alignItems: 'center',
                                    borderBottom: '3px solid lightgrey', paddingTop: '15px'
                                }} variant="subtitle1" component="div">
                                    <img style={{ width: '15%', padding: '0px 20px' }}
                                        src={courses[1].image} alt={courses[1].title} />
                                    {courses[1].title}
                                </Typography>
                            </div>
                        </Container>

                        <Container sx={{ display: 'contents' }}>
                            <div style={{ padding: '0px 10px' }}>
                                <h3 style={{
                                    color: 'rgb(233, 6, 67)', borderBottom: 'dotted',
                                    paddingTop: '15px'
                                }}>
                                    Medical Courses
                                </h3>
                            </div>
                            <div style={{ paddingRight: "20px" }}>
                                <Typography sx={{
                                    display: 'flex', alignItems: 'center',
                                    borderBottom: '3px solid lightgrey', paddingTop: '15px'
                                }} variant="subtitle1" component="div">
                                    <img style={{ width: '15%', padding: '0px 20px' }}
                                        src={courses[2].image} alt={courses[2].title} />
                                    {courses[2].title}
                                </Typography>
                                <Typography sx={{
                                    display: 'flex', alignItems: 'center',
                                    borderBottom: '3px solid lightgrey', paddingTop: '15px'
                                }} variant="subtitle1" component="div">
                                    <img style={{ width: '15%', padding: '0px 20px' }}
                                        src={courses[3].image} alt={courses[3].title} />
                                    {courses[3].title}
                                </Typography>
                                <Typography sx={{
                                    display: 'flex', alignItems: 'center',
                                    borderBottom: '3px solid lightgrey', paddingTop: '15px'
                                }} variant="subtitle1" component="div">
                                    <img style={{ width: '15%', padding: '0px 20px' }}
                                        src={courses[4].image} alt={courses[4].title} />
                                    {courses[4].title}
                                </Typography>
                            </div>
                        </Container>
                    </div>

                    <div style={{
                        width: '18%', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                        borderRadius: '10%', padding: '20px 10px',
                        backgroundColor: 'white', margin: '60px'
                    }}>
                        <Container sx={{ display: 'contents' }}>
                            <div style={{ padding: '0px 10px' }}>
                                <h3 style={{
                                    color: 'rgb(233, 6, 67)', borderBottom: 'dotted'
                                }}>
                                    Management Courses
                                </h3>
                            </div>
                            <div style={{ paddingRight: "20px" }}>
                                <Typography sx={{
                                    display: 'flex', alignItems: 'center',
                                    borderBottom: '3px solid lightgrey', paddingTop: '15px'
                                }} variant="subtitle1" component="div">
                                    <img style={{ width: '15%', padding: '0px 20px' }}
                                        src={courses[5].image} alt={courses[5].title} />
                                    {courses[5].title}
                                </Typography>
                                <Typography sx={{
                                    display: 'flex', alignItems: 'center',
                                    borderBottom: '3px solid lightgrey', paddingTop: '15px'
                                }} variant="subtitle1" component="div">
                                    <img style={{ width: '15%', padding: '0px 20px' }}
                                        src={courses[6].image} alt={courses[6].title} />
                                    {courses[6].title}
                                </Typography>
                            </div>
                        </Container>

                        <Container sx={{ display: 'contents' }}>
                            <div style={{ padding: '0px 10px' }}>
                                <h3 style={{
                                    color: 'rgb(233, 6, 67)', borderBottom: 'dotted',
                                    paddingTop: '15px'
                                }}>
                                    Engineering Courses
                                </h3>
                            </div>
                            <div style={{ paddingRight: "20px" }}>
                                <Typography sx={{
                                    display: 'flex', alignItems: 'center',
                                    borderBottom: '3px solid lightgrey', paddingTop: '15px'
                                }} variant="subtitle1" component="div">
                                    <img style={{ width: '15%', padding: '0px 20px' }}
                                        src={courses[7].image} alt={courses[7].title} />
                                    {courses[7].title}
                                </Typography>
                                <Typography sx={{
                                    display: 'flex', alignItems: 'center',
                                    borderBottom: '3px solid lightgrey', paddingTop: '15px'
                                }} variant="subtitle1" component="div">
                                    <img style={{ width: '15%', padding: '0px 20px' }}
                                        src={courses[8].image} alt={courses[8].title} />
                                    {courses[8].title}
                                </Typography>
                                <Typography sx={{
                                    display: 'flex', alignItems: 'center',
                                    borderBottom: '3px solid lightgrey', paddingTop: '15px'
                                }} variant="subtitle1" component="div">
                                    <img style={{ width: '15%', padding: '0px 20px' }}
                                        src={courses[9].image} alt={courses[9].title} />
                                    {courses[9].title}
                                </Typography>
                                <Typography sx={{
                                    display: 'flex', alignItems: 'center',
                                    borderBottom: '3px solid lightgrey', paddingTop: '15px'
                                }} variant="subtitle1" component="div">
                                    <img style={{ width: '15%', padding: '0px 20px' }}
                                        src={courses[10].image} alt={courses[10].title} />
                                    {courses[10].title}
                                </Typography>
                                <Typography sx={{
                                    display: 'flex', alignItems: 'center',
                                    borderBottom: '3px solid lightgrey', paddingTop: '15px'
                                }} variant="subtitle1" component="div">
                                    <img style={{ width: '15%', padding: '0px 20px' }}
                                        src={courses[11].image} alt={courses[11].title} />
                                    {courses[11].title}
                                </Typography>
                            </div>
                        </Container>
                    </div>


                </div>
            </div>

        </div>

    )
}
