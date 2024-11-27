import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PageNotFound } from '../utils/PageNotFound';
import { useUserContext } from '../context/UserContext';
import Loading from '../components/Loading';
import { getChannelInfo, toggleChannelSubscription } from '../services/channelService';

export function Channel() {
    const { username } = useParams();
    const [channelData, setChannelData] = useState(null);
    const { userData } = useUserContext();
    const navigate = useNavigate();
    const [isloading, setLoading]=useState(true);
    const [error, setError] = useState(null);

    const channelProfileDetails = async () => {
        setLoading(true);
        try {
            const Data=await getChannelInfo(username);
            if (!Data?.data.username) {
                console.log('Invalid user channel',Data);
                setError('Invalid user channel');
                return;
            }
            setChannelData(Data?.data);
        } catch (error) {
            console.log("Error: while setting the channel data", error);
            setError('An error occurred while fetching channel data');
        }
        setLoading(false);
    };

    const toggleChannelSubcription=async()=>{
        try {
            const Data=await toggleChannelSubscription(channelData?._id);
            if(!Data){
                setError('An error occurred while toggling channel subscription');
            }
            setChannelData((prev) => ({
                ...prev,
                isSubscribed:!prev.isSubscribed,
                subscribersCount: prev.isSubscribed? prev.subscribersCount - 1 : prev.subscribersCount + 1,
            }));            
        } catch (error) {
            console.log("Error at frontend page",error);
        }
    };

    useEffect(() => {
        channelProfileDetails();
    }, [username]);

    return isloading===true?<Loading />:(
        <>
            {error && <div className="error-message">{error}</div>}
            {!channelData || !channelData.username ? <PageNotFound type='Channel' /> : (
                <div className="flex flex-col gap-3">

                    <h1>getChannel Response is: {JSON.stringify(channelData)}</h1>  {/* for debugging purpose */}
                    <div className="flex flex-row gap-2 hover:text-rose-500">
                        <img 
                            src={channelData.avatar || 'path/to/fallback-image.jpg'}
                            className="w-16 h-16 rounded-full hover:shadow-lg transition-shadow duration-300"
                            alt="channel_avatar"
                        />
                        <h1>Channel: {channelData.fullName}</h1>
                        <h3>@{channelData.username}</h3>
                    </div>
                    <h2>Subscribers: {channelData.subscribersCount}</h2>
                    {
                     userData?.username!=channelData?.username && 
                    <button 
                    onClick={toggleChannelSubcription} 
                    className={`
                        flex justify-center items-center rounded-lg max-w-xs px-5 py-3 
                        font-medium transition duration-300 ease-in-out
                        ${(channelData?.isSubscribed === true) 
                        ? "bg-gray-400 text-gray-700 hover:bg-gray-500"  // For unsubscribed (gray)
                        : "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700" // For subscribe (blue)
                        }
                    `}
                    >
                    {userData && userData.username 
                        ? (channelData?.isSubscribed === true ? "Unsubscribe" : "Subscribe Now") 
                        : "Please Log in to Subscribe"
                    }
                    </button>
                    }
                </div>
            )}
        </>
    );
}