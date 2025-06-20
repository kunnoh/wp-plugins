<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

    $listing_to_show = isset($attributes['postsToShow']) ? intval($attributes['postsToShow']) : 10;
    $order = isset($attributes['order']) ? $attributes['order'] : 'desc';
    $order_by = isset($attributes['orderBy']) ? $attributes['orderBy'] : 'date';

    $args = array(
        // 'post_type' => 'listing',
        'posts_per_page' => $listing_to_show,
        'post_status' => 'publish',
        'order' => $order,
        'orderby' => $order_by,
        'ignore_sticky_posts' => true,
        'no_found_rows' => true,
    );

    // Get posts
    $query = new WP_Query($args);
    $listings = $query->posts;
    $title = $listings[0]->post_title;
    
    echo '<pre>';
        print_r($listings[0]);
    echo '</pre>';
?>

<div>
    <?php if (empty($listings)) : ?>
        <div class="no-listings-found">
            <p><?php esc_html_e('No listings found.', 'listings'); ?></p>
        </div>
    <?php else : ?>
        <div class="listings-container">
            <h1>Listings</h2>
            <?php foreach ($listings as $index => $listing) : ?>
                <div class="listing-item">
                    <ul>
                        <li><?php echo esc_html(($index + 1) . ". " . $listing->post_title); ?></li>
                    </ul>
                </div>
            <?php endforeach; ?>
        </div>
    <?php endif; ?>
    <?php wp_reset_postdata();?>
</div>
