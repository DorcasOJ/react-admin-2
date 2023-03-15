import "./navbar.css";
import { DarkModeOutlined, FullscreenExit, LanguageOutlined, ListOutlined, NotificationsNoneOutlined, ChatBubbleOutline, SearchOutlined } from "@mui/icons-material";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

 
const Navbar = () => {
  const {dispatch} = useContext(DarkModeContext);
  return (
    
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="search..."/>
          <SearchOutlined />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlined
             className="icon" 
             onClick={() => dispatch({type: "TOGGLE"})}
            />
          </div>
          <div className="item">
            <FullscreenExit classname="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlined classname="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutline classname="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlined classname="icon" />
          </div>
          <div className="item">
          <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar