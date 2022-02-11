
const VIDEO_INFO_KEY_LIST = new Set([ 'title', 'author_name' ]);
const ENGLISH_TYPE_LIST = [ 'artist', 'composer', 'type' ];
const CC = [ 'I', 'R', 'D', 'V' ];
const OF = [ 'F', 'S', 'T' ];
const FF = { 'artist'   : [ 'song',   'S', [ 'T', 'R', 'C' ], [ 'type', 'raga',   'composer' ] ],
             'composer' : [ 'song',   'S', [ 'T', 'R', 'A' ], [ 'type', 'raga',   'artist'   ] ],
             'raga'     : [ 'song',   'S', [ 'T', 'A', 'C' ], [ 'type', 'artist', 'composer' ] ],
             'type'     : [ 'song',   'S', [ 'R', 'A', 'C' ], [ 'raga', 'artist', 'composer' ] ],
             'song'     : [ 'artist', 'A', [ 'T', 'R', 'C' ], [ 'type', 'raga',   'composer' ] ]
           };
const CARNATIC_ICON_DICT = { 'song'     : 'music-note-beamed',
                             'artist'   : 'person-fill',
                             'composer' : 'person-lines-fill',
                             'raga'     : 'music-note-list',
                             'type'     : 'tag'
                           };
const KEY_NAME_LIST = [ 'Melakartha', 'Thaat', 'God' ];
const SEARCH_MAP_DICT = { 'c' : 's', 'p' : 'b' };


function sleep(seconds){
    var waitUntil = new Date().getTime() + seconds*1000;
    while(new Date().getTime() < waitUntil) true;
}

function capitalize_word(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function get_bs_modal(id) {
    return new bootstrap.Modal(document.getElementById(id));
}

function call_modal_dialog(title) {
    $('#DIALOG_TITLE').html(title);
    get_bs_modal('DIALOG_BOX').show();
}

function show_modal_dialog(title, body) {
    $('#DIALOG_BODY').html(body);
    call_modal_dialog(title);
    setTimeout(function() { get_bs_modal('DIALOG_BOX').hide(); }, 3000);
}

function render_modal_dialog(title, template, data) {
    render_card_template(template, '#DIALOG_BODY', data);
    call_modal_dialog(title);
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

last_player_status = 0;
function onPlayerStateChange(event) {
    var player_status = event.data;
    // playerStatus: -1 : unstarted, 0 - ended, 1 - playing, 2 - paused, 3 - buffering, 5 - video cued
    if (last_player_status == 3 && player_status == -1) {
        show_modal_dialog('Video is not playable', 'Click Play List to Delete Song');
    }
    if (player_status == 0) {
        play_next();
    }
    // console.log(`Player Status ${player_status} last: ${last_player_status}`);
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
    new_play_list = (new_play_list == undefined) ? new Array() : JSON.parse(new_play_list);
    return new_play_list;
}

function play_first() {
    var play_list = get_play_list();
    if (play_list.length <= 0) {
        return;
    }
    var parts = play_list[0].split(':');
    var video_id = parts[0];
    const time_str = '&t=';
    if (video_id.includes(time_str)) {
        var v_list = video_id.split(time_str);
        video_id = v_list[0];
        var start_time = parseInt(v_list[1].replace('s', ''));
        window.yt_player.loadVideoById({ videoId: video_id, startSeconds: start_time});
    } else {
        window.yt_player.loadVideoById({ videoId: video_id });
    }
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
    }
    if (play_list.length > 1) {
        show_modal_dialog('Song added to Play List', 'Click Play List to Add/Delete Songs');
        return;
    }
    play_first();
}

function menu_transliteration(lang) {
    var item_list = CATEGORY_DICT['categories']
    var map_info_data = get_map_data('MAP_INFO_DICT');
    var map_dict = map_info_data[lang];
    for (var i = 0; i < item_list.length; i++) {
        var obj = item_list[i];
        var name = obj['C'];
        name = name.charAt(0).toUpperCase() + name.slice(1);
        obj['N'] = (lang == 'English') ? name : map_dict[name];
    }
    var playlist = 'Playlist';
    var search = 'Search';
    if (lang != 'English') {
        playlist = map_dict[playlist];
        search = map_dict[search];
    }
    let lang_list = [];
    for (var l in MAP_LANG_DICT) {
        var d = (l == window.GOT_LANGUAGE) ? { 'N' : l, 'O' : 'selected' } : { 'N' : l };
        lang_list.push(d);
    }
    var search_tooltip = 'Prefix Search <br/> e.g. radu daya <br/> Phonetic Search <br/> e.g. goula <br/> Language Search <br/> e.g. கல்யாணி <br/> Context Search <br/> e.g. mdr : kalyani : dikshitar';
    var mic_tooltip = 'Only in Chrome';
    var kbd_tooltip = 'Language Keyboard';
    var other_dict = { 'P' : playlist, 'S' : search, 'STP' : search_tooltip, 'MTP' : mic_tooltip, 'KTP' : kbd_tooltip };
    var menu_dict = { 'menus' : { 'languages' : lang_list, 'search' : other_dict, 'playlist' : other_dict, 'categories' : CATEGORY_DICT['categories'] } };
    render_card_template('#page-menu-template', '#MENU_DATA', menu_dict);

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    });
    speech_to_text_init();
}

