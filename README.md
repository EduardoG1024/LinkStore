# LINKSTORE - OVERVIEW

- What is **LinkStore**?
    - LinkStore is a Web App that runs in your browser where you can add **links** like: "website, videos, images, etc.".
    - LinkStore has multiple functions that helps you to organize your information.
    - LinkStore wants to give privacity to you so all the links wont be storage in a server.

## LINKSTORE DESIGN
![Alt image](./designs/Figma%20Design%2002.png)


# LINKSTORE - TECHNICAL

- LinkStore works by using different functions that changes the UI deppending if the user chooses one.

## ADD NEW LINK (NAVBAR)
- This functions allows the user add a new link to the LocalStorage.
- If the link is already saved it will alert the user.

```bash
    localStorage.getItem('LinksGuardados');
```

## LINK DASH (NAVBAR)

- Link Dash button allows the user display **only the videos**
- This function filters all the videos and transform the **normal link** to an **embed link** creating an **iframe** for each link
    -  But what if there are thousands of videos?
    - The last function for filter the videos has an extra function that limits a number of elements in the page, example:
    - If we have 50 videos (links) the page wont display the 50 videos, instead of that it will display only 9 videos in the page.
    - If you want to see more videos (links) you will have to click a button to display the next 9 videos.
    - This is **Pagination** you have see it in other apps.

![Alt image](./designs/Figma%20Design%2003.png)

## RANDOM (NAVBAR)

- Random button allows the user display a random link and open.
- Why is this button useful? this is just an extra button, is not important but is something cool to have

## LINK VIEW (NAVBAR)

-Link View button allows the user display **only the images**
- This function filters all the images and creates an **img** element for each link.
    - How does this works?
    - This funtions filters all the links that ends with **.png, .jpg, .jpeg, .webp**
    - Then creates an element for all the images displaying it in a **grid "gallery**
    - Also this function has the same function as the **LINK DASH** that limits the number of elements in the page.

## DELETE (FOOTER)

- Delete button is the **"MOST"** dangerous buttons if is clicked.
    - But why?
    - This button delets all the links saved, cleaning the **LocalStorage**.
    - The links deleted **CAN'T** be restored.

## COPY (FOOTER)

- Copy button allows the user copy all the links saved.
    - But why is this useful?
    - With this function the user can copy all links and save the links in a **notepad**
    - the **notepad** will be the backup for the links.
    - But why?
    - If the user accidently deletes all links he can copy all the link of the notepad and insert it in the **LinkStore** again

## SPACE (FOOTER)

- Space button allows the user see how many space or memory has used.

## LINKS FOOTER (HELP - DOCUMENTATION - TWITTER)

- This links will help the user to understand the app (LinkStore), see the documentation of the project and the social media of LinkStore.
