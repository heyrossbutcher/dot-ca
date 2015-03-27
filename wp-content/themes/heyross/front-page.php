<?php 

/*
  Template Name: Custom Home Page
*/

get_header(); ?>

<div class="main">
  <div class="container">

    <?php wp_nav_menu( 'main-nav' ); ?><!-- Load in navication -->

    <div class="content">
      
      <section class="about">
        <?php //we are going to pull the about stuff ?>
          <?php $latestPosts = new wp_query(array(
            'post_type' => 'about',//we only want about pieces
            'posts_per_page' => -1
          )) ?> 
          <?php if($latestPosts->have_posts()) while($latestPosts->have_posts()) : $latestPosts->the_post() ?>
            <p><?php the_field('about_block');  //Get the About Block ?></p>
            <p>* * * * * * * * * * * * * * * *  </p>
              <?php //Get the list of skills ?>
              <?php $taxonomySkills = get_the_terms($post->ID, 'skills');
                foreach ($taxonomySkills as $taxonomySkill) {
                  echo '<div class="tech_item '.$taxonomySkill->name.'">'.$taxonomySkill->name.'</div>';
              }; ?>
              <p>* * * * * * * * * * * * * * * *  </p>
              <?php //Get the list of tools ?>
              <?php $taxonomyTools = get_the_terms($post->ID, 'tools');
                foreach ($taxonomyTools as $taxonomyTool) {
                  echo '<div class="tech_item '.$taxonomyTool->name.'">'.$taxonomyTool->name.'</div>';
              }; ?>
          <?php endwhile; // end of the loop. ?>
        <?php //End of grabbing About stuff ?>
      </section>
      
      <section class="work">
        <?php //we are going to pull in the latest portfolio pieces ?>
          <?php $latestPosts = new wp_query(array(
            'post_type' => 'work',//we only want portfolio pieces
            'posts_per_page' => -1
          )) ?> 
          <?php if($latestPosts->have_posts()) while($latestPosts->have_posts()) : $latestPosts->the_post() ?>

            <p><?php the_field('client');  //Get the Client Name ?> - <?php the_field('project_name');  //Get the Client Name ?></p>
            <p>- - - - - - - - - </p>
          <?php endwhile; // end of the loop. ?>
        <?php //End of grabbing Portfolio pieces ?>
      </section>

      <section class="thoughts">
        <?php //we are going to pull in the latest Blog pieces ?>
          <?php $latestPosts = new wp_query(array(
            'post_type' => 'posts',//we only want blog pieces
            'posts_per_page' => 4
          )) ?> 
          <?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
            <h1 class="entry-title"><?php the_title(); ?></h1>
            <p>- - - - - - - - - </p>
          <?php endwhile; // end of the loop. ?>
        <?php //End of grabbing blog pieces ?>
      </section>

      <section class="contact">
        <?php //we are going to pull in the Contact piece ?>
          <?php $latestPosts = new wp_query(array(
            'post_type' => 'contactme',//we only want portfolio pieces
            'posts_per_page' => 1
          )) ?> 
          <?php if($latestPosts->have_posts()) while($latestPosts->have_posts()) : $latestPosts->the_post() ?>
            <p><?php the_title();  //Get the Title ?></p>
            <?php the_content(); ?> 
            <p>- - - - - - - - - </p>
          <?php endwhile; // end of the loop. ?>
        <?php //End of grabbing Contact pieces ?>
        <p>are we still working!!!!!!!!!!!!!!!!!!!!!!!!!!</p>
      </section>

      <section class="thanks">
        <?php //we are going to pull in the latest portfolio pieces ?>
          <?php $latestPosts = new wp_query(array(
            'post_type' => 'filler',//we only want portfolio pieces
            'posts_per_page' => 1
          )) ?> 
          <?php if($latestPosts->have_posts()) while($latestPosts->have_posts()) : $latestPosts->the_post() ?>
            <p><?php the_title();  //Get the Title ?></p>
            <p><?php the_field('copy_block');  //Get the copy block ?></p>
            <p>- - - - - - - - - </p>
          <?php endwhile; // end of the loop. ?>
        <?php //End of Thnaks you ?>
      </section>

    </div> <!-- /.content -->

  </div> <!-- /.container -->
</div> <!-- /.main -->

<?php get_footer(); ?>