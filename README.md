# Buildless Web Starter
 
 A modern website kit that doesn't require build tools, has no production dependencies (beyond those you bring in), and the devDependencies are there only for convenience (web server with hot reloading, linting).

 ## Motivation

 "Best practice" defaults are dangerous. Popular doesn't mean correct. All dependencies have pros and cons. Build dependencies need maintenance, or you might find it time-consuming or unable to build your site down the road.

 ## Use Case

 Side projects, quick starts, experiments: definitely. But starting with native HTML, CSS, and JS via Web Components is generally a good idea because they are evergreen platform primitives.

 ## Caveats

 - One level of CSS imports is probably fine; you might have performance degradation if you go deeper, or the number of imports becomes high.
 - Loading ES modules individually is probably fine when there are only a few. HTTP/2 multiplexing helps. But at a certain point it will become inefficient, and a bundler desirable. Measure early and often.
 - We have no standard HTML imports unfortunately. Your web server might provide you with server side includes, but chances are you want something more sophisticated sooner rather than later. A static site builder might be in order.
