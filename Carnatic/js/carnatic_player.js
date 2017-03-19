function get_play_list()
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
        var path_list = audio_file.split("/");
        file_name = path_list.slice(-1);
    }

    str = '<marquee behavior="alternate" direction="left" scrollamount="1">' + file_name + '</marquee>'
    document.getElementById("AUDIO_TAG").innerHTML=str;
}

function play_first()
{
    var play_list = get_play_list();

    if (play_list.length <= 0)
    {
        return;
    }

    var audio_file = play_list[0];

    var player = document.getElementById('AUDIO_PLAYER');

    player.src = audio_file;
    player.load();
    player.play();

    set_marquee_text(audio_file);
}

function play_next()
{
    var play_list = get_play_list();

    play_list.shift();

    sessionStorage["playlist"] = JSON.stringify(play_list);

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

    var player = document.getElementById('AUDIO_PLAYER');
    player.addEventListener('ended', play_next);
}

window.onload = load_content;

