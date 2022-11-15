# Project 04 - PokeGotchi


## Description:

This was my fourth and final project for the Software Engineering Immersive course run by General Assembly. The idea was to create a Capstone project that incorporated all that we have learnt in the previous 11 weeks of the course. The project was created in one week and was a team effort created with two others; [Ashish Singh](https://github.com/EHCarr) and [Harry Philpotts](https://github.com/hphilpotts).

## Deployment link:

Our project can be viewed by clicking this link [https://project04pokegotchi.herokuapp.com/](https://project04pokegotchi.herokuapp.com/)
#

## Technologies Used:

I spent the two weeks prior to creating the project learning React which together with our previous experience of using MongoDB/Mongoose, Express and Node allowed us to create a MERN stack application.
#

## Brief:

The brief for the project stipulated the below:

- A working full-stack, single page application hosted on Heroku.
- To incorporate the technologies of the MERN stack:
  - MongoDB/Mongoose
  - Express
  - React
  - Node

- Have a well-styled interactive front-end.
- Communicate with the Express back-end via AJAX.
- Implement token-based authentication; including the ability for a user to sign up, log in and log out.
- Implement authorisation by restricting CUD data functionality to authenticated users. Navigation should also respond to the login state of the user.
- Have a well-scoped feature-set. Full CRUD data operations are not required if one or more of the following are included:
  - Consume data from a third-party API
  - Implement additional functionality if the user is an admin
  - Utilise multi-user, real-time communications
  - Node
#

## Planning:

Harry explained that during a piece of Homework for the course he had the idea of creating a [Tamagotchi](https://en.wikipedia.org/wiki/Tamagotchi) App; essentially a virtual pet you can interact with. The piece of Homework in question was to recreate a simple Pokemon battle game: ​​[https://pokemonbattle.alexanderghose.repl.co/](https://pokemonbattle.alexanderghose.repl.co/)

We all liked Harry's idea and felt it was achievable given the brief and the timeframe provided; to such an extent we didn't really discuss any other ideas.

Although we discussed allowing users to upload their own photos or to potentially convert their photos to Pixel art I had the idea of creating a Pokemon themed Tamagotchi. We knew from the aforementioned homework that the Pokemon API existed and provided all the content we would need. I explained it would also give us an aesthetic to work with. Pokemon as a brand had its own unique style; a recognisable font, colour scheme and art style and we could incorporate this into our application.
#

## Wireframe:

Although Harry created a detailed wireframe for each page of the website I was keen to communicate my idea for the main PokeGotchi page. I created the below mock up using a Pokemon card as the base:

![](./readme-images/Screenshot%202022-11-15%20at%2014.28.03.png)

Harry and Ashish were happy with my idea so we decided to implement it and use the Pokemon card design for the basis of our website.
#

## User Stories:

I then worked on user stories and wrote the below:

- As an unregistered user I want to be able to sign up
- As a registered user I want to be able to create a PokeGochi
- As a registered user I want to be notified when I need to feed my PokeGochi
- As a registered user I want to be able to feed my PokeGochi
- As a registered user I want to be able to play with my PokeGochi
- As a registered user I want to be notified when I need to clean up after my PokeGochi
- As a registered user I want to be able to clean up after my PokeGochi
- As a registered user I want to be notified when my PokeGochi wins or loses a fight
- As a registered user I want to be notified when I need to heal my PokeGochi after a fight
- As a registered user I want to be able to see other people's PokeGochi
- As a registered user I want to be able to change my password
- As a registered user I want to be able to delete my profile
- As an admin I want to be able to delete user's profiles.
- As an admin I want to be able to view all user's profiles.
- As an admin I want to be able to trigger events? Fights etc

As the user's PokeGochi was such a fundamental part of the interactivity of the project I thought it best to also write user stories from the PokeGochi's point of view to ensure we covered all bases:

- As a PokeGochi I want to have random fights after a certain period of time
- As a PokeGochi I want to be healed after a fight
- As a PokeGochi I want my HP to drop after losing a fight
- As a PokeGochi I want to be played with to increase my HP
- As a PokeGochi I want to be fed to increase my HP
- As a PokeGochi I want to go to the toilet after a certain period of time
- As a PokeGochi I want to be cleaned up after
- As a PokeGochi I want my HP to drop over time as I age

I added the above stories to our Trello Board (created by Ashish) so we could keep track of their development.
#

## Division of Work:

We discussed the division of work and decided that to begin with it would be beneficial to have two people work Back End and one Front End. However we all agreed that later on during the development to move more weight to the Front End. I felt more confident with the Back End and Express so opted to start there.
#

## Build/Code Process:

### Step 1:

Ashish created both Front and Back End repositories which I forked. I then made a minor change to confirm we were successfully set up to push and create pull requests.

Having worked with Ashish on my second project (Rate My Cat) we learnt that it would be easier to set up and connect to a MongoDB database from the off so that we all shared the same date - that way it would be easier to troubleshoot and test the project as we went along. Ashish shared his screen and we all created and connected to the MongoDB database together. One we were all connected to the repos and database we started to code.

### Step 2:
![](./readme-images/Screenshot%202022-11-15%20at%2014.28.26.png)

Working in the Back End I created all the basic folders; these being controllers, models, routes and views. I populated each folder with the relevant files and fields based on the ERD previously created.

For example the model file for the PokeGotchi:

![](./readme-images/Screenshot%202022-11-15%20at%2014.28.26.png)

And the model file for the User:

![](./readme-images/Screenshot%202022-11-15%20at%2014.29.37.png)

### Step 3:

I then focused on connecting the Pokemon API ([https://pokeapi.co/api/v2/pokemon/](https://pokeapi.co/api/v2/pokemon/)) to the PokeGotchi controllers file. With over 900 Pokemon it would be silly to try and fetch data for all; especially as we could demonstrate the functionality of our application with only a handful. Although still a large number I settled on fetching data for the original 151 Pokemon from the 1st generation. This would also help us achieve the Pokemon aesthetic we were after and the 'well-styled interactive front-end' stipulated in the brief.

With 151 Pokemon I could create a Pokedex (effectively a visual catalogue of Pokemon famous from the TV series and games) which other than the main interactive component for our user's PokeGotchi would form the other main component of our application.

I tested the API in postman and received back the below: 
![](./readme-images/Screenshot%202022-11-15%20at%2014.35.47.png)

I played around in Postman and realised I could fetch the original 151 Pokemon I wanted to by creating a limit key with a value of 151:

![](./readme-images/Screenshot%202022-11-15%20at%2014.35.59.png)

Each individual Pokemon entry came back with circa 11500 lines of text in Postman and the necessary images (with sufficient resolution) that we required were very well nested within each entry. As below each was nested within Sprites \> Other \> Official-Artwork \> front\_default:

![](./readme-images/Screenshot%202022-11-15%20at%2014.40.45.png)

I found a previous version of the same API and that contained far less data but still held everything we needed; for each Pokemon there was only 46 lines of text and the required image wasn't nested. There was no documentation for version 1 of the API but the documentation for version 2 stated it was free to use and there were no limitations.

I managed to log the name, species and sprite (image) of 1 of the Pokemon in the console using an Axios get request:

![](./readme-images/Screenshot%202022-11-15%20at%2014.54.03.png)

At this point we weren't sure how we would allow the User to select the Pokemon of their choice; be it by iterating through all 151 Pokemon to allow the User to choose or by accepting an inputted value (either the numerical Pokemon ID or name) from the User and then fetching those specific Pokemon details via an Axios get request.

### Step 4:

Having reached a logical stopping point and with the weekend looming I thought it best that we link the Front End and Back End together before parting; especially as we knew Harry was unable to work on the project again until Monday.

We were unsure how to link the two together so I rewatched a lecture we had on the subject; then updated my local code with the change and advised the other two how to do so; by adding the Back End server in the package.json file in the Front End:

![](./readme-images/Screenshot%202022-11-15%20at%2014.55.02.png)

After linking the two together we realised we had an issue with creating a new user. Despite providing a user name, email address and password we encountered the below error:

![](./readme-images/Screenshot%202022-11-15%20at%2014.56.36.png)

As we wanted to resolve the errors before breaking for the weekend we all troubleshooted the issue.

We came to realise that "MONGODBURL" on our server.js file in the Back End wasn't capitalised to match our .env file so we updated it to match:

![](./readme-images/Screenshot%202022-11-15%20at%2014.57.17.png)

After updating the above we then received a timeout error so we knew a user was being created but it was failing to be communicated to our database. We realised that although we had included our database URL in our .env file we had failed to include the database name in our url (after the '@') so we updated it to the below which resolved the issue.

![](./readme-images/Screenshot%202022-11-15%20at%2014.57.59.png)

After attempting to create new users the timeout error no longer appeared and the new users were saved into the MongoDB database.

### Step 5:

I knew that Harry (who was working on the Front End) was busy over the weekend and unable to contribute any further time to the project until Monday. He was also having one or two issues with the styling and told us to feel free to work on it.

Harry had created the basic layout of the Pokemon Card from my mock-up (covered in the Wireframe section):

![](./readme-images/Screenshot%202022-11-15%20at%2014.58.26.png)

I updated the 'Pokemon' title to 'PokeGotchi' using an online text generator.

I also added the tagline of "Gotta take care of one!"; a play on the Pokemon slogan of "Gotta catch them all!". I added the Pokemon card background; updated our Nav bar and added some shadow to make the card stand out.

I carried these changes across to the Signin.js and Signup.js user files so that the Pokemon theme was carried across:

![](./readme-images/Screenshot%202022-11-15%20at%2014.58.46.png)

### Step 6:

I set about creating a Pokemon Index (or a 'Pokedex' as it's known in the films/games); a list of Pokemon for the user to choose from. Whilst researching the best way to do so I came across [https://github.com/hideyuk1/react-kanto-pokedex](https://github.com/hideyuk1/react-kanto-pokedex) on GitHub. An existing Pokedex that fetched a Pokemon's name, id number, type and image to create the below:

![](./readme-images/Screenshot%202022-11-15%20at%2015.01.27.png)

I thought I may be able to adapt and incorporate some of the code into our project to expedite the process of creating a Pokedex.

I downloaded the repo from GitHub; however, I discovered that instead of fetching the data from an API the data for all 151 Pokemon was held in a .json file:

![](./readme-images/Screenshot%202022-11-15%20at%2015.02.19.png)

This fell foul of the DRY principle and the Brief of "consume data from a third-party API" so I set about creating the Pokedex from scratch.

There was no documentation for version 1 of the API I was using however, the documentation for version 2 had no mention of any limitations or rates to how often the API could be called. I assumed this must have been the case for version 1; especially considering the smaller amount of information held in version 1 compared to version 2. However, whilst checking the API in Postman again I received the below message:

![](./readme-images/Screenshot%202022-11-15%20at%2015.02.38.png)

I wouldn't even be able to fill the index of 151 Pokemon once using version 1 of the API as I had only called the API circa 30 times before receiving the above so I had to use the original version (version 2) of the API I was using. This being the API with the heavily nested images.

I attempted to use the original URL from Step 3 that fetched all 151 Pokemon by including a limit:

![](./readme-images/Screenshot%202022-11-15%20at%2015.03.24.png)

However, this just returned 151 404 errors:

![](./readme-images/Screenshot%202022-11-15%20at%2015.03.42.png)

I came to realise the best method to fetch the data would be to iterate through the API 151 times:

![](./readme-images/Screenshot%202022-11-15%20at%2015.06.36.png)

However, this just returned the same Pokemon data 151 times:

![](./readme-images/Screenshot%202022-11-15%20at%2015.06.49.png)

I soon realised I hadn't added 'i' to the end of the url so having amended it to the below:

![](./readme-images/Screenshot%202022-11-15%20at%2015.07.01.png)

I then received data for all 151 Pokemon I wanted; albeit I was yet to define exactly what information I wanted:

![](./readme-images/Screenshot%202022-11-15%20at%2015.08.35.png)

I added 'data.name' to fetch the Pokemon names but I was still struggling to access the Pokemon Images that were so incredibly well nested:

![](./readme-images/Screenshot%202022-11-15%20at%2014.40.45.png)

I struggled to access the image at first; the hyphen in "official-artwork" being the cause of the issue; I eventually managed to access it by surrounding "official-artwork" in square brackets:

![](./readme-images/Screenshot%202022-11-15%20at%2015.09.21.png)

I then attempted to display the results in the browser; by mapping through the arrays however I received the below error:

![](./readme-images/Screenshot%202022-11-15%20at%2015.09.29.png)

I understood this error to occur because its not possible to map through an array; I needed to either get an array of object keys or the objects values.

With the help of Harry I created the below. We assigned each fetched item (name, id and image) to a key value pair in an object; newPokeGotchi:

![](./readme-images/Screenshot%202022-11-15%20at%2015.10.31.png)

Then pushed the newPokeGotchi object to the fetchedData array; before then mapping through PokeGotchList; assigning this to displayFetchedData and then returning it:

![](./readme-images/Screenshot%202022-11-15%20at%2015.10.49.png)

I then set about styling the displayed data to match the Pokemon card from the My PokeGotchi component:

![](./readme-images/Screenshot%202022-11-15%20at%2015.11.00.png)

So the final result appeared as below:

![](./readme-images/Screenshot%202022-11-15%20at%2015.11.00.png)

### Step 7.

Harry discovered that the loading of the 'My PokeGotchi' component was very clunky and the separate pieces loaded at different speeds. He discovered the Circular Progress icon (\<CircularProgress /\>) in the MUI library and implemented this on the My PokeGotchi component so everything could load in the background before populating in the browser.

What with pulling 453 individual items from the Pokemon API (151 of which being images) the Pokedex component loaded even more poorly than the My PokeGotchi page so I too decided to use the Circular Progress icon.

I set State to isLoading:

![](./readme-images/Screenshot%202022-11-15%20at%2015.39.36.png)

Set a timer for 3 seconds:

![](./readme-images/Screenshot%202022-11-15%20at%2015.40.11.png)

And then called isLoading before loading the fetched data:

![](./readme-images/Screenshot%202022-11-15%20at%2015.40.26.png)

As it was a 3 second timer I wanted to include a message to show the user that something was effectively happening behind the scenes I played on the Pokemon slogan of "Gotta Catch Them All!":

Once the timer had span for 3 seconds the Pokemon Index then appeared as below:

![](./readme-images/Screenshot%202022-11-15%20at%2015.55.26.png)
#

## Challenges:

- Displaying API results in browser! This is something that I need to work on and practice. It took far longer to display the results in the browser (after having confirmed the API worked by console logging the results) than I would like to admit. I'm keen to create a new project of my own that will draw heavily on multiple APIs so I can practise.
#

## Wins:

- I think the overall design and layout of the website was a big win; it was important that the two main pages of the website ('My PokeGotchi' and the PokeGotchi index) looked the part and I managed to get them how I wanted.
- Although only a small touch I was very happy with the 'isLoading' state added to the PokeGotchi page. It improved the overall feel and experience of the page and hid the somewhat painful loading of all 151 Pokemon behind a 3 second delay.
#

## Key Learnings/Takeaways:

- Prior to the project I wasn't particularly confident with React and struggled to grasp the logic behind it. Having completed the project my knowledge and understanding has grown significantly however I would still like to spend more time with React and MERN applications in general. My priority after the course will be to concentrate on creating my own React application before then creating another MERN application.
- To focus and test one function at a time. Although this is something I practised in previous projects I felt at times during this project I started to run anyway with things and get ahead of myself. When I reeled myself back in and focused on each small part of a function and tested it as I worked I felt like I regained control of things and my productivity rate increased.
#

## Bugs:

- The play/clean/feed and heal scores can run into minus figures; ideally they should stop at 1 to allow you to interact with the PokeGotchi to restore the figures and their HP.
#

## Future Improvements:

- To resolve the above bug.
- To include a degree of animation when the user views and interacts with their PokeGotchi.
- To include a function that runs in the Back End to simulate a battle; this would run randomly everyday or so and reduce the PokeGotchi's HP and prompt the user to heal their character.
- To implement a search feature to allow users to search for a Pokemon by name as opposed to having to scroll through all 151 to find their preferred Pokemon.
- To add an element of jeopardy; there is no function that renders the PokeGotchi dead if the HP or play/clean/feed/heal scores drop to 0. Ideally if this happens the user should be forced to choose a new PokeGotchi; their previously chosen could even be greyed out so they are unable to choose it a second time.
- To allow users to select their preferred Pokemon by clicking on each individual Pokemon on the Pokemon index page.