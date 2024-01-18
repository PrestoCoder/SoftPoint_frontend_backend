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

1. **Current Country Selected**: Determines the phone mask and country code.
2. **Visibility Flag for Dropdown Menu**: Controls the visibility of the dropdown menu.

## 🌟 Context API

Context API is employed to make the states and setState handlers available to both **DropRow.tsx** and **App.tsx** without redundancy.

## 🚀 Bonus Feature

The project includes a bonus feature:

- **Auto Formatting of Phone Number**: Implemented using a function (`formatNumber`) inside the `Utils` folder. It reads the entered number and formats it according to the selected country's phone mask.

## 📦 Distributable File Size

The distributable file, located in the root directory, is approximately 200-300KB, meeting the specified requirements.

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
