/* golboal */
$(function (){
  
  'use strict';
  
    var myheader = $('.header');
    
    myheader.height($(window).height());
    
    $(window).resize(function(){
        
       myheader.height($(window).height());
         
    });
    
    $('.links li').click(function(){
        
        $(this).addClass('active').siblings().removeClass('active');
    });
        
    
    
  });