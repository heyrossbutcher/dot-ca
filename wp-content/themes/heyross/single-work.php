<?php

/*
  Template Name: Work Page
*/

get_header(); ?>

<div class="main">
  <div class="container">

    <div class="content">
      <section class="my_post">
        <div class="wrapper">
            <div class="innerWrapper">
              <?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>

                <div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                  <h2 class="entry-title"><?php the_title(); ?></h2>


                  <div class="entry-content">
                    <div class="setImage"> <?php the_post_thumbnail('blog'); ?></div>
                    <?php the_content(); ?>
                    <?php wp_link_pages(array(
                      'before' => '<div class="page-link"> Pages: ',
                      'after' => '</div>'
                    )); ?>
                  </div><!-- .entry-content -->

                  <div class="entry-utility">
                    <?php heyross_posted_in(); ?>
                    <?php edit_post_link( 'Edit', '<span class="edit-link">', '</span>' ); ?>
                  </div><!-- .entry-utility -->
                </div><!-- #post-## -->

                <div id="nav-below" class="navigation">
                  <p class="nav-previous"><?php previous_post_link('%link', '&larr; %title'); ?></p>
                  <p class="nav-next"><?php next_post_link('%link', '%title &rarr;'); ?></p>
                </div><!-- #nav-below -->
              </div><!-- ///////////End out of INNER WRAPPER/////////// -->
            <?php endwhile; // end of the loop. ?>
        </div> <!-- ///////////End out of WRAPPER/////////// -->
      </section> <!-- ///////////End out of SECTION/////////// -->
    </div> <!-- /.content -->
  </div> <!-- /.container -->
</div> <!-- /.main -->

<?php get_footer(); ?>