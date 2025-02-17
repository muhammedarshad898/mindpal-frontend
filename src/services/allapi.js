import base_url from "./baseurl";
import commonapi from "./commonapi";

export const registerapi=async(data)=>{
    return await commonapi(`${base_url}/reg`,"POST","",data)
}
export const loginapi=async(data)=>{
    return await commonapi(`${base_url}/log`,"POST","",data)
}
export const addDoctorapi=async(data,header)=>{
    return await commonapi(`${base_url}/adddoc`,"POST",header,data)
}
export const getdoctorapi=async()=>{
    return await commonapi(`${base_url}/getdoc`,"GET","","")
}
export const getdoctorbyid=async(id)=>{
    return await commonapi(`${base_url}/finddoc/${id}`,"GET","","")
}
export const getdoctorbyspc=async(specialization)=>{
    return await commonapi(`${base_url}/spcdoc/${specialization}`,"GET","","")
}
export const takeappointmentapi=async(data,header)=>{
    return await commonapi(`${base_url}/takeappo`,"POST",header,data)
}
export const getmyappointmentapi=async(header)=>{
    return await commonapi(`${base_url}/getmyappo`,"GET",header,"")
}
export const deletedoctorapi=async(id,header)=>{
    return await commonapi(`${base_url}/deletedoc/${id}`,"DELETE",header,{})
}
export const editdoctorapi=async(id,header,data)=>{
    return await commonapi(`${base_url}/editdoc/${id}`,"PUT",header,data)
}
export const getdoctordashboardapi=async(header)=>{
    return await commonapi(`${base_url}/docprofile`,"GET",header,"")
}
export const getallappointmentsapi=async(header)=>{
    return await commonapi(`${base_url}/allappo`,"GET",header,"")
}
export const deleteappointmentapi=async(id,header)=>{
    return await commonapi(`${base_url}/deleteappo/${id}`,"DELETE",header,{})
}
// export const searchappointmentapi=async(query,header)=>{
//     return await commonapi(`${base_url}/searchappo?query=${query}`,"GET","",header)

// }
export const createPaymentApi = async (data, header) => {
    return await commonapi(`${base_url}/payment/create`, "POST", header, data);
  };
  export const executePaymentApi = async (paymentId, PayerID) => {
    const header = {
        'Content-Type': 'application/json',
    };

    return await commonapi(
        `${base_url}/payment/success?paymentId=${paymentId}&PayerID=${PayerID}`,
        "GET",
        header
    );
};
export const addpostapi=async(data,header)=>{
    return await commonapi(`${base_url}/addpost`,"POST",header,data)
}
export const getallpostapi=async(header)=>{
    return await commonapi(`${base_url}/getallpost`,"GET",header,"")
}
export const getpostsapi=async(userid,header)=>{
    return await commonapi(`${base_url}/getpost/${userid}`,"GET",header,"")
}
export const addprofile=async(data,header)=>{
    return await commonapi(`${base_url}/addprofile`,"POST",header,data)
}
export const getprofileapi=async(userid,header)=>{
    return await commonapi(`${base_url}/getprofile/${userid}`,"GET",header,"")
}
export const deletepostapi=async(id,header)=>{
    return await commonapi(`${base_url}/deletepost/${id}`,"DELETE",header,{})
}
export const likePostapi = async (id, header) => {
    return await commonapi(`${base_url}/likepost/${id}`, "PUT", header, {});
};

export const getprofileonlandingapi=async()=>{
    return await commonapi(`${base_url}/getprofileonland`,"GET","","")
}
export const updateprofileapi = async (userid, data, header) => {
    return await commonapi(`${base_url}/updateprofile/${userid}`, "PUT", header, data);
};



