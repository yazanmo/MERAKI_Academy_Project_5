import React from "react";
import { Link } from "react-router-dom";
export default function AdminPage() {
    return (
        <div>
            <Link  to="/accept" >new request</Link>
            <Link to="/doctor">nutritionist</Link>
            <Link>users</Link>
        </div>
    )
}
