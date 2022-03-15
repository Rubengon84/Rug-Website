


$(document).ready( () => {
  
  const questions = $(".questions");

  questions.each(function () {
    $(this).click(function(){
     $ (this.nextElementSibling).slideToggle("slow")
      })
    
  });

});