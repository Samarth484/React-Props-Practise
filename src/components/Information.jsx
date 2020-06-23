import React from "react";

function Information(props) {
    return (
        <div>
            <p class="info">{props.tel}</p>
            <p class="info">{props.email}</p>
        </div>

    );
}
export default Information;