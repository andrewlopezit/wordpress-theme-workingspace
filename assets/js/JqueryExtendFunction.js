function borderSize(positions, target) {
  var positions = positions.split(' ');

  var index = positions.findIndex(function(position){
    return position.includes(target);
  });
  
  return +positions[index].replace(target+'-', '');
}

jQuery.fn.extend({
    addBorder: function(position) {
      $elements = this;
      var primaryColor = getComputedStyle(document.documentElement)
                         .getPropertyValue('--primary-color');

      $($elements).each( function() {
        $element = $(this);
        
        $element.css('position', 'relative');

        var borderHTML = '<div style="position: absolute; top:0; border-top: 6px solid' +primaryColor+'" class="custom-border-top"></div>'+
        '<div style="position: absolute; right:0; border-right: 6px solid' +primaryColor+'" class="custom-border-right"></div>'+
        '<div style="position: absolute; bottom:0; border-bottom: 6px solid' +primaryColor+'" class="custom-border-bottom"></div>'+
        '<div style="position: absolute; left:0; border-left: 6px solid' +primaryColor+'" class="custom-border-left"></div>';
        $element.append(borderHTML);

        if(position.includes('top')) {
          var width = borderSize(position, 'top');

          $element.find('.custom-border-top').css({width: width+'%'});
        }

        if(position.includes('left')) {

          height = borderSize(position, 'left');
        
          $element.find('.custom-border-left').css({height: height+'%'});
        }

      });
    }
});