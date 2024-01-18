# 🌍 React Country Selector with Phone Mask

This React TypeScript project, created using **Vite** and styled with **Tailwind CSS**, empowers users to choose their country, determining the country code and phone mask accordingly.

## Table of Contents

- [Data Used](#data-used)
- [Components](#components)
- [States](#states)
- [Context API](#context-api)
- [Bonus Feature](#bonus-feature)
- [Distributable File Size](#distributable-file-size)
- [Tech Stack](#tech-stack)
- [Usage](#usage)
- [Installation](#installation)
- [Contributing](#contributing)
- [Feedback](#feedback)
- [Contact](#contact)

## 🌐 Data Used

The project utilizes two JSON files for data:
1. **Given JSON File**: Contains country information.
2. **Additional JSON File**: Provides exact phone masks for each country.

## 🚀 Components

The project consists of two main components:

1. **Dropdown.tsx**: This component handles the country selection dropdown. The code is separated to avoid clutter in the main App.tsx file.
2. **DropRow.tsx**: A row component within the dropdown menu, used for each country. Separated as a component due to repeating code and improved readability.

## 🎨 States

The following states are maintained:

- **Current Country Selected**: Determines the phone mask and country code. The current country is crucial as it influences both the phone mask and the displayed country code.

- **Visibility Flag for Dropdown Menu**: Controls the visibility of the dropdown menu. The visibility flag is essential because the component responsible for its visibility is called in the App component. However, its visibility is determined from within the DropRow.tsx component. When a user clicks on a row, it triggers the menu to disappear. Changing the visibility flag prompts the menu component to re-render, which is inside the App.tsx component.

- **State for Phone Number**: As mentioned in the Bonus section, a state for the phone number is also required. This state is crucial for real-time formatting, as whenever the number changes, it triggers a re-render of the component with the formatted number.

## 🌟 Context API

As mentioned above, both the states are used in App.jsx, but their values are determined when a row is clicked. This implies that these states are not directly useful for the Dropdown.tsx component. Passing them to DropRow.tsx through Dropdown.tsx would be redundant.

Therefore, the solution involves using Context API to make the states and setState handlers available to both **DropRow.tsx** and **App.tsx** without redundancy. By employing Context API, these shared states and their corresponding setState handlers can be accessed by the DropRow.tsx and App.tsx components, eliminating the need for passing them through intermediary components.


## 🚀 Bonus Feature

The project includes a bonus feature:

- **Auto Formatting of Phone Number**: This part required to auto format the number entered according to the mask for the phone number of that country. Inside the Utils folder, I created a function formatNumber, that would read the number entered, and format it according to the mask.
For this, we require a state for current phone number inside the App component, because we want that whenever the number changes, we read it, and re-render the component with the formatted number.

## 📦 Distributable File Size

The distributable file **dist**, located in the root directory, is approximately 200-300KB, meeting the specified requirements.

## 🔧 Tech Stack

- **Vite**: Used as the build tool to create a fast and optimized development environment.
- **Tailwind CSS**: Utilized for styling instead of vanilla CSS, providing a utility-first approach to styling.

## 🚀 Usage

1. Clone the repository: `git clone https://github.com/your-username/react-country-selector.git`
2. Install dependencies: `npm install`
3. Run the project: `npm start`

## 🌈 Installation

For a fresh installation:

1. Set up a new React TypeScript project with Vite.
2. Copy the contents of this project, ensuring to maintain the directory structure.
3. Install dependencies: `npm install`

## 🤝 Contributing

Feel free to contribute to this project. Fork the repository, make your changes, and submit a pull request.

## 💌 Feedback

We appreciate your feedback! Let us know how you liked the project and if there's anything we can improve.

## 📬 Contact

For inquiries, contact [Your Name] at [Your Email Address].

Enjoy using the Country Selector with Phone Mask! 🚀
