import "./single.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import ListTable from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
        <Sidebar />
        <div className="singleContainer">
            <Navbar />
            <div className="top">
                <div className="left">
                    <div className="editButton">Edit</div>
                    <div className="title">Information</div>
                    <div className="item">
                        <img
                          src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                          alt=""
                          className="itemImg" 
                        />
                        <div className="details">
                            <h1 className="itemTitle">Jon Doe</h1>
                            <div className="detailItem">
                                <div className="itemKey">Email</div>
                                <div className="itemValue">janedoe@gmail.com</div>
                            </div>
                        </div>
                        <div className="detailItem">
                            <div className="itemKey">Phone</div>
                            <div className="itemValue">+1 2345 67 89</div>
                        </div>
                        <div className="detailItem">
                            <div className="itemKey">Address:</div>
                            <div className="itemValue">Elton St. 234 Garden Yd. NewYork</div>
                        </div>
                        <div className="detailItem">
                            <div className="itemKey">Country:</div>
                            <div className="itemValue">USA</div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <Chart aspect={3/ 1}title="User Spending (Last 6 Month)" />
                </div>
            </div>
            <div className="bottom">
                <h1 className="title">Last Transaction</h1>
                <ListTable />
            </div>
        </div>
    </div>
  )
}

export default Single