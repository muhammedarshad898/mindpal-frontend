import axios from "axios";

const commonapi=async(reqUrl,reqMethod,reqHeader,reqBody)=>{
    const config={
        url:reqUrl,
        method:reqMethod,
        headers:reqHeader?reqHeader:{'contentType':'application/json'},
        data:reqBody
    }
    return await axios(config).then(res=>res).catch(err=>err)
}
export default commonapi