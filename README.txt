# TaskFlow — Team Task Manager

TaskFlow is a full-stack task and project management app built with React, Tailwind CSS, Node.js, Express, and MongoDB. It helps teams track work with projects, Kanban-style task boards, role-based access, and a clean dashboard.

Live demo: https://team-task-manager-rmcg.vercel.app/

## ✨ What’s included

- Secure user registration and login with JWT
- Admin and member roles with distinct permissions
- Project creation, team member management, and progress tracking
- Kanban task board with status updates and task assignment
- Dashboard insights for tasks, overdue work, and completion trends
- Responsive, modern UI powered by Tailwind CSS

## 🚀 Technologies

- Frontend: React, Vite, React Router DOM, Tailwind CSS, Axios
- Backend: Node.js, Express, MongoDB, Mongoose, JWT, bcryptjs
- Dev tooling: Concurrently, Nodemon

## 📦 Prerequisites

- Node.js v16 or newer
- npm v8 or newer
- MongoDB local or cloud instance

## ⚙️ Setup

1. Clone the repo:
   ```bash
   git clone <repository-url>
   cd Team-Task-Manager-
   ```

2. Install dependencies:
   ```bash
   npm install:all
   ```

3. Create `.env` in the project root:
   ```env
   PORT=5000
   NODE_ENV=development
   MONGO_URI=mongodb://127.0.0.1:27017/team_task_manager
   JWT_SECRET=your_secret_key_here_change_before_production
   ```

4. Start the app:
   ```bash
   npm run dev
   ```

Frontend: http://localhost:5173
Backend API: http://localhost:5000/api

## 📁 Project structure

- `client/` — React frontend
- `server/` — Express backend
- `server/models/` — MongoDB schemas
- `server/routes/` — API endpoints
- `server/controllers/` — request handling logic
- `server/middleware/` — auth and error middleware

## 🧩 API summary

### Auth
- `POST /api/auth/register` — register a new user
- `POST /api/auth/login` — login and receive a JWT

### Projects
- `GET /api/projects` — list projects
- `POST /api/projects` — create a project (admin only)
- `PUT /api/projects/:id/members` — update members (admin only)

### Tasks
- `GET /api/tasks/:projectId` — project task list
- `POST /api/tasks` — create a task
- `PUT /api/tasks/:id` — update a task

### Users
- `GET /api/users` — list all users

## 🧠 Roles

### Admin
- Create projects
- Add or remove project members
- View all projects and tasks
- Manage task status

### Member
- View assigned projects
- Create and update tasks in assigned projects
- Track progress on the dashboard

## ✅ Usage highlights

- Create the first account to become admin
- Admins can add team members to projects
- View live progress and overdue tasks in the dashboard
- Move cards through the Kanban board to update status

## 💡 Notes

- The first registered user is granted admin privileges
- JWT tokens are stored in localStorage for session persistence
- Passwords are hashed before storage and never returned by the API

## 🎯 Goal

TaskFlow is designed to simplify collaborative task planning for small teams while keeping the interface clean, responsive, and easy to use.

## Frontend
- Required field validation
- Email format validation
- Password strength requirements (min 6 characters)
- Name length validation (min 2 characters)

## Backend
- Email format validation with regex
- Required field validation for all endpoints
- Task status enum validation
- User existence validation
- Project access validation
- Member validation for projects

## 🌐 Error Handling

- **Network Errors** - User-friendly network failure messages
- **API Errors** - Descriptive error messages from server
- **Authentication Errors** - Clear messaging for auth failures
- **Validation Errors** - Field-specific validation error messages
- **Not Found** - 404 responses for missing resources
- **Unauthorized** - 401 responses for authentication failures

## 📱 Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚦 Project Status

### ✅ Completed
- Authentication system (register/login/logout)
- JWT token management
- Role-based access control
- Project CRUD operations
- Task management with Kanban board
- Task status updates
- Dashboard with statistics
- Form validation
- Error handling
- Loading/empty states
- Responsive design

### 🔄 Future Enhancements
- Drag-and-drop task reordering
- Task filtering and search
- Task comments and attachments
- Notifications system
- Email notifications
- Advanced reporting
- Dark mode
- Team collaboration features

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add improvement'`)
5. Push to the branch (`git push origin feature/improvement`)
6. Create a Pull Request

## 📞 Support

For issues, questions, or suggestions, please create an issue in the repository or contact the development team.

## 🎓 Learning Resources

- React Documentation: https://react.dev
- Express.js Guide: https://expressjs.com
- MongoDB Manual: https://docs.mongodb.com
- Tailwind CSS Docs: https://tailwindcss.com/docs
- JWT Introduction: https://jwt.io/introduction

---

Last Updated: April 2026
Version: 1.0.0
Maintained By: Development Team
