$(document).ready(function() {
    pre_content = $("#jalpc_site_pv").html();
    $("#jalpc_site_pv").html(pre_content);
    $("#jalpc_site_pv").html('<span class="navy">' + '</span>&nbsp;<span data-i18n="link.view"></span>&nbsp;||&nbsp;' + pre_content);
});
