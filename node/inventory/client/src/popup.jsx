import React from "react";


function popupShow(props, phrase, option = "normal") {
    const popup = document.querySelector('.popup')
    props.setPopupText(phrase)

    if (option === 'normal') {
        popup.style.backgroundColor = "#58D68D";
    }
    else if (option === 'error') {
        popup.style.backgroundColor = "#E74C3CF0";
    }

    setTimeout(()=>{
        popup.style.opacity = '1';
    }, 250)

    setTimeout(()=>{
        popup.style.opacity = '0';
    }, 3000)
}

function Popup(props) {
    return(
        <div className="popup">
            {props.popupText}
        </div>
    )
}

export default Popup;
export { popupShow };