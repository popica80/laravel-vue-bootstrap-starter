# Laravel Vue Bootstrap starter
> starter project using Laravel as backend API, VueJs with Router, Store, and Bootstrap for styling

## Laravel Setup
```
cd api
composer install
cp .env.example .env
php artisan key:generate
npm install
```
Edit the .env file with the required data (APP_URL, DB_*...), create the database then
```
php artisan migrate
```
## Vue Setup
in the root directory
```
npm install
npm run serve
```
Go to http://localhost:8080 and see your default starter page



