import React from "react";
import { Redirect } from "react-router-dom";

const MyPosts = () => {
    if (!sessionStorage.getItem("authtoken")) {
        return <Redirect to="/" />;
    }

    return (
        <section id="viewMyPosts">
            <div id="myForumPosts" className="posts">
                <article className="post">
                    <div className="col rank">
                        <span>1</span>
                    </div>
                    <div className="col thumbnail">
                        <a href="https://softuni.bg/">
                            <img src="https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAMDAAAAJGY2Mjg3Y2I4LWU1ZTktNDJlNC1iM2M4LTc2MDlhNmVhNThhNQ.png" />
                        </a>
                    </div>
                    <div className="post-content">
                        <div className="title">
                            <a href="https://softuni.bg/">SoftUni</a>
                        </div>
                        <div className="details">
                            <div className="info">
                                submitted 1 day ago by Kiril
                            </div>
                            <div className="controls">
                                <ul>
                                    <li className="action">
                                        <a href="#">Details</a>
                                    </li>
                                    <li className="action">
                                        <a href="#">Edit</a>
                                    </li>
                                    <li className="action">
                                        <a href="#">Delete</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default MyPosts;
