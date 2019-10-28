Hi everyone,

Today we talked about what actually powers the Web, Web Servers!

The code is accessible here: https://github.com/emilecantin/w3d1

Here are the topics we talked about today:

## HTTP review
- HTTP Is a specification / standard for a PROTOCOL on how two machines can "talk text"
- HTTP sits on top of TCP (ie. uses TCP)
- TCP = Transport Control Protocol, allowing two devices to connect and send data to each other while the connection is active (we used it for Snake game).
- IP Address and port are required to connect from client to the server
- HTTP is transactional.
  -Client sends Request => Server
  -Server sends Response => Client
  -End Connection

## HTTP Server
We created a simple one, similar to the one from the weekend. Code in `http_server.js`

Problems:
- Only one callback, needing if/else or other mechanism to organize MULTIPLE routes
- Can't easily bring in other libraries / solutions like EJS (would require us to write more boilerplate or "glue" code to make them work)
- A lot of the request / response processing work needs to be done by us, and is cumbersome

## Express Server
One way to solve some of those problems.

We created a simple one. See `express_server.js`

### Middleware
Note: Fully understanding the middleware-based architecture of Express is not a primary goal for this week. That said, it's a common paradigm and getting comfortable with it will make it easier to work with Express and other solutions like it.

Express is actually implemented using a Middleware pattern, as they say on their website:

    An Express application is essentially a series of middleware function calls.

Problem: It would be nice to be able to add a callback for ALL routes (or a subset of routes) to do things like logging, serving static (css, js, img, etc) files, etc.

Solution: Middleware! Each request actually makes its way through a series of callback functions, instead of just a single one. This allows us to add the same behavior to multiple routes.

### Templates
EJS Instead of creating strings upon strings of HTML in our JS file, EJS allows us to not only move that code into separate files, it also allows us to make them HTML files which have JS inside (so it's inverted).

We use res.render to "render" EJS templates.

Ultimately, render allows:

Express sends ------- data ------ EJS ---> EJS Template (eg: creatures.ejs)
Express gets <--- HTML string --- EJS
Express now has the HTML string to send back using res.send


Happy hacking!
