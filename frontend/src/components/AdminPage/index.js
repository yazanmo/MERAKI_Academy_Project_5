import React from "react";
import { Link } from "react-router-dom";
import "./adminPage.css"
export default function AdminPage() {
    return (
        <div>
            <Link  to="/accept"  className="adminLink" >new request</Link>
            <Link to="/doctor" className="adminLink" >nutritionist</Link>
            <Link className="adminLink">users</Link>
        </div>
    )
}
