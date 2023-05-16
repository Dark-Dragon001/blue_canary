import "./Posts.css";



const likeClickHandler = () => {
    console.log("Post liked!");
};

const dislikeClickHandler =()=> {
    console.log("Post disliked!");
};

const shareClickHandler = () => {
    console.log("Post shared!");
};

const Posts = () => {
    return(
        <div className="postsMainContainer">
            <div className="postUserDetails">
                <span>
                    <img
                        src="https://i.pinimg.com/736x/1f/51/03/1f51038bd5af319dd132a3fab9ee3b57.jpg"
                        alt="Poster Profile"/>
                    <p>Post Username</p>
                </span>
            </div>
            <div className="postsArea">
                This is the post area.
            </div>
            <div className="postsDownBar">
                <span onClick={likeClickHandler}>
                    <img
                        src="https://static.thenounproject.com/png/1012954-200.png"
                        alt="Like"/>
                </span>
                <span onClick={dislikeClickHandler}>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/6902/6902047.png"
                        alt="Dislike"/>
                </span>
                <span onClick={shareClickHandler}>
                    <img
                        src="https://cdn.icon-icons.com/icons2/2248/PNG/512/share_circle_icon_136223.png"
                        alt="Share"/>
                </span>
            </div>
            <div className="commentsSection">
                <p>This is comments section.</p>
            </div>
        </div>

    );

};

export default Posts;