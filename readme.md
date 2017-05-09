![Ironhack logo](https://i.imgur.com/1QgrNNw.png)

# PP | Beach Finder

![](http://i.giphy.com/l4hLyOGRJWNSR8QQ8.gif)

## Learning Goals

After this lesson, you should be able to:

- Create an application using the Google Places API.
- Show information from the database, using places found in a Map.
- Store information in the database, based on the user input.

## Requirements

- [Fork this repo](https://guides.github.com/activities/forking/).
- Clone your fork into your `~/code/labs` folder.

## Submission

Upon completion, run the following commands:

```bash
$ git add .
$ git commit -m"done"
$ git push origin master
```

Navigate to your repo and create a Pull Request -from your master branch to the original repository master branch.

In the Pull Request name, add your Campus, name, and last name separated by a dash "-".

## Deliverables

All the files that make your Express app work, including the JavaScript files where you do the AJAX Requests.

## Introduction

Everybody likes to go to the beach. But not everybody has a beach around. Some people have to travel quite a distance to find on. What happens if we show up and the weather is no good? Or the conditions are too dangerous to swim? Beach Finder will solve this!

In this lesson, we are going to create a web application that will allow our users to see the state of these conditions for any beach around the world.

The beach lifeguard uses a flag to indicate if you can swim, you have to be careful, or you can't swim. This is done with a color flag:

- Green. You can swim.
- Yellow. You have to be careful.
- Red. It's forbidden to swim.

Our application will allow people to search for any beach, and display the current flag color of it. Then, other users will be able to check out the status to decide if they can go there or not.

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_fb145e29c81a49875bc21aaa1774a6bd.png)

It looks like Miami Beach is a good destination today, you can swim, so grab a towel!

### Starter Code

We've already used the Express generator to create the initial project structure. We haven't added any extra files, so you have a plain project with the following folder structure:

```
starter-code/
├── .gitignore
├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
└── views
    ├── error.ejs
    └── index.ejs
```

To be able to complete the project, we recommend you follow the following steps.

## Iteration #1: Google Map

The first thing we are going to do is create the Google Map and add it to the `index.ejs` view.

To do that, remember you have to use the [Google Developers Console](https://developers.google.com/maps/) to create an API Key to use **Google Places API**. It's quite similar to Google Maps, so don't be too concerned about the differences.

Once you have created the API Key, add the Map in the view.

:bulb: **Remember to give some `height` and `width` to the map container. If you don't do that, you will not be able to see your map.**


**Tasks**

- Create an API Key for Google Places API.
- Add the map to the project.
- Remember to give the map container width and height.

## Iteration #2: Search-box

Once we have added the map, we need a search box to look for our favorite beach. With Google Places API we can create an `<input type="text">` that will have an autocomplete, so it's going to be very helpful for our visitors.

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_ea298996f85faafc1f2922faa2b24074.png)

**This is why we are using Google Places instead of Google Maps API.** You can find how to create this Autocomplete in the [Places Autocomplete Documentation](https://developers.google.com/maps/documentation/javascript/places-autocomplete). Try to figure it out by yourself before ask for help :)

:bulb: We can filter the options in the autocomplete by type. Unfortunately, there is no "Beach" type. This means that the users will be able to indicate that Madrid has a green flag... even if it doesn't have a beach :P


Once you have the autocomplete in your textbox, you have to add a marker in the google map when the visitor selects a beach. The workflow is the following:

- The user looks for "Miami Beach, Florida".
- The user selects the place and press "Search" button.
- We center the map on Miami Beach, and add a marker on it.

This iteration is finished by adding this feature.

**Tasks**

- Create a form with an `<input type="text">` and a `<button>`.
- Add the autocomplete to the `input`.
- Once the user selects a place:
  - Center the map in the selected place
  - Add a marker in the map
  - If there is another marker, remove it before add the new one

## Iteration #3: Save Beach Status

Now we are going to add the flags container. This container will have three buttons with an image in each one, that will allow the users select the current status of each beach.

The flags will appear only when we are showing a beach on the map.

By default, the status will be empty, and it will change its color on two different events:

- On button hover.
- When the users clicks on the button.

Once the users clicks on the button, we have to save the beach and its status in the database. First we are going to check if the beach already exists. If it exists, we will update the item in the collection. If it doesn't exist, we will create it.

The beach model in our database will have the following structure:

```bash
name: String
flag: String
  -> possible values: "red", "yellow", "green"
```

:bulb: Remember that we can force the user to save an specific value by using [Mongoose Enums](http://mongoosejs.com/docs/api.html#schema_string_SchemaString-enum)


**Tasks**

- Create a flags container with three buttons, one for each flag.
- Show the flags when a user selects a beach.
- Create an event that will be triggered when the user clicks on the button.
- Create a mongoose model to save the beach in the database.
- If the beach doesn't exist in the database, save its name and status (flag color).
- If the beach already exists in the database, update its status (flag color).

## Iteration #4: Load beach status

To finish up with this exercise, we need to add one more feature: **showing the beach status**. To do that we will use the flags of course.

When a user selects a beach that is already stored in the database, we will show the user the flag color. We recommend you create a css class called `selected` to indicate when a flag is selected.

In this case, if the user wants to know what the status is of Miami Beach, and we have already its value in the database (being the flag color yellow), we are going to add the `selected` class to the flag, so the user will see that he/she has to be careful on this beach.

**Tasks**

- When the user selects a beach, if we have its value stored in the database, we have to show it in the view.

## Iteration #5 (Bonus): Status Date

As a bonus, we can add the date to a status. It's the best way for our users to know if the status is from today or a previous day.

To do that, we will have to add the `timestamps` to the database model. We are going to use the `updated_at` field to know when it has been changed. To show our users a comprehensive date, we will format the date server-side with [`moment`](https://www.npmjs.com/package/moment).

**Tasks**

- Add the timestamps in the `beach` model.
- Add the `updated_at` field in the response from the server, formatted with `moment`.
- Show the date under the beach flags.

/Happy Coding!
