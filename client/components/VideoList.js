var VideoList = (props) => {

   
    if(props.item.length === 0){
      return (<div>Loading...</div>)
    } else {
      return (
        <div className="video-list media">
          <VideoListEntry item={props.item[0]} clickHandler = {props.clickHandler} />
          <VideoListEntry item={props.item[1]} clickHandler = {props.clickHandler} />
          <VideoListEntry item={props.item[2]} clickHandler = {props.clickHandler} />
          <VideoListEntry item={props.item[3]} clickHandler = {props.clickHandler} />
          <VideoListEntry item={props.item[4]} clickHandler = {props.clickHandler} />
         </div>
         )
    }
};

window.VideoList = VideoList;
