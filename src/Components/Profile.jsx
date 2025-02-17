// import React, { useEffect, useState } from 'react';
// import { toast } from 'react-toastify';
// import { addprofile, getprofileapi } from '../services/allapi';
// import { useContext } from 'react';
// import { responsecontext } from '../contextapi/Contextprovider';

// function Profile() {
//     const [view, setView] = useState(false);
//       const[profile,setprofile]=useState({
//         username:"",email:"",bio:"",image:""
//       })
//       const[preview,setpreview]=useState("")

//     const{setresponse}=useContext(responsecontext)
    

//     const handleView = () => {
//         setView(!view);
//     };
//     useEffect(()=>{

//         if(sessionStorage.getItem('uname')){
//            setprofile({username:sessionStorage.getItem('uname')})
//           }

          
//     },[])
//     useEffect(()=>{
//         if(profile.image){
//             setpreview(URL.createObjectURL(profile.image))
//         }
//         else{
//             setpreview("")
//         }

//     },[profile.image])

//     const handleaddprofile=async()=>{
//         console.log(profile)
//         const{username,email,bio,image}=profile
//         if(!username||!email||!bio||!image){
//             toast.warning("Enter a Valid Data")
//         }
//         else{
//             const fd=new FormData()
//             fd.append('username',username)
//             fd.append('email',email)
//             fd.append('bio',bio)
//             fd.append('image',image)

//             const header={
//                 'Content-Type':'multipart/form-data',
//                 'Authorization':`Token ${sessionStorage.getItem('token')}`
//               }

//               const res=await addprofile(fd,header)
//               console.log(res)
//               if(res.status==201){
//                 toast.success("Profile Added")
//                setprofile({
//                 username:"",email:"",bio:"",image:""
//               })
//               setresponse(res)
//               }


//         }

//     }

   
       
//     return (
//         <div className="position-relative">
//             <div className='d-flex justify-content-between'>
//                 <h2>Profile Updation</h2>
//             <button className="btn" onClick={handleView}>
//                 {view ? (

                   
//                     <i className="fa-solid fa-chevron-up fa-lg" />
//                 ) : (
//                     <i className="fa-solid fa-chevron-down fa-lg" />
//                 )}
//             </button>
//             </div>

//             {view && (
//                 <div className="position-absolute end-0 bg-white shadow p-3 rounded" style={{ width: '500px', top: '100px', zIndex: '1000' }}>
//                     <label className="d-block text-center">
//                         <input type="file" style={{ display: "none" }} onChange={(e)=>setprofile({...profile,image:e.target.files[0]})} />
//                         <img
//                             src={preview?preview:"https://medhacloud.com/wp-content/uploads/2023/03/Backup-Logo.svg"}
//                             alt="Profile"
//                             className="img-fluid rounded-circle"
//                             style={{ cursor: "pointer", width: '80px', height: '80px' }}
//                         />
//                     </label>
//                     <input type="text" defaultValue={profile.username} className="form-control mb-2" placeholder="Name" onChange={(e)=>setprofile({...profile,username:e.target.value})} />
//                     <input type="text" className="form-control mb-2" placeholder="Email" onChange={(e)=>setprofile({...profile,email:e.target.value})} />
//                     <input type="text" className="form-control mb-2" placeholder="Bio" onChange={(e)=>setprofile({...profile,bio:e.target.value})} />
//                     <div className="d-flex justify-content-between">
//                         <button className="btn btn-primary" onClick={handleaddprofile}>Save</button>
//                         <button className="btn btn-danger">Logout</button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Profile;
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { addprofile, getprofileapi, updateprofileapi } from '../services/allapi';
import { useContext } from 'react';
import { responsecontext } from '../contextapi/Contextprovider';

