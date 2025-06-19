# My Portfolio

This is a modern portfolio built using React, Vite, TailwindCSS, and React Three Fiber. The portfolio showcases my work, provides information about me, and allows visitors to get in touch.

## Project Structure

```
my-portfolio
├── public
│   └── project1.png          # Project thumbnail or background image
├── src
│   ├── components
│   │   ├── Hero3D.jsx        # 3D scene component
│   │   ├── WorkSection.jsx    # Displays a list of projects
│   │   ├── AboutSection.jsx    # Information about me
│   │   └── ContactSection.jsx  # Contact information
│   ├── App.jsx                # Main application component
│   ├── main.jsx               # Entry point of the application
│   └── index.css              # Global styles
├── package.json               # Project metadata and dependencies
├── tailwind.config.js         # TailwindCSS configuration
├── postcss.config.js          # PostCSS configuration
├── README.md                  # Project documentation
└── instructions.md            # Setup instructions
```

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool and development server.
- **TailwindCSS**: A utility-first CSS framework for styling.
- **React Three Fiber**: A React renderer for Three.js, enabling 3D graphics in React applications.

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/my-portfolio.git
   cd my-portfolio
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` to view the portfolio.

## Features

- Interactive 3D hero section.
- Showcase of projects with links to GitHub and live demos.
- About section detailing my background and interests.
- Contact section with a mailto link for inquiries.

## License

This project is open-source and available under the [MIT License](LICENSE).