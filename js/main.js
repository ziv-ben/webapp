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

    //notification AJAX


    var xhr= new XMLHttpRequest();
    xhr.open('GET', 'data/config.json');
    xhr.onreadystatechange = function () {
        if ( xhr.readyState === 4 ) {
            if( xhr.status === 200 ) {
                var notifications = JSON.parse( xhr.responseText );
                var notificationsObjects = document.getElementsByClassName("notifications");
                notificationsObjects[0].innerHTML = notifications.notification;

            } else if( xhr.status === 404 ){

            }
              
        }
    };

    xhr.send() ;


    //notification AJAX finish


    $( "#toggle-reports-settings" ).click(function() {
        $( "#reports-settings" ).slideToggle( "slow" );
    });

    /* Quick Reoprts */

    // save sites names and url's to localstorage
    $('#save_reports').on('click', function(e){

        if( $('#report_01_name').val().length > 0 &&  $('#report_01_url').val().length > 0 ){  //checking user input
            localStorage.setItem('report_01_name', $('#report_01_name').val());
            localStorage.setItem('report_01_url', $('#report_01_url').val());
        }



       

        if( $('#report_02_name').val().length > 0 &&  $('#report_02_url').val().length > 0 ){  //checking user input
            localStorage.setItem('report_02_name', $('#report_02_name').val());
            localStorage.setItem('report_02_url', $('#report_02_url').val());
        }

        if( $('#report_03_name').val().length > 0 && $('#report_03_url').val().length > 0 ){ //checking user input
            localStorage.setItem('report_03_name',$('#report_03_name').val());
            localStorage.setItem('report_03_url',$('#report_03_url').val());
        }
        // e.preventDefault(); //preventing refreshing of webpage

    });

    $('#cancel_reports').on('click', function(e){
        $('#report_01_name').val(report_01_name);
        $('#report_01_url').val(report_01_url);
        $('#report_02_name').val(report_02_name);
        $('#report_02_url').val(report_02_url);
        $('#report_03_name').val(report_03_name);
        $('#report_03_url').val(report_03_url);

    });


    //creating the list of websites and set the values of all input fields
    var report_01_name = localStorage.getItem('report_01_name');
    var report_01_url = localStorage.getItem('report_01_url');
    if( report_01_name  && report_01_url ){
        $('#reports_list').append('<option value="' + report_01_url + '">' + report_01_name + '</option>');
        $('#report_01_name').val(report_01_name);
        $('#report_01_url').val(report_01_url);
    }
    // <option value="http://walla.co.il">walla</option>
    var report_02_name = localStorage.getItem('report_02_name');
    var report_02_url = localStorage.getItem('report_02_url');
    if( report_02_name  && report_02_url ){ // <option value="http://walla.co.il">walla</option>
        $('#reports_list').append('<option value="' + report_02_url+ '">' + report_02_name + '</option>');
        $('#report_02_name').val(report_02_name);
        $('#report_02_url').val(report_02_url);
    }

    var report_03_name = localStorage.getItem('report_03_name');
    var report_03_url = localStorage.getItem('report_03_url');
    if( report_03_name  && report_03_url ){
        $('#reports_list').append('<option value="' + report_03_url+ '">' + report_03_name + '</option>');
        $('#report_03_name').val(report_03_name);
        $('#report_03_url').val(report_03_url);
    }

    
    //creating the iframe with the selected  webpage
    $( "#reports_list" ).change(function() {
        var url = $(this).val() ;
        $("#quick-reports-iframe").html('<iframe src="' + url +  '" width="100%" height="800px" name="netcraft"></iframe>');

        // <a href="#" target="_blank">utyyt</a> - prevent multiple arrows
        if($("#expand_link").length ){
            $("#expand_link").attr('href', url );
        } else {
            $(".toggle-reports-wrapper").append('<a href="' + url + '" target="_blank" id="expand_link"><img src="img/icons/expand.png"></a>')
        }
    });


    $( "#toggle-folders-settings" ).click(function() {
        $( "#folders-settings" ).slideToggle( "slow" );
    });

    /* My Team Folders  */

    // save sites names and url's to localstorage
    $('#save_folders').on('click', function(e){
        if( $('#folders_01_name').val().length > 0 && $('#folders_01_url').val().length > 0 ){  //checking user input
            localStorage.setItem('folders_01_name', $('#folders_01_name').val());
            localStorage.setItem('folders_01_url', $('#folders_01_url').val());

        }

        if( $('#folders_02_name').val().length > 0 &&  $('#folders_02_url').val().length > 0 ){  //checking user input
            localStorage.setItem('folders_02_name', $('#folders_02_name').val());
            localStorage.setItem('folders_02_url', $('#folders_02_url').val());

        }

        if( $('#folders_03_name').val().length > 0 && $('#folders_03_url').val().length > 0 ){ //checking user input
            localStorage.setItem('folders_03_name',$('#folders_03_name').val());
            localStorage.setItem('folders_03_url',$('#folders_03_url').val());

        }

        e.preventDefault(); //preventing refreshing of webpage
    });

    $('#cancel_folders').on('click', function(e){
        $('#folders_01_name').val(folders_01_name);
        $('#folders_01_url').val(folders_01_url);
        $('#folders_02_name').val(folders_02_name);
        $('#folders_02_url').val(folders_02_url);
        $('#folders_03_name').val(folders_03_name);
        $('#folders_03_url').val(folders_03_url);

    });


    //creating the list of websites and set the values of the input fields ( name and url)
    var folders_01_name = localStorage.getItem('folders_01_name');
    var folders_01_url = localStorage.getItem('folders_01_url');
    if( folders_01_name  && folders_01_url ){
        // append option to the list
        $('#folders_list').append('<option value="' + folders_01_url + '">' + folders_01_name + '</option>');
        //set the values of name and url of the site in the form
        $('#folders_01_name').val(folders_01_name);
        $('#folders_01_url').val(folders_01_url);
    }
    // <option value="http://walla.co.il">walla</option>
    var folders_02_name = localStorage.getItem('folders_02_name');
    var folders_02_url = localStorage.getItem('folders_02_url');
    if( folders_02_name  && folders_02_url ){ // <option value="http://walla.co.il">walla</option>
        $('#folders_list').append('<option value="' + folders_02_url+ '">' + folders_02_name + '</option>');
        $('#folders_02_name').val(folders_02_name);
        $('#folders_02_url').val(folders_02_url);
        
        
    }
    var folders_03_name = localStorage.getItem('folders_03_name');
    var folders_03_url = localStorage.getItem('folders_03_url');
    if( report_03_name  && report_03_url ){
        $('#folders_list').append('<option value="' + folders_03_url+ '">' + folders_03_name + '</option>');
        $('#folders_03_name').val(folders_03_name);
        $('#folders_03_url').val(folders_03_url);
        
    }
    // Bind change event to the SELECT element and load the iframe with the selected webpage
    $( "#folders_list" ).change(function() {
        var url = $(this).val() ;
        $("#my_folders-iframe").html('<iframe src="' + url +  '" width="100%" height="800px" name="netcraft"></iframe>');

        // check if the expand_link exist
        //if exist change href attribute to the new url
        if($("#expand_link_2").length ){
            $("#expand_link_2").attr('href', url );
        } else { // create and append a new expand_link arrow
            $(".toggle-folders-wrapper").append('<a href="' + url + '" target="_blank" id="expand_link_2"><img src="img/icons/expand.png"></a>')
        }
    });




});

