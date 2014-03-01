$( document ).ready(function() {
	
//parallax scrolling with offset for bootstrap top navbar
$.scrollIt({
	activeClass: 'active',
	//topOffset: -70 // offset (in px) for fixed top navigation non-mobile
});
    	//init for bootstrap carousel with no auto scroll
    $('.carousel').carousel({
			interval: false
	});
    
    //responsive stretching of bg image
    $(".bg1").backstretch("img/bg1.jpg");
    $(".bg2").backstretch("img/bg2.jpg");
    
    //responsive tabs init
    fakewaffle.responsiveTabs(['xs', 'sm']);




//scroll to bottom problem
window.onscroll = function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    	$('.navbar ul.navbar-nav li a').removeClass('active');
        $('.navbar ul.navbar-nav li:last-child a').addClass('active');
    }
    if ((window.scrollY) <= 320) {
        $('.navbar ul.navbar-nav li:first-child a').addClass('active');
    }
};

$('.navbar ul.navbar-nav li:last-child a').click(function() { 
	this.addClass('active');
});

$('.navbar ul.navbar-nav li:first-child a').click(function() { 
	this.addClass('active');
});




//anchor id
var identifier = window.location.hash; //gets everything after the hashtag i.e. #home








//employee modals gah
var imgBase = "img/";

function employee(firstName,lastName, title, text) {
	this.firstName=firstName;
	this.lastName=lastName;
	this.title=title;
	this.bwImage=imgBase + lastName + "\-" + "bw.jpg";
	this.colorImage=imgBase + lastName + "\-" + "color.jpg";
	this.groupImage=imgBase + lastName + "\-" + "group.jpg";
	this.text=text;
};

var employeeArray = [];

