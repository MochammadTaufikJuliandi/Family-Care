import React from "react";
import FeatureBox from "./FeatureBox";
import featureimage1 from './images/feature1.jpg';
import featureimage2 from './images/feature2.jpg';
import featureimage3 from './images/feature3.jpg';


function Feature() {
    return (
        <div id="features">
            <h1>Artikel Parenting</h1>
            <div className="a-container">
                <FeatureBox image={featureimage1} title='Artikel Terkait Ibu' />
                <FeatureBox image={featureimage3} title='Artikel Terkait Anak' />
                <FeatureBox image={featureimage2} title='Artikel Terkait Ayah' />

            </div>
        </div>
    )
}

export default Feature;