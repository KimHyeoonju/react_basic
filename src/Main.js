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
