import React from "react";

function Home(){
    return (
        <div className="container-fluid blk vh100">
            <div className="container">
                <div className="row justify-content-between padding-top fadein">
                    <div className="col-6">
                        <h3 className="font-white">About</h3>
                        <p className="font-white">I am a U.S. Army veteran, with a secret clearance, transitioning into software developing. What do soldiers and software developers have in common? Actually, more than you think! They both need to adapt to the problems ahead and both need to be team oriented. I bring some of the great life lessons I have learned in my prior career and apply them to my new passion, software developing. Software developing is my passion because I love being presented with and overcoming new challenges. Let's discuss how we can work together to deliver the best product possible. </p>
                    </div>
                    <div className="col-4"><img className="profile-pic" src="linkedinsmall.jpg"/></div>
                </div>
            </div>
        </div>
    )
}
export default Home;