import axios from "axios"
import BASE_URL from "../../API/Config"


// const GetDashboard = async(token) => {

//     // const token = useSelector(state => state.admin.adminlogintoken)
//     try {  
//     const response = await axios.get(`${BASE_URL}customers`, {
    
//     headers: {
//       "Authorization" : `Bearer ${token}`
//     }
// }
//     )
     
//     return response.data.data
        
//     } catch (error) {
//         console.log(error);
        
//     }
// }

// export {GetDashboard}



// const GetUserbyID = async(id,token) => {
//     try {
//         const resp = await axios.get(`${BASE_URL}getCustomer/${id}`, {
//             headers: {
//                 "Authorization": `Bearer ${token}`
//             }
           
//         })

//         return resp.data.data
        
//     } catch (error) {
//         console.log(error);
//     }
// }

// export {GetUserbyID}



// const UserDataUpdate = async(updateSubmit , token) => {
//     try {
//         const Response = await axios.post(`${BASE_URL}updateCustomer`,{data:updateSubmit},{
//             headers: {
//                 "Authorization" : `Bearer ${token}`
//             }
//         })

//         return Response
        
//     } catch (error) {
        
//     }
// }

// export {UserDataUpdate}
