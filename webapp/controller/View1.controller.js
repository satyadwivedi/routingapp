sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.satya.routingapp.controller.View1", {
            onInit: function () {

            },

            onPress: function(oEvent) {
                var oItem = oEvent.getSource();
                var oBindingContext = oItem.getBindingContext();
                var oModel = this.getView().getModel();
                var oSettingsModel = this.getView().getModel("settings");
              //  oSettingsModel.setProperty("/navigatedItem", oModel.getProperty("ProductId", oBindingContext));
			    let pid = oBindingContext.getProperty("ProductID")
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("page2",{
                    pid : pid
                });
            },
    
            isNavigated: function(sNavigatedItemId, sItemId) {
                return sNavigatedItemId === sItemId;
            }
        });
    });
