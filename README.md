# Next.js 15 Environment Variable Access Error

This repository demonstrates a common error encountered when working with environment variables in Next.js 15 applications.  The error occurs when attempting to access environment variables directly within client-side components (pages).  This is because the `process` object, which contains environment variables on the server-side, is not available in the browser environment.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to the `/about` page.
5. Observe the runtime error in your browser's console.

## Solution

The solution involves using the `next/config` module to access environment variables securely and only on the server-side.  This ensures the application doesn't break on the client-side.  Refer to `aboutSolution.js` for the corrected code.