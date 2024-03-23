import Post from "./Post";


export default function PostMap({posters, displayType}) {
    if (posters.postName === '') {
        posters.postName = "anonymous";
    }

    if (posters.length === 0) {

    }


    return (
        <div className={displayType ? "cards" : "floatingCards"} id="cards">

            {posters.map(s => {
                if (s.timePosted === "2004") {
                    return <Post key={s.postNumber} postName={s.postName} postTopic={s.postTopic} postBody={s.postBody}
                                 postNumber={s.postNumber} postVisibility={s.postVisibility}
                                 hasImage={s.hasImage}
                                 postNumberReplies={s.postReplies.length} timePosted={s.timePosted}
                                 replies={s.postReplies}/>
                }
                if (s.postVisibility) {
                    return <Post key={s.postNumber} postName={s.postName} postTopic={s.postTopic} postBody={s.postBody}
                                 postNumber={s.postNumber} postVisibility={s.postVisibility}
                                 postNumberReplies={s.postReplies.length} timePosted={s.timePosted}
                                 replies={s.postReplies}/>
                }

            return []})}
        </div>

    )
}