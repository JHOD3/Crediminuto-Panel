// Datatables

import 'datatables.net';
import 'datatables.net-bs5';
import 'datatables.net-responsive';
import 'datatables.net-responsive-bs5';

import 'bootstrap-table';

$(document).ready(() => {

    setTimeout(function () {

        $('#example').DataTable({
            responsive: true,
            searching: false,
            pageLength: 5,
            lengthChange: false,
            info: false,
            dom: '<"row view-filter"<"col-sm-12"<"pull-left"l><"pull-right"f><"clearfix">>>t<"row view-pager"<"col-sm-12"<"text-center"ip>>>',
            columnDefs: [
                {"width": "15%", "targets": 0, "orderable": false},
            ],
            language: {
                paginate: {
                    previous: '<i class="fas fa-angle-left"></i>',
                    next: '<i class="fas fa-angle-right"></i>'
                }
            }
        });
        $('#example3').DataTable({
            responsive: true,
            searching: false,
            pageLength: 5,
            lengthChange: false,
            info: false,
            dom: '<"row view-filter"<"col-sm-12"<"pull-left"l><"pull-right"f><"clearfix">>>t<"row view-pager"<"col-sm-12"<"text-center"ip>>>',
            columnDefs: [
                {"width": "15%", "targets": 0, "orderable": false}, // Ajustes de ancho de columnas 1
                {"width": "15%", "targets": 0, "orderable": false}, // Ajustes de ancho de columnas 2
            ],
            language: {
                paginate: {
                    previous: '<i class="fas fa-angle-left"></i>',
                    next: '<i class="fas fa-angle-right"></i>'
                }
            }
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