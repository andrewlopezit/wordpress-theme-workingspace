<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <?php wp_head(); ?>

    <title><?php echo get_bloginfo().' | '.get_the_title();   ?></title>
</head>
<body>

<?php get_template_part('partials/header/main','main'); ?>