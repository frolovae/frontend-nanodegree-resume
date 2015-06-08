var bio = {
	"name": "TIKT LA TOCH'",
	"role": "Web developer",
	"contacts": {
		"mobile": "+31-6-22961845",
    	"email": "evgeniya.o.frolova@gmail.com", 
    	"github": "frolovae",
    	"twitter": "@tatarinovae",
    	"location": "Amsterdam"
	},
	"biopic": "images/me.jpeg",
	"welcomeMsg": "Hello! Hello! Hello! Hello! Hello!",
	"skills": [
		"Skill1", "Skill2", "Skill3", "Skill4"
	],
	"display": function() {
		var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
		$("#header").prepend(formattedRole);
		var formattedName = HTMLheaderName.replace("%data%",bio.name);
		$("#header").prepend(formattedName);

		// Contacts
		for (contact in bio.contacts) {
			var formattedContact = HTMLcontactGeneric.replace("%contact%",contact).replace("%data%",bio.contacts[contact]);
			$("#topContacts").append(formattedContact);
			$("#footerContacts").append(formattedContact);
		};

		var formattedBiopic = HTMLbioPic.replace("%data%",bio.biopic);
				$("#header").append(formattedBiopic);

		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMsg);
				$("#header").append(formattedWelcomeMsg);

		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);

			var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
			$("#skills").append(formattedSkill);

			var formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
			$("#skills").append(formattedSkill);

			var formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
			$("#skills").append(formattedSkill);

			var formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
			$("#skills").append(formattedSkill);
		};
	}
};

var work = {
	"jobs": [
	{
		"employer": "Employer1",
		"title": "Title1",
		"dates": "YYYY-YYYY",
		"location": "Moscow",
		"description": "About job number one. About job number one.About job number one.About job number one.About job number one.About job number one.About job number one.About job number one.About job number one.About job number one.About job number one.About job number one.About job number one.About job number one.About job number one.About job number one.About job number one.About job number one.About job number one.About job number one.About job number one.About job number one.About job number one.About job number one.About job number one.About job number one.About job number one.About job number one.About job number one.About job number one.About job number one.About job number one.About job number one."
	},
	{
		"employer": "Employer2",
		"title": "Title2",
		"dates": "YYYY-YYYY",
		"location": "Brussles",
		"description": "About job number 2. About job number 2. About job number 2. About job number 2. About job number 2. About job number 2. About job number 2. About job number 2. About job number 2. About job number 2. About job number 2. About job number 2. About job number 2. About job number 2. About job number 2. About job number 2. About job number 2. About job number 2. About job number 2. About job number 2. "
	}
	],
	"display": function() {
		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);

			var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);

			var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
			$(".work-entry:last").append(formattedLocation);

			var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}
};

var education = {
	"schools": [
	{
		"name": "School1",
		"location": "Location1",
		"degree": "Degree1",
		"majors": ["Major1"," Major2"],
		"date": 1111,
		"url": "URL1"
	},
	{
		"name": "School2",
		"location": "Location2",
		"degree": "Degree2",
		"majors": ["Major3"," Major4"],
		"date": 1111,
		"url": "URL2"
	}
	],
	"onlineCourses": [
	{
		"title": "Course1",
		"school": "School1",
		"date": 1111,
		"url": "URL1"
	},
	{
		"title": "Course2",
		"school": "School2",
		"date": 1111,
		"url": "URL2"
	}
	],
	"display": function() {
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
			var formattedNameDegree = formattedName + formattedDegree;
			$(".education-entry:last").append(formattedNameDegree);

			var formattedDate = HTMLschoolDates.replace("%data%",education.schools[school].date);
			$(".education-entry:last").append(formattedDate);

			var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
			$(".education-entry:last").append(formattedLocation);

			var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
			$(".education-entry:last").append(formattedMajor);
		};

		$("#education").append(HTMLonlineClasses);

		for (onlineCourse in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);

			var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[onlineCourse].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[onlineCourse].school);
			var formattedTitleSchool = formattedTitle + formattedSchool;
			$(".education-entry:last").append(formattedTitleSchool);

			var formattedDate = HTMLonlineDates.replace("%data%",education.onlineCourses[onlineCourse].date);
			$(".education-entry:last").append(formattedDate);

			var formattedURL = HTMLonlineURL.replace("%data%",education.onlineCourses[onlineCourse].url);
			$(".education-entry:last").append(formattedURL);
		};	
	}
};

var projects = {
	"projects": [
	{
		"title": "Project1",
		"dates": "YYYY-YYYY",
		"description": "About Project number 1. About Project number 1. About Project number 1. About Project number 1. About Project number 1. About Project number 1. About Project number 1. About Project number 1. About Project number 1. About Project number 1. About Project number 1. About Project number 1. About Project number 1. About Project number 1. About Project number 1. About Project number 1. About Project number 1. About Project number 1. About Project number 1. ",
		"images": ["images/1-1.jpeg","images/1-2.jpeg"]
	},
	{
		"title": "Project2",
		"dates": "YYYY-YYYY",
		"description": "About Project number 2. About Project number 2. About Project number 2. About Project number 2. About Project number 2. About Project number 2. About Project number 2. About Project number 2. About Project number 2. About Project number 2. About Project number 2. About Project number 2. About Project number 2. About Project number 2. About Project number 2. About Project number 2. About Project number 2. ",
		"images": ["images/2-1.jpeg","images/2-2.jpeg"]
	}
	],
	"display" : function () {
			for (project in projects.projects) {
				$("#projects").append(HTMLprojectStart);

				var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
				$(".project-entry:last").append(formattedTitle);

				var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
				$(".project-entry:last").append(formattedDates);

			var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);

			if (projects.projects[project].images.length > 0) {
				for (image in projects.projects[project].images) {
					var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedImage);
			}
		}
	}
	}
};

bio.display();

work.display();

projects.display();

education.display();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});

$("#mapDiv").append(googleMap);

