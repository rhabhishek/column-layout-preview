import React from 'react';
import {mockContent} from "./content";
import {Card} from "./Components/Card";
import {AppStyle} from "./Components/styles/AppStyle";

function App() {
    return (
        <AppStyle>
            {mockContent.map((item, index) =>
                <Card item={item} key={index}/>
            )
            }
        </AppStyle>
    );
}

export default App;
