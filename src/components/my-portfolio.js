import React from 'react';
import '../styles/my-portfolio.css'

const MyPortfolio = () => {
    return (
        <div className="row justify-content-center">
            <div className="gallery col-sm-4">
                <a target="_blank" href="https://lilac-cms.netlify.app/" rel={"noreferrer"}>
                    <img src="glass2.jpeg" alt="Cinque Terre" width="400" height="200" />
                </a>
                <div className="desc">Restaurant Marketplace</div>
            </div>

            <div className="gallery col-sm-4">
                <a target="_blank" href="https://lilac-cms.netlify.app/" rel={"noreferrer"}>
                    <img src="glass2.jpeg" alt="Cinque Terre" width="400" height="200" />
                </a>
                <div className="desc">Restaurant CMS</div>
            </div>

            <div className="gallery col-sm-4">
                <a target="_blank" href="https://lilac-cms.netlify.app/" rel={"noreferrer"}>
                    <img src="MT1.jpeg" alt="Cinque Terre" width="400" height="200" />
                </a>
                <div className="desc">Machine Transliteration</div>
            </div>

        </div>
    );
};

export default MyPortfolio;