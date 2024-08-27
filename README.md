# Todoist App

A web-based task management application inspired by Todoist, built using React, TypeScript, Firebase, Material UI, and styled-components. This app allows users to manage tasks across multiple projects, prioritize tasks, and ensures that each user's tasks are securely stored and accessible only by them.

# Table of Contents

- Features
- Technologies Used
- Getting Started
- Project Structure
- Firebase Configuration
- Usage
- Responsive Design
- Sorting and Priority
- Contributing
- License

# Features

- User Authentication: Secure login and signup using Firebase Authentication.
- Task Management: Create, update, and delete tasks within different projects.
- Task Prioritization: Sort tasks based on priority, with '1' being the highest and '4' the lowest.
- Project Management: Store project names locally using localStorage under the current user's UID.
- Responsive Design: A responsive layout that adapts to different screen sizes, including professional styling for the login page.
- Dynamic Task Storage: Tasks are stored in different folders within Firebase based on whether they belong to a specific project, 'today,' or 'upcoming.'
- Dropdown Menus: A clean, non-intrusive dropdown menu for options like Logout, integrated into the FeaturesContainer component.

# Technologies Used

- React: For building the user interface.
- TypeScript: Ensuring type safety and robustness.
- Firebase: For authentication, storage, and data management.
- Material UI: For UI components and styled-components integration.
- Styled-components: For styling React components with CSS-in-JS.

# Usage

- Adding Tasks: Navigate to the desired project or folder ('today' or 'upcoming') and use the Add Task feature.
- Task Prioritization: Assign priorities to tasks, which will be sorted based on priority automatically.
- Project Management: Manage your projects, and tasks will be stored accordingly in Firebase Storage.
- Responsive Design: The app is fully responsive and adapts to various screen sizes.

# Responsive Design

The app's layout is designed to be responsive, with specific elements hidden or displayed based on screen size. The login page is professionally styled and responsive.

# Sorting and Priority

Tasks can be sorted based on their priority levels, ensuring that high-priority tasks are displayed first. Priority levels range from '1' (highest) to '4' (lowest).

# Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

# License

This project is licensed under the MIT License.
