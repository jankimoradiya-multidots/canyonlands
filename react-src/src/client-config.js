/**
 * Config File.
 *
 * @package Canyonlands
 */
const config = {
	siteURL: 'http://mdhackathon.local/',
	headerMenuLocation: 'canyonlands-menu-header',
	footerMenuLocation: 'canyonlands-hcms-menu-footer',
	siteTitle: 'Canyonlands React Theme', // Will be used if we don't set site title from WordPress customizer.
	siteDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", // Will be used if we don't set site description from WordPress customizer.
	copyrightText: '© 2021 Canyonlands.',
	footerMenuTitle: 'About the site',
	homePagePostType: 'post', // Will be used to display 3 latest post on home page of given post type
	homePageTaxonomy: 'category', // // Will be used to display 3 taxonomies on home page of given post type,
	heroSection: {
		heroTitle: 'Amazing world.',
		heroDescription: 'Discover more than just common Landscapes. Try to live inside of the wild nature. Create your own story. Unforgettable and nonrepeating by nobody.',
		heroImgURL: '/images/mountain-illustration.png',
		heroBtnTxt: 'Explore My World',

	},
	searchSection: {
		searchBackURL: '/images/search-background.png',
		searchPlaceholderTxt: '',
		images: [
			{
				src: '/images/bag.png',
				name: 'Solo'
			},
			{
				src: '/images/airplane.png',
				name: 'Flight'
			},
			{
				src: '/images/group.png',
				name: 'Group'
			},
		]
	},
	featuredPostsSection: {
		featuredPostHeading: 'Featured Posts'
	},
	latestPostsSection: {
		latestPostHeading: 'Latest Posts'
	},
	defaultPostImage: '/images/default.jpg', // Used for default post or pages.
};

export default config;