function Profile() {
    const [view, setView] = useState(false);
    const [profile, setprofile] = useState({
        username: "", email: "", bio: "", image: ""
    });
    const [preview, setpreview] = useState("");
    const { setresponse } = useContext(responsecontext);

    const handleView = async () => {
        if (!view) {
            const userid = sessionStorage.getItem('userid'); // Get userid from sessionStorage
            if (!userid) {
                toast.error("User not logged in");
                return;
            }

            const header = {
                'Authorization': `Token ${sessionStorage.getItem('token')}`
            };

            try {
                const res = await getprofileapi(userid, header);
                console.log("Profile API Response:", res); // Debugging: Log the response

                if (res.status === 200) {
                    // Populate form fields with existing profile data
                    setprofile({
                        username: res.data.username,
                        email: res.data.email,
                        bio: res.data.bio,
                        image: res.data.image
                    });

                    // Set image preview
                    if (res.data.image) {
                        setpreview(res.data.image);
                    }
                } else {
                    toast.error("Failed to fetch profile data");
                }
            } catch (error) {
                console.error("Error fetching profile:", error); // Debugging: Log the error
                toast.error("Failed to fetch profile data");
            }
        }
        setView(!view);
    };

    useEffect(() => {
        if (profile.image && typeof profile.image === 'object') {
            setpreview(URL.createObjectURL(profile.image));
        } else if (profile.image) {
            setpreview(profile.image);
        } else {
            setpreview("");
        }
    }, [profile.image]);

    const handleSaveProfile = async () => {
        const { username, email, bio, image } = profile;
        if (!username || !email || !bio || !image) {
            toast.warning("Enter valid data");
            return;
        }

        const fd = new FormData();
        fd.append('username', username);
        fd.append('email', email);
        fd.append('bio', bio);
        if (typeof image === 'object') {
            fd.append('image', image); // Append image file if it's a new file
        }

        const header = {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Token ${sessionStorage.getItem('token')}`
        };

        const userid = sessionStorage.getItem('userid'); // Get userid from sessionStorage
        if (!userid) {
            toast.error("User not logged in");
            return;
        }

        try {
            let res;
            if (profile._id) {
                // Update existing profile
                res = await updateprofileapi(userid, fd, header);
            } else {
                // Add new profile
                res = await addprofile(fd, header);
            }

            if (res.status === 200 || res.status === 201) {
                toast.success("Profile saved successfully");
                setprofile({
                    username: "", email: "", bio: "", image: ""
                });
                setresponse(res);
                setView(false); // Close the modal
            }
        } catch (error) {
            console.error(error);
            toast.error("Failed to save profile");
        }
    };

    return (
        <div className="position-relative">
            <div className='d-flex justify-content-between'>
                <h2>Add Profile</h2>
                <button className="btn" onClick={handleView}>
                    {view ? (
                        <i className="fa-solid fa-chevron-up fa-lg" />
                    ) : (
                        <i className="fa-solid fa-chevron-down fa-lg" />
                    )}
                </button>
            </div>

            {view && (
                <div className="position-absolute end-0 bg-white shadow p-3 rounded" style={{ width: '500px', top: '100px', zIndex: '1000' }}>
                    <label className="d-block text-center">
                        <input type="file" style={{ display: "none" }} onChange={(e) => setprofile({ ...profile, image: e.target.files[0] })} />
                        <img
                            src={preview ? preview : "https://medhacloud.com/wp-content/uploads/2023/03/Backup-Logo.svg"}
                            alt="Profile"
                            className="img-fluid rounded-circle"
                            style={{ cursor: "pointer", width: '80px', height: '80px' }}
                        />
                    </label>
                    <input
                        type="text"
                        value={profile.username}
                        className="form-control mb-2"
                        placeholder="Name"
                        onChange={(e) => setprofile({ ...profile, username: e.target.value })}
                    />
                    <input
                        type="text"
                        value={profile.email}
                        className="form-control mb-2"
                        placeholder="Email"
                        onChange={(e) => setprofile({ ...profile, email: e.target.value })}
                    />
                    <input
                        type="text"
                        value={profile.bio}
                        className="form-control mb-2"
                        placeholder="Bio"
                        onChange={(e) => setprofile({ ...profile, bio: e.target.value })}
                    />
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-primary" onClick={handleSaveProfile}>Save</button>
                        <button className="btn btn-danger">Logout</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Profile;