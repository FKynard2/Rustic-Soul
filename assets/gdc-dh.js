$(document).ready(function(){
  console.log('hfgd');

  $('.search-tab-link').on('click',function(e){
    e.preventDefault();
    console.log('click');
    var parent = $(this).closest('.search-section-tab');
    var contentParent = $(this).closest('.search-section-content');
    $('.search-section-tab').removeClass('search-section-tab-active');
    parent.addClass('search-section-tab-active');
    if ($(this).hasClass('local-search-tab')) {
      contentParent.addClass('local-search-form').removeClass('site-search-form');
      $('#realSubmit').attr('disabled',true);
    } else {
      contentParent.removeClass('local-search-form').addClass('site-search-form');
      $('#realSubmit').attr('disabled',false);
    }
  });

  $('#fakeSearch').on('change', function(){
    var terms = $(this).val();
    console.log(terms);
    $('#realStateSearch').val("vendor:ohio " + $(this).val() );
    var rawURL = `https://rustic-soul-artisans.myshopify.com/search?type=product&searchInCollection=ohio&q=${terms}`
    var searchUrl = encodeURI(rawURL);
    console.log(searchUrl);
    window.location.href = searchUrl;
  });
  $('.featured-product--section-side-by-side .product-gallery-inner').slick({
    nextArrow: $('#nextArrow'),
    prevArrow: $('#prevArrow')
  });
  $('.home-search-tab-link').on('click', function(e){
    e.preventDefault();
    $('.search--section-homepage .home-section--title-container').removeClass('home-section--title-container-active');
    $('.search--section-homepage .tabbed-search-content').removeClass('tabbed-search-content-active');
    $('.search--section-homepage .search-tab').removeClass('search-tab-active');
    $(this).parent().addClass('search-tab-active');
    
    var scope = $(this).data('tab');
    console.log(scope);
    if ( scope == "local" ) {
      $('.home-section--title-container-local').addClass('home-section--title-container-active');
      $('#stateCollectionDropdown').addClass('tabbed-search-content-active');
    } else {
      $('.home-section--title-container-site').addClass('home-section--title-container-active');
      $('#liveSearch').addClass('tabbed-search-content-active');
    }

  });
  $('#stateCollectionDropdown select').on('change',function(){
    var newUrl = "/collections/" + $(this).val();
    console.log($(this).val());
    window.location.href = newUrl;
  });
});