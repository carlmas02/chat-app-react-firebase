import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import axios from "axios";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const [text,setText] = useState();

  const ref = useRef();

  const decryptedText = async () =>{

    const resp = await axios.post('http://vaxraxd.tech/decrypt-data',
       {
        key:message.key,
        data : message.data
       })
      
    let vals = (resp.data);
    setText(vals);
      
  }

  const decryptImg = async () =>{
    console.log(message.img)
    let newdata = new FormData();
    newdata.append('file', URL.createObjectURL(message.img), message.id.toString());

    const data = await axios.post('http://vaxraxd.tech/decrypt-data',
       newdata);

    
      
    console.log(data);
  
      
  }

  // decryptedText();

  // useEffect(() => {
  //   // decryptedText();
  //   ref.current?.scrollIntoView({ behavior: "smooth" });
  // }, [message]);

  useEffect(()=>{
    if(message) {
      decryptedText();
    }
    // let vals = (data.data);
    // setText("hi");

  },[])


  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>{ text && text.message}</p>
        {/* <p>{ message.text}</p> */}

        {message.img && <img src={message.img} alt="" />}
      </div>

      {/* <div onClick={decryptedText} >hi</div> */}
          
    </div>
  );
};

export default Message;
