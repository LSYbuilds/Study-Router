import React from "react";

/*
 리액트 컴포넌트에스 이미지 소스 불러오는 법
 1. src : 각각의 이미지를 
    import  :한 다음 이미지 태그의 src 속성에 적용
    예 ) import gogo from "./img/aaa.jpg" (상대경로)
        <img src={gogo} />
*/
const Members = ({ members }) => {
    const path = process.env.PUBLIC_URL;
    const imgStyle = {
        width: 100,
        height: 100,
    };
    const nameStyle = {
        fontSize: 18 + "px",
    };
    const list = members.map((item, index, arr) => {
        return (
            <div key={index} className="col-6 col-md-4 col-lg-3">
                <img src={`${path}/${item.photo}`} alt={item.name} className="img-thumbnail" style={imgStyle}></img>
                <br />
                <h6 style={nameStyle}>{item.name}</h6>
                <br />
                <br />
            </div>
        );
    });
    return (
        <div className="card card-body">
            <h2>Members</h2>
            <div className="container">
                <div className="row">{list}</div>
            </div>
        </div>
    );
};

export default Members;
