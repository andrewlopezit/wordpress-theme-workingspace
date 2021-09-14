<?php ob_start() ?>
<div class="gutenberg--icon <?php echo isset($args['align']) ? $args['align']  : ''?>" style="--size:<?php echo $args['size']; ?>px;
     --src:url(<?php echo WORKINGSPACE_ASSETS_URI.'icons/'.$args['slug'].'.svg' ?>) no-repeat 100% 100%;
     --color:<?php echo $args['color']; ?>">
</div>