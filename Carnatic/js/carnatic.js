function set_iframe_load_params(obj)
{
    obj.style.visibility = 'visible';
    var height = document.documentElement.clientHeight;
    height -= obj.offsetTop;
    height -= 20;
    obj.style.height = height + 'px';
}

function onYouTubeIframeAPIReady()
{
    yt_player = new YT.Player('FRAME_PLAYER', {
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event)
{
    document.getElementById('FRAME_PLAYER').style.borderColor = '#FF6D00';
}

function onPlayerStateChange(event)
{
    // globals
    last_player_status = 0;
    play_status = 0;

    var player_status = event.data;
    // playerStatus: -1 : unstarted, 0 - ended, 1 - playing, 2 - paused, 3 - buffering, 5 - video cued
    // console.log('Last Player Status: ' + last_player_status + ' Player Status: ' + player_status + ' Play Status: ' + play_status);
    if (player_status == 0 || (last_player_status == 3 && player_status == -1))
    {
        play_status = 0;
        play_next();
    }
    else if (player_status == 1)
    {
        play_status = 1;
    }
    else
    {
        play_status = 0;
    }
    last_player_status = player_status;
}

function get_play_list()
{
    var new_play_list = sessionStorage['playlist'];
    if (new_play_list == undefined)
    {
        new_play_list = new Array();
    }
    else
    {
        new_play_list = JSON.parse(new_play_list);
    }
    return new_play_list;
}

function play_first()
{
    var play_list = get_play_list();
    if (play_list.length <= 0)
    {
        return;
    }
    var audio_file = play_list[0];
    var parts = audio_file.split('.');
    var video_id = parts[parts.length - 1];
    yt_player.loadVideoById({'videoId': video_id});
}

function play_next()
{
    var play_list = get_play_list();
    play_list.shift();
    sessionStorage['playlist'] = JSON.stringify(play_list);
    play_first();
}

function on_storage_event(storageEvent)
{
    var play_list = get_play_list();
    if (play_list.length != 1)
    {
        return;
    }
    play_first();
}

function load_content()
{
    window.addEventListener('storage', on_storage_event, false);
}

function get_playlist()
{
    var new_play_list = sessionStorage["playlist"];
    if (new_play_list == undefined)
    {
        new_play_list = new Array();
    }
    else
    {
        new_play_list = JSON.parse(new_play_list);
    }
    return new_play_list;
}

function add_song()
{
    var audio_file = arguments[0];
    var play_list = get_playlist();
    if (play_list.length <= 0)
    {
        if (audio_file != '')
        {
            play_list[0] = audio_file;
        }
    }
    else
    {
        play_list[play_list.length] = audio_file;
    }
    sessionStorage["playlist"] = JSON.stringify(play_list);
}

function delete_song()
{
    var play_list = get_playlist();
    if (play_list.length > 0)
    {
        var song_id = parseInt(arguments[0]);
        play_list.splice(song_id, 1);
        sessionStorage["playlist"] = JSON.stringify(play_list);
        if (song_id == 0)
        {
            play_first();
        }
    }
}

function delete_row()
{
    var row = arguments[0];
    var row_id = row.parentNode.parentNode.rowIndex;
    handle_playlist_command("delete", row_id - 1);
    document.getElementById('PLAYLIST_TABLE').deleteRow(row_id);
}

function show_playlist()
{
    var play_list = get_playlist();
    var html_str = '' 
    html_str += '<table id="PLAYLIST_TABLE" class="table table-striped table-condensed">';
    html_str += '<tr><th>No.</th><th>Song No.</th><th>Song</th><th>ID</th><th></th></tr>';
    for (var i = 0; i < play_list.length; i++)
    {
        var parts = play_list[i].split('-');
        if (parts.length < 5)
        {
            parts.splice(1, 0, 'Krithi')
        }
        var id_parts = parts[4].split('.')
        html_str += '<tr><td>' + (i + 1) + '</td><td>' + parts[0] + '</td><td>' + parts[2] + '</td><td>' + id_parts[1] + '</td><td><a href="#" onclick="delete_row(this);"><img src="icons/x.svg" width="24" height="24"></a></td></tr>';
    }
    html_str += '</table>';
    document.getElementById('PLAYLIST_BODY').innerHTML = html_str;
    $('#PLAYLIST_MODAL').modal();
}

function handle_playlist_command()
{
    var cmd = arguments[0];
    if (cmd == "play")
    {
        var audio_file = arguments[1];
        add_song(audio_file);
    }
    else if (cmd == "delete")
    {
        var song_id = arguments[1];
        delete_song(song_id);
    }
    else if (cmd == "show")
    {
        show_playlist();
    }
    return true;
}

function carnatic_init()
{
    window.onload = load_content;

    $(document).ready(function()
    {
        $('.nav li').bind('click', function() {
            $(this).addClass('active').siblings().removeClass('active');
        });
        sessionStorage.clear();
    });

    $(".navbar a").on("click", function(){
      $(".navbar").find(".active").removeClass("active");
      $(this).parent().addClass("active");
    });

    var tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

