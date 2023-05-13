# url-Shortner

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A simple URL shortener built with Next.js.
<!-- https://github.com/rishabhjainfinal/url-Shortner/blob/main/public/demo.png -->

## Project Screenshot
![Project Screenshot](/public/demo.png)

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction
The Next.js URL Shortener is a web application that allows you to shorten long URLs into concise, easy-to-share links. It is built with Next.js, a popular React framework, and provides a user-friendly interface to generate short URLs on the fly. This project aims to simplify the process of sharing URLs while keeping track of click statistics.

## Features
- Shorten long URLs into compact links
- Customizable URL slugs
- user only visibility  
- Responsive and intuitive user interface

## Demo
Check out the live demo of the Next.js URL Shortener: [Demo Link](http://short.printerhelp.space/)


## Installation
Follow these steps to set up the Next.js URL Shortener on your local machine:

1. Clone the repository:
   ```shell
   $ git clone https://github.com/your-username/nextjs-url-shortener.git
   $ cd nextjs-url-shortener
   ```

2. Install the dependencies and run in dev env:
   ```
   $ npm install
   $ npm run dev
   ```



## Usage
1. Open the URL Shortener application in your web browser.
2. Enter a long URL that you want to shorten.
3. Optionally, provide a custom URL slug to personalize the shortened link.
4. Click the "Shorten" button to generate a short URL.
5. Copy the shortened URL and share it with others.
6. Access the shortened URL to be redirected to the original long URL.



## Contributing
Contributions to the URL Shortener project are welcome! If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and ensure they are tested and functioning properly.
4. Commit your changes with a descriptive message.
5. Push your branch to your forked repository.
6. Open a pull request, explaining your changes and their purpose.

## License
This project is licensed under the [MIT License](https://chat.openai.com/c/LICENSE).




---




# under Dev 

### Url Shortner
<!-- make authentication if u r even eligible for it
/[slug]    :   # Path: api/[slug].js  -> redirect the user from database if not exist redirect user to error page
/url       :   # Path: api/url.js     -> method-post -> create a new url , data={slug, url} 
                                       > method-get -> get the url from database , on query get that much of recent entry
/url/:slug : # Path: api/url/[slug].js   -> method-get -> get the url from database
/url/:slug : # Path: api/url/[slug].js   -> method-get -> get the url from database
                                         -> method-put -> update the url from database , data={slug, url}
                                         -> method-put -> update the url from database , data={slug, url}
                                         -> method-delete -> delete the url from database , on query get that much of recent entry
                                         -> method-delete -> delete the url from database , on query get that much of recent entry -->


### To-do
 - [x] connet user login to the database
 - [x] rename admin folder to auth folder
 - [x] middleware for the authentication api and the url api only

 - [x] add notification passer add in _app file rr 
 - [0] ui for the login and home pages 
 - [ ] add useSesssion(required :true, redirect: '/login') to the pages 
 - [ ] logina and signup page place in direct to the home page if user is logged in
 - [ ] update the redirect path after that 
 <!-- -[ ] make component for the table with serverside rendering and pagination -->
 <!-- -[ ] mask the /login and /register page to the admin/pages -->


### fixes
 - [x] update metatags for teh pages and update the logos for the pages and title for the pages
 - [x] update redirect to new page 
