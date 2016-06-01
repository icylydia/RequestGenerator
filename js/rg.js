$('#rg-send-btn').click( function() {
    var parameters = {};
    $('#rg-data-tbl tbody tr:not(:last-child)').each(function(index) {
        var key = $(this).find('td').first().html();
        var value = $(this).find('td:nth-child(2)').html();
        parameters[key] = value
    });
    util.request($('#rg-url').val(), $('#rg-type-select').val(), parameters)
});

var util = {}
util.request = function (url, type, parameters) {
    var $form = $('<form>', {
        action: url.trim(),
        method: type.trim()
    });
    $.each(parameters, function(key, val) {
         $('<input>').attr({
             type: "hidden",
             name: key,
             value: val
         }).appendTo($form);
    });
    $form.submit();
}

$('#rg-append-btn').click(function() {
    $('#rg-data-tbl tr:last').before(
        '<tr><td class="valign-mid">'
        + $('#p-name').val()
        + '</td><td class="valign-mid">'
        + $('#p-value').val()
        +'</td><td>'
        + DEL_BTN
        + '</td></tr>');
    $('#p-name').val("");
    $('#p-value').val("");
});

$('#rg-data-tbl').on('click', '#rg-delete-btn',function() {
     $(this).closest ('tr').remove ();
});

const DEL_BTN = '<button id="rg-delete-btn" type="button" class="btn btn-default">\
                    <span class="glyphicon glyphicon-trash"></span>\
                </button>'
