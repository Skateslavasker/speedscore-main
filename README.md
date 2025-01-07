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


Task - 2:

Task 2 involved implementing the Rounds feature using React and integrating it into a vanilla HTML, CSS, and JavaScript setup via the index.html file. While React was familiar, I quickly realized that some patterns and best practices had evolved since I last worked with it extensively. Concepts such as useState, useContext, and useReducer required revisiting. I leaned heavily on YouTube tutorials and StackOverflow to bridge knowledge gaps and better understand their modern applications. Managing global state via RoundsContext.js and ensuring predictable state transitions across interconnected components demanded thoughtful planning.

The integration into index.html was pretty interesting: I created a dedicated `<div>` (#rounds-react-root) as a mounting point for React, and I added the React JavaScript and CSS bundles. At first, it was a bit tricky to bridge React's declarative structure with the vanilla DOM, but once the flow of hydration was understood, integration went seamlessly.

Testing the Rounds feature via Playwright was a different kind of challenge altogether. Writing end-to-end tests for adding, editing, and deleting rounds really introduced me to the art of handling dynamic UI rendering. Switching between different tools like `waitForSelector` and `toBeVisible` was crucial in avoiding flaky test runs. The Playwright tests tested my patience in debugging them but amply reinforced the fact that asynchronous UI handling plays a key role in any automated testing workflow.

Though, the task didn't specify on implementing View/Edit and Delete functionalities. As I took 3 days to learn and implement Task 2, I didn't think I would be able to complete the other tasks and I wanted to finish the Rounds page completely.

For the edit functionality, the Edit Button opened a modal for making changes, while the Delete Button included a confirmation dialog to prevent accidental removals. These small yet significant features added clarity and utility to the user interface.

Throught this whole process, I relied on Code Copilot, Claude AI, StackOverflow, Reddit, and YouTube, each serving a specific purpose. Code Copilot provided quick suggestions for repetitive tasks and boilerplate code, focussing on the development. Claude AI offered clarity on architectural decisions, particularly in files like `RoundsContext.js` and `RoundsReducer.js`. StackOverflow was invaluable for resolving specific bugs and implementation challenges in components such as `RoundsFormDialog.jsx`, `RoundsReducer.js`, and `roundsApp.spec.ts`.Meanwhile, YouTube tutorials delivered detailed explanations of `useState`, `useContext`, and `useReducer` hooks, along with practical demonstrations for setting up Playwright test cases, enhancing both my understanding and implementation skills.

On a more personal note, I consider this to be a great opportunity for my growth and upskilling. I'm ready to commit my time, energy, and focus to making the project a success. Working under your guidance, I would like to attain a structured approach, clarity, and the right mentorship. This feels like a pivotal step in my career, and I am ready to embrace the journey ahead with determination and enthusiasm.