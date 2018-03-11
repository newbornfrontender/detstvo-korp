jQuery(document).ready(function() {
  // Блок категорий товаров
  jQuery('.products-show').click(function() {
    if (jQuery('.products-nav').hasClass('products-active')) {
      jQuery('.products-nav').removeClass('products-active');
      jQuery('.products-show').text('Показать ассортимент товаров').css('color', '#fff');
      jQuery('.products-show').css('margin-bottom', '25px');
    } else {
      jQuery('.products-nav').addClass('products-active');
      jQuery('.products-show').text('Скрыть ассортимент товаров').css('color', '#005580');
      jQuery('.products-show').css('margin-bottom', '10px');
    }
  });

  // Блок партнеров
  jQuery('.nav-item').click(function() {
    jQuery('.nav-item').removeClass('category-active');
    jQuery('.block-partners').removeClass('partners-active');
  });

  jQuery('#category-1').click(function() {
    jQuery('#category-1').addClass('category-active');
    jQuery('#partners-1').addClass('partners-active');
  });

  jQuery('#category-2').click(function() {
    jQuery('#category-2').addClass('category-active');
    jQuery('#partners-2').addClass('partners-active');
  });

  jQuery('#category-3').click(function() {
    jQuery('#category-3').addClass('category-active');
    jQuery('#partners-3').addClass('partners-active');
  });

  jQuery('#category-4').click(function() {
    jQuery('#category-4').addClass('category-active');
    jQuery('#partners-4').addClass('partners-active');
  });
});