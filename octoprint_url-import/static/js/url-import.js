/*
 * View model for OctoPrint-url-import
 *
 * Author: Eben Olson
 * License: MIT
 */
$(function() {
    function Url-importViewModel(parameters) {
        var self = this;

        // assign the injected parameters, e.g.:
        // self.loginStateViewModel = parameters[0];
        // self.settingsViewModel = parameters[1];

        // TODO: Implement your plugin's view model here.
    }

    // view model class, parameters for constructor, container to bind to
    OCTOPRINT_VIEWMODELS.push([
        Url-importViewModel,

        // e.g. loginStateViewModel, settingsViewModel, ...
        [ /* "loginStateViewModel", "settingsViewModel" */ ],

        // e.g. #settings_plugin_url-import, #tab_plugin_url-import, ...
        [ /* ... */ ]
    ]);
});
