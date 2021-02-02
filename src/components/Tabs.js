import React from "react";

const Tabs = props => {
    const {idx, name, isSelected, toggleTab} = props;

    return <div onClick={() => toggleTab(idx)}
                style={isSelected ? {backgroundColor: "black", color:"white", display:"inline-blocks", width:100 } : {}
                }>
        <h3>{name}</h3>
    </div>
}
export default Tabs;