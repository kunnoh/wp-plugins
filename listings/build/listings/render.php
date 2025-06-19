<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

$listing_to_show = isset($attributes['listingsToShow']) ? intval($attributes['listingsToShow']) : 10;
$order = isset($attributes['order']) ? $attributes['order'] : 'desc';
$order_by = isset($attributes['orderBy']) ? $attributes['orderBy'] : 'date';

$args = array(
    'post_type' => 'listing',
    'posts_per_page' => $listing_to_show,
    'post_status' => 'publish',
    'order' => $order,
    'orderby' => $order_by,
    'ignore_sticky_posts' => true,
    'no_found_rows' => true,
);

// Get posts
$listings = new WP_Query($args);
?>

<div <?php echo get_block_wrapper_attributes(); ?>>
    <?php if (empty($listings)) : ?>
        <div class="no-listings-found">
            <p><?php esc_html_e('No listings found.', 'listings'); ?></p>
        </div>
    <?php else : ?>
        <div class="listings-container">
            <?php foreach ($listings as $listing) : ?>
                <div class="listing-item">
                    <h3><?php echo esc_html(get_the_title($listing)); ?></h3>
                </div>
            <?php endforeach; ?>
        </div>
    <?php endif; ?>
</div>

<!-- // $listing_to_show = isset($attributes['listingsToShow']) ? intval($attributes['listingsToShow']) : 10;
// $order = isset($attributes['order']) ? $attributes['order'] : 'desc';
// $order_by = isset($attributes['orderBy']) ? $attributes['orderBy'] : 'date';

// $args = array(
//     'post_type' => 'listing',
//     'posts_per_page' => $listing_to_show,
//     'post_status' => 'publish',
//     'order' => $order,
//     'orderby' => $order_by,
//     'ignore_sticky_posts' => true,
//     'no_found_rows' => true,
// );

// // Execute query
// $listings = new WP_Query($args);

// // Check if listings exist
// if (!$listings->have_posts()) {
//     return '<div class="wp-block-listings-block">
//                 <div class="row">
//                     <p>' . __('No listings found.', 'listings') . '</p>
//                 </div>
//             </div>';
// }

// // Build the output
// $output = '<div class="wp-block-listings-block">';
// $output .= '<div class="row">';
// $output .= '<h2>' . __('Listings', 'listings') . '</h2>';
// $output .= '<ul>';

// while ($listings->have_posts()) {
//     $listings->the_post();
//     $title = get_the_title();
//     // $permalink = get_permalink();
//     // $date = get_the_date();
//     // $excerpt = get_the_excerpt();
//     $output .= '<li>' . esc_html($title) . '</li>';
// }

// $output .= '</ul>';
// $output .= '</div>';
// $output .= '</div>';

// // Clean up
// wp_reset_postdata();
// // return output
// return $output; -->