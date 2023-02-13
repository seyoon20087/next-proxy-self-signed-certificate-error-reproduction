# Reproduction

Created for https://github.com/vercel/next.js/issues/45743

This is based on example https://github.com/vercel/next.js/tree/canary/examples/custom-server

## Try it

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/seyoon20087/next-proxy-self-signed-certificate-error-reproduction)

I personally recommend (and use) Gitpod for testing as it [doesn't require local setup](https://www.gitpod.io/vs/local-development#:~:text=is%20a%20browser.-,Faster%20onboarding,-Ready%20to%20code) and [doesn't cost a lot](https://www.gitpod.io/vs/github-codespaces#:~:text=Gitpod%20provisions%20secure%20containers%20and%20achieves%20best%2Din%2Dclass%20resource%2Defficiency%20with%20scalable%20workspaces%20running%20on%20shared%20high%2Dpowered%20cloud%20servers) (compared to GitHub Codespaces). If you use a local environment (or another cloud development environment that runs VMs like GitHub Codespaces), please make sure you're using a Unix-based environment (e.g. Linux/macOS/WSL2) and you have Node.js 14.6.0 or later installed.

**PLEASE NOTE: this reproduction can only be tested on Unix-based environments. This means you cannot test it on Windows without using a WSL environment.**

If you're on Windows, install a working WSL2 environment by following the instructions [here](https://learn.microsoft.com/en-us/windows/wsl/install).

Once you started the server (`yarn dev` or `yarn start` after successful build), go to `http://localhost:3000/c` to view errors in the console.

Note: if you use Gitpod, it will return a `Port ... not found` error if you directly access the HTTPS server on the browser.

Also note that you may not raise questions or pull requests here. Please write comments directly to the thread mentioned above.
