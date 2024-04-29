import Wrapper from '@/shared/Wrapper';
import React from 'react';
import Projectbox from '@/shared/Projectbox';

const ProjectData = [
    {
        header: "Game UI",
        description: "Create interactive, animated  graphics that are ready to ship to game engines. ",
        number:1
    },
    {
        header: "HealthGuard: Remote Health Monitoring System",
        description: " HealthGuard offers a comprehensive solution for remote health monitoring.",
        number:2
    },
    {
        header: "LearnScape: Virtual Reality Education Platform",
        description: " LearnScape revolutionizes education by immersing learners in virtual environments .",
        number:3
    },
    {
        header: "CommunityConnect: Neighborhood Engagement App",
        description: "CommunityConnect fosters stronger ties within neighborhoods by providing a platform for residents to connect.",
        number:4
    },
    {
        header: "AgriSense: Precision Agriculture Solutions",
        description: " AgriSense leverages IoT sensors, satellite imagery, and machine learning algorithms to optimize agricultural practices.",
        number:5
    },
    {
        header: "MindMeld: Mental Wellness App",
        description: "MindMeld offers personalized mental health support through a combination of self-care tools, therapy resources, and community forums.. ",
        number:6
    },
]

const Projects = () => {
    return (
        <section className=' '>
            <Wrapper>
                {/*content*/}
                <div className='justify-center'>
                    <div className=' p-4 text-5xl text-white bg-custom-gray w-52 '>
                        <h1>Projects</h1>
                    </div>

                </div>

                {/* boxes */}
                <div className=' mt-12 flex flex-col md:flex-row flex-wrap justify-between '>
                    

                    {ProjectData.map((item,index)=>(
                        <Projectbox
                        title={item.header}
                         paragraph={item.description}
                        //  number={item.number}
                        />
                    ))}
                </div>
            </Wrapper>
        </section>
    );
}

export default Projects;
