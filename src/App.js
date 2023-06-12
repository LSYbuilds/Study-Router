import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Members from "./pages/Members";
import SongList from "./pages/SongList";
import Songbird from "./pages/Songbird";
import SongDetail from "./pages/SongDetail";
import Player from "./pages/Player";
import PlayerIndex from "./pages/PlayerIndex";

function App() {
    const [members] = useState([
        // 화면의 내용을 리랜더링 하는 변수 :state
        // state 변수 만드는 방법
        // const [변수, set변수] = useState([])
        // 멤버 정보
        { name: "Maggie Adams", photo: "photos/Mag.png" },
        { name: "Sammie Purcell", photo: "photos/Sam.png" },
        { name: "Tim Purcell", photo: "photos/Tim.png" },
        { name: "Scott King", photo: "photos/King.png" },
        { name: "Johnny Pike", photo: "photos/JPike.jpg" },
        { name: "Toby Ruckert", photo: "photos/Toby.jpg" },
    ]);
    // 노래정보
    const [songs] = useState([
        { id: 1, title: "HELP!", musician: "-BOA", youtube_link: "D3IDK_R1LTg" },
        { id: 2, title: "Can't hurry love", musician: "The supremes", youtube_link: "EJDPhjQft04" },
        { id: 3, title: "Landslide", musician: "Dixie chicks", youtube_link: "V2N7gYom9-A" },
        { id: 4, title: "Can't let go", musician: "Linda ronstadt", youtube_link: "P-EpGKXmoe4" },
        { id: 5, title: "Doctor my eyes", musician: "Jackson Browne", youtube_link: "7JlFKS_1oZk" },
        { id: 6, title: "We gotta get you a woman", musician: "Todd Rundgren", youtube_link: "EyUjbBViAGE" },
        { id: 7, title: "Hip to my heart", musician: "Band Perry", youtube_link: "vpLCFnD9LFo" },
        { id: 8, title: "Rolling in the deep", musician: "Adele", youtube_link: "EvK8pDK6IQU" },
    ]);
    return (
        <>
            {/* Header 컴포넌트는 항상 출력 되어야함 */}
            <Header />
            <div className="container mt-4">
                <Routes>
                    {/* <Route 의 path="개발자가 설정한 URI를 작성(주소)" */}
                    {/* <Route 의 element={보여줄 컴포넌트 작성 <Home />} */}
                    {/* <Route 의 paht="/" 의 의미는 제일 처음 보여주는 페이지, 루트를 의미한다 */}
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    {/* <Route path="" element={<컴포넌트 속성명 = "값" />} */}
                    <Route path="/about" element={<About title="인디벤드" />} />
                    <Route path="/member" element={<Members members={members} />} />
                    {/* nested 라우트 */}
                    <Route path="/songlist" element={<SongList songs={songs} />}>
                        {/* 중첩된 라우트 첫페이지 index */}
                        <Route index element={<PlayerIndex />} />
                        {/* 웹브라우저 주소 : /songs/1 URL parameter 리턴 { id:1 } */}
                        <Route path=":id" element={<Player/>} />
                    </Route>
                    <Route path="/songbird" element={<Songbird />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
