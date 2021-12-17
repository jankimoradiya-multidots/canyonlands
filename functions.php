<?php




if ( ! function_exists( 'canyonlands_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function canyonlands_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on ask, use a find and replace
		 * to change 'ask' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'canyonland', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus(
			array(
				'header-menu' => esc_html__( 'Header Menu', 'canyonland' ),
				'footer-menu' => esc_html__( 'Footer Menu', 'canyonland' ),
			)
		);

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
			)
		);

		// Set up the WordPress core custom background feature.
		add_theme_support(
			'custom-background',
			apply_filters(
				'ask_custom_background_args',
				array(
					'default-color' => 'ffffff',
					'default-image' => '',
				)
			)
		);

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support(
			'custom-logo',
			array(
				'height'      => 250,
				'width'       => 250,
				'flex-width'  => true,
				'flex-height' => true,
			)
		);
	}
endif;
add_action( 'after_setup_theme', 'canyonlands_setup' );


/**
 * Register the routes for the objects of the controller.
 */


add_action( 'rest_api_init', 'canyonlands_rest_endpoints' );

function canyonlands_rest_endpoints() {
	register_rest_route(
		'wp/v2',
		'menu',
		array(
			'methods'             => 'GET',
			'callback'            => 'get_header_menu',
			'permission_callback' => '__return_true',
		)
	);

	register_rest_route(
		'canyonlands/v2',
		'postType',
		array(
			'methods'             => 'GET',
			'callback'            => 'get_canyonlands_post_type',
			'permission_callback' => '__return_true',
		)
	);

}

function get_header_menu() {
	// Replace your menu name, slug or ID carefully
	return wp_get_nav_menu_items( 'header-menu' );
}

function get_canyonlands_post_type( WP_REST_Request $request ) {

		$response   = array();
		$parameters = $request->get_params();
		$url        = ! empty( $parameters['url'] ) ? $parameters['url'] : '';
		$post_name  = '';
		$post_type  = '';
		$id = url_to_postid( $url );
		if ( $id ) {
			$post      = get_post( $id );
			$post_type = $post->post_type;
			$post_name = $post->post_name;
		}

		$response['postType'] = $post_type;
		$response['id'] = $id;
		$response['post_name'] = $post_name;
		return new WP_REST_Response( $response, 200 );
}
