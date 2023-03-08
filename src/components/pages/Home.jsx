import React from "react";
import Videos from "../Videos";

function Home() {
  return (
    <div>
      <Videos />
      <div
        itemscope
        itemtype="http://schema.org/Person"
        className="fiverr-seller-widget"
        style={{ display: "inline-block" }}
      >
        <link
          itemprop="url"
          href="https://www.fiverr.com/emrangipsy"
          rel="nofollow"
          target="_blank"
          style={{ display: "inline-block" }}
        >
          <div
            class="fiverr-seller-content"
            id="fiverr-seller-widget-content-6b281ed2-5313-4bbf-b683-56440cf4a9d0"
            itemprop="contentURL"
            style={{ display: "none" }}
          ></div>
          <div id="fiverr-widget-seller-data" style={{ display: "none" }}>
            <div itemprop="name">emrangipsy</div>
            <div itemscope itemtype="http://schema.org/Organization">
              <span itemprop="name">Fiverr</span>
            </div>
            <div itemprop="jobtitle">Seller</div>
            <div itemprop="description">
              Hi! I am a web developer and do fullStack web development. I have
              developed my websites and hoisted them on my github account.
            </div>
          </div>
        </link>
      </div>

      <script
        id="fiverr-seller-widget-script-6b281ed2-5313-4bbf-b683-56440cf4a9d0"
        src="https://widgets.fiverr.com/api/v1/seller/emrangipsy?widget_id=6b281ed2-5313-4bbf-b683-56440cf4a9d0"
        data-config='{"category_name":"Programming \u0026 Tech"}'
        async="true"
        defer="true"
      ></script>
    </div>
  );
}

export default Home;
