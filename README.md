# Reproduction

Created for https://github.com/vercel/next.js/issues/45743

This is based on example https://github.com/vercel/next.js/tree/canary/examples/custom-server

## Try it

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/seyoon20087/next-proxy-self-signed-certificate-error-reproduction)

Once you started the server (`yarn dev` or `yarn start` after successful build), go to `http://localhost:3000/c` to view errors in the console.

Note: if you use Gitpod, it will return a `Port ... not found` error if you directly access the HTTPS server