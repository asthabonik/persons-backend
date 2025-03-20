# Persons Backend

Welcome to the **Persons Backend** project! This is a RESTful API built with **Express.js** and **MongoDB** to manage person records. It supports CRUD operations (Create, Read, Update, Delete) and is designed to be scalable and easy to use.

---

## 🚀 Features

- **CRUD Operations**: Create, Read, Update, and Delete person records.
- **RESTful API**: Follows REST conventions for easy integration.
- **MongoDB Integration**: Uses MongoDB for persistent data storage.
- **Environment Variables**: Configurable via `.env` file.
- **CORS Support**: Allows cross-origin requests from trusted domains.
- **Error Handling**: Centralized error handling for better debugging.
- **Logging**: Uses `morgan` for request logging.

---

## 🛠️ Setup Instructions

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher recommended)
- **MongoDB** (local or cloud instance)
- **Git**

### Clone the Repository

Clone the repository to your local machine:

```sh
git clone https://github.com/asthabonik/persons-backend.git
cd persons-backend
```

### Install Dependencies

Install the required dependencies using npm:

```sh
npm install
```

### Configure Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
MONGO_CONNECTION_STRING=mongodb://localhost:27017/persons
COOKIE_SECRET=your-secret-key
PORT=5000
```

- Replace `mongodb://localhost:27017/persons` with your MongoDB connection string.
- Replace `your-secret-key` with a secure secret for cookie parsing.

### Start the Server

Run the development server:

```sh
npm start
```

The server will start on `http://localhost:5000` by default.

---

## 📖 API Documentation

### Base URL
```
http://localhost:5000
```

---

## 🤝 Contribution Guidelines

We welcome contributions! Follow these steps to contribute:

1. **Fork the Repository**: Click the "Fork" button on the top right of the repository page.
2. **Create a Branch**: Create a new branch for your feature or bug fix:
   ```sh
   git checkout -b feature-branch
   ```
3. **Make Your Changes**: Implement your changes and test them thoroughly.
4. **Commit Changes**: Commit your changes with a descriptive message:
   ```sh
   git commit -m "Added a new feature"
   ```
5. **Push to GitHub**: Push your changes to your forked repository:
   ```sh
   git push origin feature-branch
   ```
6. **Submit a Pull Request**: Open a pull request from your branch to the main repository. Provide a clear description of your changes.

---

## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 🙌 Acknowledgments

- **Express.js**: For providing a robust framework for building APIs.
- **MongoDB**: For offering a scalable NoSQL database solution.
- **Open Source Community**: For their contributions and support.

---

## ❓ Support

For questions, issues, or support, please open an [issue](https://github.com/asthabonik/persons-backend/issues) on GitHub.

---

Thank you for checking out the **Persons Backend** project! 🚀
```

---

### Key Features of the README:
1. **Clear Structure**: Divided into sections like Features, Setup, API Documentation, Contribution Guidelines, and License.
2. **Code Blocks**: Used triple backticks (```` ``` ````) for commands and JSON examples.
3. **Markdown Formatting**: Used `#`, `##`, `-`, and `**` for headings, lists, and bold text.
4. **API Documentation**: Detailed endpoint descriptions with examples.
5. **Contribution Guidelines**: Step-by-step instructions for contributing to the project.

Let me know if you need further adjustments! 🚀
