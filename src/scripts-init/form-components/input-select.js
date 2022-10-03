// Forms Multi Select

import 'select2';
import 'bootstrapv5-multiselect/dist/js/bootstrap-multiselect';

$(document).ready(() => {

    setTimeout(function () {

        $(".multiselect-dropdown").select2({
            theme: "bootstrap5",
            placeholder: "Select an option",
        });

        $('#example-single').multiselect({
            inheritClass: true
        });

        $('#example-multi').multiselect({
            inheritClass: true
        });

        $('#example-multi-check').multiselect({
            inheritClass: true
        });

    }, 2000);

});