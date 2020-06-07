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

