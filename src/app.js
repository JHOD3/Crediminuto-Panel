import $ from "jquery";
import 'bootstrap';
import 'metismenu';
import 'ckeditor';
import Uppy from '@uppy/core';
import DragDrop from '@uppy/drag-drop';
import FileInput from '@uppy/file-input'
import ProgressBar from '@uppy/progress-bar';
import prettierBytes from '@transloadit/prettier-bytes';


import "./assets/base.scss";


// Function for displaying uploaded files
const onUploadSuccess = (elForUploadedFiles) => (file, response) => {
    const url = response.uploadURL
    const fileName = file.name

    const li = document.createElement('li')
    const a = document.createElement('a')
    a.href = url
    a.target = '_blank'
    a.appendChild(document.createTextNode(fileName))
    li.appendChild(a)

    document.querySelector(elForUploadedFiles).appendChild(li)
}

const uppyOne = new Uppy({
    debug: true,
    autoProceed: true ,
    locale: {
        strings: {
            // Text to show on the droppable area.
            // `%{browse}` is replaced with a link that opens the system file selection dialog.
            dropHereOr: 'Arrastra el archivo acá %{browse}',
            // Used as the label for the link that opens the system file selection dialog.
            browse: '(PDF, DOC, EXE, JPG, PNG)',
        },
    }
});
const dragAndDrop = document.querySelector('.dragdropfile .drop-zone .for-DragDrop');
if(dragAndDrop !== null){
    uppyOne.use(DragDrop, { target: '.dragdropfile .drop-zone .for-DragDrop',  })
}

const fileInput = document.querySelector('#formFile');
if(fileInput !== null){
    fileInput.addEventListener('change', (event) => {
        const files = Array.from(event.target.files)
        files.forEach((file) => {
            try {
                uppyOne.addFile({
                    source: 'file input',
                    name: file.name,
                    type: file.type,
                    data: file,
                })
            } catch (err) {
                if (err.isRestriction) {
                    // handle restrictions
                    console.log('Restriction error:', err)
                } else {
                    // handle other errors
                    console.error(err)
                }
            }
        })
    })
}

if(dragAndDrop !== null) {
    uppyOne.on('file-added', (file) => {
        let addFile = "<div class='list-group-item-file'><a href='' class='deleteFile' data-id='" + file.id + "'><i class='fas fa-times-circle text-muted font-size-lg'></i></a><div>" + file.name + "</div></div>";
        $('.uploaded-files').append(addFile);
    })
}

$('.dragdropfile').on('click', '.deleteFile', function(e){
    e.preventDefault();
    let id = $(this).data('id');
    uppyOne.removeFile(id);
    $(this).parent().remove();
});

$(document).ready(() => {
    // Sidebar Menu
    $('.dropdown-toggle').dropdown();
    setTimeout(function () {
        $(".vertical-nav-menu").metisMenu();
    }, 100);
    // CKEditor
    if (typeof CKEDITOR !== 'undefined') {
        CKEDITOR.replace('inline-editor', {
            width: '100%',
            height: 250,
            removeButtons: 'PasteFromWord'
        });
    }
    // Uppy

    // Search wrapper trigger

    $('.search-icon').click(function () {
        $(this).parent().parent().addClass('active');
    });

    $('.search-wrapper .close').click(function () {
        $(this).parent().removeClass('active');
    });


    // BS4 Popover

    $('[data-bs-toggle="popover-custom-content"]').each(function (i, obj) {

        $(this).popover({
            html: true,
            placement: 'auto',
            template: '<div class="popover popover-custom" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
            content: function () {
                var id = $(this).attr('popover-id');
                return $('#popover-content-' + id).html();
            }
        });

    });

    // Stop Bootstrap 4 Dropdown for closing on click inside

    $('.dropdown-menu').on('click', function (event) {
        var events = $._data(document, 'events') || {};
        events = events.click || [];
        for (var i = 0; i < events.length; i++) {
            if (events[i].selector) {

                if ($(event.target).is(events[i].selector)) {
                    events[i].handler.call(event.target, event);
                }

                $(event.target).parents(events[i].selector).each(function () {
                    events[i].handler.call(this, event);
                });
            }
        }
        event.stopPropagation(); //Always stop propagation
    });


    $('[data-bs-toggle="popover-custom-bg"]').each(function (i, obj) {

        var popClass = $(this).attr('data-bg-class');

        $(this).popover({
            trigger: 'focus',
            placement: 'top',
            template: '<div class="popover popover-bg ' + popClass + '" role="tooltip"><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        });

    });

    $(function () {
        $('[data-bs-toggle="popover"]').popover();
    });

    $('[data-bs-toggle="popover-custom"]').each(function (i, obj) {

        $(this).popover({
            html: true,
            container: $(this).parent().find('.rm-max-width'),
            content: function () {
                return $(this).next('.rm-max-width').find('.popover-custom-content').html();
            }
        });
    });

/*    $('body').on('click', function (e) {
        $('[rel="popover-focus"]').each(function () {
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                $(this).popover('hide');
            }
        });
    });*/
/*
    $('.header-megamenu.nav > li > .nav-link').on('click', function (e) {
        $('[data-bs-toggle="popover-custom"]').each(function () {
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                $(this).popover('hide');
            }
        });
    });*/

    // BS4 Tooltips

    $(function () {
        $('[data-bs-toggle="tooltip"]').tooltip();
    });

    $(function () {
        $('[data-bs-toggle="tooltip-light"]').tooltip({
            template: '<div class="tooltip tooltip-light"><div class="tooltip-inner"></div></div>'
        });
    });

    // Drawer

    $('.open-right-drawer').click(function () {
        $(this).addClass('is-active');
        $('.app-drawer-wrapper').addClass('drawer-open');
        $('.app-drawer-overlay').removeClass('d-none');
    });

    $('.drawer-nav-btn').click(function () {
        $('.app-drawer-wrapper').removeClass('drawer-open');
        $('.app-drawer-overlay').addClass('d-none');
        $('.open-right-drawer').removeClass('is-active');
    });

    $('.app-drawer-overlay').click(function () {
        $(this).addClass('d-none');
        $('.app-drawer-wrapper').removeClass('drawer-open');
        $('.open-right-drawer').removeClass('is-active');
    });

    $('.mobile-toggle-nav').click(function () {
        $(this).toggleClass('is-active');
        $('.app-container').toggleClass('sidebar-mobile-open');
    });

    $('.mobile-toggle-header-nav').click(function () {
        $(this).toggleClass('active');
        $('.app-header__content').toggleClass('header-mobile-open');
    });

    $('.mobile-app-menu-btn').click(function () {
        $('.hamburger', this).toggleClass('is-active');
        $('.app-inner-layout').toggleClass('open-mobile-menu');
    });

    // Responsive

    $(window).on('resize', function(){
        var win = $(this);
        if (win.width() < 1250) {
            $('.app-container').addClass('closed-sidebar-mobile closed-sidebar');
            $('.vertical-nav-menu').removeClass('border-top');
        }
        else
        {
            $('.app-container').removeClass('closed-sidebar-mobile closed-sidebar');
            $('.vertical-nav-menu').addClass('border-top');
        }
    });
});