import React from "react";
import {StyledCard} from "./styles/StyledCard";
import {StyledButton} from "./styles/StyledButton";
import {ContentType} from "../content";

export const Card = ({item: {title, icon, body, bgColor}}: { item: ContentType}) => {

    return <StyledCard color={bgColor}>
        <img alt="" src={icon}/>
        <h1>{title}</h1>
        <p>{body}</p>
        <StyledButton color={bgColor}>Learn More</StyledButton>
    </StyledCard>;
}