import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import {getDownloadURL, getStorage, ref, uploadBytesResumable} from 'firebase/storage';
import { app } from "../../firebase.js";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  const fileRef = useRef(null);
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(undefined)
  const [fileUploadError, setFileUploadError] = useState(false)
  const [formData, setFormData] = useState({})
  console.log(formData);
  console.log(filePerc);
  console.log(fileUploadError);

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed", // Track the changes and give percentage
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setFilePerc(Math.round(progress))
      },

      (error)=>{
        setFileUploadError(true)
      },
      ()=>{
        getDownloadURL(uploadTask.snapshot.ref).then
        ((downloadUrl)=>{
          setFormData({...formData, avatar: downloadUrl})
        })
      },
      );

  }


  return (
    <>
      <div className="flex flex-col justify-center items-center mt-7">
        <h1 className="text-4xl font-bold text-center text-slate-600">
          Profile
        </h1>
        <form className="flex flex-col mt-2 gap-2 items-center">
          <input
            onChange={(e) => setFile(e.target.files[0])}
            type="file"
            ref={fileRef}
            hidden
            accept="image/*"
          />
          <img
            src={formData.avatar || currentUser.avatar}
            onClick={() => fileRef.current.click()}
            alt="Profile"
            className="h-32 w-32 rounded-full cursor-pointer object-cover"
          />
          <p>
          {
            fileUploadError ? (<span className="text-red-700">Image upload error</span> ): (filePerc > 0 && filePerc < 100) ?( <span className="text-green-700">{`Uploading image ${filePerc}%`}</span>) : (filePerc == 100) ? (<span className="text-green-700">Image upload successfull</span>) : ''
          }  
          </p>
          <input
            type="text"
            id="username"
            placeholder="username"
            className="border-2 border-blue-300 p-4 m-2 rounded-lg w-80"
            value={currentUser.username}
          />
          <input
            type="email"
            id="email"
            placeholder="email"
            className="border-2 border-blue-300 p-4 m-2 rounded-lg w-80"
            value={currentUser.email}
          />
          <input
            type="password"
            id="password"
            placeholder="password"
            className="border-2 border-blue-300 p-4 m-2 rounded-lg w-80"
            value={currentUser.password}
          />
          <button className="bg-blue-200 border-2 border-blue-300 p-3 w-full rounded-lg text-slate-600 uppercase hover:opacity-80">
            update
          </button>
        </form>
        <div className="flex justify-between mt-5 w-80">
          <span className="text-red-700 cursor-pointer">Delete Account</span>
          <span className="text-red-700 cursor-pointer">Sign out</span>
        </div>
      </div>
    </>
  );
};

export default Profile;
