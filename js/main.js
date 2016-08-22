/*
*
*
*
*/

$( document ).ready(function() {

    /*      TABS */

    $('.tabs > ul > li > a').on('click', function(e){
        // get the 'href' attribute of the link
        var id = $(this).attr("href");
        // Hide all div's elements
        $('.tabs > div').css('display', 'none');
        // display the div that has the same id as the 'href' attribute
        $(id).css('display', 'block');
        e.preventDefault();
    });




    /* Quick Reoprts */

    // save sites names and url's to localstorage
    $('#save_reports').on('click', function(e){
       if( $('#report_01_name').val().length > 0 && $('#report_01_url').val().length > 0 ){  //checking user input
           localStorage.setItem('report_01_name', $('#report_01_name').val());
           localStorage.setItem('report_01_url', $('#report_01_url').val());
           console.log($('#report_01_name').val());
       }

        if( $('#report_02_name').val().length > 0 &&  $('#report_02_url').val().length > 0 ){  //checking user input
            localStorage.setItem('report_02_name', $('#report_02_name').val());
            localStorage.setItem('report_02_url', $('#report_02_url').val());
            console.log($('#report_02_name').val());
        }

        if( $('#report_03_name').val().length > 0 && $('#report_03_url').val().length > 0 ){ //checking user input
            localStorage.setItem('report_03_name',$('#report_03_name').val());
            localStorage.setItem('report_03_url',$('#report_03_url').val());
            console.log($('#report_03_name').val());
        }

        e.preventDefault(); //preventing refreshing of webpage
    });

    //creating the list of websites
    var report_01_name = localStorage.getItem('report_01_name');
    var report_01_url = localStorage.getItem('report_01_url');
    if( report_01_name  && report_01_url ){
        $('#reports_list').append('<option value="' + report_01_url + '">' + report_01_name + '</option>');
    }
    // <option value="http://walla.co.il">walla</option>
    var report_02_name = localStorage.getItem('report_02_name');
    var report_02_url = localStorage.getItem('report_02_url');
    if( report_02_name  && report_02_url ){ // <option value="http://walla.co.il">walla</option>
        $('#reports_list').append('<option value="' + report_02_url+ '">' + report_02_name + '</option>');
    }

    var report_03_name = localStorage.getItem('report_03_name');
    var report_03_url = localStorage.getItem('report_03_url');
    if( report_03_name  && report_03_url ){
        $('#reports_list').append('<option value="' + report_03_url+ '">' + report_03_name + '</option>');
    }
    //creating the iframe with the selected  webpage
    $( "#reports_list" ).change(function() {
        var url = $(this).val() ;
        $("#quick-reports-iframe").html('<iframe src="' + url +  '" width="100%" height="800px" name="netcraft"></iframe>')
    });




    /* My Team Folders  */

    // save sites names and url's to localstorage
    $('#save_folders').on('click', function(e){
        if( $('#folders_01_name').val().length > 0 && $('#folders_01_url').val().length > 0 ){  //checking user input
            localStorage.setItem('folders_01_name', $('#folders_01_name').val());
            localStorage.setItem('folders_01_url', $('#folders_01_url').val());
            console.log($('#folders_01_name').val());
        }

        if( $('#folders_02_name').val().length > 0 &&  $('#folders_02_url').val().length > 0 ){  //checking user input
            localStorage.setItem('folders_02_name', $('#folders_02_name').val());
            localStorage.setItem('folders_02_url', $('#folders_02_url').val());
            console.log($('#folders_02_name').val());
        }

        if( $('#folders_03_name').val().length > 0 && $('#folders_03_url').val().length > 0 ){ //checking user input
            localStorage.setItem('folders_03_name',$('#folders_03_name').val());
            localStorage.setItem('folders_03_url',$('#folders_03_url').val());
            console.log($('#folders_03_name').val());
        }

        e.preventDefault(); //preventing refreshing of webpage
    });

    //creating the list of websites
    var folders_01_name = localStorage.getItem('folders_01_name');
    var folders_01_url = localStorage.getItem('folders_01_url');
    if( folders_01_name  && folders_01_url ){
        $('#folders_list').append('<option value="' + folders_01_url + '">' + folders_01_name + '</option>');
    }
    // <option value="http://walla.co.il">walla</option>
    var folders_02_name = localStorage.getItem('folders_02_name');
    var folders_02_url = localStorage.getItem('folders_02_url');
    if( folders_02_name  && folders_02_url ){ // <option value="http://walla.co.il">walla</option>
        $('#folders_list').append('<option value="' + folders_02_url+ '">' + folders_02_name + '</option>');
    }

    var folders_03_name = localStorage.getItem('folders_03_name');
    var folders_03_url = localStorage.getItem('folders_03_url');
    if( report_03_name  && report_03_url ){
        $('#folders_list').append('<option value="' + folders_03_url+ '">' + folders_03_name + '</option>');
    }
    //creating the iframe with the selected webpage
    $( "#folders_list" ).change(function() {
        var url = $(this).val() ;
        $("#my_folders-iframe").html('<iframe src="' + url +  '" width="100%" height="800px" name="netcraft"></iframe>')
    });




});

