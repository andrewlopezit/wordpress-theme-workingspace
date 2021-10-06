<form class="categories --workingspaces">
    <h5>Available spaces:</h5>
    <div class="categories-container">
        <?php 
            $cat_id = get_cat_ID('workingspaces');
            $categories = get_categories(array("child_of" => $cat_id, "hide_empty" => 0));

            $related_categories = get_workingspaces_related_room_categories();
            if($categories && $related_categories) : foreach($categories as $category) :
                
        ?>
        <div class="input-group">
            <input type="checkbox" disabled  <?php echo in_array($category, $related_categories) ? 'checked' : ''; ?>>
            <label><?php echo $category->name;  if(in_array($category, $related_categories)) 'Yess in'; ?></label>
        </div>
        <?php endforeach;endif; ?>
    </div>
</form>
