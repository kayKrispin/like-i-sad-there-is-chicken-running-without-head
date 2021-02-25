import React from "react";
import "./PropertyCatalog.scss"






function PropertyCatalog() {

    return (


                <li className="li-items">
                    <div className="li-item-name">
                        <i className="bi bi-chevron-down"> </i>
                        <span className="name-wrapper">Property Catalog</span>
                    </div>
                    <ul className="drop-down-ul">
                        <li className="drop-down-items">Tabs & Accordions</li>
                        <li className="drop-down-items">Typography</li>
                        <li className="drop-down-items">Forms</li>
                        <li className="drop-down-items">Buttons</li>
                        <li className="drop-down-items">Grid</li>
                        <li className="drop-down-items">Icons</li>
                        <li className="drop-down-items">Tables</li>
                        <li className="drop-down-items">Progress bars</li>
                    </ul>

                </li>
    )
}

export default PropertyCatalog;
