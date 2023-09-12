import React from 'react';
import '../styles/my-portfolio.css'

const MyPortfolio = () => {
    return (
        <div className="row">
            <div className="gallery col-sm-4">
                <a target="_blank" href="https://lilac-cms.netlify.app/">
                    <img src="glass2.jpeg" alt="Cinque Terre" width="400" height="200" />
                </a>
                <div className="desc">Restaurant Marketplace</div>
            </div>

            <div className="gallery col-sm-4">
                <a target="_blank" href="https://lilac-cms.netlify.app/">
                    <img src="glass2.jpeg" alt="Cinque Terre" width="400" height="200" />
                </a>
                <div className="desc">Restaurant CMS</div>
            </div>

            <div className="gallery col-sm-4">
                <a target="_blank" href="https://lilac-cms.netlify.app/">
                    <img src="MT1.jpeg" alt="Cinque Terre" width="400" height="200" />
                </a>
                <div className="desc">Restaurant Marketplace</div>
            </div>

        </div>
    );
};

export default MyPortfolio;