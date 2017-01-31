
var simpleDOM = {
   head: {
		tagName: 'head',
		childNodes:[
         {tagName: 'meta', charset: 'utf-8'},
			{tagName: 'title', textContent : 'PROJECT' },
			{tagName: 'link', href: './css/style.css',  rel: 'stylesheet' }
		] 
	},

	body: {
		tagName: 'body',
      classes: '',
		id: '',
		styles: {fontFamily: 'sans-serif'},
		childNodes: [
			{ 
				tagName: 'div',
				id: '',
				classes: 'app-container',
				childNodes: [
					{ 
						tagName: 'nav',
						classes: 'navbar mobile-styles',
						styles: { padding: '10px',	borderBottom: '2px solid #333' },
						childNodes: [
							{ 
								tagName: 'img', 
								src: 'http://emblemsbf.com/img/48869.jpg', 
								alt: 'logo', 
								classes: 'nav-logo', 
								styles: { display: 'inline-block', width: '120px', marginRight: '100px'}
			
						  },
							{ tagName: 'button', classes: 'nav-button', textContent: 'Log In'}
						],
						
					},
					{
						tagName: 'div',
						classes: 'jumbotron cool-bg',
						styles: {background: 'lightblue', padding: '40px'},
						childNodes: [
							{ tagName: 'h1', classes: 'major-title', textContent: 'Curated Content for You' },
							{ tagName: 'p',  classes: 'about-us', textContent: 'You should really get to know us (site under construction).' },
							{ tagName: 'button', classes: 'c2a more-info', textContent: 'Find out more' }
						]
					},
					{
						tagName: 'footer',
						classes: 'footer-icons small-footer',
						styles: {textAlign: 'right', background: '#ddd', padding: '14px'},
						childNodes: [
							{ tagName: 'img', src: 'https://cdn0.iconfinder.com/data/icons/social-flat-rounded-rects/512/instagram-256.png' , alt:"ig-logo", styles: {display: 'inline-block', width: '80px'}  },
							{ tagName: 'img', src: 'https://cdn0.iconfinder.com/data/icons/social-flat-rounded-rects/512/twitter-256.png' , alt:"tw-logo", styles: {display: 'inline-block', width: '80px'}},
							{ tagName: 'img', src: 'https://cdn0.iconfinder.com/data/icons/social-flat-rounded-rects/512/facebook-256.png' , alt:"fb-logo", styles: {display: 'inline-block', width: '80px'}}
						]
					}
				]
			}
		]
	},
}

console.log(simpleDOM)