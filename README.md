## Technologies Used

- **Backend:** Laravel
- **Frontend:** React with Inertia.js
- **Styling:** Tailwind CSS with motion plugin
- **Authentication:** Laravel Middleware

## Installation

Follow these steps to get the project up and running locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/ZeBartosz/Be-Active-Football-Academy.git
   cd Be-Active-Football-Academy
   ```

2. Install dependencies:
   ```bash
   composer install
   npm install
   docker compose up -d --build
   ```

3. Copy the environment configuration file:
   ```bash
   cp .env.example .env
   ```

4. Configure your `.env` file:
   - Set up your database credentials.

5. Run the migrations:
   ```bash
   php artisan key:generate 
   php artisan migrate
   ```

6. Start the development servers:
   ```bash
   php artisan serve
   npm run dev
   ```
   or
    ```bash
   composer run dev
   ```
   

