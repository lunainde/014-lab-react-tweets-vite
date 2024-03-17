import React from "react";
import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";

//function Tweet(props)
const Tweet = ({ tweet }) => {
  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.image} />
      {/* <img
        src={props.tweet.user.image}
        className="profile"
        alt="profile"
      /> */}
      <div className="body">
        <div className="top">
          <User name={tweet.user.name} handle={tweet.user.handle} />
          {/* <span className="user">
            <span className="name">{props.tweet.user.name}</span>
            <span className="handle">@{props.tweet.user.handle}</span>
          </span> */}
          <Timestamp timestamp={tweet.timestamp} />
          {/* <span className="timestamp">{tweet.timestamp}</span> */}
        </div>
          <Message message={tweet.message}/>
        {/* <p className="message">{tweet.message}</p> */}

        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment" data-testid="comment-icon"></i>
          <i className="fas fa-retweet" data-testid="retweet-icon"></i>
          <i className="far fa-heart" data-testid="heart-icon"></i>
          <i className="fas fa-share" data-testid="share-icon"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
};

export default Tweet;
