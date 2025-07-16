# Next-Auth-V5-Advanced-Guide 🚀  
*A powerful and production-ready authentication boilerplate for Next.js using NextAuth.js (OJs v5)*

---

## 📚 Table of Contents

- [About The Project](#about-the-project)
  - [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

---

## 🧠 About The Project

This repository offers a comprehensive and secure authentication system built with **Next.js** and **NextAuth.js (OJs v5)**. It's designed as a robust starter kit for developers looking to implement advanced authentication features in their applications.

The project integrates key security mechanisms and follows modern best practices, offering flexibility and scalability out of the box. It leverages **Shadcn UI** for clean styling and **Resend** for email-related workflows.

### ✨ Features

- 🔐 **Credential-based Authentication** (Email + Password)
- 🌐 **Social Logins** (Google, GitHub)
- 🛠️ **Forgot Password functionality**
- ✅ **Email Verification**
- 🔒 **Two-Factor Authentication (2FA)**
- 🧑‍💼 **Role Management** (Admin / Regular User)
- ♻️ **Reusable Components & Hooks**
  - Server Components
  - Client Components
  - API Routes
  - Server Actions
- 🔧 **Customizable Sessions & Callbacks**
- 🛡️ **Admin-only Content & Routes**
- ⚙️ **User Settings Page**
  - Update Email
  - Change Password
  - Enable/Disable 2FA
- 🔀 **Next.js Middleware**
- ⚡ **Server Actions (React 18)**

---

## 🛠️ Getting Started

### ✅ Prerequisites

Ensure you have the following installed:

- **Node.js** `v18.17.0` or newer
- **npm** or **yarn**
- **Your preferred database** (e.g., PostgreSQL, MongoDB)

---

### 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/m8drivendev/next-auth-v5-advanced-guide.git
````

2. **Navigate into the project directory**

```bash
cd next-auth-v5-advanced-guide
```

3. **Install dependencies**

```bash
npm install
# or
yarn install
```

4. **Set up your database**

> *Use your preferred database system (PostgreSQL, MongoDB, etc.). If using Prisma:*

```bash
npx prisma generate
npx prisma migrate dev --name init
```

---

### 🔐 Environment Variables

Create a `.env` file at the root of the project:

```env
# Required for NextAuth.js
AUTH_SECRET=your_auth_secret_here
AUTH_URL=http://localhost:3000 # Change to your production URL in deployment

# Social Auth Providers
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret

# Database URL (e.g., PostgreSQL/MongoDB)
DATABASE_URL=your_database_connection_string

# Resend (Email service provider)
RESEND_API_KEY=your_resend_api_key
```

> 💡 Make sure to replace all placeholder values with your actual credentials and secrets.

---

## ▶️ Usage

To start the development server:

```bash
npm run dev
# or
yarn dev
```

Visit your app at:
🔗 [http://localhost:3000](http://localhost:3000)

Explore the full authentication flow:

* Register with email/password
* Confirm your email
* Log in with credentials or social login
* Reset forgotten password
* Enable Two-Factor Authentication (2FA)
* Access admin-only pages
* Update account settings from the user dashboard

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. **Fork the repository**
2. **Create a feature branch**

```bash
git checkout -b feature/amazing-feature
```

3. **Commit your changes**

```bash
git commit -m "feat: add amazing feature"
```

4. **Push to the branch**

```bash
git push origin feature/amazing-feature
```

5. **Open a Pull Request**

Also, feel free to open issues for bug reports or feature suggestions.

> ⭐ Don’t forget to **star** this repo if you find it useful!

---

## 📄 License

Distributed under the **MIT License**.
See [`LICENSE`](./LICENSE) for more information.

---

## 📬 Contact

**M8DrivenDev**
🔗 Project Link: [https://github.com/m8drivendev/next-auth-v5-advanced-guide](https://github.com/m8drivendev/next-auth-v5-advanced-guide)
🐦 Twitter: [@M8DrivenDev](https://twitter.com/M8DrivenDev)

---

## 🙏 Acknowledgements

* 📹 **Code With Antonio** – [Tutorial Inspiration](https://www.youtube.com/@CodeWithAntonio)
* 🔧 **Next.js** – React framework for production
* 🔐 **NextAuth.js (OJs v5)** – Authentication for Next.js
* 🧩 **Shadcn UI** – UI component library
* 📧 **Resend** – Email sending service
* ⚙️ And any other libraries/tools used in this project

---
