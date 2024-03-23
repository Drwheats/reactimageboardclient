import {FiMinusSquare, FiPlusSquare, FiXSquare} from "react-icons/fi";
import {useState} from "react";
let server = "https://api.fuggo.lol/"

// let server = "http://localhost:4000/";
export default function Post({
                                 postName,
                                 postTopic,
                                 postBody,
                                 postNumber,
                                 postNumberReplies,
                                 timePosted,
                                 replies,
                                 hasImage

                             }) {
    const [fullRes, setFullRes] = useState(false);

    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }
    function formatDate() {
        let currentTime = new Date(timePosted)
        timePosted = String(currentTime)
        timePosted = timePosted.split(' ').slice(0, 5).join(' ')
    }

    function deletePost() {

        let json_body = JSON.stringify(
            {postName: postBody, postNumber: postNumber, isReply: false})
        const scoreJSON = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: json_body
        }

        console.log(scoreJSON)
        fetch(server + "delete", scoreJSON)
            .then(response => response.json());
        document.getElementById("reply" + postNumber).style.display = "none";
    }

    function hidePost() {
        let plusSign = document.createElement('span')
        plusSign.innerHTML = "+";
        plusSign.id = "plusSign" + document.getElementById("entirePost" + postNumber);
        plusSign.postNumber = document.getElementById("entirePost" + postNumber);
        plusSign.setAttribute("onClick", "this.postNumber.style.display = 'block'; this.style.display = 'none'");
        plusSign.className = "plusGuy"
        document.getElementById("entirePost" + postNumber).style.opacity = "0";
        delay(600).then(() => {
            document.getElementById("entirePost" + postNumber).style.display = "none";
            // document.getElementById("reply"+postNumber).parentElement.append(plusSign)
            document.getElementById("entirePost" + postNumber).parentNode.insertBefore(plusSign, document.getElementById("entirePost" + postNumber).nextSibling);
            document.getElementById("entirePost" + postNumber).style.opacity = "100";

        })

    }

    function trimReplies() {
        return replies.sort(() => .5 - Math.random()).slice(0, 3);

    }


    function showFullRes() {
        if (!fullRes) {

            document.getElementById("reply" + postNumber).style.maxWidth = "100%"
            document.getElementById("reply" + postNumber).style.maxHeight = "100%"
            document.getElementById("postImage" + postNumber).style.maxHeight = "100%"
            document.getElementById("postImage" + postNumber).style.maxWidth = "100%"

            setFullRes(true);
        } else {
            document.getElementById("reply" + postNumber).style.maxWidth = "500px"
            document.getElementById("reply" + postNumber).style.maxHeight = "400px"
            document.getElementById("postImage" + postNumber).style.maxHeight = "100px"
            document.getElementById("postImage" + postNumber).style.maxWidth = "100px"


            setFullRes(false)
        }
    }

    formatDate();
    return (

    <div key={postNumber} className="theEntirePost" id={"entirePost"+postNumber}><div className="postHolder" id={"reply" + postNumber}>
            <h5 className="postHeader"> #{postNumber} {postName} <span className="trashHolder">{timePosted} </span>
                <span className="minusIconHolder"><FiMinusSquare size={16} onClick={hidePost}/></span> <span
                    className="plusIconHolder"><FiPlusSquare onClick={showFullRes} size={16}/> </span> <span
                    className="xIconHolder"><FiXSquare size={16} onClick={deletePost}/>  </span></h5>


            {/*<div href={"/post/" + postNumber}>*/}


            <div className="postBody">
                            <span className="postTopic" id={"reply" + postNumber} ><a
                                href={"/post/" + postNumber}>{postTopic} </a>
            </span>
                <span className="postContent">
                    <img alt="" onClick={showFullRes}
                         id={"postImage" + postNumber} className="postImage"
                        src={server + "fuggosimageworld/" + postNumber + ".png"}/>

                    <a href={"/post/" + postNumber} className="postText">{postBody}</a>
                </span>
                </div>
            <a href={"/post/" + postNumber} className="postFooter"
            ><h5 className="replies">{postNumberReplies} replies <span className="replyNow">View Thread</span></h5></a>
        </div>
    <div className="floatingReplies">{

        trimReplies().map((r) => {
            return <a key={Math.floor(Math.random() * postNumber)} className="floatingReply"
                      href={"/post/" + postNumber + "#reply" + r.postNumber}>{
                <img alt="" onClick={showFullRes} className="enemyPostImage" id={"enemyPostImage" + r.postNumber}
                src={server + "fuggosimageworld/" + r.postNumber + ".png"}/>
            }{r.replyName + ": " + r.replyBody + " "}</a>
        })
    }
    </div>     </div>
    )
}