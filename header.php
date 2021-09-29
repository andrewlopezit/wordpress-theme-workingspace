<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="google-signin-client_id" content="529982814390-6j4311bav2bd6qf4pe34fs85j19sk4im.apps.googleusercontent.com">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
    <?php wp_head(); ?>

    <title><?php echo get_bloginfo().' | '.get_the_title();   ?></title>
</head>
<body <?php body_class(); ?>>

<?php get_template_part('partials/header/main'); ?>
<?php get_template_part('partials/content/content','auth'); ?>