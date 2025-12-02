import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.config';

const Profile = () => {

    const { user, setUser } = useContext(AuthContext);

    // console.log(user);

    const [isOpen, setIsOpen] = useState(false);

    const handleOpenForm = () => {
        setIsOpen(!isOpen);
    }


    const handleUpdate = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoUrl = e.target.photoUrl.value;



        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoUrl
        }).then(() => {
            setUser({ ...user, photoURL: photoUrl, displayName: name })
        }).catch((error) => {
            console.log(error)
        });

    }


    return (
        <div className='flex flex-col justify-center items-center space-y-2 my-15'>
            <div className="avatar">
                <div className="w-24 rounded-full">
                    <img src={user?.photoURL} />
                </div>
            </div>

            <p className='font-bold text-2xl m-0'>{user?.displayName}</p>
            <p className='text-xl'>{user?.email}</p>
            <button onClick={handleOpenForm} className=" btn btn-primary bg-[#525CEB] text-xl">Update Profile</button>

            <div>
                {
                    isOpen && (
                        <div className="card  w-[350px] md:w-[650px] md:p-8 shrink-0 rounded-xl animate__animated animate__backInDown">
                            <div className="card-body">
                                <form onSubmit={handleUpdate} className="fieldset">

                                    <label className="label text-lg">Name</label>
                                    <input defaultValue={user?.displayName} name='name' type="text" className="input w-full py-6 text-lg rounded-full" placeholder="Your Name" />

                                    <label className="label text-lg">PhotoUrl</label>
                                    <input defaultValue={user?.photoURL} name='photoUrl' type="text" className="input w-full py-6 text-lg rounded-full" placeholder="Photo Url" />

                                    <button className="btn btn-neutral rounded-2xl bg-[#525CEB] mt-6 py-6 text-lg">Update Now</button>


                                </form>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Profile;