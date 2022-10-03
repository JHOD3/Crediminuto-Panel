// Datatables

import 'datatables.net';
import 'datatables.net-bs5';
import 'datatables.net-responsive';
import 'datatables.net-responsive-bs5';

import 'bootstrap-table';

$(document).ready(() => {

    setTimeout(function () {

        $('#example').DataTable({
            responsive: true
        });

        $('#example2').DataTable({
            scrollY:        '292px',
            scrollCollapse: true,
            paging:         false,
            "searching": false,
            "info": false
        });

    }, 2000);

});