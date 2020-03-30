# What is Euphoria? 

A full stack web application to consolidate exercise aspirations, with personally developed workouts created based on one's goals and local weather forecast. It utilizes extensive custom controller methods and token-based authorization. 

## Technologies featured: 
1. Ruby on Rails 
2. JavaScript
3. HTML 
4. CSS 

Euphoria was created as part of the Module 3 project in the Flatiron School software engineering bootcamp program. 

The backend repository can be found here: https://github.com/lilbitner/workoutapp_backend-

## Features: 

    1. Can create an account using a valid username and password. 
    2. Can login to the created account. 
    3. Can view an 'About Euphoria' page for more information. 
    4. Can view a dynamic recipe page that changes upon refreshing. 
    5. Can submit any city-name to view a 5-day weather forecast. 
    6. Can select between 'Bulk' or 'Cut' to generate a workout-split for the week - this workout split is created by randomly generating the appropriate exercises based on the weather forecast created in step 5. 
    7. Can save the workout to the database. 
    8. Can view more information on Cut vs. Bulk, stretching, and rest days. 

![](Euphoria.gif)

## Installation: 

This application uses 'Rails version 6.0.2.1 - Ruby 2.6.1'.
Fork & Clone down repository, run Bundle Install, run rails DB:create, run rails DB:seed. 
Confirm that rails server is running on the 3000 port, and front-end server runs on 3001.

## Dependencies:

gem 'rails', '~> 6.0.2', '>= 6.0.2.1'
gem 'pg', '>= 0.18', '< 2.0'
gem 'puma', '~> 4.1'
gem 'bcrypt', '~> 3.1.7'
gem 'bootsnap', '>= 1.4.2', require: false
gem 'rack-cors'
gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
gem 'listen', '>= 3.0.5', '< 3.2'
gem 'spring'
gem 'spring-watcher-listen', '~> 2.0.0'
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
