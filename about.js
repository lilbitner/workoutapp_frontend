const aboutCard = document.createElement('div')
    aboutCard.id = 'about-card'
    aboutCard.innerHTML = `
    <img src='IMG_1379.jpeg' id='about-image' alt='Soccer Picture' width=80px height=80px>
    <div id='value-container'>
    <h1 id='euphoria'>"Euphoria is a platform to consolidate exercise aspirations into one easy to use webpage, with personally developed workouts created based on your goals and local weather forecast."<h1>
    </div>
    <div class ='container'> 
    <h1 id='card-title'>About Lillian Bitner - the creator of Euphoria </h1>  
    <h3 id='about-info'>Lillian Bitner lives in Westminster, Colorado <br> A former Division 1 soccer player & 16-year competitive soccer player<br> A Molecular, Cellular, Developmental Biology Major <br> 10 time published scientific author <br> Certified Emergency Medical Technician <br> Passionate about exercise physiology, nutritional science, and helping people live their healthiest life <br> Loves to hike, run, read, and spend time with dogs <br> Contact her at lillian.bitner@gmail.com</h3>
    <button id='home-button' onclick= window.location.href='page_1.html'>Home</button
    </div>
    `
    document.querySelector('div').append(aboutCard)
