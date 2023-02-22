make the apis

make authentication if u r even eligible for it
/[slug]    :   # Path: api/[slug].js  -> redirect the user from database if not exist redirect user to error page
/url       :   # Path: api/url.js     -> method-post -> create a new url , data={slug, url} 
                                       > method-get -> get the url from database , on query get that much of recent entry
/url/:slug : # Path: api/url/[slug].js   -> method-get -> get the url from database
/url/:slug : # Path: api/url/[slug].js   -> method-get -> get the url from database
                                         -> method-put -> update the url from database , data={slug, url}
                                         -> method-put -> update the url from database , data={slug, url}
                                         -> method-delete -> delete the url from database , on query get that much of recent entry
                                         -> method-delete -> delete the url from database , on query get that much of recent entry


<!-- to do -->
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