import React, { useState, useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { io } from "socket.io-client";
import "./conversation.css";

let socket;
const CONNECTION_PORT = "http://localhost:5000";
socket = io(CONNECTION_PORT);

const Conversation = (props) => {
  const { sender, receiver, firstName, lastName, img } = props;

  const userId = localStorage.getItem("user_id");
  const [result, setResult] = useState([]);

  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [messageList, setMessageList] = useState([]);

  const scrollRef = useRef();

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList([...messageList, data]);
    });
  });
  console.log("message List", messageList);
  useEffect(() => {});
  const connectToRoom = () => {
    socket.emit("join_room", room);
  };
  const sendMessage = () => {
    const messageContent = {
      room,
      message,
    };

    socket.emit("send_message", messageContent);
    setMessageList([...messageList, messageContent.message]);
    axios
      .post(`http://localhost:5000/conversation/message`, {
        message,
        id: userId,
        room,
      })
      .then((result) => {})
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    axios
      .post(`http://localhost:5000/conversation/con`, { sender, receiver })
      .then((result) => {
        setRoom(result.data.conversation.conversation[0].id);
        setResult(result.data.result.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [messageList]);
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messageList]);
  connectToRoom();
  return (
    <div>
      <div className="info-user">
        <img src={img} />
        <p>{firstName}</p>
        <p>{lastName}</p>
      </div>
      <div className="conversation">
        <div className="">
          {result &&
            result.map((val, i) => {
              if (val.id_sender == userId) {
                return (
                  <div className="width">
                    <div className={"message-right"} key={i}>
                      <p className="message-r" ref={scrollRef} key={i}>
                        {val.message}
                      </p>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className="width">
                    <div className={"message-left"} key={i}>
                      <p className="message-l" ref={scrollRef} key={i}>
                        {val.message}
                      </p>
                    </div>
                  </div>
                );
              }
              // }
            })}
        </div>
      </div>
      <div>
        <input
          style={{ margin: "auto" }}
          type="text"
          placeholder="write you message ..."
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button onClick={sendMessage}>send</button>
      </div>
    </div>
  );
};

export default Conversation;
