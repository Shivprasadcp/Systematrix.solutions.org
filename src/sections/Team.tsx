import Teambox from '@/shared/Teambox';
import Wrapper from '@/shared/Wrapper';
import React from 'react';
import team1 from '../assets/team1.png';
import team2 from '../assets/team2.png';
import team3 from '../assets/team3.png';

const TeamData = [
    {
        header: "Vishal",
        description: "Working with this team has been an absolute pleasure. Their dedication to excellence and collaborative spirit have made every project a success.",
        image: team1.src
    },
    {
        header: "Amaya",
        description: "I've been amazed by the talent and professionalism of my colleagues on this team. Their expertise and commitment to delivering high-quality work never fail to impress.",
        image: team2.src
    },
    {
        header: "George",
        description: "I've been amazed by the talent and professionalism of my colleagues on this team. Their expertise and commitment to delivering high-quality work never fail to impress.",
        image: team3.src
    }
];



const Team = () => {
    return (
        <section>
            <Wrapper>

                <div className='text-white font-semi-bold text-5xl flex justify-center mt-40'>
                    <p>Our Team</p>
                </div>
                <div className=' mt-20  flex flex-col md:flex-row flex-wrap justify-between '>



                    {TeamData.map((item, index) => (
                        <Teambox
                            member={item.header}
                            paragraph={item.description}
                            image={item.image}
                        //  number={item.number}
                        />
                    ))}
                </div>
            </Wrapper>
        </section>
    );
}

export default Team;

