# no-lag-scroll

Hi! Have you ever faced the problem that the scrollbar lags when you're scrolling? With help of this plugin you can avoid this problem.


The magic is in the "pointer-events: none" CSS rule, it's set on the scroll event of the element and removed after the scroll event.
This CSS rule says browser to ignore all the mouse events. So, when you're scrolling browser doesn't process your mouse events and
you get a really fast scrolling speed.


It's a really simple and small jQuery plugin and you can easily use it.


    $(window).noLagScroll();


You need only **jquery.no-lag-scroll.js** file to use this plugin.

