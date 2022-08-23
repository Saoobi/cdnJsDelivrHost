(function () {
  /*document.getElementById('closeInvite').onclick = function () { embedded_svc.inviteAPI.inviteButton.rejectInvite(); };
  document.getElementById('rejectInvite').onclick = function () { embedded_svc.inviteAPI.inviteButton.rejectInvite(); }; // use this API call to reject invitations*/
  document.getElementById("acceptInvite").onclick = function () {
    embedded_svc.inviteAPI.inviteButton.acceptInvite();
  }; // use this API call to start chat from invitations
  document.addEventListener("keyup", function (event) {
    if (event.keyCode == 27) {
      embedded_svc.inviteAPI.inviteButton.rejectInvite();
    }
  });

  // Wait 3 seconds for the chat script to be loaded
  setTimeout(function () {
    // Watch the chat button
    var helpButtonDom = document.getElementsByClassName(
      "embeddedServiceHelpButton"
    )[0];
    var elemToObserve = helpButtonDom.getElementsByClassName("uiButton")[0];

    // on load, do the same as the chat button
    var buttonDisabled = elemToObserve.classList.contains("helpButtonDisabled");
    var buttonEnabled = elemToObserve.classList.contains("helpButtonEnabled");
    if (buttonEnabled) {
      document.getElementById("acceptInvite").classList.remove("disabled");
    } else if (buttonDisabled) {
      document.getElementById("acceptInvite").classList.add("disabled");
    }

    // Watch the chat button behavior and do the same
    var observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.attributeName == "class") {
          var buttonDisabled =
            mutation.target.classList.contains("helpButtonDisabled");
          var buttonEnabled =
            mutation.target.classList.contains("helpButtonEnabled");
          if (buttonEnabled) {
            document
              .getElementById("acceptInvite")
              .classList.remove("disabled");
          } else if (buttonDisabled) {
            document.getElementById("acceptInvite").classList.add("disabled");
          }
        }
      });
    });
    observer.observe(elemToObserve, { attributes: true });
  }, 3000);
})();
