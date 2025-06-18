# Steps to contribute

<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/fork.png" alt="fork this repository" />

## Fork this repository by clicking on fork button

## Clone your fork of this repository.

In your fork of this repository, click on code button. Select SSH tab and then click on `copy to clipboard` button.

<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/clone.png" alt="clone this repository" />
Open a terminal and run `git clone` command

```bash
git clone "url you copied"
```

> [!IMPORTANT]
> In the following steps, when you see `<your-github-username>` your should replace it with your exact GitHub username.  
> For example, if your GitHub username is `androvonx95`,  
> `git switch -c add-<your-github-username>` becomes `git switch -c add-androvonx95`  

<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/copy-to-clipboard.png" alt="copy URL to clipboard" />

## Create a branch

Go to the repository directory if you're not already there

```bash
cd Quiz-it-forward
```

Create a branch with `git switch` command

```bash
git switch -c add-<your-github-username>
```


## Add your quiz question

You can add your quiz question to the **questions.json** file in data directory. You can copy the following template to get started.

`data/questions.json`
```json
    {
      "question": "What is the correct syntax for declaring a variable in JavaScript?",
      "options": [
        "var myVar",
        "let myVar",
        "both var and let"
      ],
      "answer": "both var and let",
      "contributor": "androvonx95",
      "message": "Live long and prosper!"
    }
```
#### NOTE : Remember to maintain proper formatting like shown here if not the CI workflow will fail and we shall not accept it

## Commit your changes

First stage your changes with `git add` command

```bash
git add questions.json
```

Now commit your changes with `git commit` command

```bash
git commit -m "add <your-github-username>"
```

## Push your changes to GitHub

```bash
git push -u origin add-<your-github-username>
```

## Submit your changes for review

If you go to your repository on GitHub, you'll see a `Compare & pull request` button. Click on that button.

<img style="float: right;" src="https://firstcontributions.github.io/assets/Readme/compare-and-pull.png" alt="create a pull request" />

Now submit the pull request.

<img style="float: right;" src="https://firstcontributions.github.io/assets/Readme/submit-pull-request.png" alt="submit pull request" />

You will get a notification email once the changes have been merged.