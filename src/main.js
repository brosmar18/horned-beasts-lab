import React from "react";
import HornedBeast from "./HornedBeast";
import image_data from "./data/data.json";

class Main extends React.Component {
    render() {
        return (
            <>
                <main className="main">
                    {image_data.map((beast, index) => (
                        <HornedBeast
                            key={index}
                            title={beast.title}
                            image_url={beast.image_url}
                            description={beast.description}
                        />
                    ))}
                </main>
            </>
        );
    }
}

export default Main;
