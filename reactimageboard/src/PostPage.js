import {useEffect, useReducer} from "react";
import {useState} from "react";
import EnemyPost from "./EnemyPost";
import {ImArrowLeft} from "react-icons/im"

let server = "https://api.fuggo.lol/"

// let server = "http://localhost:4000/";
export default function PostPage() {
    const [fullRes, setFullRes] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState({
        postName: "",
        postTopic: "",
        postBody: "",
        postNumber: 0,
        postVisibility: true,
        postReplies: [],
        numberInlineReplies: [],
        timePosted: "",
        hasImage: false
    });

    // const [isRendered, setIsRendered] = useState(false);
    // terrible hacks to make text in posts render.
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
    window.onload = function(){
        setTimeout(loadAfterTime, 5000);
    };

    function loadAfterTime() {
        forceUpdate();
        document.getElementById('mainTextSubmit').text.value += '';
    }

    // const [inlineReplies, setInlineReplies] = useState();
    const [clientReplyBody, setClientReplyBody] = useState("no text");
    const [clientReplyName, setClientReplyName] = useState("anonymous");
    let pageLoc = window.location.pathname.split('/')[2];
    let json_body = JSON.stringify({pageLoc})
    const [image, setImage] = useState({preview: '', data: ''});
    const [status, setStatus] = useState('')
    let timePosted = data.timePosted;
    // function wait(ms) {
    //     let start = new Date().getTime();
    //     let end = start;
    //     while (end < start + ms) {
    //         end = new Date().getTime();
    //     }
    // }

    const scoreJSON = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: json_body
    }
    // ALl things REPLIES go here:
    const changeInputNameValue = (event) => {
        setClientReplyName(event.target.value);
    }
    const changeInputPostBody = (event) => {
        setClientReplyBody(event.target.value);
    }

    function submitReply() {
        if (clientReplyName === "") {
            setClientReplyName("anonymous");
        }
        let json_body = JSON.stringify(
            {pageLoc: pageLoc, replyName: clientReplyName, replyBody: clientReplyBody})
        const scoreJSON = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: json_body
        }
        fetch(server + "submitReply", scoreJSON)
            .then(response => response.json());
        setIsLoading(true);
        handleSubmit();
        setIsLoading(true);

    }

    // Fetching the data JSON variable from the server.
    useEffect(() => {
            if (isLoading) {
                fetch(server + "pageInfo", scoreJSON)
                    .then(response => response.json())
                    .then((
                        result) => {
                        setData(result);
                        setIsLoading(false);
                    })
            }
            mapReplies();
        insertInlineReplies();
        insertTopReplies();
        }
    )
    window.onload = mapReplies();
    window.onload = insertInlineReplies();
    window.onload = insertTopReplies();
    function mapReplies() {
        data.numberInlineReplies = []

        data.postReplies.map(s => {
                let holder = [];
                let str = "";
                s.nestedReplies = []
                let len = s.replyBody.length
                // this finds all the replies inside of data.postReplies[i].replyBody
                for (let i = 0; i < len; i++) {
                    str = "";
                    if (s.replyBody[i] === '@') {
                        // if (s.replyBody[i]) {
                        for (let j = i + 1; j < len; j++) {
                            if (/^\d/.test(s.replyBody[j])) {
                                str += s.replyBody[j];
                                continue;
                            } else {
                                if (str === "") {
                                    break;
                                }
                            }

                            if (str !== "") {
                                holder.push(str);
                                str = "";
                                break;
                            }

                        }
                    }
                    if (str !== "") {
                        str = Number(str)
                        holder.push(str)
                    }
                }
                for (let i = 0; i < holder.length; i++) {
                    if (Number(holder[i]) === Number(data.postNumber)) {
                        data.numberInlineReplies.push(s.postNumber)
                    }

                }

                for (let i = 0; i < data.postReplies.length; i++) {
                    if (data.postReplies[i].nestedReplies)
                        for (let j = 0; j < holder.length; j++) {
                            if (Number(holder[j]) === Number(data.postReplies[i].postNumber) && !data.postReplies[i].nestedReplies.includes(s.postNumber)) {
                                data.postReplies[i].nestedReplies.push(s.postNumber)
                            }

                        }
                }

                return 0;

            }
        )
    }

    function insertInlineReplies() {
        for (let k = 0; k < data.postReplies.length; k++) {
            let greenStr = ""
            let greenText = document.createElement('p');

            let createdElement = document.createElement('span');
            let whiteText = document.createElement('a', "epic");
            let links = document.createElement('a');
            let enemyPostBody = data.postReplies[k].replyBody + " \n";
            let postStr = "";
            // let lineBreak = document.createElement('br')
            for (let i = 0; i < enemyPostBody.length; i++) {
                let greenText = document.createElement('p')
                if (enemyPostBody[i] === '\n') {
                    whiteText.append(document.createElement('br'))
                }
                if (enemyPostBody[i] === '>') {
                    let greenStr = "";
                    for (let j = i; j < enemyPostBody.length; j++) {
                        if (enemyPostBody[j] !== '\n') {
                            greenStr += enemyPostBody[j];
                        } else {
                            greenText.setAttribute("className", "greenText");
                            greenText.className = "greenText";
                            greenText.textValue = greenStr;
                            greenText.innerHTML = greenStr;
                            whiteText.insertAdjacentElement("beforeend", greenText);
                            greenStr = ""
                            greenText = document.createElement('p');
                            i = j;
                            break;
                        }
                    }
                }

                if (enemyPostBody[i] === '@') {
                    postStr += enemyPostBody[i];
                    for (let j = i + 1; j < enemyPostBody.length; j++) {
                        if (/^\d/.test(enemyPostBody[j])) {
                            postStr += enemyPostBody[j];
                        } else if (postStr === '@') {
                            break;
                        } else {
                            let postLink = document.createElement('a')
                            postLink.className = "inlineReply";
                            postLink.textValue = postStr;
                            postLink.content = postStr;

                            postLink.id = "inlineReply" + data.postReplies[k].postNumber;

                            postLink.innerHTML = postStr;
                            postLink.setAttribute('href', '#reply' + postStr.slice(1));
                            try {
                                postLink.setAttribute('textfloat', document.getElementById("reply" + postStr.slice(1)).innerText);
                            } catch (e) {
                            }
                            whiteText.append(postLink)
                            postStr = "";
                            postLink = ""
                            i = j - 1;
                            break;
                        }

                    }
                } else {
                    whiteText.append(enemyPostBody[i])
                }

            }
            greenText.append(greenStr)
            whiteText.append(greenText)
            try {
                document.getElementById("enemyPostText" + data.postReplies[k].postNumber).innerHTML = '';
                createdElement.append(whiteText)
                createdElement.append(links)
                document.getElementById("enemyPostText" + data.postReplies[k].postNumber).append(createdElement)
            } catch (e) {
            }
        }
    }

    function insertTopReplies() {
        let classes = document.getElementsByClassName("inlineReply2");
        // console.log("starting : ")
        for (let i = 0; i < classes.length; i++) {
            // console.log(classes[i])
            // console.log(data.postReplies)
            classes[i].setAttribute("textfloat", document.getElementById("reply" + classes[i].innerText.slice(2)).innerText)
        }
        classes = document.getElementsByClassName("inlineReply3");
        for (let i = classes.length; i > 0; i--) {
            // console.log(classes[i])
            try {
                classes[i].setAttribute("textfloat", document.getElementById("reply" + classes[i].innerText.slice(2)).innerText)
            } catch (e) {}
        }
    }



    function formatDate() {
        let currentTime = new Date(timePosted)
        timePosted = String(currentTime)
        timePosted = timePosted.split(' ').slice(0, 5).join(' ')    }

    formatDate();

    // useEffect(() => {
    //         setIsLoading(true);
    //         setIsLoading(false);
    //
    //     }, [isLoading])

    function clickReply() {
        document.getElementById("mainTextSubmit").value += "@" + data.postNumber + ">"
    }

    const handleFileChange = (e) => {
        const img = {
            preview: URL.createObjectURL(e.target.files[0]),
            data: e.target.files[0],
        }
        setImage(img)
    }

    const handleSubmit = async () => {
        let formData = new FormData()
        formData.append('file', image.data)
            const response = await fetch(server + 'api/images', {

                method: 'POST',
            body: formData,
        })
        if (response) setStatus(response.statusText)
    }

    function showFullRes() {
        if (!fullRes) {
            document.getElementById("originalPostImage" + pageLoc).style.maxHeight = "100%"
            document.getElementById("originalPostImage" + pageLoc).style.maxWidth = "100%"
            setFullRes(true);
        } else {
            document.getElementById("originalPostImage" + pageLoc).style.maxHeight = "100px"
            document.getElementById("originalPostImage" + pageLoc).style.maxWidth = "100px"
            setFullRes(false)
        }
    }

    return (
        <div className="postPage">

            <h3 className="originalPosterTopic">"{data.postTopic}"
            </h3>
            <div className="originalPoster" id={"reply" + data.postNumber}>
                <ul className="inlineReply">{data.numberInlineReplies.map((r) => {
                    let lol = "hey"
                    try {
                        lol = document.getElementById("reply" + r).innerText
                    } catch (e) {
                    }
                    return <a className="inlineReply3" href={"/post/" + data.postNumber + "#reply" + r} textfloat={lol}
                              key={r}>>>{r}  </a>
                })} </ul>


                <div className="originalPosterHeader" id="originalPosterHeader">
                    <h3><a className="originalPosterNumber"
                           onClick={clickReply}
                           href="#mainTextSubmit">#{data.postNumber}</a></h3>
                    <h3 className="originalPosterName">name: {data.postName}</h3>

                    <h3 className="timeStampOP">
                        {timePosted}</h3>
                </div>
                <br/>
                <br/>
                <br/>
                <div className="originalPosterBody">
                    <img alt="" onClick={showFullRes}
                         className="originalPostImage"
                         id={"originalPostImage" + pageLoc}
                         src={server + "fuggosimageworld/" + data.postNumber + ".png"}/>
                    <pre className="originalPosterText">
                        {data.postBody.split("\n").map((t, key) => {
                            return <p key={key}>{t}</p>;
                        })}</pre>
                </div>

            </div>
            <div className="enemyPosters">
                {data.postReplies.map(s => {
                    return <EnemyPost key={s.postNumber} enemyPostName={s.replyName} enemyPostBody={s.replyBody}
                                      enemyPostNumber={s.postNumber} motherPost={data.postNumber}
                                      nestedReplies={s.nestedReplies} timePosted={s.postTime}/>
                })}
            </div>
            <div className="submissionFormReply">

                <div className="submissionForm2">
                    <label>Name</label><input onChange={changeInputNameValue} type="text" className="nameTextSubmit"/>

                    <br/>
                    <textarea onChange={changeInputPostBody} id="mainTextSubmit" className="mainTextSubmit"/>
                    <br/>
                    <button onClick={submitReply}>REPLY</button>
                    <span className="fileUploadHolder">
                {image.preview && <img src={image.preview} alt="" width='100' height='100'/>}
                        <hr></hr>
      <form onSubmit={handleSubmit}>
        <input type='file' name='file' onChange={handleFileChange}></input>

      </form>
                    </span>

                </div>

            </div>

            <div className="footerPostPage"><a href="/b"> <ImArrowLeft/> </a></div>

        </div>

    )
}