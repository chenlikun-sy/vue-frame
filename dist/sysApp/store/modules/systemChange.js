"use strict";define(function(){return{namespaced:!0,state:{Page_Size_Change:{width:0,height:0},Style_Change:"",isMenuOpen:!1,Language_Change:"zh"},getters:{getIsMenuOpen:function(e){return e.isMenuOpen}},mutations:{setPageSizeChange:function(e,n){e.Page_Size_Change=n},setStyleChange:function(e,n){e.Style_Change=n},setIsMenuOpen:function(e,n){e.isMenuOpen=n},setLanguage_Change:function(e,n){e.Language_Change=n}}}});