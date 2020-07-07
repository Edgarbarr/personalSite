import React from "react";

function Home(){
    return (
        <div className="container-fluid blk">
            <div className="container">
                <div className="row padding-top fadein">
                <div className="col-12 col-xs-12 col-sm-10 col-md-8 col-lg-4 col-xl-4 margin-auto"><img className="profile-pic margin-10" src="linkedinsmall.png" alt="handsome programmer"/></div>
                    <div className="col-12 col-xs-12 col-sm-12 col-md-10 col-lg-8 col-xl-8 margin-auto padding-10">
                        <h3 className="font-white">About</h3>
                        <p className="font-white text-justify">I am a U.S. Army veteran, with a secret clearance, transitioning into software developing. What do soldiers and software developers have in common? Actually, more than you think! They both need to adapt to the problems ahead and both need to be team oriented. I bring some of the great life lessons I have learned in my prior career and apply them to my new passion, software developing. Software developing is my passion because I love being presented with and overcoming new challenges. Let's discuss how we can work together to deliver the best product possible. </p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Home;