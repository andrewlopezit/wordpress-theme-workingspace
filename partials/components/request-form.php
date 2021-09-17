<form class="request-form" id="request-form">
  <div class="form-group">
    <input type="text" class="form-control" id="firstname" name="firstname" required/>
    <label class="form-group label" for="firstname">First name</label>
  </div>

  <div class="form-group">
    <input type="text" class="form-control" id="lastname" name="lastname" required/>
    <label class="form-group label" for="lastname">Last name</label>
  </div>
  
  <div class="form-group">
    <input type="email" class="form-control" id="email" name="email"  required/>
    <label class="form-group label" for="email">johndoe@email.com</label>
  </div>

  <div class="form-group">
    <input type="tel" class="form-control intl-tel-country-code" id="tel" name="tel" required/>
    <label for="tel"></label>
  </div>

  <div class="form-group">
    <select class="custom-select" id="space-type" name="space_type">
      <option selected style="display:none"></option>
      <?php 
        $cat_id = get_cat_ID('workingspaces');
        $categories = get_categories(array("child_of" => $cat_id, "hide_empty" => 0));

        foreach($categories as $category) :
      ?>
      <?php print_r($category);?>
      <option value="<?php echo $category->term_id ?>"><?php echo $category->name; ?></option>
      <?php endforeach; ?>
    </select>
    <label class="form-group label" for="space-type">Space Type</label>
  </div>

  <div class="form-group">
    <select class="custom-select" id="capacity" name="capacity">
      <option selected style="display:none"></option>
      <?php 
        $maxCapacity = 5;
        for($capacity = 1; $capacity < $maxCapacity; $capacity++) :
      ?>
      <?php print_r($category);?>
      <option value="<?php echo $capacity ?>"><?php echo $capacity; ?></option>
      <?php endfor; ?>
      <option value="5+">5+</option>
    </select>
    <label class="form-group label" for="tel">Capacity</label>
  </div>
  
  <div class="form-group">
    <input type="text" class="form-control date-picker" name="lastname" required/>
    <label class="form-group label" for="lastname">Last name</label>
  </div>
</form>