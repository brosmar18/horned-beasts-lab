import React from "react";

class Header extends React.Component {
    constructor(props) {
        super(props);
        // Define the initial state of the component
        this.state = {
            backgroundColors: ["#2a2022", "#e2d197", "#849479", "#6c4d32"],
            currentBackgroundColor: "#2a2022",
            showMessage: true,
        };
    }

    handleClick = () => {
        // Update the background color when the header is clicked
        const { backgroundColors } = this.state;
        const index = backgroundColors.indexOf(this.state.currentBackgroundColor);
        const nextIndex = (index + 1) % backgroundColors.length;
        const nextBackgroundColor = backgroundColors[nextIndex];
        this.setState({
            currentBackgroundColor: nextBackgroundColor,
            showMessage: false,
        });
    };

    render() {
        const { currentBackgroundColor, showMessage } = this.state;
        // Define the style of the header based on the current background color
        const headerStyle = {
            backgroundColor: currentBackgroundColor,
            padding: "1rem",
            color: "#e2d197", // Change the color of the text in the header to be more visible
        };

        return (
            <>
                {/* Render the header with the defined style and add a click handler */}
                <header className="header" style={headerStyle} onClick={this.handleClick}>
                    <h1 className="header__title">Horned Beasts Lab</h1>
                    {/* Show a message prompting the user to click for a color change */}
                    {showMessage && (
                        <p className="header__message">Click here to see a color change</p>
                    )}
                </header>
            </>
        );
    }
}

export default Header;
