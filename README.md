Code Challenge for UpJaunt

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.



-----------------------------------------------------------------

# Javascript Coding Exercise

Please plan to spend no more that two hours on this problem. 

  * Feel free to use whatever references you'd like, including Google.
  * When you’re finished, make sure your code is committed to a git repo with instructions on how to run it.
  * Your solution should be self-contained and not require additional software to run it.


Please complete all three requirements, but if you’re up for a challenge, we are also offering up a bonus requirement.


## Data:

The input to your program is a json file containing an array of restaurants. The format for the file is:


| Data          | Type        | Description                            |
| ------------- | ----------- | -------------------------------------- |
| Place         | String      | The name of the restaurant             |
| Address       | String      | The street address of the restaruant   |
| Latitude      | Double      | The latitue of the restaurant          |
| Longitude     | Double      | The longitude of the restaurant        |
| Tips          | String      | A brief description of the restaurant  |

   
Each element represents a single restaurant. 


## Goal:

Write a react web application that allows a user to search through an in memory database of restaurants generated from the restaurants.json file.  The results of the search should be presented back to the user in the web app. 

## Requirements:

1. The restaurants should be searchable by Place name. 
2. The restaurants should be searchable by Latitude and Longitude where restaurants within 1km of the point are returned.
3. The restaurants should be searchable based on Tips.

## Bonus:

1. Keep track of how many times each restaurant has been returned in the search results and display this count next to each restaurant result. 


