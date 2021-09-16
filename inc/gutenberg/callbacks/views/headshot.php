<?php ob_start(); ?>
<div class="card gutenberg--headshot">
  <?php
    $image_profile_src = get_user_profile_src_by_id($args['id'] ?? null);

    if($image_profile_src):
  ?>
    <div class="card-img-top" alt="">
      <img src="<?php echo $image_profile_src; ?>"/>
    </div>
  <?php endif; ?>
  <div class="card-body">
    <?php if(isset($args['name'])) :?>
        <h4 class="card-title center"><mark><?php echo $args['name']; ?></mark></h4>
    <?php endif;?>
    <?php if(isset($args['position'])): ?>
        <p><?php echo $args['position']; ?></p>
    <?php endif;?>
  </div>
</div>