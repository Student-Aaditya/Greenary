document.addEventListener("DOMContentLoaded", function () {
  var triggerTabList = document.querySelectorAll('#workTabs button'); // Select all buttons inside #workTabs
  var tabContentList = document.querySelectorAll('.tab-pane'); // Select all tab content sections

  triggerTabList.forEach(function (tab) {
    tab.addEventListener('click', function (event) {
      event.preventDefault();

      // Remove 'active' class from all tab buttons
      triggerTabList.forEach(function (btn) {
        btn.classList.remove('active');
      });

      // Hide all tab content sections
      tabContentList.forEach(function (content) {
        content.classList.remove('show', 'active');
      });

      // Add 'active' class to the clicked tab
      this.classList.add('active');

      // Get the target tab content ID from the button's data attribute
      var targetTab = this.getAttribute('data-bs-target') || this.getAttribute('href');

      if (targetTab.startsWith('#')) {
        var targetContent = document.querySelector(targetTab);
        if (targetContent) {
          targetContent.classList.add('show', 'active');
        }
      }
    });
  });
});
