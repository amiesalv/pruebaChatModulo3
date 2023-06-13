
$(document).ready(function() {
  $(".contact").click(function() {
    var contact = $(this);
    var messageCount = contact.find(".message-count");
    var contactName = contact.find(".contact-name");

    messageCount.fadeOut(200, function() {
      messageCount.remove();
      contactName.removeClass("bold");
    });
  });
  
  $(function() {
    var scrollBtn = $("#scroll-btn-down");
    var container = $(".chat-body");
  
    scrollBtn.on("click", function() {
      if (container.length > 0) {
        var containerHeight = container.height();
        var scrollAmount = container[0].scrollHeight - containerHeight;
  
        container.animate({
          scrollTop: scrollAmount
        }, 500);
      }
    });
  });

  $(function() {
    var scrollBtnUp = $("#scroll-btn-up");
    var container = $(".chat-body");
  
    scrollBtnUp.on("click", function() {
      if (container.length > 0) {
        var scrollAmount = 0;
  
        container.animate({
          scrollTop: scrollAmount
        }, 500);
      }
    });
  });
});