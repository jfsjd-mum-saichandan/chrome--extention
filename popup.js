document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("copy-button").addEventListener("click", function() {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          func: function() {
            const selection = window.getSelection().toString();
            navigator.clipboard.writeText(selection);
          }
        });
      });
    });
  });