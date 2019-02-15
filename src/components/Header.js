import React from "react";

const CardChannel = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>
                Телепрограмма на {day + ".0" + month + "." + year + " года"}{" "}
            </h1>
        </div>
    );
};

export default CardChannel;
