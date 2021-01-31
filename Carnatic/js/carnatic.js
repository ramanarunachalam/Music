
function sleep(seconds){
    var waitUntil = new Date().getTime() + seconds*1000;
    while(new Date().getTime() < waitUntil) true;
}

function onYouTubeIframeAPIReady() {
    window.yt_player = new YT.Player('FRAME_PLAYER', {
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    document.getElementById('FRAME_PLAYER').style.borderColor = '#FF6D00';
}

function onPlayerStateChange(event) {
    var player_status = event.data;
    last_player_status = 0;
    play_status = 0;
    /*
        playerStatus: -1 : unstarted, 0 - ended, 1 - playing, 2 - paused, 3 - buffering, 5 - video cued
        console.log('Last Player Status: ' + last_player_status + ' Player Status: ' + player_status + ' Play Status: ' + play_status);
    */
    if (player_status == 0 || (last_player_status == 3 && player_status == -1)) {
        play_status = 0;
        play_next();
    } else if (player_status == 1) {
        play_status = 1;
    } else {
        play_status = 0;
    }
    last_player_status = player_status;
}

function youtube_player_init() {
    var tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

function get_play_list() {
    var new_play_list = sessionStorage['playlist'];
    if (new_play_list == undefined) {
        new_play_list = new Array();
    } else {
        new_play_list = JSON.parse(new_play_list);
    }
    return new_play_list;
}

function play_first() {
    var play_list = get_play_list();
    if (play_list.length <= 0) {
        return;
    }
    var parts = play_list[0].split(':');
    window.yt_player.loadVideoById({'videoId': parts[0]});
}

function play_next() {
    var play_list = get_play_list();
    play_list.shift();
    sessionStorage['playlist'] = JSON.stringify(play_list);
    play_first();
}

function on_storage_event(storageEvent) {
    var play_list = get_play_list();
    if (play_list.length == 0) {
        return;
    } else if (play_list.length > 1) {
        $('#PLAYLIST_QUEUE').modal('show');
        setTimeout(function() { $('#PLAYLIST_QUEUE').modal('hide'); }, 3000);
        return;
    }

    play_first();
}

var CATEGORY_DICT = { 'categories' : [ { 'C' : 'raga',     'I' : 'music-note-list',   'N' : 'Raga'     },
                                  { 'C' : 'artist',   'I' : 'person-fill',       'N' : 'Artist'   },
                                  { 'C' : 'composer', 'I' : 'person-lines-fill', 'N' : 'Composer' },
                                  { 'C' : 'type',     'I' : 'tag',               'N' : 'Type'     },
                                  { 'C' : 'song',     'I' : 'music-note-beamed', 'N' : 'Song'     },
                                  { 'C' : 'about',    'I' : 'info-circle',       'N' : 'About'    },
                                ]
                    };

var KEYBOARD_LIST = [ { 'I' : 'c4',  'C' : 'white', 'S' : 'position:absolute; bottom:0;', 'V' : [ 'sa1' ] },
                      { 'I' : 'c-4', 'C' : 'black', 'S' : 'color:white;',                 'V' : [ 'ri1' ] },
                      { 'I' : 'd4',  'C' : 'white', 'S' : 'position:absolute; bottom:0;', 'V' : [ 'ri2', 'ga1' ] },
                      { 'I' : 'd-4', 'C' : 'black', 'S' : 'color:white;',                 'V' : [ 'ri3', 'ga2' ] },
                      { 'I' : 'e4',  'C' : 'white', 'S' : 'position:absolute; bottom:0;', 'V' : [ 'ga3' ] },
                      { 'I' : 'f4',  'C' : 'white', 'S' : 'position:absolute; bottom:0;', 'V' : [ 'ma1' ] },
                      { 'I' : 'f-4', 'C' : 'black', 'S' : 'color:white;',                 'V' : [ 'ma2' ] },
                      { 'I' : 'g4',  'C' : 'white', 'S' : 'position:absolute; bottom:0;', 'V' : [ 'pa' ] },
                      { 'I' : 'g-4', 'C' : 'black', 'S' : 'color:white;',                 'V' : [ 'da1' ] },
                      { 'I' : 'a4',  'C' : 'white', 'S' : 'position:absolute; bottom:0;', 'V' : [ 'da2', 'ni1' ] },
                      { 'I' : 'a-4', 'C' : 'black', 'S' : 'color:white;',                 'V' : [ 'da3', 'ni2' ] },
                      { 'I' : 'b4',  'C' : 'white', 'S' : 'position:absolute; bottom:0;', 'V' : [ 'ni3' ] },
                      { 'I' : 'c5',  'C' : 'white', 'S' : 'position:absolute; bottom:0;', 'V' : [ 'sa2' ] },
                    ]

function menu_transliteration(lang) {
    var in_lang = 'harvardkyoto_tamil';
    var item_list = CATEGORY_DICT['categories']
    var menu_dict = MAP_MENU_DICT[lang];
    var info_dict = MAP_INFO_DICT[lang];
    for (var i = 0; i < item_list.length; i++) {
        var obj = item_list[i];
        var name = obj['C'];
        name = name.charAt(0).toUpperCase() + name.slice(1);
        if ( lang == 'English' ) {
            obj['N'] = name;
        } else {
            obj['N'] = menu_dict[name];
        }
    }
    var playlist = 'Playlist';
    var search = 'Search';
    if (lang != 'English') {
        playlist = get_transliterator_text(in_lang, lang, 'pLElisT');
        search = info_dict[search];
    }
    let lang_list = [];
    for (var l in MAP_LANG_DICT) {
        if (l == window.parent.GOT_LANGUAGE) {
            lang_list.push({ 'N' : l, 'O' : 'selected' });
        } else {
            lang_list.push({ 'N' : l });
        }
    }
    var other_dict = { 'P' : playlist, 'S' : search };
    var menu_dict = { 'menus' : { 'languages' : lang_list, 'others' : other_dict, 'categories' : CATEGORY_DICT['categories'] } };
    render_card_template('#page-menu-template', '#MENU_DATA', menu_dict);
}

function info_transliteration(category, data_list) {
    var lang = window.parent.RENDER_LANGUAGE;
    var in_lang = 'harvardkyoto_tamil';
    var item = data_list['title']
    if (category == 'about') {
        item['N'] = item['N'];
    } else if (lang == 'English' && (category == 'artist' || category == 'composer' || category == 'type')) {
        item['N'] = item['H'];
    } else {
        item['N'] = get_transliterator_text(in_lang, lang, item['V']);
    }
    var item_list = data_list['stats']
    if (item_list == undefined) {
        item_list = [];
    }
    var stat_dict = MAP_STAT_DICT[lang];
    for (var i = 0; i < item_list.length; i++) {
        var obj = item_list[i];
        var name = obj['H'];
        if (lang == 'English') {
            obj['N'] = name;
        } else {
            obj['N'] = stat_dict[name];
        }
    }
    var note_list = new Set();
    var item_list = data_list['info']
    if (item_list == undefined) {
        item_list = [];
    }
    var info_dict = MAP_INFO_DICT[lang];
    var menu_dict = MAP_MENU_DICT[lang];
    for (var i = 0; i < item_list.length; i++) {
        var obj = item_list[i];
        var name = obj['H'];
        if (lang != 'English' && name in info_dict) {
            obj['N'] = info_dict[name];
        } else if (lang != 'English' && name in menu_dict) {
            obj['N'] = menu_dict[name];
        } else {
            obj['N'] = name;
        }
        if (name == 'Language') {
            if (lang != 'English' && name in info_dict) {
                obj['V'] = info_dict[obj['V']];
            }
        } else if (name == 'Melakartha') {
            obj['V'] = get_transliterator_text(in_lang, lang, obj['V']);
        } else if (name == 'Arohanam' || name == 'Avarohanam') {
            var value_list = obj['V'];
            var swara_str = value_list[0];
            var s_list = swara_str.split(' ');
            for (var k = 0; k < s_list.length; k++) {
                note_list.add(s_list[k]);
            }
            swara_str = get_transliterator_text(in_lang, lang, swara_str);
            swara_str = swara_str.replace(/1/g, '<sub>1</sub>');
            swara_str = swara_str.replace(/2/g, '<sub>2</sub>');
            swara_str = swara_str.replace(/3/g, '<sub>3</sub>');
            var note_str = value_list[1];
            var image_str = `<a href="javascript:play_notes('${note_str}');" ><img class="ICON" src="icons/soundwave.svg" ></a>`;
            obj['V'] = swara_str + ' ' + image_str;
        } else if (name == 'Raga' || name == 'Tala' || name == 'Tala name' || name == 'Tala angas' || name == 'God') {
            obj['V'] = get_transliterator_text(in_lang, lang, obj['P']);
        } else if (lang != 'English' && name in menu_dict) {
            obj['V'] = get_transliterator_text(in_lang, lang, obj['P']);
        }
    }
    var item = data_list['keyboard']
    if (item != undefined) {
        for (var i = 0; i < KEYBOARD_LIST.length; i++) {
            var obj = KEYBOARD_LIST[i];
            var swara_list = obj['V'];
            var new_swara_list = [];
            for (var j = 0; j < swara_list.length; j++) {
                var swara_str = swara_list[j];
                if (note_list.has(swara_str)) {
                    swara_str = get_transliterator_text(in_lang, lang, swara_str);
                    swara_str = swara_str.replace(/1/g, '<sub>1</sub>');
                    swara_str = swara_str.replace(/2/g, '<sub>2</sub>');
                    swara_str = swara_str.replace(/3/g, '<sub>3</sub>');
                    new_swara_list.push(swara_str);
                }
            }
            obj['N'] = '&nbsp;' + new_swara_list.join('<br>&nbsp;');
        }
        data_list['keyboard'] = { 'keys' : KEYBOARD_LIST };
    }
    var item_list = data_list['lyricstext']
    if (item_list == undefined) {
        item_list = [];
    }
    var lyric_prefix = 'SAhityA';
    var prefix = get_transliterator_text(in_lang, lang, lyric_prefix);
    for (var i = 0; i < item_list.length; i++) {
        var obj = item_list[i];
        var lyric_lang = obj['L'];
        if (lang != 'English' && lyric_lang in info_dict) {
            obj['L'] = prefix + ' - ' + info_dict[lyric_lang];
        } else {
            obj['L'] = prefix + ' - ' + lyric_lang;
        }
    }
    var references = 'References';
    if (lang != 'English') {
        references = info_dict[references];
    }
    var item_list = data_list['lyricsref']
    if (item_list == undefined) {
        item_list = [];
    }
    for (var i = 0; i < item_list.length; i++) {
        var obj = item_list[i];
        obj['R'] = references;
    }
}

function set_language(obj) {
    var lang = MAP_LANG_DICT[obj.value];
    window.parent.RENDER_LANGUAGE = lang;
    window.parent.GOT_LANGUAGE = obj.value;
    menu_transliteration(lang);
    load_nav_data(window.parent.NAV_CATEGORY);
    load_content_data(window.parent.CONTENT_CATGEGORY, window.parent.CONTENT_NAME);
}

function carnatic_init() {
    var lang = 'English';
    window.parent.RENDER_LANGUAGE = lang;
    window.parent.GOT_LANGUAGE = lang;
    sessionStorage.clear();
    window.addEventListener('storage', on_storage_event, false);
    window.onload = load_content;
    menu_transliteration(lang);
    load_nav_data('about');
}

function load_content() {
    if (window.innerWidth < 992) {
        $('#DEVICE_PROPERTY').modal('show');
        setTimeout(function() { $('#DEVICE_PROPERTY').modal('hide'); }, 3000);
    }

    $(document).ready(function() {
        $('#MENU_DATA li').bind('click', function() {
            $(this).addClass('active').siblings().removeClass('active');
        });
    });

    $("#MENU_DATA li a").on("click", function() {
        $("#MENU_DATA li").find(".active").removeClass("active");
        $(this).parent().addClass("active");
    });

    load_id_data();
    youtube_player_init();
}

function load_id_data(category) {
    var url = 'id.json';
    $.getJSON(url, function(id_data) {
        window.ID_DATA = id_data;
        load_nav_data('raga');
        load_content_data('song', 'Endaro Mahanubhavulu');
        search_init();
    });
}

function get_playlist() {
    var new_play_list = sessionStorage["playlist"];
    if (new_play_list == undefined) {
        new_play_list = new Array();
    } else {
        new_play_list = JSON.parse(new_play_list);
    }
    return new_play_list;
}

function add_song(audio_file) {
    var play_list = get_playlist();
    if (play_list.length <= 0) {
        if (audio_file != '') {
            play_list[0] = audio_file;
        }
    } else {
        play_list[play_list.length] = audio_file;
    }
    sessionStorage["playlist"] = JSON.stringify(play_list);
    if (play_list.length == 1) {
        play_first();
    } else {
        $('#PLAYLIST_QUEUE').modal('show');
        setTimeout(function() { $('#PLAYLIST_QUEUE').modal('hide'); }, 3000);
    }
}

function delete_song(song_id) {
    var play_list = get_playlist();
    if (play_list.length > 0) {
        song_id = parseInt(song_id);
        play_list.splice(song_id, 1);
        sessionStorage["playlist"] = JSON.stringify(play_list);
        if (song_id == 0) {
            play_first();
        }
    }
}

function delete_row(row) {
    var row_id = row.parentNode.parentNode.rowIndex;
    handle_playlist_command("delete", row_id - 1);
    document.getElementById('PLAYLIST_TABLE').deleteRow(row_id);
}

function show_playlist() {
    var play_list = get_playlist();
    var html_str = '';
    html_str += '<table id="PLAYLIST_TABLE" class="table table-striped table-condensed">';
    html_str += '<tr><th>No.</th><th>ID</th><th>Song</th><th>Raga</th><th></th></tr>';
    for (var i = 0; i < play_list.length; i++) {
        var parts = play_list[i].split(':');
        html_str += '<tr><td>' + (i + 1) + '</td><td>' + parts[0] + '</td><td>' + parts[1] + '</td><td>' + parts[2] + '</td><td><a href="#" onclick="delete_row(this);"><img src="icons/x.svg" width="24" height="24"></a></td></tr>';
    }
    html_str += '</table>';
    document.getElementById('PLAYLIST_BODY').innerHTML = html_str;
    $('#PLAYLIST_MODAL').modal();
}

function handle_playlist_command(cmd, arg) {
    if (cmd == "play") {
        var audio_file = arg;
        add_song(audio_file);
    } else if (cmd == "delete") {
        var song_id = arg;
        delete_song(song_id);
    } else if (cmd == "show") {
        show_playlist();
    }
    return true;
}

function render_nav_template(category, data) {
    var lang = window.parent.RENDER_LANGUAGE;
    var in_lang = 'harvardkyoto_tamil';
    var letter_list = data['alphabet']
    var l_list = [];
    var need_trans = lang == 'English' && (category == 'artist' || category == 'composer' || category == 'type')
    var id_data = window.ID_DATA;
    for (var k = 0; k < letter_list.length; k++) {
        var l_item = letter_list[k];
        l_list.push(l_item['LL']);
        var item_list = l_item['items']
        for (var i = 0; i < item_list.length; i++) {
            var obj = item_list[i];
            var h = obj['H'];
            h_value = id_data[h][0][1];
            var n = obj['N'];
            var f_value = id_data[n][0][1];
            if (need_trans) {
                var f_value = h_value;
            } else {
                var f_value = get_transliterator_text(in_lang, lang, f_value);
            }
            obj['H'] = h_value;
            obj['N'] = f_value
        }
    }
    var ul_template = $('#nav-ul-template').html();
    var template_html = Mustache.to_html(ul_template, data);
    $('#MENU').html(template_html);
    $('#slider').sliderNav({ 'items' : l_list });
}

function load_nav_data(category) {
    window.parent.NAV_CATEGORY = category;
    var url = category + '.json';
    $.getJSON(url, function(video_data) {
        if (category == 'about') {
            info_transliteration(category, video_data);
            render_card_template('#page-title-template', '#PAGE_TITLE', video_data);
            render_card_template('#page-info-template', '#PAGE_INFO', video_data);
            render_data_template('', '', video_data);
        } else {
            render_nav_template(category, video_data);
        }
    });
}

function render_card_template(template_name, id, data) {
    var ul_template = $(template_name).html();
    var template_html = Mustache.to_html(ul_template, data);
    $(id).html(template_html);
}

function get_folder_value(category, info, prefix, v) {
    var lang = window.parent.RENDER_LANGUAGE;
    var in_lang = 'harvardkyoto_tamil';
    var id_data = window.ID_DATA;
    var h_name = prefix + 'D';
    var h_id = info[v][1];
    var h_text = id_data[h_id][0][1];
    info[h_name] = h_text;
    var f_name = prefix + 'N';
    var f_text = id_data[info[v][0]][0][1]
    if (lang != 'English' && (h_id == '1000' || h_id == '5000' || h_id == '7000')) {
        info[f_name] = '?';
    } else if (lang == 'English' && (category == 'artist' || category == 'composer' || category == 'type')) {
        info[f_name] = h_text;
    } else {
        info[f_name] = get_transliterator_text(in_lang, lang, f_text);
    }
}

function render_data_template(category, id, data) {
    var lang = window.parent.RENDER_LANGUAGE;
    if (category == '') {
        $('#PAGE_VIDEOS').html('');
        $('#PAGE_LYRICS').html('');
        $('#PAGE_REFS').html('');
        return;
    }

    var CC = [ 'I', 'R', 'D', 'V' ]
    var OF = [ 'F', 'S', 'T' ]
    var FF = { 'artist'   : [ 'song',   'S', [ 'T', 'R', 'C' ], [ 'type', 'raga',   'composer' ] ],
               'composer' : [ 'song',   'S', [ 'T', 'R', 'A' ], [ 'type', 'raga',   'artist'   ] ],
               'raga'     : [ 'song',   'S', [ 'T', 'A', 'C' ], [ 'type', 'artist', 'composer' ] ],
               'type'     : [ 'song',   'S', [ 'R', 'A', 'C' ], [ 'raga', 'artist', 'composer' ] ],
               'song'     : [ 'artist', 'A', [ 'T', 'R', 'C' ], [ 'type', 'raga',   'composer' ] ]
             }
    var template_name = '#page-videos-template'
    var ul_template = $(template_name).html();
    if (lang != 'English') {
        var stat_dict = MAP_STAT_DICT[lang];
        ul_template = ul_template.replace('Videos', stat_dict['Videos']);
        ul_template = ul_template.replace('Views', stat_dict['Views']);
    }
    var new_folder_list = [];
    var ff = FF[category];
    var sd = ff[2];
    var st = ff[3];
    var video_list = data['videos']
    for (var k = 0; k < video_list.length; k++) {
        var folder_list = video_list[k]['folder']
        for (var i = 0; i < folder_list.length; i++) {
            var folder = folder_list[i];
            var song_list = folder['songs'];
            folder['HT'] = ff[0];
            folder['HC'] = song_list.length
            get_folder_value(ff[0], folder, 'H', ff[1]);
            for (var j = 0; j < song_list.length; j++) {
                var song = song_list[j];
                for (var m = 0; m < OF.length; m++) {
                    var c = OF[m] + 'T';
                    song[c] = st[m];
                    get_folder_value(st[m], song, OF[m], sd[m]);
                }
            }
        }
    }
    var template_html = Mustache.to_html(ul_template, data);
    $(id).html(template_html);
}

function render_content_data(category, name, video_data) {
    $('#PAGE_INFO').html('');
    info_transliteration(category, video_data);
    render_card_template('#page-title-template', '#PAGE_TITLE', video_data);
    render_card_template('#page-info-template', '#PAGE_INFO', video_data);
    render_data_template(category, '#PAGE_VIDEOS', video_data);
    render_card_template('#page-lyrics-text-template', '#PAGE_LYRICS', video_data);
    render_card_template('#page-lyrics-ref-template', '#PAGE_REFS', video_data);
    window.scrollTo(0, 0);
}

function load_content_data(category, name) {
    window.parent.CONTENT_CATGEGORY = category;
    window.parent.CONTENT_NAME = name;
    var url = `${category}/${name}.json`;
    $.getJSON(url, function(video_data) {
        render_content_data(category, name, video_data);
    });
}

function search_load() {
    if (window.search_initialized) {
        return;
    }

    var url = 'search_index.json';
    var search_engine = window.carnatic_search_engine;
    $.getJSON(url, function(search_index_obj) {
        var data_id = 0;
        var search_obj = search_index_obj['Search'];
        for (var category in search_obj) {
            var data_list = search_obj[category];
            data_list.forEach(function (data_item, data_index) {
                var data_doc = { "id" : data_id, "title" : data_item.N, "aka" : data_item.A, "href" : data_item.H, "category" : category, "pop" : data_item.P };
                search_engine.add(data_doc);
                data_id += 1;
            });
        }
        window.parent.CARNATIC_CHAR_MAP = search_index_obj['Charmap'];
        transliterator_init();
    });

    window.search_initialized = true;
}

function search_init() {
    window.carnatic_search_engine = new MiniSearch({
        fields: ['aka'], // fields to index for full-text search
        storeFields: ['title', 'href', 'category', 'pop'] // fields to return with search results
    });
    window.CARNATIC_ICON_DICT = { 'song' : 'music-note-beamed', 'artist' : 'person-fill', 'composer' : 'person-lines-fill', 'raga' : 'music-note-list', 'type' : 'tag' };
    window.search_initialized = false;
    search_load();
}

function get_search_results(search_word, search_options, item_list, id_list) {
    var lang = window.parent.RENDER_LANGUAGE;
    var in_lang = 'harvardkyoto_tamil';
    var menu_dict = MAP_MENU_DICT[lang];
    var icon_dict = window.CARNATIC_ICON_DICT;
    var search_engine = window.carnatic_search_engine;
    var results = search_engine.search(search_word, search_options);
    if (results.length > 0) {
        var max_score = results[0].score;
        results.forEach(function (result_item, result_index) {
            if (!id_list.has(result_item.id)) {
                if (search_word.length > 2) {
                    var pop = ((400 * result_item.score) / max_score) + (0.6 * result_item.pop);
                } else {
                    var pop = result_item.pop;
                }
                var category = result_item.category
                if ( lang == 'English' ) {
                    var n_category = category.toUpperCase();
                } else {
                    var c_name = category.charAt(0).toUpperCase() + category.slice(1);
                    var n_category = menu_dict[c_name];
                }
                var title = window.ID_DATA[result_item.title][0][1];
                var title = get_transliterator_text(in_lang, lang, title);
                var href = window.ID_DATA[result_item.href][0][1];
                var item = { 'T' : category, 'C' : n_category, 'I' : icon_dict[category], 'H' : href, 'N' : title, 'P' : pop };
                item_list.push(item);
                id_list.add(result_item.id);
            }
        });
    }
}

function transliterator_init() {
    var char_map = window.parent.CARNATIC_CHAR_MAP;
    var key_list = [];
    var max_len = 0;
    for (var s in char_map) {
        key_list.push(s);
        max_len = Math.max(max_len, s.length);
    }
    window.parent.CHAR_MAP_MAX_LENGTH = max_len;
    window.parent.CHAR_MAP_KEY_LIST = new Set(key_list);
}

function transliterate_text(word) {
    if (word.charCodeAt(0) <= 127) {
        return word;
    }
    var char_map = window.parent.CARNATIC_CHAR_MAP;
    var tokenset = window.parent.CHAR_MAP_KEY_LIST;
    var maxlen = window.parent.CHAR_MAP_MAX_LENGTH;
    var current = 0;
    var tokenlist = [];
    word = word.toString();
    while (current < word.length) {
        var nextstr = word.slice(current, current+maxlen);
        var p = nextstr[0];
        var j = 1;
        var i = maxlen;
        while (i > 0) {
            var s = nextstr.slice(0, i);
            if (tokenset.has(s)) {
                p = s;
                j = i;
                break
            }
            i -= 1;
        }
        if (p in char_map) {
            p = char_map[p];
        }
        tokenlist.push(p);
        current += j;
    }
    var new_word = tokenlist.join('');
    if (word != new_word) {
        new_word = new_word.replace(/_/g, '');
        new_word = new_word.replace(/G/g, 'n');
        new_word = new_word.replace(/J/g, 'n');
    }
    return new_word;
}

function load_search_data() {
    var search_word = document.getElementById('SEARCH_WORD').value;
    search_word = transliterate_text(search_word);
    const s_search_word = search_word.replace(/\s/g, '');
    var item_list = [];
    var id_list = new Set();
    var search_options = { prefix: true, combineWith: 'AND', fuzzy: term => term.length > 3 ? 0.1 : null };
    get_search_results(search_word, search_options, item_list, id_list);
    if (search_word != s_search_word) {
        get_search_results(s_search_word, search_options, item_list, id_list);
    }
    if (search_word.length > 2) {
        var search_options = { prefix: true, combineWith: 'AND', fuzzy: term => term.length > 3 ? 0.3 : null };
        get_search_results(search_word, search_options, item_list, id_list);
        if (search_word != s_search_word) {
            get_search_results(s_search_word, search_options, item_list, id_list);
        }
    }
    item_list.sort(function (a, b) { return b.P - a.P; });
    var new_item_list = item_list.slice(0, 25);
    var item_data = { 'title' : { 'N': 'Search Results', 'I': 'search' }, 'items' : new_item_list };
    render_card_template('#page-title-template', '#PAGE_TITLE', item_data);
    render_card_template('#page-search-template', '#PAGE_INFO', item_data);
    render_data_template('', '', item_data);
    window.scrollTo(0, 0);
}

const old_note_map = { 'S' : 'c3', 'S1' : 'c3', 'R1' : 'c-3', 'R2' : 'd3', 'G1' : 'd3', 'R3' : 'd-3', 'G2' : 'd-3', 'G3' : 'e3', 'M1' : 'f3', 'M2' : 'f-3', 'P' : 'g3', 'D1' : 'g-3', 'D2' : 'a3', 'N1' : 'a3', 'D3' : 'a-3', 'N2' : 'a-3', 'N3' : 'b3', 'S2' : 'c4' };
const note_map = { 'S' : 'c4', 'S1' : 'c4', 'R1' : 'c-4', 'R2' : 'd4', 'G1' : 'd4', 'R3' : 'd-4', 'G2' : 'd-4', 'G3' : 'e4', 'M1' : 'f4', 'M2' : 'f-4', 'P' : 'g4', 'D1' : 'g-4', 'D2' : 'a4', 'N1' : 'a4', 'D3' : 'a-4', 'N2' : 'a-4', 'N3' : 'b4', 'S2' : 'c5' };

function play_ended() {
    var note_list = window.note_play_list;
    var note_index = window.note_play_index;
    var swara = note_list[note_index];
    var note = note_map[swara];
    var key_div = '#note' + note;
    var key = $(key_div).css("background-color", window.note_key_color);
    window.note_play_index += 1;
    if (window.note_play_index < window.note_play_list.length) {
        play_note();
    }
};

function play_note() {
    var note_list = window.note_play_list;
    var note_index = window.note_play_index;
    var swara = note_list[note_index];
    var note = note_map[swara];
    var key_div = '#note' + note;
    window.note_key_color = $(key_div).css("background-color");
    var key = $(key_div).css("background-color", "cyan");
    var note_audio = document.getElementById('NOTE_PLAY');
    var src = 'audio/' + note + '.mp3';
    note_audio.src = src;
    note_audio.currentTime = 0;
    note_audio.onended = play_ended;
    note_audio.play();
}

function play_notes(notes) {
    window.note_play_list = notes.split(' ');
    window.note_play_index = 0;
    play_note();
}

