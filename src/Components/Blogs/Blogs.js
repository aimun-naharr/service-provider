import React from 'react';

const Blogs = () => {
    return (
        <div>
           <div className="row container mx-auto mt-5">
               <div className="col-md-4">
                   <h5>Difference between authorization and authentication?</h5>
                   <div>
                       <p>Authentication is something to know or verify who someone is. On the other hand, authorization is to access the data, files of specific user.</p>
                   </div>
               </div>
               <div className="col-md-4">
                   <h5>Why are you using firebase? What other options do you have to implement authentication?</h5>
                   <div>
                       <p>Google firebase has many features to explore.Google firebase can turn a client-side-app into a serverless app in no time. It decreases the need to write backend code from scratch. It is less technical and beginner friend. That's why I'm using firebase. Besides that, we have cards, retina scans, voice recognition, and fingerprints to implement authentication. </p>
                   </div>
               </div>
               <div className="col-md-4">
                   <h5>What other services does firebase provide other than authentication?</h5>
                   <div>
                       <p>Cloud Firestore, Cloud Functions, Hosting, Cloud Storage, Google Analytics, Predictions, Cloud Messaging.</p>
                   </div>
               </div>
           </div>
        </div>
    );
};

export default Blogs;