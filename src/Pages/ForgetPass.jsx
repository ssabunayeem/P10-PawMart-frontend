import React from 'react';
import { useParams } from 'react-router';
import auth from '../firebase/firebase.config';
import { sendPasswordResetEmail } from 'firebase/auth';

const ForgetPass = () => {

    const { email } = useParams()

    const handleSubmit = (e) => {

        e.preventDefault();
        const fromEmail = e.target.email.value;

        sendPasswordResetEmail(auth, fromEmail)
            .then(() => {

                window.open('https://mail.google.com/mail/u/0/')

            })
            .catch((error) => {
                console.log(error);

            });
    }
    return (
        <div className=" flex justify-center items-center  py-20">
            <div className='rounded-xl  lg:rounded-4xl p-2 lg:p-10 bg-[#dae3ee]'>
                <form onSubmit={handleSubmit} className='fieldset'>
                    <label className="label text-lg">Email</label>
                    <input defaultValue={email} name='email' type="email" className="input w-[350px]  lg:w-[400px] py-6 text-lg rounded-full" placeholder="Email" />

                    <button className="btn btn-neutral rounded-xl bg-[#525CEB] py-6 text-lg">Login</button>

                </form>
            </div>

        </div>
    );
};

export default ForgetPass;