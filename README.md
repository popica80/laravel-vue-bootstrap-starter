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

### VirtualHost Setup
I am using Windows 10 and XAMPP with these lines inside xampp\apache\conf\extra\httpd-vhosts.conf
```
NameVirtualHost *:80

<VirtualHost *:80>
    DocumentRoot "C:/www/laravel-vue-bootstrap-starter/api/public"
    ServerName api.test
    <Directory "C:/www/cms/laravel-vue-bootstrap-starter/public">
       AllowOverride All
       Options Indexes FollowSymLinks
       Require local
    </Directory>
</VirtualHost>
```
Edit the HOST file as administrator and add this line
```
127.0.0.1 api.test
```
Restart Apache and you should be able to acccess http://api.test which is the URL for backend API
