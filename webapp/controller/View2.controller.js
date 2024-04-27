sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, UIComponent) {
        "use strict";

        return Controller.extend("com.satya.routingapp.controller.View2", {
            onInit: function () {
                //var oRouter = this.getRouter()
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.getRoute("page2").attachMatched(this._onRouteMatched, this);
            },

            getRouter : function () {
                return UIComponent.getRouterFor(this);
            },

            _onRouteMatched : function (oEvent) {
                var oArgs, oView;
                oArgs = oEvent.getParameter("arguments");
                console.log('oArgs', oArgs)
                oView = this.getView();
    
            },

            onBack: function() {
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteView1");
            }
    
    });
});