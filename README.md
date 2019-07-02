# Simon

## If you want to try working on the code

1. We're currently working on the JS functionality.  Read the comments on the top of the JS file before working
2. Once you have an idea of what section you want to work on.  Please plan it out on a note or scratch paper
3. Create a new branch: `git checkout -b yourName-nameOfYourPlan`
4. Once your plan is complete and working it is time to commit and push
5. `git add .`
6. `git commit -m "Give us an explanation of what you did."`
7. `git push`
8. You will get an error saying it doesn't exist on the origin.  Copy/Paste the command it tells you to do
9. Contact Dan and we can work on the pull request

## Simon Game Pseudo

- Click PlayGame()
    - Simon Picks a random color
        - Simon adds this pick to his list
        - Simons list flashes
    - User picks a color
        - That color flashes
        - If the users color is the same as Simons first item in the list and it IS the end of simons list
            - Simon picks a new random color
                - Simon adds this pick to his list
                - Simons list flashes (which is now two items)
            - User picks a color
                - That color flashes
                - If the users color is the same as Simons first item in the list and it is NOT the end of simons list
                    - User picks a color
                        - That color flashes
                        - If the users color is the same as Simons second item in the list and it IS the end of simons list
                            - Simon picks a new random color
                                - Simon adds this pick to his list
                                - Simons list flashes (which is now three items)
                            - User picks a color
                                - That color flashes
                                - If the users color is the same as Simons first item in the list and its not the end of simons list
                                    - User picks a color
                                        - That color flashes
                                        - If the users color is the same as Simons second item in the list and its not the end of simons list
                                            - User picks a color
                                                - That color flashes
                                                - If the users color is the same as Simons third item in the list and it IS the end of simons list
                                                    - Simon picks a new random color
                                                        - Simon adds this pick to his list
                                                        - Simons list flashes (which is now four items)
                                                    - User picks a color
                                                        - That color flashes
        - If users color is ever NOT the same
            - FLASH background 
            - Simons list is cleared
            - PlayGame()