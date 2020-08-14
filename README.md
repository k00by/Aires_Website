# Aires Website

## Cloning on your local
1. Open Terminal
2. Navigate to directory where you want code to live on your computer. Read this [tutorial](https://www.macworld.com/article/2042378/master-the-command-line-navigating-files-and-folders.html).
3. Make sure you have [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) installed.
4. Run the command `git clone https://github.com/zacgottschall/Aires_Website.git` 

## Running on your local
1. Make sure you have [python](https://realpython.com/installing-python/) installed.
2. Run `python -m SimpleHTTPServer 8000`. You should get a message in the terminal `Serving HTTP on 0.0.0.0 port 8000`.
3. Open your browser, and go to `localhost:8000` (or whatever your port number is). The website should appear.
4. If you make a change to the code, refresh your page, and it should update.

## Commiting changes
1. Run `git status`. Review the changes you've made.
2. Run `git add <filename>` for each file you want to commit. Or, if you want to commit everything, run `git add .`
3. Run `git commit -m <commit message>`. Remember to make your commit message descriptive!
4. Run `git push origin master`. 
5. Go check the repo online to make sure your commit worked!

## Editing the website
### How to add/edit/remove members
1. Go to `json/members.json`.
2. Follow the JSON format, add/edit/remove the relevant information.
3. If you're adding a member, add their photo to the `images/members` folder. You'll want their face to be in the center of the photo, so crop it.
4. If you're removing a member, remmove their photo from the `images/members` photo!

### How to add/edit/emove alumni
1. Go to `json/alumni.json`.
2. Follow the JSON format, add/edit/remove the relevant information.

### How to add/remove albums
1. Go to `json/albums.json`.
2. Follow the JSON format, add/edit/remove the relevant information.
3. If you're adding an album, add the photo to the `images/albums` folder.
4. If you're removing an album, remove the photo from the `images/albums` folder.

## Are you stuck?
Contact Villo! And if Villo doesn't know, contact the original site designer Oso!
