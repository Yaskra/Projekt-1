import React from "react";
import './FooterStyles.css';

export const FooterCustom = () => {
    return(
        <div className="stopka">
            <div className="stopka1">
                <div><h1>Nasze media:</h1><p>Instagram</p><p>Facebook</p></div>
                <p>&copy; {new Date().getFullYear()} Portfolio. Bartosz Kołodziejczyk</p>
            </div>
            <div className="stopka2">
                <div><h1>Portfolio.</h1></div>
                <p><a href="mailto: kolodzbartek@gmail.com" rel="noreferrer" target="_blank">Skontaktuj sie ze mna.</a></p>
            </div>
        </div>
    );
};
