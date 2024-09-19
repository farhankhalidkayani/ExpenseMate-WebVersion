

# ExpenseMate-WebVersion

**ExpenseMate-WebVersion** is a web application designed to help users manage their expenses. Built with Node.js, Express, and MySQL, this application allows users to perform CRUD (Create, Read, Update, Delete) operations on their expense records.

## Features

- View total number of expenses.
- List all expenses with details.
- Add new expenses.
- Edit existing expenses.
- Delete expenses.
- Error handling with informative messages.
- User-friendly interface with EJS templates.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web application framework for Node.js.
- **MySQL**: Relational database management system.
- **EJS**: Embedded JavaScript templating.
- **method-override**: Middleware to override HTTP methods.
- **CSS**: For styling the application.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/ExpenseMate-WebVersion.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd ExpenseMate-WebVersion
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Set up MySQL:**

   - Ensure MySQL is installed and running.
   - Create a database named `test` or modify the connection settings in `app.js` to match your database configuration.
   - Create a table named `expenses` with the following SQL command:

     ```sql
     CREATE TABLE expenses (
       id INT AUTO_INCREMENT PRIMARY KEY,
       amount DECIMAL(10, 2) NOT NULL,
       category VARCHAR(255) NOT NULL,
       date DATE NOT NULL,
       description TEXT
     );
     ```

5. **Start the application:**

   ```bash
   npm start
   ```

   The application will be accessible at `http://localhost:3000`.

## Routes

- **GET `/`**: Displays the count of total expenses.
- **GET `/expenses`**: Lists all expenses.
- **GET `/expenses/new`**: Displays a form to add a new expense.
- **POST `/expenses`**: Submits a new expense to the database.
- **GET `/expenses/:id/edit`**: Displays a form to edit an existing expense.
- **PATCH `/expenses/:id`**: Updates an existing expense in the database.
- **DELETE `/expenses/:id`**: Deletes an expense from the database.
- **GET `/*`**: Displays a 404 error page for unknown routes.

## Error Handling

The application handles database errors and displays user-friendly messages using the `dberr.ejs` template. A 404 error page is shown for invalid routes.

## Contributing

Contributions are welcome! If you find any issues or have suggestions, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

