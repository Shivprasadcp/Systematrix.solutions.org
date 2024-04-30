import Wrapper from '@/shared/Wrapper';
import React from 'react';
import Projectbox from '@/shared/Projectbox';

const ProjectData = [
    {
        header: "Game UI",
        description: "Create interactive, animated graphics that are ready to ship to game engines.",
        number: 1
    },
    {
        header: "HealthGuard: Remote Health Monitoring System",
        description: "HealthGuard offers a comprehensive solution for remote health monitoring.",
        number: 2
    },
    {
        header: "LearnScape: Virtual Reality Education Platform",
        description: "LearnScape revolutionizes education by immersing learners in virtual environments.",
        number: 3
    },
    {
        header: "CommunityConnect: Neighborhood Engagement App",
        description: "CommunityConnect fosters stronger ties within neighborhoods by providing a platform for residents to connect.",
        number: 4
    },
    {
        header: "AgriSense: Precision Agriculture Solutions",
        description: "AgriSense leverages IoT sensors, satellite imagery, and machine learning algorithms to optimize agricultural practices.",
        number: 5
    },
    {
        header: "MindMeld: Mental Wellness App",
        description: "MindMeld offers personalized mental health support through a combination of self-care tools, therapy resources, and community forums.",
        number: 6
    },
]

const Projects = () => {
    return (
        <section>
            <Wrapper>
                {/* Title */}
                <div className='text-white mt-10 md:mt-20 text-center md:text-left'>
                    <h1 className='text-4xl md:text-5xl font-bold'>Projects</h1>
                </div>

                {/* Boxes */}
                <div className='mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {ProjectData.map((item, index) => (
                        <Projectbox
                            key={index}
                            title={item.header}
                            paragraph={item.description}
                        />
                    ))}
                </div>
            </Wrapper>
        </section>
    );
}

export default Projects;
