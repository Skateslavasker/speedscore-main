# SpeedScore

This repository contains the code for SpeedScore, a single page web application that supports the sport of speedgolf by allowing users to

-   log and analyze their speedgolf rounds
-   share and discuss their speedgolf rounds with other speedgolfers
-   add detailed golf, running, and topographical data on speedgolf-friendly to SpeedScore's course database

SpeedScore is implemented in HTML, CSS, and JavaScript. It presently stores all app data locally in `localStorage`. In the future, it will also store app data in a cloud-based database.

To run SpeedScore from Visual Studio Code, type
`npm run start`
in the terminal.


## Reflection

Task - 1:

This task of implementing Playwright tests for the About Box functionality was a deep dive into both the technical and strategic aspects of end-to-end testing. Initially, the setup was not as smooth as expected. The `require` vs `import` syntax mismatch in Node.js, coming from the `"type": "module"` declaration in `package.json`, created multiple hurdles. I repeatedly encountered `ReferenceError: require is not defined` and other module-related issues. After surfing through playwright's documentation and multiple StackOverflow threads, I realized that proper module syntax (`import` instead of `require`) and aligning configurations in `playwright.config.ts` were essential. 

Authentication was another challenge. The application requires login credentials before accessing the side menu where the About Box resides. Initially, I considered logging in manually before running tests, but this felt repetitive and error-prone. I used `page.fill` to fill the username and password for test cases and all ran well.

Writing the tests themselves posed their own learning curve. The About Box—required a deeper understanding of Playwright's waiting strategies (`waitForSelector`, `toBeVisible`). A few failed test runs taught me the importance of handling asynchronous UI interactions gracefully.

I heavily relied on **Playwright’s official documentation**, **StackOverflow**, and even combed through GitHub issues on Playwright's repository for similar configuration challenges. Beyond the technical fixes, I also gained insights into structuring test suites logically and ensuring clarity in test descriptions.

In hindsight, this task was not just about writing tests—it was about understanding the ecosystem surrounding Playwright and building confidence in troubleshooting effectively. 
