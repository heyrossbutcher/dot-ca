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
          <!-- Get the main icon and name -->
          <?php if( is_front_page() ) : ?>
            <a href="#jumbotron" title="<?php bloginfo( 'name', 'display' ); ?>" rel="home">
              <?php bloginfo( 'name' ); ?>
            </a>
          <?php else :?>
            <a href="<?php echo home_url( '/' ); ?>" title="<?php bloginfo( 'name', 'display' ); ?>" rel="home">
              <?php bloginfo( 'name' ); ?>
            </a>            
          <?php endif ?>
        </h1>
      </div>
      <?php $latestPosts = new wp_query(array(
        'post_type' => 'social',//Get the Social posts
        'posts_per_page' => -1
      )) ?>
      <div class="connect_me">
        <!-- <div class="call">
          Reach me at <span class="phone-number">647.668.6850</span>
        </div> -->
          <!-- Get the social icons -->
        <div class="social">

          <div class="social_btns connect">Connect at</div>
          <?php if($latestPosts->have_posts()) while($latestPosts->have_posts()) : $latestPosts->the_post() ?>
            
              <div class="social_btns <?php the_field('which_social');  //Assign the class ?>">
                <a href="<?php the_field('link_to');  //put the link ?>" target="blank" title="<?php the_field('which_social');  //Assign the class ?>" alt="<?php the_field('which_social');  //Assign the class ?>">
                  <?php the_field('font_awesome_link');  //Get the icon ?>
                </a>
              </div>
            
          <?php endwhile; ?><!-- //end custom loop -->
          <!-- <div class="call">CALL 647.668.6850</div> -->
        </div><!-- End of Social -->
      </div><!-- End of connect me -->
    </div><!-- End of container -->
    
    <!-- Check if Front-page or inner page -->
    <div class="wrapper" id="jumbotron">
      <?php if(is_front_page()) : ?>
        <div class="jumbotron_static"></div>
        
        <div class="jumbotron">
            <div class="click_label hide">Click to begin</div>
            <div class="instruct">
              <div class="controls">
                <div class="draw key_btns">Tap <span class="letter_border d"><span class="inner_border">D</span></span> and draw</div>
                <div class="erase key_btns">Tap <span class="letter_border e"><span class="inner_border">E</span></span> and erase</div>
                <div class="refine key_btns">Tap <span class="letter_border r"><span class="inner_border">R</span></span> and click to refine</div>
                <div class="refine key_btns"><span class="letter_border reset">Clear</span></div>
              </div>
            </div>
            <div class="draw_btn hide"></div>
        </div>
        <nav class="top_nav clearfix">
          <div class="nav_shower hide">
            <i class="fa fa-bars"></i>
          </div>
          <div class="main_nav">
            <?php wp_nav_menu( 'main-nav' ); ?><!-- Load in navigation -->
          </div>
        </nav>
      <?php else :?>
        <nav class="post_nav clearfix main-nav-scrolled">
          <div class="nav_shower hide">
            <i class="fa fa-bars"></i>
          </div>
          <div class="main_nav">
            <?php wp_nav_menu( 'inner_nav' ); ?><!-- Load in navigation -->
          </div>
        </nav>
      <?php endif ?>

  </div> <!-- /.wrapper -->
  
</header><!--/.header-->


