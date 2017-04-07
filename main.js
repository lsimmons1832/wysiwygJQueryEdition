// Create an array of objects that represents famous people (see structure below).

var people = [
	{Name: "Justin Timberlake", 
	Title: "Singer/Songwriter",
	Bio: "Singer Justin Timberlake got his start on The New Mickey Mouse Club and made it big with boy band *NSYNC, before becoming a solo singer and actor. Born on January 31, 1981, Justin Timberlake began his career on The New Mickey Mouse Club, starring with Britney Spears and Christina Aguilera. In 1995, he became a teen heartthrob with the pop group *NSYNC. After the pop groups immensely successful run in the '90s, Timberlake went solo in 2002, releasing his own album, Justified. Timberlake proved he could stand alone with the Grammy-winning album, and continued his success as a solo artist with FutureSex/LoveSounds (2006) and The 20/20 Experience (2013). Aside from a prominent singing career, Timberlake also proved himself a talented actor, starring in Alpha Dog (2006), The Social Network (2010) and In Time (2011).", 
	Image: "https://lh4.googleusercontent.com/-5mAippdj-C8/UkHaPz4zNgI/AAAAAAAAClY/OGpiN9xzEN8/w995-h995/tko%2Bno%2Btext.jpg", 
	Lifespan: "1981 - Present"},
	{Name: "Elvis Presley", 
	Title: "Singer/Songwriter",
	Bio: "Musician and actor Elvis Presley endured rapid fame in the mid-1950s—on the radio, TV and the silver screen—and continues to be one of the biggest names in rock 'n' roll. Born on January 8, 1935, in Tupelo, Mississippi, Elvis Presley came from very humble beginnings and grew up to become one of the biggest names in rock 'n' roll. By the mid-1950s, he appeared on the radio, television and the silver screen. On August 16, 1977, at age 42, he died of heart failure, which was related to his drug addiction. Since his death, Presley has remained one of the world's most popular music icons.", 
	Image: "http://img.wennermedia.com/social/rs-222960-elvis.jpg", 
	Lifespan: "1935-1977"},
	{Name: "Bessie Smith", 
	Title: "Singer/Songwriter",
	Bio: "Jazz and blues vocalist Bessie Smith's powerful, soulful voice won her countless fans and earned her the title 'Empress of the Blues.' Bessie Smith was born in Chattanooga, Tennessee on April 15, 1894. She began to sing at a young age and in 1923 signed a contract with Columbia Records. Soon she was among the highest-paid black performers of her time with hits like 'Downhearted Blues.' By the end of the 1920s, however, her popularity had lessened, though she continued to perform and made new recordings at the start of the Swing Era. Her comeback and life were cut short when she died on September 26, 1937 from injuries sustained in an automobile accident outside of Clarksdale, Mississippi.", 
	Image: "http://cdn.thedailybeast.com/content/dailybeast/articles/2015/05/16/why-blues-titan-bessie-smith-still-kills-it/jcr:content/image.img.2000.jpg/1431747526777.cached.jpg", 
	Lifespan: "1894-1937"},
	{Name: "Al Gore", 
	Title: "Former Vice President",
	Bio: "Al Gore was the 45th Vice President of the United States from 1993 to 2001. He is also known for his work regarding environmental issues. Al Gore, born on March 31, 1948, in Washington, D.C., served in both the House and Senate. He lost his bid for the Democratic presidential nomination to Michael Dukakis in 1988, but was President Bill Clinton's successful running mate in 1992 and again in 1996. In his 2000 presidential campaign, Gore won the popular vote, but eventually conceded defeat to Republican George W. Bush.", 
	Image: "https://lh3.googleusercontent.com/-L1jq5iRO8F0/AAAAAAAAAAI/AAAAAAAAADg/_jNY1FCEXSM/s0-c-k-no-ns/photo.jpg", 
	Lifespan: "1948 - Present"},
	{Name: "Reese Witherspoon", 
	Title: "Actress",
	Bio: "Reese Witherspoon is an Academy Award-winning actress. She is famous for her performances in 'Legally Blonde,' 'Walk the Line' and 'Wild.' Born in Louisiana in 1976, Reese Witherspoon began seriously pursuing her acting career after first enrolling at Stanford University. Her early critical successes included roles in films such as Pleasantville and Election, but it was her portrayal of Elle Woods in the box-office hit Legally Blonde that marked a turning point in her career. Witherspoon went on to win an Academy Award in 2005 for her role in Walk the Line. Recent films include Water for Elephants, This Means War and Wild. ", 
	Image: "http://images.boomsbeat.com/data/images/full/36914/reese-witherspoon-wallpaper-hd-jpg.jpg", 
	Lifespan: "1976 - Present"},
	{Name: "Usher", 
	Title: "Singer/Songwriter",
	Bio: "Usher is a successful American R&B and pop musician who began making music at age 15. His hit albums include My Way, Confessions and Looking 4 Myself. Born on October 14, 1978, in Chattanooga, Tennessee, Usher entered the fame game at age 14, two years after he moved with his mother and brother to Atlanta. After performing on Star Search, Usher landed a recording contract with LaFace Records. He released his first album in 1994, at age 15. For more than 15 years, Usher has dominated the airwaves, releasing such albums as Confessions (2004), which sold more than 1 million copies in its first week. In June 2012, he produced the album Looking 4 Myself, which found a No. 1 spot on Billboard's albums chart. Usher's songs have repeatedly landed at No. 1 on the charts, earning him several Grammy and People's Choice awards, among other honors.", 
	Image: "http://popcrush.com/files/2014/12/usher.jpg?w=630", 
	Lifespan: "1978 - Present"}
];
$(document).ready(function (){
	//Create an input field dynamically with jQuery
	
	$("div.loadpage")
		.append('<input type="text" class="userInput" name="userInput" placeholder="Please enter Bio here...">');
	
	//loop over array and place into DOM
	$.each(people, function (index, value){
		$("div.peopleContainer")
			.append(`<section><h1> ${value.Name}</h1><h3>${value.Title}</h3><img src='${value.Image}'><p>${value.Bio}</p><h3>${value.Lifespan}</h3></section>`);
	});
	
	//add border to selected section and set focus to input field
	$("section")
		.click(function(){
			$(".selected")
				.each(function() {
					$(this)
						.removeClass("selected");
			});
		$(this)
			.addClass("selected");
		$(".userInput").focus();
	});
	
	//replace bio information on selected element when typing in input field
	$(".userInput")
		.keyup(function (event) {
			var value = $(this)
				.val()
				$("section.selected")
					.find("p")
						.text(value);
	//clear input field on enter key
		if (event.which == 13) {
			$(".userInput").val("");
		}
	});

});