function get_swara_transliterate(lang, swara_str) {
    if (lang != 'English') {
        swara_str = swara_str.replace(/da/g, 'dha');
    }
    swara_str = get_transliterator_text(lang, swara_str);
    swara_str = swara_str.replace(/([123])/g, '<sub>$1</sub>');
    return swara_str;
}

function get_swara_text(lang, note_list, value_list) {
    var swara_str = value_list[0];
    var s_list = swara_str.split(' ');
    for (var k = 0; k < s_list.length; k++) {
        note_list.add(s_list[k]);
    }
    swara_str = get_swara_transliterate(lang, swara_str);
    var note_str = value_list[1];
    var image_str = `<a href="javascript:play_notes('${note_str}');" ><img class="ICON" src="icons/soundwave.svg" ></a>`;
    return swara_str + ' ' + image_str;
}

function check_for_english_text(lang, category, h_id, h_text) {
    if (lang != 'English') {
        return false;
    }
    if (ENGLISH_TYPE_LIST.includes(category)) {
        return true;
    }
    if (category != 'song') {
        return false;
    }
    if (h_id >= 20000) {
        return true;
    }
    if (h_text.includes(' - ')) {
        return true;
    }
    return false;
}

function info_transliteration(category, data_list) {
    var lang = window.RENDER_LANGUAGE;
    var map_info_data = get_map_data('MAP_INFO_DICT');
    var map_dict = map_info_data[lang];
    var map_month_data = get_map_data('MAP_MONTH_DICT');
    var item = data_list['title']
    var h_text = item['H'];
    if (category == 'about') {
        if (lang != 'English') {
            item['N'] = map_dict[item['N']];
        }
    } else if (check_for_english_text(lang, category, 200, h_text)) {
        item['N'] = h_text;
    } else {
        var value = item['V'];
        if (lang != 'English' && value.includes('unknowncomposer')) {
            value = value.replace('unknowncomposer', '?');
        }
        item['N'] = get_transliterator_text(lang, value);
    }
    var item_list = data_list['stats']
    if (item_list == undefined) {
        item_list = [];
    }
    for (var i = 0; i < item_list.length; i++) {
        var obj = item_list[i];
        var name = obj['H'];
        obj['N'] = (lang == 'English') ? name : map_dict[name];
    }
    var note_list = new Set();
    var item_list = data_list['info']
    if (item_list == undefined) {
        item_list = [];
    }
    for (var i = 0; i < item_list.length; i++) {
        var obj = item_list[i];
        var name = obj['H'];
        obj['N'] = (lang != 'English' && name in map_dict) ? map_dict[name] : name;
        var value = obj['V'];
        if (name == 'Language') {
            if (lang != 'English' && name in map_dict) {
                obj['V'] = map_dict[value];
            }
        } else if (KEY_NAME_LIST.includes(name)) {
            obj['V'] = get_transliterator_text(lang, value);
        } else if (name == 'Arohana' || name == 'Avarohana') {
            obj['V'] = get_swara_text(lang, note_list, value)
        } else if (name == 'Born' || name == 'Died') {
            if (value != undefined && typeof value === 'string') {
                var m_list = [];
                if (value.includes(' ')) {
                    m_list = value.split(' ');
                }
                if (m_list.length > 1 && lang in map_month_data && m_list[1] in map_month_data[lang]) {
                    obj['V'] = m_list[0] + ' ' + map_month_data[lang][m_list[1]] + ' ' + m_list[2];
                }
            }
        } else if (lang != 'English' && name == 'Gharana') {
            var item_list = obj['P'];
            if (value != undefined) {
                var g_list = [];
                for (var j = 0; j < item_list.length; j++) {
                     g_list.push(get_transliterator_text(lang, item_list[j])); 
                }
                obj['V'] = g_list.join('</br>');
            }
        } else if (lang != 'English' && name in map_dict) {
            value = obj['P'];
            if (value != undefined) {
                obj['V'] = get_transliterator_text(lang, value);
            }
        }
    }
    var item = data_list['keyboard']
    if (item != undefined) {
        var kbd_list = get_map_data('KEYBOARD_LIST');
        for (var i = 0; i < kbd_list.length; i++) {
            var obj = kbd_list[i];
            var swara_list = obj['V'];
            var new_swara_list = [];
            for (var j = 0; j < swara_list.length; j++) {
                var swara_str = swara_list[j];
                if (note_list.has(swara_str)) {
                    swara_str = get_swara_transliterate(lang, swara_str);
                    new_swara_list.push(swara_str);
                }
            }
            obj['N'] = '&nbsp;' + new_swara_list.join('<br>&nbsp;');
        }
        data_list['keyboard'] = { 'keys' : kbd_list };
    }
    var item_list = data_list['lyricstext']
    if (item_list == undefined) {
        item_list = [];
    }
    var lyric_prefix = 'SAhityA';
    var prefix = get_transliterator_text(lang, lyric_prefix);
    for (var i = 0; i < item_list.length; i++) {
        var obj = item_list[i];
        var lyric_lang = obj['L'];
        lyric_lang = (lang != 'English' && lyric_lang in map_dict) ? map_dict[lyric_lang] : lyric_lang;
        obj['L'] = prefix + ' - ' + lyric_lang;
    }
    var references = 'References';
    if (lang != 'English') {
        references = map_dict[references];
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
    var got_lang = obj.value;
    window.GOT_LANGUAGE = got_lang;
    var lang = MAP_LANG_DICT[got_lang];
    window.RENDER_LANGUAGE = lang;
    var history_data = window.history_data;
    // console.log(`SET LANG: ${lang} ${got_lang} ${history_data}`);
    transliterator_lang_init(lang);
    menu_transliteration(lang);
    load_nav_data(window.NAV_CATEGORY);
    if (history_data == undefined) {
        load_content_data(window.CONTENT_CATGEGORY, window.CONTENT_NAME);
    } else  {
        handle_history_context(history_data);
    }
}

function load_lang_data() {
    var url = 'hk_lang_map.json';
    $.getJSON(url, function(map_data) {
        init_lang_maps(map_data);
        load_nav_data('raga');
        if (window.default_song != '') {
            load_content_data('song', window.default_song);
        }
        search_init();
    });

}

function load_id_data() {
    var url = 'id.json';
    $.getJSON(url, function(id_data) {
        window.ID_DATA = id_data;
        load_lang_data()
    });
}

function add_song(audio_file) {
    var play_list = get_play_list();
    if (play_list.length <= 0) {
        if (audio_file != '') {
            play_list[0] = audio_file;
        }
    } else {
        play_list[play_list.length] = audio_file;
    }
    sessionStorage['playlist'] = JSON.stringify(play_list);
    if (play_list.length == 1) {
        play_first();
    } else {
        show_modal_dialog('Song added to Play List', 'Click Play List to Add/Delete Songs');
    }
}

function delete_song(song_id) {
    var play_list = get_play_list();
    if (play_list.length > 0) {
        song_id = parseInt(song_id);
        play_list.splice(song_id, 1);
        sessionStorage['playlist'] = JSON.stringify(play_list);
        if (song_id == 0) {
            play_first();
        }
    }
}

function delete_row(row) {
    var row_id = row.parentNode.parentNode.rowIndex;
    handle_playlist_command('delete', row_id - 1);
    document.getElementById('PLAYLIST_TABLE').deleteRow(row_id);
}

function show_playlist() {
    var play_list = get_play_list();
    var info_list = [];
    for (var i = 0; i < play_list.length; i++) {
        var parts = play_list[i].split(':');
        info_dict = { 'N' : i + 1, 'I' : parts[0], 'S' : parseInt(parts[1]), 'R' : parseInt(parts[2]) };
        get_folder_value('song', info_dict, 'S', 'S');
        get_folder_value('raga', info_dict, 'R', 'R');
        info_list.push(info_dict);
    }
    var lang = window.RENDER_LANGUAGE;
    var map_info_data = get_map_data('MAP_INFO_DICT');
    var map_dict = map_info_data[lang];
    var header_dict = { 'N' : 'No.', 'I' : 'ID', 'SN' : 'Song', 'RN' : 'Raga' };
    var playlist = 'Playlist';
    if (lang != 'English') {
        var map_dict = map_info_data[lang];
        playlist = map_dict[playlist];
        header_dict = { 'N' : 'No.', 'I' : 'ID', 'SN' : map_dict['Song'], 'RN' : map_dict['Raga'] };
    }
    var header_list = [ header_dict ];
    var list_data = { 'playlist' : { 'header' : header_list, 'videos' : info_list } };
    render_modal_dialog(playlist, '#modal-playlist-template', list_data)
}

function handle_playlist_command(cmd, arg) {
    if (cmd == 'play') {
        var audio_file = arg;
        add_song(audio_file);
    } else if (cmd == 'delete') {
        var song_id = arg;
        delete_song(song_id);
    } else if (cmd == 'show') {
        show_playlist();
    }
    return true;
}

function render_nav_template(category, data) {
    var lang = window.RENDER_LANGUAGE;
    var letter_list = data['alphabet']
    var l_list = [];
    var no_transliterate = lang == 'English' && ENGLISH_TYPE_LIST.includes(category);
    var id_data = window.ID_DATA[category];
    for (var k = 0; k < letter_list.length; k++) {
        var l_item = letter_list[k];
        l_list.push(l_item['LL']);
        var item_list = l_item['items']
        for (var i = 0; i < item_list.length; i++) {
            var obj = item_list[i];
            var h_id = obj['H'];
            var h_text = id_data[h_id][0];
            var f_text = id_data[h_id][1];
            obj['H'] = h_text;
            if (lang != 'English' && f_text.includes('unknowncomposer')) {
                f_text = f_text.replace('unknowncomposer', '?');
            }
            if (check_for_english_text(lang, category, h_id, f_text)) {
                obj['N'] = h_text;
            } else {
                obj['N'] = (no_transliterate) ? h_text : get_transliterator_text(lang, f_text);
            }
        }
    }
    var ul_template = $('#nav-ul-template').html();
    var template_html = Mustache.to_html(ul_template, data);
    $('#MENU').html(template_html);
    $('#slider').sliderNav({ 'items' : l_list });
}

function load_about_data(category, video_data) {
    info_transliteration(category, video_data);
    render_card_template('#page-title-template', '#PAGE_TITLE', video_data);
    render_card_template('#page-about-template', '#PAGE_INFO', video_data);
    render_data_template('', '', video_data);
}

function load_nav_data(category) {
    if (category != 'about') {
        window.NAV_CATEGORY = category;
    }
    var url = category + '.json';
    $.getJSON(url, function(video_data) {
        if (category == 'about') {
            load_about_data(category, video_data);
        } else {
            render_nav_template(category, video_data);
        }
        add_history('nav', { 'category' : category });
    });
}

function render_card_template(template_name, id, data) {
    var ul_template = $(template_name).html();
    var template_html = Mustache.to_html(ul_template, data);
    $(id).html(template_html);
}

function get_folder_value(category, info, prefix, v) {
    var lang = window.RENDER_LANGUAGE;
    var id_data = window.ID_DATA[category];
    var h_name = prefix + 'D';
    var h_id = info[v];
    var h_text = id_data[h_id][0];
    var f_text = id_data[h_id][1];
    if (h_text != 'UnknownType') {
        info[h_name] = h_text;
    }
    var f_name = prefix + 'N';
    if (lang != 'English' && h_id == 0) {
        info[f_name] = '?';
    } else if (check_for_english_text(lang, category, h_id, f_text)) {
        info[f_name] = h_text;
    } else {
        info[f_name] = get_transliterator_text(lang, f_text);
    }
}

function get_match_count(f_category, f_value, context_list, c_len) {
    var found = 0;
    for (var c = 1; c < c_len; c++) {
        if (context_list[c][0] == f_category && context_list[c][2] == f_value) {
            found += 1;
        }
    }
    return found;
}

function render_data_template(category, id, data, context_list) {
    var lang = window.RENDER_LANGUAGE;
    if (category == '') {
        $('#PAGE_VIDEOS').html('');
        $('#PAGE_LYRICS').html('');
        $('#PAGE_REFS').html('');
        return;
    }

    var template_name = '#page-videos-template'
    var ul_template = $(template_name).html();
    if (lang != 'English') {
        var map_info_data = get_map_data('MAP_INFO_DICT');
        var map_dict = map_info_data[lang];
        ul_template = ul_template.replace('Videos', map_dict['Videos']);
        ul_template = ul_template.replace('Views', map_dict['Views']);
    }
    var new_folder_list = [];
    var ff = FF[category];
    var f_category = ff[0];
    var f_type = ff[1];
    var sd = ff[2];
    var st = ff[3];
    var video_list = data['videos']
    for (var k = 0; k < video_list.length; k++) {
        var folder_list = video_list[k]['folder'];
        for (var i = 0; i < folder_list.length; i++) {
            var folder = folder_list[i];
            var song_list = folder['songs'];
            var song_ids = '';
            if (category != 'song') {
                song_ids = folder['S'];
            }
            folder['HT'] = f_category;
            folder['HC'] = song_list.length;
            get_folder_value(f_category, folder, 'H', f_type);
            for (var j = 0; j < song_list.length; j++) {
                var song = song_list[j];
                for (var m = 0; m < OF.length; m++) {
                    var c = OF[m] + 'T';
                    song[c] = st[m];
                    get_folder_value(st[m], song, OF[m], sd[m]);
                }
                if (category == 'song') {
                    song_ids = song['S'];
                }
                song['PS'] = song_ids;
                song['PR'] = song['R'];
            }
        }
    }

    if (context_list != undefined) {
        var video_list = data['videos']
        var c_len = context_list.length;
        for (var k = 0; k < video_list.length; k++) {
            var folder_list = video_list[k]['folder']
            var new_folder_list = [];
            for (var i = 0; i < folder_list.length; i++) {
                var folder = folder_list[i];
                var f_category = folder['HT'];
                var f_value = folder['HN'];
                var s_found = get_match_count(f_category, f_value, context_list, c_len);
                var song_list = folder['songs'];
                var new_song_list = [];
                for (var j = 0; j < song_list.length; j++) {
                    var song = song_list[j];
                    var found = s_found;
                    for (var m = 0; m < OF.length; m++) {
                        var c = OF[m] + 'T';
                        var f_category = song[c];
                        var c = OF[m] + 'N';
                        var f_value = song[c];
                        found += get_match_count(f_category, f_value, context_list, c_len);
                    }
                    if (found >= (c_len - 1)) {
                        new_song_list.push(song);
                    }
                }
                folder['songs'] = new_song_list;
                if (new_song_list.length > 0) {
                    new_folder_list.push(folder);
                }
            }
            video_list[k]['folder'] = new_folder_list;
        }
    }

    var template_html = Mustache.to_html(ul_template, data);
    $(id).html(template_html);
}

function render_content_data(category, name, video_data, context_list) {
    $('#PAGE_INFO').html('');
    info_transliteration(category, video_data);
    render_card_template('#page-title-template', '#PAGE_TITLE', video_data);
    render_card_template('#page-info-template', '#PAGE_INFO', video_data);
    render_data_template(category, '#PAGE_VIDEOS', video_data, context_list);
    render_card_template('#page-lyrics-text-template', '#PAGE_LYRICS', video_data);
    render_card_template('#page-lyrics-ref-template', '#PAGE_REFS', video_data);
    window.scrollTo(0, 0);
}

function load_content_data(category, name) {
    window.CONTENT_CATGEGORY = category;
    window.CONTENT_NAME = name;
    var url = `${category}/${name}.json`;
    $.getJSON(url, function(video_data) {
        render_content_data(category, name, video_data);
        add_history('content', { 'category' : category, 'name' : name });
    });
}

function load_context_search_data(context_list) {
    var option_list = context_list[0].split(':');
    var category = option_list[0];
    var name = option_list[1];
    var new_context_list = [];
    for (var i = 0; i < context_list.length; i++) {
        new_context_list.push(context_list[i].split(':'));
    }
    window.CONTENT_CATGEGORY = category;
    window.CONTENT_NAME = name;
    var url = `${category}/${name}.json`;
    $.getJSON(url, function(video_data) {
        render_content_data(category, name, video_data, new_context_list);
    });
}

function normalize_search_text(search_text) {
    search_text = search_text.toLowerCase();
    search_text = search_text.replace(/(e)\1+/g, 'i');
    search_text = search_text.replace(/(o)\1+/g, 'u');
    search_text = search_text.replace(/(.)\1+/g, '$1');
    search_text = search_text.replace(/([bcdfgjklpst])h/g, '$1')
    search_text = search_text.replace(/([sd])v/g, '$1w')
    search_text = search_text.replace(/([ao])u/g, 'ow')
    return search_text;
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
                var h_id = data_item.H;
                var aka_list = normalize_search_text(data_item.A).split(',');
                var data_doc = { 'id' : data_id, 'href' : h_id, 'title' : h_id, 'aka' : aka_list, 'category' : category, 'pop' : data_item.P };
                search_engine.add(data_doc);
                data_id += 1;
            });
        }
        window.CARNATIC_CHAR_MAP = search_index_obj['Charmap'];
        transliterator_init();
    });

    window.search_initialized = true;
}

