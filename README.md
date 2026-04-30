
# Workday_dash API

A powerful **Payroll & Employee Management SaaS** backend built with NestJS, PostgreSQL, and Prisma.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| NestJS | Backend framework |
| PostgreSQL | Database |
| Prisma | ORM |
| JWT | Authentication |
| Passport.js | Auth strategies |
| bcrypt | Password hashing |
| Nodemailer | Email (OTP) |
| cache-manager | OTP caching |
| Stripe | Payment processing |
| Socket.IO | Real time chat & notifications |
| ngrok | Local webhook testing |

---

## Project Structure

```
src/
├── common/
│   ├── decorators/
│   │   ├── current-user.decorator.ts
│   │   └── public.decorator.ts
│   ├── guards/
│   │   └── jwt-auth.guard.ts
│   ├── filters/
│   │   └── http-exception.filter.ts
│   └── interceptors/
│       └── response.interceptor.ts
├── prisma/
│   ├── prisma.service.ts
│   └── prisma.module.ts
├── modules/
│   ├── auth/
│   ├── users/
│   ├── departments/
│   ├── employees/
│   ├── payments/
│   ├── chat/
│   ├── meetings/
│   └── notifications/
├── app.module.ts
└── main.ts
```

---

## Prerequisites

- Node.js v18+
- PostgreSQL
- Redis (optional)
- Stripe account
- Gmail account (for OTP)
- ngrok (for local webhook testing)

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/brooks-bridge-api.git
cd brooks-bridge-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables





### 4. Set up the database

```bash
# Create database in PostgreSQL
psql -U postgres
CREATE DATABASE brooksbridge;
CREATE USER myuser WITH ENCRYPTED PASSWORD 'mypassword';
GRANT ALL PRIVILEGES ON DATABASE brooksbridge TO myuser;
\q

# Run migrations
npx prisma migrate dev
npx prisma generate
```

### 5. Start the server

```bash
# Development
npm run start:dev

# Production
npm run build
npm run start:prod
```

Server runs on `http://localhost:9000/api`
Swaggwer api docs on `http://localhost:9000/api/docs#/`
---



## API Endpoints

### Auth
```
POST /api/auth/register/owner    → Register owner (sends OTP)
POST /api/auth/verify-otp        → Verify OTP
POST /api/auth/register/company  → Complete company registration
POST /api/auth/resend-otp        → Resend OTP
POST /api/auth/login             → Login
```

### Users
```
GET    /api/users/me             → Get my profile
PATCH  /api/users/me             → Update my profile
PATCH  /api/users/me/password    → Change password
DELETE /api/users/me             → Delete account
```

### Departments
```
POST   /api/departments          → Create department
GET    /api/departments          → Get all departments
GET    /api/departments/:id      → Get one department
PATCH  /api/departments/:id      → Update department
DELETE /api/departments/:id      → Delete department
```

### Employees
```
POST   /api/employees                  → Create employee
GET    /api/employees                  → Get all employees
GET    /api/employees/:id              → Get one employee
PATCH  /api/employees/:id              → Update employee
PATCH  /api/employees/:id/email        → Request email update (sends OTP)
POST   /api/employees/:id/verify-email → Verify email OTP
DELETE /api/employees/:id              → Delete employee
```

### Payments
```
POST   /api/payments/salary              → Pay employee salary
GET    /api/payments/history             → Get all payment history
GET    /api/payments/history/:employeeId → Get employee payment history
POST   /api/payments/webhook             → Stripe webhook (public)
```

### Chat
```
POST   /api/chat/channels                      → Create channel
GET    /api/chat/channels                      → Get all channels
GET    /api/chat/channels/:channelId/messages  → Get channel messages
```

### Meetings
```
POST   /api/meetings       → Create meeting
GET    /api/meetings       → Get all meetings
GET    /api/meetings/:id   → Get one meeting
PATCH  /api/meetings/:id   → Update meeting
DELETE /api/meetings/:id   → Delete meeting
```

### Notifications
```
GET    /api/notifications           → Get my notifications
PATCH  /api/notifications/:id/read  → Mark one as read
PATCH  /api/notifications/read-all  → Mark all as read
```

---

## Authentication

All routes are protected by JWT except:
- `POST /api/auth/register/owner`
- `POST /api/auth/verify-otp`
- `POST /api/auth/resend-otp`
- `POST /api/auth/login`
- `POST /api/payments/webhook`

Include JWT token in all protected requests:
```
Authorization: Bearer <your_jwt_token>
```

---

## Registration Flow

```
Step 1 → POST /auth/register/owner
         { name, phoneNumber, email, password }
         ↓ OTP sent to email

Step 2 → POST /auth/verify-otp
         { email, otp }
         ↓ returns tempToken (1 hour expiry)

Step 3 → POST /auth/register/company
         Authorization: Bearer <tempToken>
         { companyName, companyPhone, companyEmail }
         ↓ returns fullToken (7 days expiry)
```

---

## WebSocket Events

### Chat Namespace: `/chat`

| Client Emits | Server Emits | Description |
|---|---|---|
| `authenticate` | `authenticated` | Authenticate user |
| `joinChannel` | `joinedChannel` | Join a chat channel |
| `leaveChannel` | `leftChannel` | Leave a chat channel |
| `sendMessage` | `newMessage` | Send a message |

### Notifications Namespace: `/notifications`

| Client Emits | Server Emits | Description |
|---|---|---|
| `authenticate` | `authenticated` | Authenticate user |
| — | `notification` | Receive real time notification |

---

## Payment Flow

```
1. Company triggers salary payment
         ↓
2. Payroll record created (PENDING)
         ↓
3. Stripe PaymentIntent created (PROCESSING)
         ↓
4. Stripe processes payment
         ↓
5. Webhook received
         ↓
6. Payroll status updated (PAID or FAILED)
         ↓
7. Employee notified in real time
```

---

## Notification Triggers

| Event | Type | Recipients |
|---|---|---|
| Salary paid | PAYROLL | Employee |
| Salary failed | PAYROLL | Employee |
| New meeting | MEETING | All company users |
| New employee | EMPLOYEE | All company users |

---

## Response Format

### Success
```json
{
  "success": true,
  "data": {}
}
```

### Error
```json
{
  "success": false,
  "statusCode": 400,
  "message": "Error message here",
  "path": "/api/endpoint",
  "timestamp": "2026-01-01T00:00:00.000Z"
}
```

---

## Environment Variables Reference

| Variable | Description | Required |
|---|---|---|
| `DATABASE_URL` | PostgreSQL connection string | ✅ |
| `JWT_SECRET` | Secret key for JWT signing | ✅ |
| `JWT_EXPIRES_IN` | JWT expiry duration | ✅ |
| `EMAIL_USER` | Gmail address for sending OTP | ✅ |
| `EMAIL_PASS` | Gmail app password | ✅ |
| `EMAIL_FROM` | Email sender name and address | ✅ |
| `STRIPE_SECRET_KEY` | Stripe secret key | ✅ |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook signing secret | ✅ |
| `PORT` | Server port (default: 3000) | ❌ |

---

## Scripts

```bash
npm run start:dev    # Start in watch mode
npm run start:prod   # Start in production
npm run build        # Build the project
npm run lint         # Lint the code
npm run test         # Run unit tests
npm run test:e2e     # Run e2e tests
```

---

## License

MIT
