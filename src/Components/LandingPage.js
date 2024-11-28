import React from 'react';

import '../styles/landingpage.css'; // Import the CSS file

function LandingPage() {
  return (
    <div className="landing-container">
       
      <h1 className="landing-title">COSMETIC CITY</h1>
      <p className="landing-subtitle">Best Deals, Best Products!</p>

      <button
        className="landing-button"
        onClick={() => alert("Learn More Clicked!")}
      >
        Learn More
      </button>

      <div className="image-container">
        <img
          src="https://ddvql06zg3s2o.cloudfront.net/Assets/res/imgs/creative/20wk22/k_kr_lipsticks.jpg"
          alt="Image 1"
          
        />
        <img
          src="https://www.lifevisioncosmetics.com/public/Blogs/HFJ1BBsY2RXXB1N85BD5oA2tM0CiLkmPkmih4Y6G.jpg"
          alt="Image 2"
          
        />
        <img
          src="https://product-images-cdn.liketoknow.it/PmV5DC3KSmq7lxUrn.PE6L98gm6ht9KqWVupymPbhbPU31FiVT2PIyg.vqKPwTv0tLMBkXFuiSMKgBjPwOM6WlPaUeNT72M8qblOsvbxgEXmYcbxkHYv1TRVDvnf9.5B5iXdk1zj6eKDBjQqx8luiE8xCFQndlnCX0kN5w4Z6mh0xipEfDK9WhwMewY-?v=0&auto=format&fm=webp&w=450&q=80&dpr=2.625"
          alt="Image 3"
          
        />
        <img
          src="https://i.pinimg.com/736x/04/2c/f9/042cf900dc5a7a6c00f46ff65e6e2ed5.jpg"
          alt="Image 4"
          
        />
      </div>
    </div>
  );
}

export default LandingPage;
