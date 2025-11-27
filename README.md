🚀 Task Management System — Backend API
Backend built with Node.js, Express, and PostgreSQL featuring authentication, RBAC, task management, and complete activity logging.

📌 Features
🔐 Authentication & Authorization
- User signup & login (JWT-based)
- Secure password hashing using bcrypt
- Role-based access control (Admin / User)
- Protected routes for authenticated users only

📋 Task Management
- Create, read, update, delete tasks
- Task fields: title, description, priority, status
- Assign tasks to users
- Admin-only update/delete privileges
- Fully modular controller/service architecture

📝 Activity Logging (Audit Trail)
- Automatically logs every API action
- Records user ID, route, method, IP, timestamp
- Admin-only logs viewer endpoint

🏗 Architecture
- routes/
- controllers/
- services/
- middlewares/
- utils/
- config/

Clean separation of concerns
PostgreSQL connection pooling via pg
