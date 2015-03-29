<?php 

/*
  Template Name: Custom Home Page
*/

get_header(); ?>

<div class="main">
  <div class="container">

    <div class="content">
      
      

      <?php $items = wp_get_nav_menu_items( 'main-nav' ); ?>
      <?php $subitems = $items[0]; ?> 
      <?php //pre_r($postid); ?> 
      
      <section class="about">
        <div class="wrapper">
          <div class="innerWrapper">
            <div class="title"><h2>About</h2></div>
            <?php //we are going to pull the about stuff ?>
              <?php $latestPosts = new wp_query(array(
                'post_type' => 'about',//we only want about pieces
                'posts_per_page' => -1
              )) ?> 
              <?php if($latestPosts->have_posts()) while($latestPosts->have_posts()) : $latestPosts->the_post() ?>

                <?php $aboutId = get_the_ID(); //Get the post id?>
                <?php //pre_r($postid); ?> 

                <div class="about_block">
                  <p><?php the_field('about_block');  //Get the About Block ?></p>
                </div>

                <?php if($aboutId == 21) : ?>
                    <?php //Get the list of skills ?>
                      <div class="spacer">
                        <?php $taxonomySkills = get_the_terms($post->ID, 'skills');
                          foreach ($taxonomySkills as $taxonomySkill) {
                            echo '<div class="skills '.$taxonomySkill->name.'">'.$taxonomySkill->name.'</div>';
                        }; ?>
                      </div>
                <?php else: ?>
                    <?php //Get the list of skills ?>
                    <?php $taxonomySkills = get_the_terms($post->ID, 'skills');
                      foreach ($taxonomySkills as $taxonomySkill) {
                        echo '<div class="skills '.$taxonomySkill->name.'">'.$taxonomySkill->name.'</div>';
                    }; ?>
                <?php endif; ?>   


                  <?php //Get the list of tools ?>
                  <?php $taxonomyTools = get_the_terms($post->ID, 'tools');
                    foreach ($taxonomyTools as $taxonomyTool) {
                      echo '<div class="skills '.$taxonomyTool->name.'">'.$taxonomyTool->name.'</div>';
                  }; ?>
                <?php endwhile; // end of the loop. ?>
              <?php //End of grabbing About stuff ?>
              </div><!-- ///////////End out of INNER WRAPPER/////////// -->
          </div><!-- ///////////End out of WRAPPER  /////////// -->
      </section><!-- ///////////End out of ABOUT/////////// -->
      
      <section class="work">
        <div class="wrapper">
          <div class="innerWrapper">
            <div class="title"><h2>Work</h2></div>
          </div><!-- ///////////End out of INNER WRAPPER/////////// -->
         </div> <!-- ///////////End out of WRAPPER/////////// -->
            <?php //we are going to pull in the latest portfolio pieces ?>
              <?php $latestPosts = new wp_query(array(
                'post_type' => 'work',//we only want portfolio pieces
                'posts_per_page' => -1
              )) ?> 
              <?php if($latestPosts->have_posts()) while($latestPosts->have_posts()) : $latestPosts->the_post() ?>
                <div class="wrapper">
                  <div class="innerWrapper">
                    <?php $workId = get_the_ID(); //Get the work id ?>
                    
                    <div class="workItem clearfix" data-num="<?php the_ID(); ?>" data-colour="<?php the_field('hover_colour');  //Get the Hover colour ?>"> 
                      <div class="titleFloat">
                        <h3><?php the_field('client');  //Get the Client Name ?> - <?php the_field('project_name');  //Get the Client Name ?></h3>
                      </div>
                      <div class="iconFloat">
                        <?php $taxonomyTasks = get_the_terms($post->ID, 'materials');

                            foreach ($taxonomyTasks as $taxonomyTask) {
                              $task = $taxonomyTask->slug;
                              //pre_r($task); 
                               if( $task == 'design' ):
                                 echo '<div class="icons" alt="Design" title="Design"><i class="fa fa-pencil"></i></div>';
                               elseif($task == 'animation' ):
                                 echo '<div class="icons" alt="Animation" title="Animation"><i class="fa fa-spinner"></i></div>';
                               else:
                                 echo '<div class="icons" alt="Programming" title="Programming"><i class="fa fa-code"></i></div>';
                               endif;
                              //echo '<div class="tasks '.$taxonomyTask->name.'">'.$taxonomyTask->name.'</div>';
                          }; ?>
                      </div><!-- ///////////End out of ICON FLOAT  /////////// -->
                    </div><!-- ///////////End out of WORK ITEM  /////////// -->
                  </div><!-- ///////////End out of Inner WRAPPER  /////////// -->
                  <div class="work_img wp_<?php the_ID(); ?>">
                  </div>
                </div><!-- ///////////End out of WRAPPER  /////////// -->
              <?php endwhile; // end of the loop. ?>
            <?php //End of grabbing Portfolio pieces ?>
        

      </section><!-- ///////////End out of WORK/////////// -->

      <section class="thoughts">
        <div class="wrapper">
          <div class="blogWrapper clearfix">
            <div class="title"><h2>Blog</h2></div>
            <?php //we are going to pull in the latest Blog pieces ?>
              <?php $latestPosts = new wp_query(array(
                'post_type' => 'posts',//we only want blog pieces
                'posts_per_page' => 4
              )) ?> 
              <?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
                <div class="blog_post">
                  <h3 class="entry-title"><?php the_title(); ?></h3>
                </div>
              <?php endwhile; // end of the loop. ?>
            <?php //End of grabbing blog pieces ?>
          </div><!-- ///////////End out of BLOG WRAPPER/////////// -->
        </div><!-- ///////////End out of WRAPPER  /////////// -->
      </section><!-- ///////////End out of BLOG/////////// -->

      <section class="contact">
        <div class="wrapper">
          <div class="innerWrapper">
            <div class="title"><h2>Contact</h2></div>
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
          </div><!-- ///////////End out of INNER WRAPPER/////////// -->
        </div><!-- ///////////End out of WRAPPER  /////////// -->
      </section><!-- ///////////End out of CONTACT/////////// -->

      <section class="thanks">
        <div class="wrapper">
          <div class="innerWrapper">
            <div class="title"><h2>Thanks</h2></div>
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
            <?php //End of Thanks ?>
          </div><!-- ///////////End out of INNER WRAPPER/////////// -->
        </div><!-- ///////////End out of WRAPPER  /////////// -->
      </section><!-- ///////////End out of THANKS/////////// -->

    </div> <!-- /.content -->

  </div> <!-- /.container -->
</div> <!-- /.main -->

<?php get_footer(); ?>