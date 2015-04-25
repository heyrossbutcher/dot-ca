<?php get_header(); ?>

<div class="main">
  <div class="container">

    <div class="content">
      <section class="my_post">
        <div class="wrapper">
            <div class="innerWrapper">
              <?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>

                <div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                  <h2 class="entry-title"><?php the_title(); ?></h2>
                  
                  <div class="entry-meta">
                    <?php heyross_posted_on(); ?>
                  </div><!-- .entry-meta -->
                  
                  <div class="entry-content">
                    <div class="setImage"> <?php the_post_thumbnail('blog'); ?></div>
                    <?php the_content(); ?>
                  </div><!-- #post-## -->

                <div id="nav-below" class="navigation clearfix">
                  <p class="nav-previous"><?php previous_post_link('%link', '&larr; %title'); ?></p>
                  <p class="nav-next"><?php next_post_link('%link', '%title &rarr;'); ?></p>
                </div><!-- #nav-below -->

              </div><!-- ///////////End out of INNER WRAPPER/////////// -->
              <div class="innerWrapper">
                <?php $comments = comments_template( '', false ); ?>
                <?php $comments; ?>
              </div><!-- ///////////End out of COMMENT WRAPPER/////////// -->
            <?php endwhile; // end of the loop. ?>
        </div> <!-- ///////////End out of WRAPPER/////////// -->
      </section> <!-- ///////////End out of SECTION/////////// -->
    </div> <!-- /.content -->
  </div> <!-- /.container -->
</div> <!-- /.main -->

<?php get_footer(); ?>