import React from "react";

export default function Info() {
  return (
    <header>
      <img src="https://scontent-nrt1-1.xx.fbcdn.net/v/t1.6435-9/64704466_10162351294200497_4832434912101400576_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=vy4qa6azUvQAX_ji2vu&_nc_ht=scontent-nrt1-1.xx&oh=00_AfAQkotVy4qeRrmXPjGC_ocsVONRfvdZ7h1Iu0UrapILZw&oe=63806939" className="Info--profile-pic"></img>
      <div className="top-info">
        <h2 className="Info--name">Kevin Tanzyl</h2>
        <h5 className="Info--jobtitle">Frontend Developer</h5>
        <p className="Info--website">kebin20.io</p>
      </div>
      <div className="Info--button-row">
        <button className="Info--contact-btn email" onClick="window.location.href = 'ktanzyl@hotmail.com';">
          <i className="fa-solid fa-envelope"></i>Email
        </button>
        <button className="Info--contact-btn linkedin" onClick="window.location.href = 'linkedin.com';">
          <i className="fa-brands fa-linkedin"></i>LinkedIn
        </button>
      </div>
    </header>
  );
}
