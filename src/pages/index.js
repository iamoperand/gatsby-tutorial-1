import React from "react";
import Link from "gatsby-link";

export default () =>
        <div style={{ color: 'tomato' }}>
            <p>My Gatsby App</p>
            <div>Heya World!</div>
            <br />
            <img src="https://source.unsplash.com/random/400x200" alt="" />
            <br />
            <div>
                <Link to="/page-2/">Link</Link>
            </div>
        </div>
