# NProgress with Next.js + Tailwind CSS

This repo demonstrates how to use [@tanem/react-nprogress](https://www.npmjs.com/package/@tanem/react-nprogress) in a project using Next.js and Tailwind CSS.

Having a progress bar is only useful when a page uses dynamic rendering.

## Documentation

- The color of the progress bar can be customized by altering the `--primary` CSS variable in `global.css`.
- To prevent the progress bar from appearing when navigating to a prefetched page, a delay of 120 ms is implemented before the progress bar is rendered.
- The progress bar is automatically disabled for `<a>` elements that contain:
  - `target="_blank"` attribute
  - `href` attribute starting with `mailto`
  - `href` attribute ending with `pdf`
  - `download` attribute
