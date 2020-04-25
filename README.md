[![Build Status](https://travis-ci.com/Kittaru87/acebook-theUndefinedMethod.svg?branch=master)](https://travis-ci.com/Kittaru87/acebook-theUndefinedMethod)
[![Coverage Status](https://coveralls.io/repos/github/Kittaru87/acebook-theUndefinedMethod/badge.svg?branch=master)](https://coveralls.io/github/Kittaru87/acebook-theUndefinedMethod?branch=master)

Contributors: [Jara Santamaria Martinez](https://github.com/jarasmar), [Sophia Bell](https://github.com/Kittaru87), [Rafa Hernandez](https://github.com/rafahg), [Nima Soufiani](https://github.com/Nimzyow)

# Acebook

This is a group projected set my Makers Academy and delievered by:

~ **The Undefined Method** ~

The task at hand was to add features through TDD based on the tickets our group gets.

## Table of content

- [Installation](#installation)
- [Database setup](#database-setup)
- [Running the application](#running-the-application)
- [Running tests](#running-tests)
- [Tools used during the project](#tools-used-during-the-project)
- [Team who collaborated on this project](#team-who-collaborated-on-this-project)
- [Future tickets](#future-tickets)

## Makers Academy - Week 8 (group project)

## Installation

To install dependencies, go to the root of the project and run:

```
$ bundle install
```
this will install our dependencies for Rails.

To see the React implementation of the front end, cd from root into acebook-react and run:
```
$ npm install
```
That's it!

## Database setup

If you do not have Postgresql installed, first insure you have [HomeBrew](https://brew.sh) installed. Then in the terminal type:

```
$ brew install postgresql
```
After HomeBrew has finished downloading; follow on-screen installation instructions

```
$ brew services start postgresql
```
That's it for the Postgresql installation. 

If you already have Postgresql installed, follow the instructions from here.

On the root of the project create the database by running:

```
$ rails db:create
```
this will create the database

Next we will need to create the tables.

On the root of the project, run:

```
$ rails db:migrate
```

Congratulations! Your database is now setup!

## Running the application

To run the application, run the following command in the root of the project and enjoy :)

```
$ rails server
```

If you want to see the React frontend implementation, from the root, move into the acebook-react directory and run:

```
$ npm start
```
Please keep in mind that the React implementation is still ungoing. The plan is to convert the Rails project we have done so far into an API and have React connect to it.

## running tests

To run the tests, make sure you are in the root of the project and run:

```
$ rspec
```
This will show you tests related to the rails application. To view tests related to the React, move into the acebook-react directory and in the terminal type:

```
npm test
```

## Specifications

[You can find the engineering project outline here.](https://github.com/makersacademy/course/tree/master/engineering_projects/rails)

### User stories
```
As an unregistered user
So that I can see the latest posts quickly
I want the newest posts to show first

As an unregistered user
So that I know a bit more about a post
I want to see the date it was posted and who posted it

As an unregistered user
So that I can make a post
I want to be able to create an account

As a registered user
So that I can use my account
I want to be able to log in

As a registered user
So I can share my experiences
I want to be able to make a post

As a registered user
So I can make a comment on a post
I want to be able to comment on a post

As a registered user
So I can like a post
I want to be able to like a post

As a registered user
So I can like a comment
I want to be able to like a comment
```

## Planning

**Week 1**

**Day 1**

- Setting up of our group and responsibilities, including our [Trello board](https://trello.com/b/adiRFheq/the-undefined-method) and [daily blog](https://github.com/Kittaru87/acebook-theUndefinedMethod/blob/master/Blog.md)

**Day 2**

**Day 3**
- Deployment of [Heroku app](https://the-undefined-method.herokuapp.com/)

**Day 4**

## Tools used during the project

### planning phase

- google docs
- google sheets
- trello
- slack
- zoom
- miro

## Technologies

- Ruby on Rails
- Capybara
- RSpec
- SimpleCov
- Rubocop
- Ruby
- CSS/HTML
- JavaScript
- JQuery
- React
- Jest and Enzyme

## Team who collaborated on this project

### and their daily roles

| Name           | Day 1        | Day 2        | Day 3        | Day 4        | Day 5        |
| :------------- | :----------- | :----------- | :----------- | :----------- | :----------- |
| Sophia Bell   | Technician/helper| Scrum Master| Leader       | Scribe/reporter        | Technician/helper       |
| Nima Soufiani    | Scrum master | Leader       | Scribe/reporter   | Technician/helper       | Scrum Master        |
| Rafa Hernandez| Leader       | Scribe/reporter | Technician/helper       | Scrum Master   | Leader       |
| Jara Santamaria Martinez | Technician/helper| Scrum Master       | Leader | Leader       | Scribe/reporter   |

## Future tickets

**(Feature) Individual User Walls**

Users love your app so much they want to feel like they have their own space to manage on your social media platform!

**ACCEPTANCE CRITERIA**
* User is redirected to their wall when they log in
/:user_id
* User can go to any /:user_id to see each user’s wall
* User can’t see any other user’s wall without logging in
* User is redirected to login page
* User can see other users’ wall when logged in
* User can post on any user’s wall and the post only appears on that user's wall
* User can not update or delete posts or comments apart from their own (on any wall)

FURTHER CHALLENGE:

* If the User doesn't exist, handle requests to /:user_id by redirecting to a custom 404 page saying that the user doesn’t exist
* The User’s username can also be used to form the URL
/:username

BONUS CHALLENGE:
* A User can choose between two or more different fonts AND background colours for their wall

**(Change) Separate Rails entirely from the front end. Build a front end app to consume the Rails API.**

The business has recently bought a competing social media platform and has made the decision to consolidate the platforms - but keep the look and identity of each site. The decision reached is to use your current backend, but expose it as a Rails API for front-end apps to consume. The CTO feels React.js is a good choice but recommends you discuss it as a team.

**ACCEPTANCE CRITERIA**
* A user can see /posts but has to login before creating/updating/deleting records
* If not authenticated, a user is shown a message they are not signed in
* Once authenticated:
* * A user can go to /posts and submit new posts without the page refreshing
* * A user can go to /posts and comment on posts without the page refreshing
* * A user can go to /posts and like a post or comment without the page refreshing
* * A user can only update/delete their own posts/comments.

**(Cost) For budget reasons, Heroku is too expensive**

Management had a meeting. They seem to have had a lot of meetings recently. People seem to be leaving because of budget cuts - but as a team you realised you can make some savings in order to keep your team's jobs safe. Heroku has somehow become really expensive of late, and AWS have this massive new discount because you went to an AWS meetup this one time..

**ACCEPTANCE CRITERIA**
* You have 1 sprint to complete a safe migration to AWS
* You should only ever have 1 production app that a user can interact with for this requirement, consider the production app your currently deployed app until the aws app is deployed and the data migrated to it (at which point the aws app is the production app, and the heroku app should be unusable)

CRITICAL: No user data should be lost

FURTHER CHALLENGE:
* Show a message on your app that tells the user from what time to what time the app will be unusable while the migration happens.
* Implement a redirect from the heroku app to the aws app, so a user has a seamless transition - they can still go to the heroku app which redirects them immediately to the AWS app

**(Feature) Photo Albums**

Users want to be able to upload photos to display as their profile picture, so that everyone can see who they are. Consider using this gem (part of rails): https://edgeguides.rubyonrails.org/active_storage_overview.html

**ACCEPTANCE CRITERIA**
* A signed-in user can:
* * Upload photos which are stored in albums
* * Choose a photo to be their profile picture
* * Edit or delete photos (but not ones they don't own)
* * See the albums of other users

FURTHER CHALLENGE
* Use AWS to store images
* A signed-in user can like and comment on photos

**(Feature) Friending**

Users want to be able to indicate that they are friends with other users of AceBook.

**ACCEPTANCE CRITERIA**
* A signed in user can:
* * indicate that they are friends with another user see the list of another user’s marked friends When a user has been marked as a friend by another user, the other user is added to their friends list

FURTHER CHALLENGE
* A user can decline a friend request

**(Feature) Chat**

Users want to be able to chat to other logged in users - in real time. Consider using this gem (part of rails): https://guides.rubyonrails.org/action_cable_overview.html

**ACCEPTANCE CRITERIA**
* A signed in user can:
* * join a chatroom with all other logged in users
* * see real-time messages from the other people in the chat room
* * share their own messages in the chat room
