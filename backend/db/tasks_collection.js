/**
 * In-memory task collection - Temporary database
 */

// Sample tasks with different priorities and completion status
const tasks = [
  // Assignment tasks
  {
    id: 101,
    title: "Build backend with Express.js, routes, and middleware",
    description: "Set up the backend server using Express.js. Implement RESTful routes for task management (GET, POST, PUT, DELETE, PATCH). Configure essential middleware including express.json for parsing JSON payloads and cors for handling cross-origin requests. Add custom middleware for input validation to ensure all tasks are created and updated with clean, valid data. Connect the backend to an in-memory database represented by a JavaScript array. This task ensures the project has a reliable backend foundation that follows best practices.",
    completed: true,
    createdAt: new Date(),
    priority: "high",
  },
  {
    id: 102,
    title: "Build frontend with React and implement CRUD UI",
    description: "Develop the React frontend application. Create modular components including TaskForm for adding tasks, TaskList for displaying tasks, TaskItem for individual task details and actions, and TaskFilter for filtering tasks by status. Connect these components to the backend API via a dedicated services layer that handles fetch calls. Ensure state management with useState and side effects with useEffect are implemented correctly. This task delivers a complete UI that allows end-to-end task management with a clean structure.",
    completed: true,
    createdAt: new Date(),
    priority: "high",
  },
  {
    id: 103,
    title: "Implement carousel for task display",
    description: "Replace the default vertical list with a horizontal carousel to display tasks one at a time. Implement navigation arrows to move between tasks, and ensure the carousel supports infinite looping without noticeable jumps. Provide smooth transitions and keep the design simple and user-friendly. This feature is important to demonstrate the ability to implement custom UI logic without relying on third-party libraries, as required in the assignment instructions.",
    completed: true,
    createdAt: new Date(),
    priority: "medium",
  },
  {
    id: 104,
    title: "Polish design and add validation",
    description: "Improve the overall user interface design to look professional, inspired by Helfy’s clean and modern style. Apply consistent typography, spacing, and colors. Add hover effects and shadows for a polished look. Enhance validation on the frontend to prevent invalid inputs and ensure a smooth user experience. This step demonstrates attention to detail and the ability to deliver a project that is both functional and visually appealing.",
    completed: true,
    createdAt: new Date(),
    priority: "medium",
  },

  // Meta tasks
  {
    id: 201,
    title: "Submit assignment to Helfy",
    description: "Conduct a final review of the entire project to confirm that all requirements from the assignment document have been implemented. Run all manual tests to verify that CRUD operations, the carousel, filtering, and validation are working correctly. Ensure the code is organized into proper folders and files as specified in the project structure. Once confirmed, package the project, prepare a professional README with setup instructions, and submit it to Helfy. This step ensures the work is delivered in a polished and professional format.",
    completed: true,
    createdAt: new Date(),
    priority: "high",
  },
  {
    id: 202,
    title: "Wait for recruiter feedback",
    description: "After submitting the project, monitor communication channels for recruiter feedback. This includes frequently checking the email inbox, ensuring phone availability, and preparing mentally for potential next steps such as technical interviews or cultural fit discussions. This task reflects the waiting phase where patience is required, but anticipation is high. The outcome of this task will determine the transition from assignment completion to the recruitment decision phase.",
    completed: false,
    createdAt: new Date(),
    priority: "medium",
  },
  {
    id: 203,
    title: "Celebrate new job at Helfy!!",
    description: "If the assignment and interviews are successful, finalize the employment process with Helfy by signing the contract and completing any onboarding paperwork. Share the news with family, friends, and colleagues to mark this professional milestone. Plan a small celebration to recognize the effort invested in the recruitment process. This task represents the positive conclusion of the journey, transitioning from candidate to employee and beginning an exciting new chapter with the company.",
    completed: false,
    createdAt: new Date(),
    priority: "high",
  },
  {
    id: 204,
    title: "Bonus: Explore additional improvements",
    description: "Identify and implement optional improvements beyond the assignment requirements. Examples include adding unit tests for frontend services, implementing persistent storage instead of in-memory data, enhancing accessibility features, or refining animations and transitions. These are not required but demonstrate initiative, thoroughness, and a willingness to go the extra mile.",
    completed: false,
    createdAt: new Date(),
    priority: "low",
  },
];

module.exports = tasks;
