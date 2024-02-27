# battleship-not-working-
just learnt to upload to github from vscode lol
cd /path/to/your/project
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/your-repository.git
git pull origin master
git push -u origin master

if made with readme
The error message "refusing to merge unrelated histories" indicates that Git is having trouble merging branches with different histories. This usually happens when you have initialized a new repository on GitHub with a README file or a license, and then tried to push local changes into it.

To resolve this issue, you can force the push with the --allow-unrelated-histories option. Here are the steps:

Pull with --allow-unrelated-histories:

bash
Copy code
git pull origin main --allow-unrelated-histories
This will fetch the changes from the remote repository and allow unrelated histories to be merged.

Resolve Conflicts (if any):

If there are conflicts during the pull, Git will ask you to resolve them. Open the conflicted files, resolve the conflicts, and then continue.

Commit and Push:

After resolving conflicts (if any), commit the changes and push them to the remote repository:

bash
Copy code
git commit -m "Merge unrelated histories"
git push origin main