employeeArray.push(
	(new employee("Mike", "Witherspoon", "Solution Architect and Cofounder","Based in San Francisco, Mike is a certified Force.com consultant who makes a sport of tackling the hard problems and determining the best possible solutions. After twelve years of improving business processes for a broad client list, Mike likes to say that he’s earned one of the most practical MBAs in the world. Prior to forming CodeScience, Mike was an Account Executive and Project Manager at Bluewolf for three years. Earlier in his career, he was a Business Analyst at Searchspace Corp implementing transaction analytics systems for large banks, plus a utility sector Technology Consultant at PricewaterhouseCoopers Consulting. Mike earned his Bachelors and Masters of Science from Virginia Tech in Civil Engineering. While not leading the charge at CodeScience, Mike practices yoga, dives in tropical waters, and indulges his penchant for haberdashery.")),
	(new employee("Tim", "Youngblood", "TECHNICAL ARCHITECT AND COFOUNDER","Tim is a technologist, developer and entrepreneur. He began programming at the age of 12 on an Apple II he bought by mowing lawns in his neighborhood. His roots in cloud computing were established as the lead Technical Solution Architect for Bluewolf, one of the top 3 Salesforce.com consulting partners in the world, where he spent four years implementing the Force.com platform for numerous clients such as Dupont, The Hartford, BusinessWeek, Salesforce.com, Citizen's Bank, CNN, Manhattan Associates, Nuance Communications, Visa, and Unisource.Tim is an authorized Force.com developer and previous instructor. Tim has expertise in just about everything that warrants strings of indecipherable capital letters. He is responsible for technology partnerships with Heroku, Box and Salesforce.com. Historically he has founded a financial software company in the mid-1990s now owned by Intuit, Inc.He enjoys mountain biking and other somewhat adrenaline-inducing pastimes.")),
	(new employee("Brian", "Walsh", "Solution Architect and Cofounder","Based in San Francisco, Mike is a certified Force.com consultant who makes a sport of tackling the hard problems and determining the best possible solutions. After twelve years of improving business processes for a broad client list, Mike likes to say that he’s earned one of the most practical MBAs in the world. Prior to forming CodeScience, Mike was an Account Executive and Project Manager at Bluewolf for three years. Earlier in his career, he was a Business Analyst at Searchspace Corp implementing transaction analytics systems for large banks, plus a utility sector Technology Consultant at PricewaterhouseCoopers Consulting. Mike earned his Bachelors and Masters of Science from Virginia Tech in Civil Engineering. While not leading the charge at CodeScience, Mike practices yoga, dives in tropical waters, and indulges his penchant for haberdashery.")),
	(new employee("Cassie", "Courtney", "DIRECTOR OF VIBE AND ADMINISTRATION","Cassie is a Southern California native with a knack for getting the job done with a little pizzaz. With a degree in Communications from Belhaven University, Cassie gained grounds for administrating events, marketing, and public relations work. In 2003, she served as the Assistant to the Executive Director at the Mississippi Chapter of the American Red Cross (ARC) managing the local Hero's Campaign for her non-profit stent. Upon graduating, Cassie served as the Coordinator of Student Activities and Leadership at BU where her she continued to sharpen her creative eye and developed a passion to create a positive culture within her event staff. Cassie moved to Chattanooga and soon stumbled into the rockstar team at CodeScience. Her role as Director of Vibe and Administration involves managing the business operations and keeping everyone happy. In her spare time, Cassie can be found taking yoga or dance classes, participating in a local choreography project, and spending time with her husband Drew.")),
	(new employee("Cassie", "Courtney", "DIRECTOR OF VIBE AND ADMINISTRATION","Cassie is a Southern California native with a knack for getting the job done with a little pizzaz. With a degree in Communications from Belhaven University, Cassie gained grounds for administrating events, marketing, and public relations work. In 2003, she served as the Assistant to the Executive Director at the Mississippi Chapter of the American Red Cross (ARC) managing the local Hero's Campaign for her non-profit stent. Upon graduating, Cassie served as the Coordinator of Student Activities and Leadership at BU where her she continued to sharpen her creative eye and developed a passion to create a positive culture within her event staff. Cassie moved to Chattanooga and soon stumbled into the rockstar team at CodeScience. Her role as Director of Vibe and Administration involves managing the business operations and keeping everyone happy. In her spare time, Cassie can be found taking yoga or dance classes, participating in a local choreography project, and spending time with her husband Drew.")),
	(new employee("Mary", "Silva", "DIRECTOR OF FORCE.COM CONSULTING","Mary brings a unique background of business finance, software development and project management experience to Code Science. She easily understands the business requirements of an organization and translates that into technical solutions. She has consulted for large Fortune 1000 companies such as Footlocker.com, Disney and Allied Van Lines as well as several small start-ups. She has extensive experience with large custom software development project as well as application package rollouts.Mary has five years consulting experience with Salesforce ranging from standard Sales and Marketing implementations to complex custom application design and development to data integrations. She loves solving complex business problems by designing elegant and easy to use technology solutions that delight her clients. She is the consummate Project Manager ensuring all details are tracked and managed from project conception to completion. She graduated Cum Laude with a degree and Business Finance from Cal State Dominguez Hills in California. In her free time, Mary can be found with her Nikon and backpack full of lenses, filters and tri-pod traveling all over the world capturing the moment in front of her.")),
	(new employee("Jeremy", "Engler", "DIRECTOR OF ISV CONSULTING","With 11 years of technology experience Jeremy has proven his expertise in a variety of roles and responsibilities, industries and skills. He cut his teeth doing development on the American Express billing project at Andersen Consulting. Jeremy then moved on to a Silicon Valley startup, Cygent, doing custom development for clients and technical support for dedicated accounts in the US and Australia. After a hiatus from the technology industry to explore his passion for travel and woodworking, he joined salesforce.com in customer support. It was here that he found his niche and began to hone his salesforce.com skill set. Following a stint in the Premium Support group, Jeremy helped the AppExchange team shepherd over 500 applications into the marketplace in its debut year. Jeremy moved to the AppExchange's most successful partner, VerticalResponse, an email service provider geared toward small- and medium-sized businesses. In his role as Product Manager Jeremy released VR's first integration with Google Analytics, re-architected a major overhaul of their list management system and re-skinned and enhanced the Analytics suite. With a broad skillset in place Jeremy left VR to join CodeScience in order to help small businesses and non-profits leverage the Force.com platform and streamline their critical operations.")),
	(new employee("Dan", "Shahin", "Developer","Dan Shahin is a compulsive autodidact and entrepreneur. He is a certified Salesforce developer with 3 years experience consulting for Bluewolf. Prior to that he worked at early web development shop Organic before starting and selling several successful businesses. Dan eats and breathes code and loves to solve complex business problems with elegant technical solutions. He graduated Magna Cum Laude from San Francisco State University with a degree in Broadcasting. He likes playing poker, reading comics and riding his bicycle, though not simultaneously.")),
	(new employee("Chad", "Club", "PROJECT MANAGER AND UX DESIGNER","Analyzing business-technology issues and delivering effective solutions to meet organizational needs is Chad's expertise. Over the past 15 years Chad has delivered new products and services that improve efficiency, productivity, and profitability for clients ranging from start-ups to Fortune 500s, including eBay, Mitsubishi, and Ask.com. Chad is passionate about helping businesses to connect and engage with their customers by leveraging Salesforce.com's on-demand platform with its social, mobile, and real-time capabilities. He believes that success is best realized through continuous iterations, testing and through relentless customer feedback. In his downtime, Chad enjoys tinkering with graphic design, searching for deep snow, and fitness training.")),
	(new employee("James", "Holmes", "DEVELOPER", "James Holmes is a leading Web development authority and the best-selling author of Struts: The Complete Reference, JavaServer Faces: The Complete Reference and The Art of Java all from McGraw-Hill. Oracle Magazine awarded Holmes the prestigious Java Developer of the Year award in 2002. He has deep experience in complex transactional environments spanning several business sectors, including work for ADP, Bank of America, BASF, IBM, InterContinental Hotels Group, Skoodat and UPS. Recently James has forayed into Cloud Computing via the Force.com platform and is enjoying the challenge of a new paradigm shift in software development. James is also a sought after speaker and regularly provides training and mentoring services.")),
	(new employee("Jacob", "Wills", "PROJECT MANAGER","Jake has been shepherding projects in software and emerging technologies for over 15 years, advocating for users in both Fortune 500 companies and start up environments. His expertise includes product design and management, business analysis, mobile and voice technologies, user adoption, and business development. Jake has served as Director of Product Management for NewportWorks (acquired by The First American Corp), Product Manager for Fidelity National Real Estate Solutions, VP of Product Management for the Goomzee Corporation, and as a consultant for companies large and small. His career portfolio includes multi-national manufacturers, major movie studios, hospitality franchises, healthcare administrators, political candidates, real estate software companies, title insurers, and mortgage lenders. Jake earned his MA in Writing from The Johns Hopkins University and received his BA in Biology, also from The Johns Hopkins University. When not on the clock, Jake enjoys crafting charcuterie, cooking with fire, and throwing Frisbees in baskets (PDGA# 28682).")),
	(new employee("John", "Prevost", "PROJECT MANAGER","John is a serious software development dork. He has been in the dev game for 14 years with 10 years focused on managing client side and Saas projects. He cut his teeth working at Hewlett Packard for 7 years and then moved into the SMB/start-up space. He was happy to join the rock stars at CodeScience in 2012. He has a degree in Rhetorical Theory from Baylor University. He enjoys sleeping babies, deep powda snowboarding, playing funky bass, and long walks on the beach. He has a degree in Rhetorical Theory from Baylor University. He enjoys sleeping babies, deep powda snowboarding, playing funky bass, and long walks on the beach.")),
	(new employee("Matthew", "Carroll", "DEVLOPER","Matthew has an extensive background and passion for solving complex problems with creative solutions. He has applied his drive and passion to varied fields including the visual arts, GIS, as well as mechanical and electrical environments. Most recently he has led the creation and development of augmented reality applications on mobile devices for clients such as the Smithsonian Institute, Mitsubishi Electric, and the SIM Center. Matthew is now excited by the challenge of applying his passion to the Salesforce environment and meeting client needs with compelling solutions. He is a graduate of the University of Tennessee at Chattanooga with B.F.A. in Painting and Drawing . He spends his time enjoying the visual arts, designing and testing various forms of technology and sharing these experiences with his family.")),
	(new employee("Brandon", "Baker", "DEVLOPER","Brandon has been a programmer since finding a book in the 3rd grade about writing games in BASIC. After graduating high school, he joined the Air Force as a programmer and was stationed at the Air Force Weather Agency, where he learned to program in Java. He left for the civilian life after his enlistment ended and took a job as a software engineer for Shaw Industries. He earned his Computer Science degree at Georgia Tech while working at Shaw Industries. After seven years, he decided to venture out to the wide open spaces of CodeScience to take on new challenges. In his off-time, Brandon enjoys running, fencing, and exploring all that Chattanooga has to offer. He cannot pass a historical marker without stopping to read it, and he enjoys working in the garden and building things.")),
	(new employee("Krishna", "Tatta", "DEVLOPER","Krishna has been working as a programmer for over 7 years in various domains as Health care, E-Commerce, Education, etc., . She was diving deep into Microsoft suite of technologies before being enchanted by cloud computing and drawn into code science. She believes that good coding skills are irrespective of the programming language. She has a Masters degree in Computer Engineering from Florida International University. In her free time, she can be found building a list of places to visit all over the world and traveling to those.")),
	(new employee("Hemang", "Patel", "SOLUTION ARCHITECT","Hemang worked for over four years at Salesforce during both the early and the most rapid growth phases of the company. At Salesforce, he contributed to multiple areas of the Salesforce platform and acquired a strong understanding of scaling an organization's technology, team, culture, and processes. Before Salesforce, Hemang co-founded a social service to help people find the best time to meet called MeetWhen. He did his Bachelors in Computer Science at UC Berkeley. Nowadays, he helps clients, ranging from startups to multinational corporations, launch their products on the Force.com platform.")),
	(new employee("Aaron", "Pettit", "DEVELOPER","Aaron started off in web development in the .NET framework version 1.1. After several years and iterations of the .NET framework, explored other web development languages including php and python. A couple of years later, Aaron's current employer implemented Salesforce at all locations around the country. He became the Salesforce Developer. Soon after, Aaron went to a large Salesforce consulting company and worked on enterprise implementations of Salesforce and Financial Force's Professional Services Automation. He then was invited to join CodeScience in March of 2012 and has loved every minute of it. Aaron's technical chops include Dev 401 and Dev 501 certifications and is on the path to be a Technical Architect in the future."))
);//array push



var index;
for (index = 0; index < employeeArray.length; ++index) {
    console.log(a[index]);
    
}



});



