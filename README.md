# 5. 컴포넌트 반복

## 5.1. 자바스크립트 배열의 <span style="color:red;">map()</span> 메서드

- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map

## 5.2. 데이터 배열을 컴포넌트 배열로 변환하기

```js
import React from "react";

const Main = () => {
  const usernames = ["홍길동", "임꺽정", "알라딘", "지니", "미키마우스"];
  // const usernameList = usernames.map((username, index) => {
  //   return <li key={index}>{username}</li>;
  // });

  return (
    <div>
      <ul>
        {usernames.map((username, index) => {
          return <li key={index}>{username}</li>;
        })}
      </ul>
    </div>
  );
};

export default Main;
```
