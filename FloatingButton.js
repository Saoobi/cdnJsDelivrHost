var countryObjet = window.LIVECHAT_VARIABLES;
var initESW = function (gslbBaseURL) {
  embedded_svc.settings.extraPrechatFormDetails = [
    {
      label: "Locale",
      value: countryObjet["localeSite"],
      transcriptFields: ["Website_Locale__c"],
      displayToAgent: false,
    },
    {
      label: "UrlInitial",
      value: window.location.href,
      transcriptFields: ["Urls__c"],
      displayToAgent: false,
    },
    {
      label: "CaseOrigin",
      value: "Live Chat",
      transcriptFields: [],
      displayToAgent: false,
    },
  ];

  embedded_svc.settings.extraPrechatInfo = [
    {
      entityFieldMaps: [
        {
          doCreate: false,
          doFind: false,
          fieldName: "LastName",
          isExactMatch: false,
          label: "Last Name",
        },
        {
          doCreate: false,
          doFind: false,
          fieldName: "FirstName",
          isExactMatch: false,
          label: "First Name",
        },
        {
          doCreate: false,
          doFind: true,
          fieldName: "Email",
          isExactMatch: true,
          label: "Email",
        },
      ],
      entityName: "Contact",
      saveToTranscript: "Contact",
      showOnCreate: false,
    },
    {
      entityFieldMaps: [
        {
          doCreate: true,
          doFind: false,
          fieldName: "Origin",
          isExactMatch: false,
          label: "CaseOrigin",
        },
        {
          doCreate: true,
          doFind: false,
          fieldName: "WebformLocale__c",
          isExactMatch: false,
          label: "Locale",
        },
      ],
      entityName: "Case",
      saveToTranscript: "Case",
      showOnCreate: true,
    },
  ];

  embedded_svc.settings.displayHelpButton =
    countryObjet["embedded_svc.settings.displayHelpButton"]; // hide the button because of iAdvize (the fixed button will display it)
  embedded_svc.settings.language =
    countryObjet["embedded_svc.settings.language"]; // localeSite.toLowerCase();// //For example, enter 'en' or 'en-US'

  embedded_svc.settings.defaultMinimizedText = "..."; //(Defaults to Chat with an Expert)
  embedded_svc.settings.disabledMinimizedText = "..."; //(Defaults to Agent Offline)

  //embedded_svc.settings.loadingText = ''; //(Defaults to Loading)
  //embedded_svc.settings.storageDomain = 'yourdomain.com'; //(Sets the domain for your deployment so that visitors can navigate subdomains during a chat session)

  // Settings for Chat
  //embedded_svc.settings.directToButtonRouting = function(prechatFormData) {
  // Dynamically changes the button ID based on what the visitor enters in the pre-chat form.
  // Returns a valid button ID.
  //};
  //embedded_svc.settings.prepopulatedPrechatFields = {}; //Sets the auto-population of pre-chat form fields
  //embedded_svc.settings.fallbackRouting = []; //An array of button IDs, user IDs, or userId_buttonId
  embedded_svc.settings.offlineSupportMinimizedText = "&nbsp;"; //(Defaults to Contact Us)

  embedded_svc.settings.enabledFeatures = ["LiveAgent"];
  embedded_svc.settings.entryFeature = "LiveAgent";

  embedded_svc.init(
    countryObjet["embedded_svc.init Param1"],
    countryObjet["embedded_svc.init Param2"],
    gslbBaseURL,
    countryObjet["embedded_svc.init Param4"],
    countryObjet["embedded_svc.init Param5"],
    {
      baseLiveAgentContentURL: countryObjet["baseLiveAgentContentURL"],
      deploymentId: countryObjet["deploymentId"],
      buttonId: countryObjet["buttonId"],
      baseLiveAgentURL: countryObjet["baseLiveAgentURL"],
      eswLiveAgentDevName: countryObjet["eswLiveAgentDevName"],
      isOfflineSupportEnabled: countryObjet["isOfflineSupportEnabled"],
    }
  );
};

if (!window.embedded_svc) {
  var s = document.createElement("script");
  s.setAttribute("src", countryObjet["script_attribute2"]);
  s.onload = function () {
    initESW(null);
  };
  document.body.appendChild(s);
} else {
  initESW("https://service.force.com");
}
