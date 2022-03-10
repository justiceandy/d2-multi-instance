### @d2r/utils/que
Que Manager for Promises executing in the background.

This library mainly exists to support the process/registry watchers. 

It supports adding promises into a Que that will execute 1 at a time.

This allows us to guarentee that token refresh events are processed in order, regardless of complexity.

### Notes
This is a very simple wrapper for [promise-queue](https://github.com/promise-queue/promise-queue). 
