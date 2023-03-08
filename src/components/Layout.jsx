import React from "react";
import { Link } from "react-router-dom";
import classes from "../styles/Layout.module.css";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className={classes.main}>
        <div className={classes.container}>{children}</div>
      </main>
      <div
        itemscope
        itemtype="http://schema.org/Person"
        className="fiverr-seller-widget"
        style={{ display: "inline-block" }}
      >
        <Link
          itemProp="url"
          href="https://www.fiverr.com/emrangipsy"
          rel="nofollow"
          target="_blank"
          style={{ display: "inline-block" }}
        >
          <div
            className="fiverr-seller-content"
            id="fiverr-seller-widget-content-6b281ed2-5313-4bbf-b683-56440cf4a9d0"
            itemProp="contentURL"
            style={{ display: "none" }}
          ></div>
          <div id="fiverr-widget-seller-data" style={{ display: "none" }}>
            <div itemProp="name">emrangipsy</div>
            <div itemScope itemType="http://schema.org/Organization">
              <span itemProp="name">Fiverr</span>
            </div>
            <div itemProp="jobtitle">Seller</div>
            <div itemProp="description">
              Hi! I am a web developer and do fullStack web development. I have
              developed my websites and hoisted them on my github account.
            </div>
          </div>
        </Link>
      </div>
      <script
        id="fiverr-seller-widget-script-6b281ed2-5313-4bbf-b683-56440cf4a9d0"
        src="https://widgets.fiverr.com/api/v1/seller/emrangipsy?widget_id=6b281ed2-5313-4bbf-b683-56440cf4a9d0"
        data-config='{"category_name":"Programming \u0026 Tech"}'
        async={true}
        defer={true}
      ></script>
    </>
  );
}
