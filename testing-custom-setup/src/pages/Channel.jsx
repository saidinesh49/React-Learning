import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PageNotFound } from '../utils/PageNotFound';
import { useUserContext } from '../context/UserContext';
import { getChannelInfo } from '../services/channelService';

export function Channel() {
    const { username } = useParams();
    const [channelData, setChannelData] = useState(null);
    const { userData } = useUserContext();
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const userProfileDetails = async () => {
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
    };

    useEffect(() => {
        userProfileDetails();
    }, [username]);

    return (
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
                    <h2 className={`${(channelData?.isSubscribed === 1) ? "text-slate-950 bg-slate-300 dark:bg-slate-950 dark:text-slate-300" : "text-slate-950 bg-sky-500"}`}>
                        {userData && userData.username ? (channelData?.isSubscribed === 1 ? "Subscribed" : "Subscribe Now") : "Please Log in to Subscribe"}
                    </h2>
                </div>
            )}
        </>
    );
}
