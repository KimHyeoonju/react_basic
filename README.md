테스트

# 4. 함수 컴포넌트

- 리액트의 이벤트 시스템를 사용할 때 주의사항
  :: 카멜케이스 작성 - (ex) HTML의 onclick 는 onClick 로 작성
  :: 함수 형태의 값을 전달
  :: DOM 요소에만 이벤트를 설정할 수 있다.

- 이벤트의 종류
  :: 모두 다 사용하지는 않지만 확인만 일단 해두자
  :: onClick
  :: onChange

## 4.1 함수 컴포넌트로 이벤트 핸들링 구현해보기

```js
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
      ></input>
    </div>
  );
};

export default Main;
```
