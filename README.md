# Spaceflix
<img src="https://i.imgur.com/sneEo43.jpg">
<a href="https://spaceflix.herokuapp.com" target="_blank" rel="noreferrer">Visit the Live Site here</a>

Spaceflix is a space-themed, pixel-perfect clone of Netflix. Like the real thing, Spaceflix allows users to stream movies (trailers) on demand. Users can create and delete profiles, each of which has its own independent Watch List where movies can be saved for later viewing. Movies can be previewed by hovering over their thumbnails, and additional details can be accessed by opening their respective show-sections. In the future, Spaceflix will feature search functionality as well as recommendations based on movies a profile has already watched.

## Features
<ul>
    <li>Secure user authentication with component, model, and database level validations.</li>
    <li>User passwords are securely stored in hashed and salted format.</li>
    <li>Ability to create and delete up to 5 custom profiles per user, each of which has its own dedicated Watch List.</li>
    <li>Ability to add or remove videos from Watch lists from the video preview or show page.</li>
    <li>Ability to switch between profiles seamlessly using the Navigation bar or dedicated Profiles page.</li>
    <li>Ability to watch videos with custom video control panel designed specifically for Spaceflix.</li>
    <li>User authentication process includes error handling, rendering descriptive errors to the user for an intuitive signup/login experience.</li>
</ul>

## Technologies

Spaceflix is built with <strong>Ruby on Rails</strong> on the backend and <strong>React/Redux</strong> on the frontend. User and movie information is stored in a <strong>PostgreSQL</strong> database and <strong>AWS S3</strong> is used for cloud storage of image and video files. Secure user authentication is implemented without any dedicated authentication libraries, but user passwords are stored securely in hashed + salted format with assistance from BCrypt. The application is additionally supported by Webpack, jQuery, and Jbuilder.

## Technical Challenges
### Authorizing AWS S3 Requests with proper expiration guidelines
In the final stages of this project, I noticed that attempts to play videos on the Browse page would return a 403 Forbidden error from AWS S3 a few minutes after the page was initially loaded. To debug this, I began researching pre-signed signatures in AWS and eventually learned that the media request URLs being sent to AWS by way of ActiveStorage were setting a default query parameter of expires_in: 300 - meaning that each request would only remain valid for five minutes. Using the Ruby on Rails and ActiveStorage documentation, I researched and built a custom Rails initializer, <em>active_storage.rb</em>, to override that default parameter with the following line of code:

    ActiveStorage::Service.url_expires_in = 1.hour

### Fading video controls based on user inactivity
The problem here is pretty straightforward: there is no event listener for the <em>absence</em> of user activity. To implement such behavior, I defined a series of functions which increment a timer while the mouse is not actively moving, and trigger a fade animation when that timer reaches three seconds. The timer starts/ends by hovering over the parent element, and is reset onMouseMove, ensuring that the controls do not disappear too quickly and that they can reappear instantaneously. This functionality can be observed in the application when hovering over a movie preview, or on a movie's dedicated Watch page.


    // components/movies.jsx
    startFadeTimer() {
        this.fadeInterval = window.setInterval(this.incrementFadeTimer, 1000)
        this.containerElement.classList.remove("fade-trigger")
    }

    resetFadeTimer() {
        this.containerElement.classList.remove("fade-trigger")

        this.fadeTime = 0;
        clearInterval(this.fadeInterval);
        this.fadeInterval = window.setInterval(this.incrementFadeTimer, 1000)
    }

    endFadeTimer() {
        this.fadeTime = 0;
        clearInterval(this.fadeInterval);

        this.containerElement.classList.remove("fade-trigger");
    }

    incrementFadeTimer() {
        this.fadeTime++;
        
        if (this.fadeTime >= 3) {
            this.fadeControls();
            this.fadeTime = 0;
        }
    }

    fadeControls() {
        this.containerElement.classList.add("fade-trigger")
    }
    
## Upcoming Features
<ul>
  <li>Searchable Movie Database</li>
  <li>Dedicated Genre View pages</li>
  <li>Recommended movies based on user activity</li>
  <li>Continue Watching feature which keeps track of movies that have been started but not finished</li>
</ul>
