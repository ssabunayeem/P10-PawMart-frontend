import React from 'react';
import doc1 from '../assets/doctor-1.jpg'
import doc2 from '../assets/doctor-2.jpg'
import doc3 from '../assets/doctor-3.jpg'

const MeetOurVets = () => {
    return (
        <div className='my-24 py-12 flex flex-col justify-center items-center bg-[#dae3ee]'>
            <div>
                <h2 className='text-2xl lg:text-4xl font-bold my-8'>Meet Our Expert Vets</h2>
            </div>

            {/* all cards */}
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-15 my-5'>

                {/* doctor 1 */}
                <div className="card bg-white  w-96 shadow-xl">
                    <figure>
                        <img
                            className='w-full h-[200px]  object-cover'
                            src={doc1}
                            alt="Shoes" />
                    </figure>

                    <div className="card-body">

                        <h2 className="card-title text-blue-700">Dr. Alicia Snow</h2>
                        <h3 className='font-semibold'>Winter Dermatology & Paw Care</h3>

                        <h4>8 Year Exp.</h4>

                        <button className="btn  bg-[#525CEB] w-full text-white">Book Appointment</button>

                    </div>
                </div>

                {/* doctor 2 */}
                <div className="card bg-white  w-96 shadow-xl">
                    <figure>
                        <img
                            className='w-full h-[200px] object-cover'
                            src={doc2}
                            alt="Shoes" />
                    </figure>

                    <div className="card-body">

                        <h2 className="card-title text-blue-700">Dr. Kevin Frost</h2>
                        <h3 className='font-semibold'>Cold Weather Nutrition</h3>

                        <h4>6 Year Exp.</h4>

                        <button className="btn  bg-[#525CEB] w-full text-white">Book Appointment</button>

                    </div>
                </div>

                {/* doctor 3 */}
                <div className="card bg-white w-96 shadow-xl">
                    <figure>
                        <img
                            className='w-full h-[200px]  object-cover'
                            src={doc3}
                            alt="Shoes" />
                    </figure>

                    <div className="card-body">

                        <h2 className="card-title text-blue-700">Dr. Scarlett Pine</h2>
                        <h3 className='font-semibold'>Pet Allergies & dry Skin</h3>

                        <h4>5 Year Exp.</h4>

                        <button className="btn  bg-[#525CEB] w-full text-white">Book Appointment</button>

                    </div>
                </div>


            </div>

        </div>
    );
};

export default MeetOurVets;