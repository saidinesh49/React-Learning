import axios from "axios";
import conf from "../conf/conf";

const getChannelInfo = async(username)=>{
    try {
        if(!username) return null;
        const channelInfo=await axios.get(`${conf.BACKEND_URL}/users/c/${username}`);
        if(!channelInfo?.data){
            console.log('Problem occured while getting channel info');
            return null;
        }
        console.log("Received channel info at frontend is: ",channelInfo)
        return ({
             data: channelInfo.data,
            });
    } catch (error) {
        console.log("Error: while fetching channel info ",error);
        return null;
    }
};

const getCurrentUserInfo=async()=>{
    try {
        const currentUser=await axios.get(`${conf.BACKEND_URL}/users/current-user`);
        if(!currentUser?.data){
            return null;
        }
        return ({
            data: currentUser.data,
           });
    } catch (error) {
        console.log("Error: while getting current user ",error);
        return null;
    }
}


export {
    getChannelInfo,
    getCurrentUserInfo,
}