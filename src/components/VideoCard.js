
const VideoCard = ({data}) => {

    const {snippet, statistics} = data;
    const {thumbnails, channelTitle} = snippet;

    return(
        <div className="m-2 p-2 w-72 shadow-lg cursor-pointer hover:bg-gray-200">
            <img 
                alt="thumbnail"
                className="rounded-md"
                src={thumbnails?.medium?.url}
            />
            <h1 className="">{snippet?.title}</h1>
            <h1>{channelTitle}</h1>
            <div>
                <span>{statistics?.viewCount} views </span>
                <span>{snippet?.publishedAt}</span>
            </div>          
        </div>
    )
}

export default VideoCard;

export const RedBorderVideoCard = ({data}) => {

    return (
        <div className="border border-red-950">
            <VideoCard data={data} />
        </div>      
    )
}