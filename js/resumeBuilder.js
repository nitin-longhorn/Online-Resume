
/* Formatted data */
var work = {
    "jobs": [{
        "employer": "Ernst & Young",
        "title": "Advanced Tax Analyst",
        "location": "Bangalore, India",
        "dates": "Sept 2012 - Oct 2014 ",
        "description": "Led and delivered global payroll consulting work stream, providing payroll delivery options like consolidation of multiple payrolls with the use of technology to increase efficiency. Was promoted twice in 2 years with a high rating and received several “Extra Miler” awards for going above and beyond regular job requirements.",
        "url": "https://betterworkingworld.ey.com/?WT.mc_id=20013040&utm_source=Google&utm_medium=cpc&utm_campaign=US_BBWW_Core_Brand&gclid=CjwKEAjwqpK8BRD7ua-U0orrgkESJADlN3YBaV1FCr3ktaOJzRHl4Q1FtHLx3NiVqHfIb-UYtoPiGBoCzxXw_wcB"
    }]
};

var projects = {
    "projects": [{
        "title": "Popular Movies",
        "dates": "May 2016",
        "location": "Mountain View, CA",
        "description": "Developed an app that displays a list of currently popular/highest rated movies in a grid view and lets you view its details. Movies can be sorted by popular/top rated by making use of SharedPreferences. The app implements a BroadcastReceiver that listens to network changes",
        "images": ["images/popular_movies.png", "images/popular_movies_2.png"],
        "url": "https://github.com/nimithar/PopularMovies"

    }, {
        "title": "Poker Game",
        "dates": "May 2015",
        "location": "San Francisco, CA",
        "description": "Worked with a team of 3 to develop an interactive Poker Game in JAVA Swing. Understood the rules of the game to come up with a UML and took ownership of the backend logic. Designed the functionality and logic to generate a random hand of cards. Designed the logic to determine the rank of the hand and multiply the balance accordingly. Awarded ‘Best in Class’ and gained extra credit for design and UI which was implemented within a very challenging timeline.",
        "images": ["images/poker.png"],
        "url": "https://github.com/nimithar/pokerGame"
    }, {
        "title": "Dish",
        "dates": "December 2015",
        "location": "San Francisco, CA",
        "description": "Built an Android app, following agile methodology, to generate recipes based on available ingredients; worked with a team of 5 and was responsible for backend and API integration. Brainstormed with different stakeholders to finalize the specs and prioritize the feature sets for a user centered app. Developed wireframes and mock-ups for every activity. Used concepts of loose coupling to increase reliability and followed design patterns to enhance reusability. Integrated Edamam API to generate recipes and Nutritionix API to get Nutritional information",
        "images": ["images/dish_1.png", "images/dish_2.png"],
        "url": "https://github.com/nimithar/Dish---Android-App"
    }]
};

var bio = {
    "name": "John Smith",
    "role": "Software Developer",
    "contacts": {
        "mobile": "650 123 1234",
        "email": "john.smith@gmail.com",
        "github": "johns",
        "twitter": "@john_smith",
        "location": "San Francisco"
    },
    "welcomeMsg": "Welcome to my page!",
    "skills": ["Java", "Javascript", "Android", "Web Development", "C", "C++", "Swift", "HTML", "CSS", "Databases"],
    "biopic": "images/fry.jpg"
};

var education = {
    "schools": [{
        "name": "San Francisco State University",
        "location": "San Francisco, CA",
        "degree": "Bachelors of Science",
        "majors": ["Computer Science"],
        "dates": "Jan 2015 - May 2017",
        "url": "http://www.sfsu.edu/"
    }, {
        "name": "Mount Carmel College",
        "location": "Bangalore, India",
        "degree": "Bachelors of Science",
        "majors": ["Physics", "Mathematics", "Computer Science"],
        "dates": "Jun 2009 - May 2012",
        "url": "http://www.mountcarmelcollegeblr.co.in/"
    }],
    "onlineCourses": [{
        "title": "Android Development",
        "school": "Udacity",
        "dates": "Jan 2016 - Dec 2016",
        "url": "https://www.udacity.com/",
        "courseUrl": "https://www.udacity.com/course/nd801"
    }, {
        "title": "Front End Development",
        "school": "Udacity",
        "dates": "May 2016 - Dec 2016",
        "url": "https://www.udacity.com/",
        "courseUrl": "https://www.udacity.com/course/nd001"
    }]
};

bio.display = function() {

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBioPic);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }
};

work.display = function() {
    if (work.jobs.length > 0) {
        for (var i = 0; i < work.jobs.length; i++) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            formattedEmployer = formattedEmployer.replace("#", work.jobs[i].url);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedEmployerTitle = formattedEmployer + formattedWorkTitle;
            $(".work-entry:last").append(formattedEmployerTitle);
            var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            $(".work-entry:last").append(formattedWorkDates);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            $(".work-entry:last").append(formattedWorkDescription);
        }
    }

};

projects.display = function() {
    if (projects.projects.length > 0) {
        for (var i = 0; i < projects.projects.length; i++) {
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
            $(".project-entry:last").append(formattedTitle);

            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            $(".project-entry:last").append(formattedDates);

            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
            $(".project-entry:last").append(formattedDescription);

            if (projects.projects[i].images.length > 0) {
                for (var j = 0; j < projects.projects[i].images.length; j++) {
                    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
                    $(".project-entry:last").append(formattedImage);
                }
            }
        }
    }
};

education.display = function() {
    $("#education").append(HTMLschoolStart);

    if (education.schools.length > 0) {
        for (var i = 0; i < education.schools.length; i++) {

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedSchool = formattedSchoolName + formattedSchoolDegree;
            formattedSchool = formattedSchool.replace("#", education.schools[i].url);
            $(".education-entry:last").append(formattedSchool);

            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            $(".education-entry:last").append(formattedSchoolDates);

            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            $(".education-entry:last").append(formattedSchoolLocation);

            var formattedMajors = "";

            for (var j = 0; j < education.schools[i].majors.length; j++) {
                var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]);
                formattedMajors += formattedSchoolMajor;
            }
            $(".education-entry:last").append(formattedMajors);

        }
    }
    if (education.onlineCourses.length > 0) {
        $(".education-entry:last").append(HTMLonlineClasses);

        for (var l = 0; l < education.onlineCourses.length; l++) {

            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[l].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[l].school);

            var formattedOnlineSchoolTitle = formattedOnlineTitle + formattedOnlineSchool;
            formattedOnlineSchoolTitle = formattedOnlineSchoolTitle.replace("#", education.onlineCourses[l].url);

            $(".education-entry:last").append(formattedOnlineSchoolTitle);

            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[l].dates);
            $(".education-entry:last").append(formattedOnlineDates);

            var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[l].courseUrl);
            formattedOnlineUrl = formattedOnlineUrl.replace("#", education.onlineCourses[l].courseUrl);
            $(".education-entry:last").append(formattedOnlineUrl);
        }
    }
};

bio.display();
work.display();
projects.display();
education.display();


$("#main").append(internationalizeButton);

function inName(name) {
    var nameParts = name.split(" ");
    nameParts[0] = nameParts[0].slice(0, 1).toUpperCase() + nameParts[0].slice(1).toLowerCase();
    nameParts[1] = nameParts[1].toUpperCase();
    var iName = nameParts.join(" ");
    return iName;
}

$("#mapDiv").append(googleMap);


formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
formatttedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedTwitter);
$("#footerContacts").append(formattedGithub);
$("#footerContacts").append(formattedLocation);