function search_init() {
    window.carnatic_search_engine = new MiniSearch({
        fields: ['aka'], // fields to index for full-text search
        storeFields: ['title', 'href', 'category', 'pop'] // fields to return with search results
    });
    window.search_initialized = false;
    search_load();
}

function get_search_results(search_word, search_options, item_list, id_list, base_pop) {
    var word_list = search_word.split(' ');
    var new_word_list = [];
    for (var i = 0; i < word_list.length; i++) {
        var word = word_list[i];
        if (word != '') {
            word = normalize_search_text(word);
            new_word_list.push(word.slice(0,8));
        }
        search_word = new_word_list.join(' ');
    }
    var lang = window.RENDER_LANGUAGE;
    var map_info_data = get_map_data('MAP_INFO_DICT');
    var map_dict = map_info_data[lang];
    var search_engine = window.carnatic_search_engine;
    var results = search_engine.search(search_word, search_options);
    if (results.length <= 0) return;
    var max_score = results[0].score;
    for (var i = 0; i < results.length; i++) {
        var result_item = results[i];
        if (id_list.has(result_item.id)) continue;
        var pop = result_item.pop;
        if (search_word.length > 2) {
            pop = ((400 * result_item.score) / max_score) + (0.6 * pop);
        }
        pop = base_pop + pop;
        var category = result_item.category
        var id_data = window.ID_DATA[category];
        var c_name = category.charAt(0).toUpperCase() + category.slice(1);
        var n_category = (lang == 'English') ? category.toUpperCase() : map_dict[c_name];
        var href = id_data[result_item.href][0];
        var title = id_data[result_item.title][1];
        if (check_for_english_text(lang, category, result_item.href, href)) {
            title = href;
        } else {
            title = get_transliterator_text(lang, title);
        }
        var item = { 'T' : category, 'C' : n_category, 'I' : CARNATIC_ICON_DICT[category], 'H' : href, 'N' : title, 'P' : pop };
        item_list.push(item);
        id_list.add(result_item.id);
    }
}

