<form class="request-form" id="request-form">
  <div class="loading-bar"></div>
  <div class="alert alert-box" role="alert">
      
  </div>
  <h4 class="full-width">Share <span>your requirements</span></h4>
  <p class="full-width">We'll get back to you with the guaranteed best pricing and availability.</p>
  <div class="form-group">
    <input type="text" class="form-control" id="firstname" name="first_name" minlength="3" maxlength="30" required/>
    <label class="form-group label" for="firstname">First name</label>
  </div>

  <div class="form-group">
    <input type="text" class="form-control" id="lastname" name="last_name" minlength="3" maxlength="30" required/>
    <label class="form-group label" for="lastname">Last name</label>
  </div>
  
  <div class="form-group">
    <input type="email" class="form-control" id="email" name="email"  required/>
    <label class="form-group label" for="email">johndoe@email.com</label>
  </div>

  <div class="form-group">
    <input type="tel" class="form-control intl-tel-country-code" id="tel" name="telephone_number" required/>
    <label for="tel"></label>
  </div>

  <div class="form-group">
    <select class="custom-select" id="space-type" name="space_type" required>
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
    <select class="custom-select" id="capacity" name="capacity" required>
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
    <label class="form-group label" for="duration">Capacity</label>
  </div>
  
  <div class="form-group">
    <input type="text" class="form-control date-picker" id="start-date" name="estimated_start_date" required/>
    <label class="form-group label" for="start-date">Estimated Start Date</label>
  </div>

  <div class="form-group">
    <select class="custom-select" id="duration" name="duration" required>
      <option selected style="display:none"></option>
      <option value="Hours">Hours</option>
      <option value="Days">Days</option>
      <option value="Weeks">Weeks</option>
      <option value="Months">Months</option>
      <option value="Years">Years</option>
    </select>
    <label class="form-group label" for="duration">Duration</label>
  </div>

  <div class="form-group full-width">
    <textarea class="form-control optional" id="additional-message" name="additional_inquiry" rows="3"></textarea>
    <label class="form-group label" for="additional-message">Additional requirements including budget location etc.</label>
  </div>

  <button class="btn form-btn" disabled="true">Send Inquiry</button>

  <small class="text-muted full-width">By completing, you accept the Coworker <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a></small>
</form>