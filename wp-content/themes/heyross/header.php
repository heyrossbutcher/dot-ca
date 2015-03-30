<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<?php // Load Meta ?>
  <meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php  wp_title('|', true, 'right'); ?></title>
  <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />

  <link rel="shortcut icon" href="<?php bloginfo( 'template_url' ); ?>/favicon.ico" type="image/x-icon">
  <link rel="icon" href="<?php bloginfo( 'template_url' ); ?>/favicon.ico" type="image/x-icon">

  <?php wp_head(); ?>
  <?php // Load our CSS ?>
  <link rel="stylesheet" type="text/css" href="<?php bloginfo( 'stylesheet_url' ); ?>" />
  <link href='http://fonts.googleapis.com/css?family=Lato:300,400|Merriweather:900' rel='stylesheet' type='text/css'>
  <link href='http://code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">

</head>


<body <?php body_class(); ?>>
<header>
  <div class="wrapper clearfix">
    <div class="container masthead clearfix">
      <div class="logo">
        <h1>
          <a href="<?php echo home_url( '/' ); ?>" title="<?php bloginfo( 'name', 'display' ); ?>" rel="home">
            <?php bloginfo( 'name' ); ?>
          </a>
        </h1>
      </div>
      <div class="social">
        <?php $latestPosts = new wp_query(array(
          'post_type' => 'social',//Get the Social posts
          'posts_per_page' => -1
        )) ?>
        <?php if($latestPosts->have_posts()) while($latestPosts->have_posts()) : $latestPosts->the_post() ?>

          <div class="social_btns <?php the_field('which_social');  //Assign the class ?>">
            <a href="<?php the_field('link_to');  //put the link ?>" target="blank">
              <?php the_field('font_awesome_link');  //Get the icon ?>
            </a>
          </div>
          
        <?php endwhile; ?><!-- //end custom loop -->
        <div class="social_btns connect">Connect</div>
      </div>
    </div>

    <div class="jumbotron">
      <img src="<?php bloginfo( 'template_url' ); ?>/img/jumbotron.jpg" alt="">
    </div>
    <nav class="top_nav clearfix">
      <div class="main_nav">
        <?php wp_nav_menu( 'main-nav' ); ?><!-- Load in navigation -->
      </div>
    </nav>
  </div> <!-- /.container -->
</header><!--/.header-->


