
var yt_player;
var last_player_status = 0;
var play_status = 0;

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

function changeBorderColor(player_status)
{
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

function onPlayerStateChange(event) {
    changeBorderColor(event.data);
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

window.onload = load_content;

