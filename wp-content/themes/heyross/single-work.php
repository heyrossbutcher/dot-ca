<?php

/*
  Template Name: Work Page
*/

get_header(); ?>

<div class="main">
  <div class="container">

    <div class="content">
      <section class="my_post work_post">
        <div class="wrapper">
            <div class="workWrapper">
              <?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>

                <!-- Load in the previous next pagination for all the work -->
                <div id="nav-below" class="navigation">
                  <p class="nav-previous"><?php previous_post_link('%link', '&larr; %title'); ?></p>
                  <p class="nav-next"><?php next_post_link('%link', '%title &rarr;'); ?></p>
                </div><!-- End #nav-below -->

                <!-- Get the title of the piece -->
                <div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                  <h2 class="entry-title"><?php the_field('client');  //Get the Client Name ?> - <?php the_field('project_name');  //Get the Project Name ?></h2>
                  
                  <!-- Get the key image and initial write up for the piece -->
                  <div class="work-first-box clearfix">
                      <div class="key-image work-image">
                        <?php 
                          $keyImage = get_field('key_image');
                          $size = 'full'; 
                        ?>
                       <a href="<?php the_field('key_image_link'); ?>" target="_"><img src="<?php echo $keyImage[url]; ?>" /></a> 
                    </div>
                    <div class="key-copy">
                      <?php the_field('large_writeup');  //Get the large write-up ?>
                    </div>
                  </div>
                  
                  <!-- Get any subsequent images and write ups -->
                  <div class="work-extra-box clearfix">
                    <?php while(has_sub_field('work_series')) : ?>
                      <?php $subImage = get_sub_field('image_series'); ?>
                      <?php $subLink = get_sub_field('video_series'); ?>

                      <!-- This IF statement checks if there's a custom link for the image or just the default enlarge image link is needed -->
                      <?php if($subLink) : ?>
                         <div class="secondary-image work-image">
                           <a href="<?php the_sub_field('video_series'); ?>" target="_"><img src="<?php echo $subImage[url]; ?>" ></a>
                         </div>
                      <?php else :?>
                          <div class="secondary-image view-image">
                            <a href="<?php echo $subImage[url]; ?>" target="_"><img src="<?php echo $subImage[url]; ?>" ></a>
                          </div> 
                      <?php endif ?>

                        <?php $subText = get_sub_field('text_series'); ?>
                          <!-- This IF statement checks if there's a custom text for the image -->
                        <?php if($subText) : ?>
                        <div class="secondary-copy">
                              <p><?php the_sub_field('text_series'); ?></p>
                        </div>
                           <?php else :?>
                               <p></p>
                           <?php endif ?>
                         
                    <?php endwhile //end sub fields loop ?>
                  </div>

                </div><!-- #post-## -->
              </div><!-- ///////////End out of INNER WRAPPER/////////// -->
            <?php endwhile; // end of the loop. ?>
            <?php wp_reset_postdata(); ?>
        </div> <!-- ///////////End out of WRAPPER/////////// -->
      </section> <!-- ///////////End out of SECTION/////////// -->
    </div> <!-- /.content -->
  </div> <!-- /.container -->
</div> <!-- /.main -->

<?php get_footer(); ?>