# 🧠 John-package-test

## Step 1 Install the gh-pages package as a “dev-dependency” of the app

````bash
npm install gh-pages -save-dev
````

## Step2: Add homepage property to package.json file

````bash
Open package.json and add
“homepage”: “http://{Github-username}.github.io/{Github-repo-name}"
````

## Step3: Deploy scripts under package.json file

In the existing scripts property, add a predeploy property and a deploy property, each having the values shown below:

````bash
“scripts”: {
//…
“predeploy”: “npm run build”,
“deploy”: “gh-pages -d build”
}

````

The predeploy command helps to bundle the react app while the deploy command fires up the bundled file.

## Step4: Create a remote GitHub repository

(Skip this step if your remote GitHub repository is already initialized)
Initialize: git init
Add it as remote: git remote add origin your-github-repository-url.git

## Step5: Now deploy it to GitHub Pages

npm run deploy

This command will create a branch named gh-pages at your GitHub repository. This branch hosts your app and homepage property you created in package.json file hold your link for a live preview.

Go to {your-GitHub-code-repository} -> settings -> GitHub pages section and setup source to the gh-pages branch.

## Step6: Update your repository code (optional)

Commit and push your updated code commit to GitHub
git add .
git commit -m “Your commit message”
git push origin master
That’s it! You have successfully deployed your app to the website URL defined in Step2 of this Deployment section.

````bash
echo "# john-package-test" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Joaosilgo/john-package-test.git
git push -u origin main
````

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: <https://facebook.github.io/create-react-app/docs/code-splitting>

### Analyzing the Bundle Size

This section has moved here: <https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size>

### Making a Progressive Web App

This section has moved here: <https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app>

### Advanced Configuration

This section has moved here: <https://facebook.github.io/create-react-app/docs/advanced-configuration>

### Deployment

This section has moved here: <https://facebook.github.io/create-react-app/docs/deployment>

### `npm run build` fails to minify

This section has moved here: <https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify>