function transliterator_init() {
    var char_map = window.CARNATIC_CHAR_MAP;
    var key_list = [];
    var max_len = 0;
    for (var s in char_map) {
        key_list.push(s);
        max_len = Math.max(max_len, s.length);
    }
    window.CHAR_MAP_MAX_LENGTH = max_len;
    window.CHAR_MAP_KEY_LIST = new Set(key_list);

    set_tamil_regex_list();
}

function transliterate_text(word) {
    var char_map = window.CARNATIC_CHAR_MAP;
    var tokenset = window.CHAR_MAP_KEY_LIST;
    var maxlen = window.CHAR_MAP_MAX_LENGTH;
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

function get_tamil_phonetic_word(word) {
    var w_list = [];
    var new_word = word.toLowerCase();
    for (var i = 0; i < new_word.length; i++) {
        var c = new_word[i];
        w_list.push((c in SEARCH_MAP_DICT) ? SEARCH_MAP_DICT[c] : c);
    }
    return w_list.join('');
}

function load_search_part(search_word, non_english) {
    var s_search_word = search_word.replace(/\s/g, '');
    var item_list = [];
    var id_list = new Set();
    var search_options = { prefix: true, combineWith: 'AND', fuzzy: term => term.length > 3 ? 0.1 : null };
    get_search_results(search_word, search_options, item_list, id_list, 4000);
    if (search_word != s_search_word) {
        get_search_results(s_search_word, search_options, item_list, id_list, 1000);
    }
    var n_search_word = '';
    if (non_english) {
        n_search_word = get_tamil_phonetic_word(search_word);
        get_search_results(n_search_word, search_options, item_list, id_list, 5000);
    }
    if (search_word.length > 2) {
        var search_options = { prefix: true, combineWith: 'AND', fuzzy: term => term.length > 3 ? 0.3 : null };
        get_search_results(search_word, search_options, item_list, id_list, 0);
        if (non_english && n_search_word) {
            get_search_results(n_search_word, search_options, item_list, id_list, 0);
        }
        if (search_word != s_search_word) {
            get_search_results(s_search_word, search_options, item_list, id_list, 0);
        }
    }
    item_list.sort(function (a, b) { return b.P - a.P; });
    var new_item_list = item_list.slice(0, 25);
    return new_item_list;
}

function handle_search_word(search_word) {
    var lang = window.RENDER_LANGUAGE;
    var c = search_word.charCodeAt(0);
    if (c > 127) {
        search_word = transliterate_text(search_word);
    }
    var non_english = (0x0B80 <= c && c <= 0x0BFF) ? true : false;

    var context_dict = {};
    var context_list = search_word.split(':');
    for (var i = 0; i < context_list.length; i++) {
        var word = context_list[i];
        var new_item_list = load_search_part(word, non_english);
        context_dict[word] = new_item_list;
    }
    var result_header = 'Search Results';
    if (lang != 'English') {
        var map_info_data = get_map_data('MAP_INFO_DICT');
        var map_dict = map_info_data[lang];
        result_header = map_dict[result_header];
    }
    var item_data = { 'title' : { 'N': result_header, 'I': 'search' }, 'items' : new_item_list };
    render_card_template('#page-title-template', '#PAGE_TITLE', item_data);
    if (context_list.length <= 1) {
        render_card_template('#page-search-template', '#PAGE_INFO', item_data);
    } else {
        var row_list = [];
        for (var i = 0; i < context_list.length; i++) {
            var w = context_list[i];
            row_list.push({ 'I' : i, 'col' : context_dict[w] });
        }
        var row_data = { 'items' : row_list };
        render_card_template('#page-context-search-template', '#PAGE_INFO', row_data);
    }
    render_data_template('', '', item_data);
    window.scrollTo(0, 0);
    add_history('search', { 'category' : window.NAV_CATEGORY, 'search' : search_word });
}

function load_search_data() {
    var search_word = document.getElementById('SEARCH_WORD').value;
    var search_word = decodeURI(search_word);
    handle_search_word(search_word);
}

function load_search_history(data) {
    var search_word = data['search'];
    document.getElementById('SEARCH_WORD').value = search_word;
    handle_search_word(search_word);
}

function handle_context_search() {
    var select_list = $("select[id^=COL_]");
    var cols = select_list.length;
    var context_list = [];
    for (var i = 0; i < select_list.length; i++) {
        var e = select_list[i];
        var option = $('option:selected', e).attr('value');
        if (option == '' || option == undefined) {
            continue;
        }
        var new_option = option.replace(/\s/g, '');
        if (new_option == '' || new_option == undefined) {
            continue;
        }
        context_list.push(option);
    }
    load_context_search_data(context_list);
}

function play_ended() {
    var note_list = window.note_play_list;
    var note_index = window.note_play_index;
    var swara = note_list[note_index];
    var note_data = get_map_data('NOTE_MAP');
    var note = note_data[swara];
    var key_div = '#note' + note;
    var key = $(key_div).css('background-color', window.note_key_color);
    window.note_play_index += 1;
    if (window.note_play_index < window.note_play_list.length) {
        play_note();
    }
};

function play_note() {
    var note_list = window.note_play_list;
    var note_index = window.note_play_index;
    var swara = note_list[note_index];
    var note_data = get_map_data('NOTE_MAP');
    var note = note_data[swara];
    var key_div = '#note' + note;
    window.note_key_color = $(key_div).css('background-color');
    var key = $(key_div).css('background-color', 'cyan');
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

function get_youtube_video_info(id) {
    var url = `https://www.youtube.com/oembed?url=http://www.youtube.com/watch?v=${id}&format=json`
    $.getJSON(url, function(video_data) {
        var info_list = [];
        for (var key in video_data) {
            if (VIDEO_INFO_KEY_LIST.has(key)) {
                var value = video_data[key];
                info_list.push({ 'N' : key, 'C' : value });
            }
        }
        var info_data = { 'videoinfo' : info_list };
        render_modal_dialog(id, '#modal-videoinfo-template', info_data)
    });
}

/*
    Speech To Text
*/

function speech_to_text_init() {
    window.speech_recognizing = false;
    window.speech_final_transcript = '';
    window.speech_recognizing = false;
    window.speech_ignore_onend;
    window.speech_start_timestamp;
    if (!('webkitSpeechRecognition' in window)) {
        console.log('Speech not working:');
    } else {
        window.speech_recognition = new webkitSpeechRecognition();
        window.speech_recognition.continuous = true;
        window.speech_recognition.interimResults = true;

        window.speech_recognition.onstart = function() {
            window.speech_recognizing = true;
            console.log('Speech Starting:');
        };

        window.speech_recognition.onerror = function(event) {
            if (event.error == 'no-speech') {
                console.log('Speech Error: No Speech');
                window.speech_ignore_onend = true;
            }
            if (event.error == 'audio-capture') {
                console.log('Speech Error: Audio Capture');
              window.speech_ignore_onend = true;
            }
            if (event.error == 'not-allowed') {
                if (event.timeStamp - window.speech_start_timestamp < 100) {
                    console.log('Speech Error: Info Blocked');
                } else {
                    console.log('Speech Error: Info Denied');
                }
                window.speech_ignore_onend = true;
            }
        };

        window.speech_recognition.onend = function() {
            window.speech_recognizing = false;
            if (window.speech_ignore_onend) {
                console.log('Speech Error: Ignore End');
                return;
            }
            if (!window.speech_final_transcript) {
                console.log('Speech End:');
                return;
            }
        };

        window.speech_recognition.onresult = function(event) {
            var interim_transcript = '';
            /*
            for (var i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    window.speech_final_transcript += event.results[i][0].transcript;
                } else {
                    interim_transcript += event.results[i][0].transcript;
                }
                console.log('Speech Interim: ' + event.resultIndex + ' ' + event.results.length + ' ' + event.results[i][0].transcript);
            }
            console.log('Speech Result: ' + event.resultIndex + ' ' + event.results.length + ' ' + interim_transcript);
            */
            if (event.results.length > 0) {
                window.speech_final_transcript = event.results[0][0].transcript;
            } else {
                window.speech_final_transcript = '';
            }
            if (window.speech_final_transcript || interim_transcript) {
                window.speech_recognition.stop();
                $('#MIC_IMAGE').attr('src', 'icons/mic-mute.svg');
                document.getElementById('SEARCH_WORD').value = window.speech_final_transcript;
                // console.log('Speech Final: ' + window.speech_final_transcript);
                load_search_data();
            }
        };
    }
}

function speech_start(event) {
    if (!('webkitSpeechRecognition' in window)) {
        return;
    }
    if (window.speech_recognizing) {
        window.speech_recognition.stop();
        return;
    }
    var map_iso_data = get_map_data('MAP_ISO_DICT');
    var lang = window.RENDER_LANGUAGE;
    window.speech_final_transcript = '';
    window.speech_recognition.lang = map_iso_data[lang];
    window.speech_recognition.start();
    window.speech_ignore_onend = false;
    window.speech_start_timestamp = event.timeStamp;
    $('#MIC_IMAGE').attr('src', 'icons/mic.svg');
}

function load_keyboard(event) {
    var lang = window.RENDER_LANGUAGE;
    set_input_keyboard(lang.toLowerCase());
    get_bs_modal('LANG_KBD').show();
    return;
}

function handle_history_context(data) {
    var context = data['context'];
    if (context == 'content') {
        load_content_data(data['category'], data['name']);
    } else if (context == 'nav') {
        load_nav_data(data['category']);
    } else if (context == 'search') {
        load_search_history(data);
    }
}

function handle_popstate(e) {
    var data = e.state;
    if (data == null || data == undefined) {
        return;
    }
    // console.log('POP: ', e);
    window.carnatic_popstate = true;
    handle_history_context(data);
    var lang = data['language'];
    // set_language({ 'value' : lang });
}

function add_history(context, data) {
    var url = window.collection_name + '.html';
    /*
    if (context == 'nav') {
        return;
    }
    */
    data['language'] = window.GOT_LANGUAGE;
    if (!window.carnatic_popstate) {
        data['context'] = context;
        var title = 'Carnatic: ' + capitalize_word(data['category']);
        var name = data['name'];
        if (name != undefined) {
            title += ' ' + name;
        }
        // console.log('PUSH: ', data, window.carnatic_popstate);
        history.pushState(data, title, url);
    }
    window.history_data = data;
    window.carnatic_popstate = false;
}

function load_youtube_frame() {
    $('#FRAME_PLAYER').attr('src', $('#FRAME_PLAYER').attr('data-src'));
    youtube_player_init();
}

function load_content() {
    if (window.innerWidth < 992) {
        show_modal_dialog('Best Viewed in Landscape Mode', 'Use Landscape Mode');
    }
    $(document).ready(function() {
        $('#MENU_DATA li').bind('click', function() {
            $(this).addClass('active').siblings().removeClass('active');
        });
        setTimeout(load_youtube_frame, 3000);
    });
    $('#MENU_DATA li a').on('click', function() {
        $('#MENU_DATA li').find('.active').removeClass('active');
        $(this).parent().addClass('active');
    });

    load_id_data();
}

function collection_init(collection, default_song) {
    var lang = 'English';
    window.collection_name = collection;
    window.default_song = default_song;

    window.RENDER_LANGUAGE = lang;
    window.GOT_LANGUAGE = lang;
    window.history_data = undefined;
    window.carnatic_popstate = false;

    sessionStorage.clear();
    window.addEventListener('storage', on_storage_event, false);
    window.addEventListener('popstate', handle_popstate);
    window.onload = load_content;

    init_input_keyboard();
    menu_transliteration(lang);
    load_nav_data('about');
}

