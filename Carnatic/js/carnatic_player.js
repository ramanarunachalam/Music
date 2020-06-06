
var yt_player;

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

function changeBorderColor(playerStatus)
{
    var color;
    console.log('Player Status:' + playerStatus);
    if (playerStatus == -1)
    {
        color = '#37474F'; // unstarted = gray
    } else if (playerStatus == 0)
    {
        color = '#FFFF00'; // ended = yellow
        play_next();
    } else if (playerStatus == 1)
    {
        color = '#33691E'; // playing = green
    } else if (playerStatus == 2)
    {
        color = '#DD2C00'; // paused = red
    } else if (playerStatus == 3)
    {
        color = '#AA00FF'; // buffering = purple
    } else if (playerStatus == 5)
    {
      color = '#FF6DOO'; // video cued = orange
    }
    if (color)
    {
        document.getElementById('FRAME_PLAYER').style.borderColor = color;
    }
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

function set_marquee_text()
{
    var audio_file = arguments[0];
    var file_name = ''
    if (audio_file === undefined || audio_file === '')
    {
        file_name = 'Click on a Play Button';
    }
    else
    {
        var path_list = audio_file.split('/');
        file_name = path_list.slice(-1);
    }
    str = '<marquee behavior="alternate" direction="left" scrollamount="1">' + file_name + '</marquee>'
    document.getElementById('AUDIO_TAG').innerHTML=str;
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
    yt_player.loadVideoById({'videoId': video_id, 'startSeconds': 5});
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

