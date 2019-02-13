# useOptimizedResize

## Motivation and Inspiration

Listeners attached to window resize can negatively impact performance. That is because resize is an event that can fire very frequently.

In order to prevent this, [MDN recommends](https://developer.mozilla.org/en-US/docs/Web/Events/resize) to throttle the event using `requestAnimationFrame`, `setTimeout` or a `customEvent`.

## Implementation

`useOptimizedResize` is an based of the examples showed by [MDN here](https://developer.mozilla.org/en-US/docs/Web/Events/resize).

It used the `useEffectLayout` `React` hook, to add an event listener to resize. The event listener is receives a handler that will run the callbacks on the next available `requestAnimationFrame` or after a 66 miliseconds timeout.

The `useState` hook is used three times.

The first usage is to control a running flag. When the callbacks are begin run, the running flag is set to true, when they are done, the flag is set to false.

The second and third usages of `useState` are to have status control of the `width` and `height`.

`useOptimizedResize` returns an array after a resize event, where the first element is the new `width` and the second is the new `height`.

Optional callbacks can be passed to the `useOptimizedResize` hook. These are invoked together with the width and height updates.

## Example

```jsx
// some user defined callbacks
const logger = a => console.log(a);
const loggers = [logger, logger];

// an implementation using ResizeOptimized
function ResizeOptimized() {
  const [width, height] = useOptimizedResize(...loggers);
  return (
    <div>
      <div>
        <span>
          Width: <span>{width}</span> px
        </span>
        <span>
          Height: <span>{height}</span> px
        </span>
      </div>
    </div>
  );
}
```

## License

The MIT License (MIT)

Copyright (c) 2019 Joseph Chamochumbi

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
