(function($){

$(function() {
  $('form.signup-form').submit(function() {
    var n = $('#entry_0').val(),
        e = $('#entry_1').val(),
        $this = $(this),
        $signup = $this.closest('.signup');

    $('.error').empty().removeClass('error');

    if ($.trim(n) && $.trim(e)) {
      $this.fadeTo(100, 0.5);

      $this.replaceWith('<p class="thanks">Thanks for signing up -- we&rsquo;ll be in touch!</p>');
      $('.error-msg .inner, .extra-info').fadeOut();
      return true;
    }

    $('.error-msg .inner')
      .text('Please fill out both fields')
      .fadeIn();

    return false;
  });

});

}(jQuery));

