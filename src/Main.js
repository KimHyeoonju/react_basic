import React, { useState } from "react";

const Main = () => {
  // username 상태
  // const [현재상태, 상태업데이트함수] = useState(초기값)
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const onChangeMessage = event => {
    setUsername(event.target.value);
    console.log(event.target.value);
  };

  const onChangeUsername = event => {
    setUsername(event.target.value);
    console.log(event.target.value);
  };

  const onClick = () => {
    alert(`${username}:${message}`);
  };

  const onKeyPress = event => {
    if (event.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChangeUsername}
      />
      <br />
      {/* 내용을 변경할 때는 onChange */}
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={message}
        onChange={onChangeMessage}
        onKey
      />
      <br />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default Main;
