# Task Manager Application


This project is a simple task management application built using React, TypeScript, and Redux Toolkit. The application features a responsive UI with functionalities similar to Trello or Jira, allowing users to manage their tasks effectively.

## Features

Responsive design for different devices.
Task list view similar to Trello or Jira.
Form to add new tasks.

Filters for task status (All, Completed, Pending).

Search functionality to find tasks by title.

Task Management Add, edit, and delete tasks.
Each task includes a title, description, due date, and status (Completed, Pending).
State Management

Utilizes React's state and Redux Toolkit for state management.
Efficient and optimized state management.
API Integration

Simulates Mock API calls to fetch, create, update, and delete tasks using RTK Query.
UI Components

Reusable/atomic components for form inputs, task items, and buttons.
Modular and maintainable components.
Styling

Styled using Tailwind CSS.

## Installation

1. Clone the repository:
  ```bash
git clone https://github.com/yourusername/task-manager.git
cd task-manager

```
2. Install dependencies:
  ```bash
   npm install
```
3. Install Redux Toolkit and React-Redux:
  ```bash
   npm install @reduxjs/toolkit react-redux
   ```
4. Install Tailwind CSS

   Tailwind CSS can be installed via npm or yarn. Follow the steps below:
```bash
npm install -D tailwindcss
npx tailwindcss init
```
5. Configure Tailwind CSS
 ```bash
    Update tailwind.config.js with the following content:
   /** @type {import('tailwindcss').Config} */
   module.exports = {
   content: [
    "./src/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
     extend: {},
    },
    plugins: [],
    }
 ```

## Running the Application
  1. Start the development server:
     ```bash
     npm start
     ```

  3.   Open http://localhost:3000 to view it in the browser.

      

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
