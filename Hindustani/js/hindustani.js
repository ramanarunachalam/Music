const DEFAULT_VIDEO_ID    = "_tdYY6lUw9g"; 
const DEFAULT_YOUTUBE_URL = `https://www.youtube.com/embed/${DEFAULT_VIDEO_ID}?enablejsapi=1`;

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
const KEY_NAME_LIST   = [ 'Melakartha', 'Thaat', 'God' ];
const SEARCH_MAP_DICT = { 'c' : 's', 'p' : 'b' };
const IMAGE_MAP       = { 'm' : 'maxresdefault.jpg', 'h' : 'hqdefault.jpg', 's' : 'sddefault.jpg',
                          'm2' : 'maxres2.jpg', 'h2' : 'hq2.jpg', 's2' : 'sd2.jpg',
                          'sw' : 'sddefault.webp', 'sl' : 'sddefault_live.jpg'
                        };

function sleep(seconds){
    const waitUntil = new Date().getTime() + seconds*1000;
    while(new Date().getTime() < waitUntil) true;
}

function capitalize_word(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function get_yt_image(image) {
    return `https://i.ytimg.com/vi/${image}.jpg`;
}

async function fetch_url(url) {
    let url_data = null;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.log('Fetch Error:', response.status);
        }
        url_data = await response.json();
    } catch(error) {
        console.log('Fetch Error:', error);
    }
    return url_data;
}

function get_bs_modal(id) {
    return new bootstrap.Modal(document.getElementById(id));
}

function plain_get_html_text(id) {
    return document.getElementById(id).innerHTML;
}

function plain_set_html_text(id, text) {
    document.getElementById(id).innerHTML = text;
}

function plain_add_class(id, name) {
    const element = document.getElementById(id);
    element.classList.add(name);
}

function plain_remove_class(id, name) {
    const element = document.getElementById(id);
    element.classList.remove(name);
}

function plain_get_attr(id, key) {
    const element = document.getElementById(id);
    return element.getAttribute(key);
}

function plain_set_attr(id, key, value) {
    const element = document.getElementById(id);
    element.setAttribute(key, value);
}

function plain_get_background_color(id) {
    const element = document.getElementById(id);
    return element.style.backgroundColor;
}

function plain_set_background_color(id, value) {
    let element = document.getElementById(id);
    element.style.backgroundColor = value;
}

function plain_get_query_selector(phrase) {
    return document.querySelectorAll(phrase);
}

function call_modal_dialog(title) {
    plain_set_html_text('DIALOG_TITLE', title);
    get_bs_modal('DIALOG_BOX').show();
}

function show_modal_dialog(title, body) {
    plain_set_html_text('DIALOG_BODY', body);
    call_modal_dialog(title);
    setTimeout(function() { get_bs_modal('DIALOG_BOX').hide(); }, 3000);
}

function render_card_template(template_name, id, data) {
    const ul_template = plain_get_html_text(template_name);
    const template_html = (data !== undefined) ? Mustache.render(ul_template, data) : ul_template;
    plain_set_html_text(id, template_html);
}

function render_modal_dialog(title, template, data) {
    render_card_template(template, 'DIALOG_BODY', data);
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
    const player_status = event.data;
    // playerStatus: -1 : unstarted, 0 - ended, 1 - playing, 2 - paused, 3 - buffering, 5 - video cued
    if (last_player_status === 3 && player_status === -1) {
        // show_modal_dialog('Video is not playable', 'Click Play List to Delete Song');
    }
    if (player_status === 0) play_next();
    // console.log(`Player Status ${player_status} last: ${last_player_status}`);
    last_player_status = player_status;
}

function youtube_player_init() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

function get_play_list() {
    let new_play_list = sessionStorage['playlist'];
    new_play_list = (new_play_list === undefined) ? [] : JSON.parse(new_play_list);
    return new_play_list;
}

function play_first() {
    const play_list = get_play_list();
    if (play_list.length <= 0) return;
    const parts = play_list[0].split(':');
    const video_id = parts[0];
    const v_list = video_id.split('&');
    let time_option = { videoId: v_list[0] };
    if (v_list.length >= 2) {
        time_option['startSeconds'] = parseInt(v_list[1].replace('start=', ''));
    }
    if (v_list.length >= 3) {
        time_option['endSeconds'] = parseInt(v_list[2].replace('end=', ''));
    }
    window.yt_player.loadVideoById(time_option);
}

function play_next() {
    const play_list = get_play_list();
    play_list.shift();
    sessionStorage['playlist'] = JSON.stringify(play_list);
    play_first();
}

function on_storage_event(storageEvent) {
    const play_list = get_play_list();
    if (play_list.length === 0) return;
    if (play_list.length > 1) {
        show_modal_dialog('Song added to Play List', 'Click Play List to Add/Delete Songs');
        return;
    }
    play_first();
}

function load_menu_data(lang) {
    const item_list = CATEGORY_DICT['categories'];
    const map_info_data = get_map_data('MAP_INFO_DICT');
    const map_dict = map_info_data[lang];
    for (const obj of item_list) {
        const name = capitalize_word(obj['C']);
        obj['N'] = (lang === 'English') ? name : map_dict[name];
    }
    let playlist = 'Playlist';
    let search = 'Search';
    if (lang !== 'English') {
        playlist = map_dict[playlist];
        search = map_dict[search];
    }
    const lang_list = [];
    for (let l in MAP_LANG_DICT) {
        let d = (l === window.GOT_LANGUAGE) ? { 'N' : l, 'O' : 'selected' } : { 'N' : l };
        lang_list.push(d);
    }
    const search_tooltip = 'Prefix Search <br/> e.g. malhar kamod <br/> Phonetic Search <br/> e.g. kanada <br/> Language Search <br/> e.g. यमन <br/> Context Search <br/> e.g. bhimsen : pag : malkauns';
    const mic_tooltip = 'Only in Chrome';
    const kbd_tooltip = 'Language Keyboard';
    const menu_dict = { 'menus' : { 'LANGUAGE' : window.GOT_LANGUAGE, 'languages' : lang_list,
                                    'S' : search, 'APP' : 'Android App', 'P' : playlist,
                                    'B' : 'Brightness', 'BI' : 'brightness-high-fill',
                                    'STP' : search_tooltip, 'MTP' : mic_tooltip, 'KTP' : kbd_tooltip,
                                    'categories' : CATEGORY_DICT['categories'] }
                      };
    render_card_template('page-menu-template', 'MENU_DATA', menu_dict);
    init_search_listener();

    set_link_initial_active_state()

    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    });
    speech_to_text_init();
}

function get_swara_transliterate(lang, swara_str) {
    if (lang !== 'English') {
        swara_str = swara_str.replace(/da/g, 'dha');
    }
    swara_str = get_transliterator_text(lang, swara_str);
    swara_str = swara_str.replace(/([123])/g, '<sub>$1</sub>');
    return swara_str;
}

function get_swara_text(lang, note_list, value_list) {
    let swara_str = value_list[0];
    const s_list = swara_str.split(' ');
    for (const swara of s_list) {
        note_list.add(swara);
    }
    swara_str = get_swara_transliterate(lang, swara_str);
    const note_str = value_list[1];
    const note_template = plain_get_html_text('page-note-template');
    const note_html = Mustache.render(note_template, { 'note' : note_str });
    return swara_str + ' ' + note_html;
}

function check_for_english_text(lang, category, h_id, h_text) {
    if (lang !== 'English') return false;
    if (ENGLISH_TYPE_LIST.includes(category)) return true;
    if (category !== 'song') return false;
    if (h_id >= 20000) return true;
    if (h_text.includes(' - ')) return true;
    return false;
}

function info_transliteration(category, data_list) {
    const lang = window.RENDER_LANGUAGE;
    const map_info_data = get_map_data('MAP_INFO_DICT');
    const map_dict = map_info_data[lang];
    const map_month_data = get_map_data('MAP_MONTH_DICT');
    let item = data_list['title']
    const h_text = item['H'];
    if (category === 'about') {
        if (lang !== 'English') {
            item['N'] = map_dict[item['N']];
        }
    } else if (check_for_english_text(lang, category, 200, h_text)) {
        item['N'] = h_text;
    } else {
        let value = item['V'];
        if (lang !== 'English' && value.includes('unknowncomposer')) {
            value = value.replace('unknowncomposer', '?');
        }
        if (lang !== 'English' && value.includes('Unknownraga')) {
            value = value.replace('Unknownraga', '?');
        }
        item['N'] = get_transliterator_text(lang, value);
    }
    let item_list = data_list['stats']
    if (item_list === undefined) item_list = [];
    for (const obj of item_list) {
        let name = obj['H'];
        obj['N'] = (lang === 'English') ? name : map_dict[name];
    }
    const note_list = new Set();
    item_list = data_list['info']
    if (item_list === undefined) item_list = [];
    for (const obj of item_list) {
        const name = obj['H'];
        obj['N'] = (lang !== 'English' && name in map_dict) ? map_dict[name] : name;
        let value = obj['V'];
        if (name === 'Language') {
            if (lang !== 'English' && name in map_dict) {
                obj['V'] = map_dict[value];
            }
        } else if (KEY_NAME_LIST.includes(name)) {
            obj['V'] = get_transliterator_text(lang, value);
        } else if (name === 'Arohana' || name === 'Avarohana') {
            obj['V'] = get_swara_text(lang, note_list, value)
        } else if (name === 'Born' || name === 'Died') {
            if (value !== undefined && typeof value === 'string') {
                let m_list = [];
                if (value.includes(' ')) {
                    m_list = value.split(' ');
                }
                if (m_list.length > 1 && lang in map_month_data && m_list[1] in map_month_data[lang]) {
                    obj['V'] = m_list[0] + ' ' + map_month_data[lang][m_list[1]] + ' ' + m_list[2];
                }
            }
        } else if (lang !== 'English' && name === 'Gharana') {
            const item_list = obj['P'];
            if (value !== undefined) {
                let g_list = [];
                for (const gobj of item_list) {
                     g_list.push(get_transliterator_text(lang, gobj));
                }
                obj['V'] = g_list.join('</br>');
            }
        } else if (lang !== 'English' && name in map_dict) {
            value = obj['P'];
            if (value !== undefined) {
                if (lang !== 'English' && value.includes('Unknownraga')) {
                    value = value.replace('Unknownraga', '?');
                }
                obj['V'] = get_transliterator_text(lang, value);
            }
        }
    }
    item = data_list['keyboard']
    if (item !== undefined) {
        let kbd_list = get_map_data('KEYBOARD_LIST');
        for (const obj of kbd_list) {
            const swara_list = obj['V'];
            const new_swara_list = [];
            for (const swara_str of swara_list) {
                if (note_list.has(swara_str)) {
                    const new_swara_str = get_swara_transliterate(lang, swara_str);
                    new_swara_list.push(new_swara_str);
                }
            }
            obj['N'] = '&nbsp;' + new_swara_list.join('<br>&nbsp;');
        }
        data_list['keyboard'] = { 'keys' : kbd_list };
    }
    item_list = data_list['lyricstext']
    if (item_list === undefined) item_list = [];
    const lyric_prefix = 'SAhityA';
    const prefix = get_transliterator_text(lang, lyric_prefix);
    for (const obj of item_list) {
        let lyric_lang = obj['L'];
        lyric_lang = (lang !== 'English' && lyric_lang in map_dict) ? map_dict[lyric_lang] : lyric_lang;
        obj['L'] = prefix + ' - ' + lyric_lang;
    }
    const references = (lang !== 'English') ? map_dict['References'] : 'References';
    item_list = data_list['lyricsref']
    if (item_list === undefined) item_list = [];
    for (const obj of item_list) {
        obj['R'] = references;
    }
}

function set_language(got_lang, name_lang) {
    window.GOT_LANGUAGE = got_lang;
    const lang = MAP_LANG_DICT[got_lang];
    window.RENDER_LANGUAGE = lang;
    const history_data = window.history_data;
    // console.log(`SET LANG: ${lang} ${got_lang} ${history_data}`);
    transliterator_lang_init(lang);
    load_menu_data(lang);
    load_nav_data(window.NAV_CATEGORY);
    if (history_data === undefined) {
        load_content_data(window.CONTENT_CATGEGORY, window.CONTENT_NAME);
    } else  {
        handle_history_context(history_data);
    }
}

function toggle_icon(id, old_class, new_class) {
    plain_remove_class(id, old_class);
    plain_add_class(id, new_class);
}

function toggle_brightness() {
    window.COLOR_SCHEME = (window.COLOR_SCHEME === 'dark') ? 'light' : 'dark';
    const elements = document.getElementsByTagName('html');
    elements[0].setAttribute('data-bs-theme', window.COLOR_SCHEME);
    if (window.COLOR_SCHEME === 'dark') toggle_icon('BRIGHTNESS', 'bi-moon-fill', 'bi-brightness-high-fill');
    else toggle_icon('BRIGHTNESS', 'bi-brightness-high-fill', 'bi-moon-fill');
}

function add_song(audio_file, script_mode) {
    const play_list = get_play_list();
    if (play_list.length <= 0) {
        if (audio_file !== '') play_list[0] = audio_file;
    } else {
        play_list[play_list.length] = audio_file;
    }
    sessionStorage['playlist'] = JSON.stringify(play_list);
    if (play_list.length === 1) {
        play_first();
    } else  if (!script_mode) {
        show_modal_dialog('Song added to Play List', 'Click Play List to Add/Delete Songs');
    }
}

function delete_song(song_id) {
    const play_list = get_play_list();
    if (play_list.length > 0) {
        song_id = parseInt(song_id);
        play_list.splice(song_id, 1);
        sessionStorage['playlist'] = JSON.stringify(play_list);
        if (song_id === 0) play_first();
    }
}

function delete_row(row) {
    const row_id = row.parentNode.parentNode.rowIndex;
    handle_playlist_command('delete', row_id - 1);
    document.getElementById('PLAYLIST_TABLE').deleteRow(row_id);
}

function create_jukebox(value) {
    setTimeout(function() { create_jukebox_modal(value); }, 0);
}

async function create_jukebox_modal(value) {
    const option = value.toLowerCase();
    const check_id = window.NAV_CATEGORY === window.CONTENT_CATGEGORY;
    get_bs_modal('DIALOG_BOX').hide();
    const JUKEBOX_TOTAL = 100;
    const JUKEBOX_LENGTH = 10;
    const song_id_list = [];
    const play_list = [];
    let category = 'song';
    let loops = JUKEBOX_TOTAL;
    if (FF[option] !== undefined) {
        category = option;
        loops = 1;
    }
    const is_main_song = category === 'song';
    let url = `${category}.json`;
    let url_data = await fetch_url(url);
    if (url_data === null) return;
    const id_list = new Set();
    const letter_list = url_data['alphabet'];
    for (let i = 0; i < loops; i++) {
        let t_id = 0;
        let t_text = '';
        if (loops <= 1) {
            t_text = window.CONTENT_NAME;
        } else {
            const letter_index = Math.floor((Math.random() * letter_list.length));
            const l_item = letter_list[letter_index];
            const item_list = l_item['items']
            const item_index = Math.floor((Math.random() * item_list.length));
            const obj = item_list[item_index];
            t_id = obj['H'];
            t_text = window.ID_DATA[category][t_id][0];
        }
        url = `${category}/${t_text}.json`;
        url_data = await fetch_url(url);
        if (url_data === null) continue;
        let folder_list = url_data['videos'][0]['folder'];
        if (loops > 1) {
            const folder_index = Math.floor((Math.random() * folder_list.length));
            folder_list = [ folder_list[folder_index] ];
        }
        // console.log(`Jukebox: ${url} ${is_main_song} ${folder_list.length}`);
        for (let folder of folder_list) {
            if (loops <= 1) {
                const folder_index = Math.floor((Math.random() * folder_list.length));
                folder = folder_list[folder_index];
            }
            const song_id = is_main_song ? t_id : folder['S'];
            let video_list = folder['songs'];
            if (loops <= 1) {
                if (category === 'artist' || category === 'song') {
                    video_list = [ video_list[0] ];
                } else {
                    const video_index = Math.floor((Math.random() * video_list.length));
                    video_list = [ video_list[video_index] ];
                }
            } else {
                const video_index = Math.floor((Math.random() * video_list.length));
                video_list = [ video_list[video_index] ];
            }
            // console.log(`Jukebox folder: ${song_id} ${video_list.length}`);
            for (const video of video_list) {
                if (option === 'Views' && video['V'] < 100) continue;
                const artist_id = is_main_song ? folder['A'] : video['A'];
                // console.log(`Jukebox video: ${song_id} ${k} ${artist_id}`);
                if (loops > 1 && category !== 'artist' && (artist_id <= 0 || artist_id >= 50)) continue;
                const raga_id = video['R'];
                // console.log(`Jukebox video: ${song_id} ${k} ${artist_id} ${raga_id}`);
                if (category !== 'raga' && (raga_id <= 0 || raga_id > 250)) continue;
                const composer_id = video['C'];
                // if (category !== 'composer' && (composer_id <= 0 || composer_id > 100)) continue;
                const video_id = video['I'];
                if (id_list.has(video_id)) continue;
                id_list.add(video_id);
                // console.log(`Jukebox video: ${song_id} ${artist_id} ${raga_id} ${composer_id} ${video_id}`);
                const args = `${video_id}:${song_id}:${raga_id}`;
                play_list.push(args);
                if (play_list.length >= JUKEBOX_LENGTH) break;
            }
            if (play_list.length >= JUKEBOX_LENGTH) break;
        }
        if (play_list.length >= JUKEBOX_LENGTH) break;
    }
    for (const obj of play_list) {
        add_song(obj, true);
    }
    setTimeout(function() { show_playlist(); }, 0);
}

function show_playlist() {
    const play_list = get_play_list();
    const info_list = [];
    for (const [i, video] of play_list.entries()) {
        const parts = video.split(':');
        info_dict = { 'N' : i + 1, 'I' : parts[0], 'S' : parseInt(parts[1]), 'R' : parseInt(parts[2]) };
        get_folder_value('song', info_dict, 'S', 'S');
        get_folder_value('raga', info_dict, 'R', 'R');
        info_list.push(info_dict);
    }
    const lang = window.RENDER_LANGUAGE;
    const map_info_data = get_map_data('MAP_INFO_DICT');
    const map_dict = map_info_data[lang];
    let header_dict = { 'N' : 'No.', 'I' : 'ID', 'SN' : 'Song', 'RN' : 'Raga' };
    let title = 'Playlist';
    if (lang !== 'English') {
        const map_dict = map_info_data[lang];
        title = map_dict[title];
        header_dict = { 'N' : 'No.', 'I' : 'ID', 'SN' : map_dict['Song'], 'RN' : map_dict['Raga'] };
    }
    title = '';
    const title_template = plain_get_html_text('modal-playlist-title-template');
    const JUKEBOX_LIST = [ { 'N' : 'Popularity' }, { 'N' : 'Views' }, { 'N' : 'Artist' }, { 'N' : 'Composer' },
                           { 'N' : 'Raga' }, { 'N' : 'Song' }, { 'N' : 'Type' }
                         ];
    const template_html = Mustache.render(title_template, { 'jukebox' : JUKEBOX_LIST });
    title = '<div class="row"><div class="col">' + title + '</div>' + template_html + ' </div>';
    const header_list = [ header_dict ];
    const list_data = { 'playlist' : { 'header' : header_list, 'videos' : info_list } };
    render_modal_dialog(title, 'modal-playlist-template', list_data)
}

function handle_playlist_command(cmd, arg) {
    if (cmd === 'play') {
        add_song(arg, false);
    } else if (cmd === 'delete') {
        delete_song(arg);
    } else if (cmd === 'show') {
        show_playlist();
    }
    return true;
}

function render_nav_template(category, data) {
    const lang = window.RENDER_LANGUAGE;
    const letter_list = data['alphabet'];
    const no_transliterate = lang === 'English' && ENGLISH_TYPE_LIST.includes(category);
    const id_data = window.ID_DATA[category];
    const poster_data = window.ABOUT_DATA[category];
    const need_poster = category === 'artist' || category === 'composer';
    const alphabet_list = [];
    const lang_data = data['letters'][lang.toLowerCase()];
    const icon = CARNATIC_ICON_DICT[category];
    for (let lu in lang_data) {
        const letter_list = { LL: lu, LU: lu, T: category, I: icon };
        const id_list = lang_data[lu].split(',');
        const item_list = [];
        for (const h_id of id_list) {
            let [h_text, f_text] = id_data[h_id];
            if (lang !== 'English' && f_text.includes('unknowncomposer')) {
                f_text = f_text.replace('unknowncomposer', '?');
            }
            let n_text = h_text;
            if (check_for_english_text(lang, category, h_id, f_text)) {
                n_text = h_text;
            } else {
                n_text = (no_transliterate) ? h_text : get_transliterator_text(lang, f_text);
            }
            const item = { H: h_text, N: n_text };
            if (need_poster) {
                const image_name = poster_data[h_id]
                if (image_name !== undefined) {
                    item['J'] = `Images/${image_name}.jpg`;
                }
            }
            item_list.push(item);
        }
        letter_list['items'] = item_list;
        alphabet_list.push(letter_list);
    }
    const new_data = { alphabet: alphabet_list };
    const ul_template = plain_get_html_text('nav-data-template')
    const template_html = Mustache.render(ul_template, new_data);
    plain_set_html_text('MENU', template_html);
    if (window.NAV_SCROLL_SP !== null && window.NAV_SCROLL_SP !== undefined) {
        window.NAV_SCROLL_SP.refresh();
    } else {
        const scroll_element = document.getElementById('ALPHABET_DATA');
        window.NAV_SCROLL_SPY = new bootstrap.ScrollSpy(scroll_element, { target: '#ALPHABET_LIST' });
        const scrollspy = document.querySelector('[data-bs-spy="scroll"]')
        scrollspy.addEventListener('activate.bs.scrollspy', (e) => {
            const a_list = plain_get_query_selector('a');
        })
    }
}

function load_about_data(category, video_data) {
    info_transliteration(category, video_data);
    render_card_template('page-title-template', 'PAGE_TITLE', video_data);
    render_card_template('page-about-template', 'PAGE_INFO', video_data);
    render_data_template('', '', video_data);
}

function load_nav_fetch_data(category, url_data) {
    if (category === 'about') {
        load_about_data(category, url_data);
    } else {
        render_nav_template(category, url_data);
    }
    add_history('nav', { 'category' : category });
}

function set_link_initial_active_state() {
    const a_list = plain_get_query_selector('#MENU_DATA li a');
    const a_node = a_list[2].parentNode;
    window.ACTIVE_MENU = a_node;
    a_node.classList.add('active');
}

function clear_link_active_state(prev_element) {
    if (prev_element !== null) prev_element.classList.remove('active');
    return null;
}

function set_link_active_state(element, prev_element) {
    clear_link_active_state(prev_element);
    element = element.parentNode;
    element.classList.add('active');
    return element;
}

function get_folder_value(category, info, prefix, v) {
    const lang = window.RENDER_LANGUAGE;
    const id_data = window.ID_DATA[category];
    const h_name = prefix + 'D';
    const h_id = info[v];
    const h_text = id_data[h_id][0];
    const f_text = id_data[h_id][1];
    if (h_text !== 'UnknownType') info[h_name] = h_text;
    const f_name = prefix + 'N';
    if (lang !== 'English' && h_id === 0) {
        info[f_name] = '?';
    } else if (check_for_english_text(lang, category, h_id, f_text)) {
        info[f_name] = h_text;
    } else {
        info[f_name] = get_transliterator_text(lang, f_text);
    }
}

function get_match_count(f_category, f_value, context_list, c_len) {
    let found = 0;
    for (let c = 1; c < c_len; c++) {
        if (context_list[c][0] === f_category && context_list[c][2] === f_value) found += 1;
    }
    return found;
}

function translate_song_id_to_data(category, sd, st, song_list) {
    const HF = [ 'S', 'R', 'C' ];
    const HCATEGORY = [ 'song', 'raga', 'composer' ];
    for (const [i, song] of song_list.entries()) {
        for (const v of HF) {
            get_folder_value(HCATEGORY[m], song, v, v);
        }
        song['I'] = i + 1;
    }
}

function translate_folder_id_to_data(category, id, data) {
    const lang = window.RENDER_LANGUAGE.toLowerCase();
    const ff = FF[category];
    const f_category = ff[0];
    const f_type = ff[1];
    const sd = ff[2];
    const st = ff[3];
    const song_list = data['songs'];
    const folder_list = data['folders'];
    const folder_ids = data['languages'][lang];
    const fold_id_list = folder_ids.split(',');
    const new_folder_list = [];
    for (const f_id of fold_id_list) {
        const folder = folder_list[+f_id];
        const [ c_category, c_id, song_ids ] = folder;
        const song_id_list = song_ids.split(',');
        const new_folder = { HT: f_category, HC: song_id_list.length };
        new_folder[f_type] = c_id;
        get_folder_value(f_category, new_folder, 'H', f_type);
        const new_song_list = [];
        let p_song_ids = (category !== 'song') ? folder['S'] : '';
        for (const song_id of song_id_list) {
            const song = song_list[+song_id];
            for (let m = 0; m < OF.length; m++) {
                const c = OF[m] + 'T';
                song[c] = st[m];
                get_folder_value(st[m], song, OF[m], sd[m]);
            }
            if (category === 'song') p_song_ids = song['S'];
            song['PS'] = p_song_ids;
            song['PR'] = song['R'];
            const imageId = song['I'].split('&')[0];
            const path = IMAGE_MAP[song['J']] ?? 'maxdefault.jpg';
            song['Y'] = `${imageId}/${path}`;
            new_song_list.push(song);
        }
        new_folder['songs'] = new_song_list;
        new_folder_list.push(new_folder)
    }
    const new_data = { title: data['title'], videos: [{ folder: new_folder_list }] };
    return new_data;
}

function render_data_template(category, id, data, context_list) {
    const lang = window.RENDER_LANGUAGE;
    if (category === '') {
        plain_set_html_text('PAGE_VIDEOS', '');
        plain_set_html_text('PAGE_LYRICS', '');
        plain_set_html_text('PAGE_REFS', '');
        return;
    }

    const template_name = 'page-videos-template'
    let ul_template = plain_get_html_text(template_name);
    const new_data = translate_folder_id_to_data(category, id, data);
    if (lang !== 'English') {
        const map_info_data = get_map_data('MAP_INFO_DICT');
        const map_dict = map_info_data[lang];
        new_data['VideoName'] = map_dict['Videos'];
        new_data['ViewName'] = map_dict['Views'];
    } else {
        new_data['VideoName'] = 'Videos';
        new_data['ViewName'] = 'Views';
    }

    if (context_list !== undefined) {
        const c_len = context_list.length;
        for (const video of data['videos']) {
            const new_folder_list = [];
            for (const folder of video['folder']) {
                const f_category = folder['HT'];
                const f_value = folder['HN'];
                const s_found = get_match_count(f_category, f_value, context_list, c_len);
                const song_list = folder['songs'];
                const new_song_list = [];
                for (const song of song_list) {
                    let found = s_found;
                    for (let m = 0; m < OF.length; m++) {
                        let c = OF[m] + 'T';
                        let f_category = song[c];
                        c = OF[m] + 'N';
                        let f_value = song[c];
                        found += get_match_count(f_category, f_value, context_list, c_len);
                    }
                    if (found >= (c_len - 1)) new_song_list.push(song);
                }
                folder['songs'] = new_song_list;
                if (new_song_list.length > 0) new_folder_list.push(folder);
            }
            video['folder'] = new_folder_list;
        }
    }

    const template_html = Mustache.render(ul_template, new_data);
    plain_set_html_text(id, template_html);
}

function empty_content_data(category, name) {
    const lang = window.RENDER_LANGUAGE;
    const map_info_data = get_map_data('MAP_INFO_DICT');
    const map_dict = map_info_data[lang];
    plain_set_html_text('PAGE_TITLE', '');
    render_card_template('page-info-spinner', 'PAGE_INFO', { 'info' : { 'T' : map_dict['Fetch'] } });
    const empty_data = {};
    render_data_template('', '', empty_data);
    window.scrollTo(0, 0);
}

function render_content_data(category, name, video_data, context_list) {
    info_transliteration(category, video_data);
    render_card_template('page-title-template', 'PAGE_TITLE', video_data);
    setTimeout(function() {
        render_card_template('page-info-template', 'PAGE_INFO', video_data);
        render_data_template(category, 'PAGE_VIDEOS', video_data, context_list);
        render_card_template('page-lyrics-text-template', 'PAGE_LYRICS', video_data);
        render_card_template('page-lyrics-ref-template', 'PAGE_REFS', video_data);
        window.scrollTo(0, 0);
    }, 0);
}

function load_context_search_data(context_list) {
    const [ category, name ] = context_list[0].split(':');
    const new_context_list = [];
    for (const context of context_list) {
        new_context_list.push(context.split(':'));
    }
    load_content_data(category, name, undefined, new_context_list);
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

function search_load_fetch_data(search_index_obj) {
    const search_engine = window.carnatic_search_engine;
    let data_id = 0;
    const search_obj = search_index_obj['Search'];
    for (let category in search_obj) {
        const data_list = search_obj[category];
        data_list.forEach(function (data_item, data_index) {
            const h_id = data_item.H;
            const aka_list = data_item.A.split(',');
            const data_doc = { 'id' : data_id, 'href' : h_id, 'title' : h_id, 'aka' : aka_list, 'category' : category, 'pop' : data_item.P };
            search_engine.add(data_doc);
            data_id += 1;
        });
    }
    window.CARNATIC_CHAR_MAP = search_index_obj['Charmap'];
    transliterator_init();
}

function search_init() {
    window.carnatic_search_engine = new MiniSearch({
        fields: ['aka'], // fields to index for full-text search
        storeFields: ['title', 'href', 'category', 'pop'] // fields to return with search results
    });
    window.search_initialized = false;
    fetch_url_data('SEARCH DATA', 'search_index.json');
    window.search_initialized = true;
}

function get_search_results(search_word, search_options, item_list, id_list, base_pop) {
    const word_list = search_word.split(' ');
    const new_word_list = [];
    for (let word of word_list) {
        if (word !== '') {
            word = normalize_search_text(word);
            new_word_list.push(word.slice(0,8));
        }
        search_word = new_word_list.join(' ');
    }
    const lang = window.RENDER_LANGUAGE;
    const map_info_data = get_map_data('MAP_INFO_DICT');
    const map_dict = map_info_data[lang];
    const results = window.carnatic_search_engine.search(search_word, search_options);
    if (results.length <= 0) return;
    const max_score = results[0].score;
    for (const result_item of results) {
        if (id_list.has(result_item.id)) continue;
        let pop = result_item.pop;
        if (search_word.length > 2) {
            pop = ((400 * result_item.score) / max_score) + (0.6 * pop);
        }
        pop = base_pop + pop;
        const category = result_item.category
        const id_data = window.ID_DATA[category];
        const c_name = capitalize_word(category);
        const n_category = (lang === 'English') ? category.toUpperCase() : map_dict[c_name];
        const href = id_data[result_item.href][0];
        let title = id_data[result_item.title][1];
        if (check_for_english_text(lang, category, result_item.href, href)) {
            title = href;
        } else {
            title = get_transliterator_text(lang, title);
        }
        const item = { 'T' : category, 'C' : n_category, 'I' : CARNATIC_ICON_DICT[category],
                       'H' : href, 'N' : title, 'P' : pop
                     };
        const need_poster = category === 'artist' || category === 'composer';
        if (need_poster) {
            const poster_data = window.ABOUT_DATA[category];
            const image_name = poster_data[result_item.href]
            if (image_name !== undefined) {
                item['J'] = `Images/${image_name}.jpg`;
            }
        }
        item_list.push(item);
        id_list.add(result_item.id);
    }
}

function transliterator_init() {
    const char_map = window.CARNATIC_CHAR_MAP;
    const key_list = [];
    let max_len = 0;
    for (let s in char_map) {
        key_list.push(s);
        max_len = Math.max(max_len, s.length);
    }
    window.CHAR_MAP_MAX_LENGTH = max_len;
    window.CHAR_MAP_KEY_LIST = new Set(key_list);

    set_tamil_regex_list();
}

function transliterate_text(word) {
    const char_map = window.CARNATIC_CHAR_MAP;
    const tokenset = window.CHAR_MAP_KEY_LIST;
    const maxlen = window.CHAR_MAP_MAX_LENGTH;
    let current = 0;
    const tokenlist = [];
    word = word.toString();
    while (current < word.length) {
        const nextstr = word.slice(current, current+maxlen);
        let p = nextstr[0];
        let j = 1;
        let i = maxlen;
        while (i > 0) {
            let s = nextstr.slice(0, i);
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
    let new_word = tokenlist.join('');
    if (word !== new_word) {
        new_word = new_word.replace(/_/g, '');
        new_word = new_word.replace(/G/g, 'n');
        new_word = new_word.replace(/J/g, 'n');
    }
    return new_word;
}

function get_tamil_phonetic_word(word) {
    const w_list = [];
    const new_word = word.toLowerCase();
    for (const c of new_word) {
        w_list.push((c in SEARCH_MAP_DICT) ? SEARCH_MAP_DICT[c] : c);
    }
    return w_list.join('');
}

function load_search_part(search_word, non_english) {
    const s_search_word = search_word.replace(/\s/g, '');
    const item_list = [];
    const id_list = new Set();
    let search_options = { prefix: true, combineWith: 'AND', fuzzy: term => term.length > 3 ? 0.1 : null };
    get_search_results(search_word, search_options, item_list, id_list, 4000);
    if (search_word !== s_search_word) {
        get_search_results(s_search_word, search_options, item_list, id_list, 1000);
    }
    let n_search_word = '';
    if (non_english) {
        n_search_word = get_tamil_phonetic_word(search_word);
        get_search_results(n_search_word, search_options, item_list, id_list, 5000);
    }
    if (search_word.length > 2) {
        let search_options = { prefix: true, combineWith: 'AND', fuzzy: term => term.length > 3 ? 0.3 : null };
        get_search_results(search_word, search_options, item_list, id_list, 0);
        if (non_english && n_search_word) {
            get_search_results(n_search_word, search_options, item_list, id_list, 0);
        }
        if (search_word !== s_search_word) {
            get_search_results(s_search_word, search_options, item_list, id_list, 0);
        }
    }
    item_list.sort(function (a, b) { return b.P - a.P; });
    const new_item_list = item_list.slice(0, 25);
    return new_item_list;
}

function handle_search_word(search_word) {
    const lang = window.RENDER_LANGUAGE;
    const c = search_word.charCodeAt(0);
    if (c > 127) search_word = transliterate_text(search_word);
    const non_english = (0x0B80 <= c && c <= 0x0BFF) ? true : false;
    const context_list = search_word.split(':');
    const context_dict = {};
    let new_item_list = [];
    for (const word of context_list) {
        new_item_list = load_search_part(word, non_english);
        context_dict[word] = new_item_list;
    }
    let result_header = 'Search Results';
    if (lang !== 'English') {
        const map_info_data = get_map_data('MAP_INFO_DICT');
        const map_dict = map_info_data[lang];
        result_header = map_dict[result_header];
    }
    const item_data = { 'title' : { 'N': result_header, 'I': 'search' }, 'items' : new_item_list };
    render_card_template('page-title-template', 'PAGE_TITLE', item_data);
    if (context_list.length <= 1) {
        render_card_template('page-search-template', 'PAGE_INFO', item_data);
    } else {
        const row_list = [];
        for (const [i, w] of context_list.entries()) {
            row_list.push({ 'I' : i, 'col' : context_dict[w] });
        }
        const row_data = { 'items' : row_list };
        render_card_template('page-context-search-template', 'PAGE_INFO', row_data);
    }
    render_data_template('', '', item_data);
    window.scrollTo(0, 0);
    add_history('search', { 'category' : window.NAV_CATEGORY, 'search' : search_word });
}

function load_search_data() {
    window.ACTIVE_NAV = clear_link_active_state(window.ACTIVE_NAV);
    let search_word = document.getElementById('SEARCH_WORD').value;
    search_word = decodeURI(search_word);
    handle_search_word(search_word);
}

function init_search_listener() {
    const element = document.getElementById('SEARCH_WORD');
    element.addEventListener('input', load_search_data);
}

function load_search_history(data) {
    const search_word = data['search'];
    document.getElementById('SEARCH_WORD').value = search_word;
    handle_search_word(search_word);
}

function handle_context_search() {
    const select_list = plain_get_query_selector('select[id^=COL_]');
    const cols = select_list.length;
    const context_list = [];
    for (const select_element of select_list) {
        const option = select_element.options[select_element.selectedIndex].value;
        if (option === '' || option === undefined) continue;
        const new_option = option.replace(/\s/g, '');
        if (new_option === '' || new_option === undefined) continue;
        context_list.push(option);
    }
    load_context_search_data(context_list);
}

function play_ended() {
    const note_list = window.note_play_list;
    const note_index = window.note_play_index;
    const swara = note_list[note_index];
    const note_data = get_map_data('NOTE_MAP');
    const note = note_data[swara];
    const key_div = 'note' + note;
    plain_set_background_color(key_div, window.note_key_color);
    window.note_play_index += 1;
    if (window.note_play_index < window.note_play_list.length) {
        play_note();
    }
};

function play_note() {
    const note_list = window.note_play_list;
    const note_index = window.note_play_index;
    const swara = note_list[note_index];
    const note_data = get_map_data('NOTE_MAP');
    const note = note_data[swara];
    const key_div = 'note' + note;
    window.note_key_color = plain_get_background_color(key_div);
    plain_set_background_color(key_div, 'cyan');
    const note_audio = document.getElementById('NOTE_PLAY');
    const src = 'audio/' + note + '.mp3';
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

function render_youtube_video_info(id, video_data) {
    const info_list = [];
    let title = id;
    for (let key in video_data) {
        if (VIDEO_INFO_KEY_LIST.has(key)) {
            const value = video_data[key];
            if (key === 'title') {
                title = value;
            } else {
                info_list.push({ 'N' : key, 'C' : value });
            }
        }
    }
    const video_id = id.split('&')[0];
    info_list.push({ 'N' : 'id', 'C' : video_id });
    const image = video_data['thumbnail_url'];
    const info_data = { 'videoinfo' : info_list, 'videoimage' : { 'I' : video_id, 'P' : image } };
    /*
    const chapter_data = window.CONCERT_DATA[video_id];
    if (chapter_data !== undefined) {
        const category = 'artist';
        const ff = FF[category];
        const sd = ff[2];
        const st = ff[3];
        translate_song_id_to_data(category, sd, st, chapter_data);
        info_data['chapters'] = { 'songs' : window.CONCERT_DATA[video_id] };
    }
    */
    render_modal_dialog(title, 'modal-videoinfo-template', info_data);
}

function get_youtube_video_info(id) {
    const url = `https://www.youtube.com/oembed?url=http://www.youtube.com/watch?v=${id}&format=json`
    fetch_url_data('VIDEO INFO', url, [ id ]);
}

function load_nav_data(category, element) {
    if (category !== 'about') window.NAV_CATEGORY = category;
    if (element !== undefined && category !== 'about') {
        window.ACTIVE_MENU = set_link_active_state(element, window.ACTIVE_MENU);
    }
    const url = `${category}.json`;
    fetch_url_data('NAV DATA', url, [ category ]);
}

function load_content_data(category, name, element, new_context_list) {
    if (element !== undefined) {
        window.ACTIVE_NAV = set_link_active_state(element, window.ACTIVE_NAV);
    }
    window.CONTENT_CATGEGORY = category;
    window.CONTENT_NAME = name;
    empty_content_data(category, name);
    const url = `${category}/${name}.json`;
    fetch_url_data('CONTENT DATA', url, [ category, name, new_context_list ]);
}

function load_init_data(id_data, about_data, hk_data) {
    if (window.innerWidth < 992) {
        show_modal_dialog('Best Viewed in Landscape Mode', 'Use Landscape Mode');
    }
    window.ID_DATA = id_data;
    window.ABOUT_DATA = about_data;
    init_lang_maps(hk_data);
    load_nav_data('raga');
    if (window.default_song !== '') load_content_data('song', window.default_song);
    search_init();
    // fetch_url_data('CONCERT DATA', 'concert.json');
}

async function fetch_url_data(name, url, args) {
    const url_data = await fetch_url(url);
    if (url_data === null) return null;
    if (name === 'NAV DATA') {
        const category = args[0];
        load_nav_fetch_data(category, url_data);
    } else if (name === 'CONTENT DATA') {
        const [ category, h_name, new_context_list ] = args;
        render_content_data(category, h_name, url_data, new_context_list);
        if (new_context_list === undefined) {
            add_history('content', { 'category' : category, 'name' : h_name });
        }
    } else if (name === 'SEARCH DATA') {
        search_load_fetch_data(url_data);
    } else if (name === 'VIDEO INFO') {
        const id = args[0];
        render_youtube_video_info(id, url_data);
    } else if (name === 'CONCERT DATA') {
        window.CONCERT_DATA = url_data;
    }
    return url_data;
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
            if (event.error === 'no-speech') {
                console.log('Speech Error: No Speech');
                window.speech_ignore_onend = true;
            }
            if (event.error === 'audio-capture') {
                console.log('Speech Error: Audio Capture');
              window.speech_ignore_onend = true;
            }
            if (event.error === 'not-allowed') {
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
            let interim_transcript = '';
            /*
            for (let i = event.resultIndex; i < event.results.length; ++i) {
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
                toggle_icon('MIC_IMAGE', 'mic', 'mic-mute');
                document.getElementById('SEARCH_WORD').value = window.speech_final_transcript;
                // console.log('Speech Final: ' + window.speech_final_transcript);
                load_search_data();
            }
        };
    }
}

function speech_start(event) {
    if (!('webkitSpeechRecognition' in window)) return;
    if (window.speech_recognizing) {
        window.speech_recognition.stop();
        return;
    }
    const map_iso_data = get_map_data('MAP_ISO_DICT');
    const lang = window.RENDER_LANGUAGE;
    window.speech_final_transcript = '';
    window.speech_recognition.lang = map_iso_data[lang];
    window.speech_recognition.start();
    window.speech_ignore_onend = false;
    window.speech_start_timestamp = event.timeStamp;
    toggle_icon('MIC_IMAGE', 'mic-mute', 'mic');
}

function load_keyboard(event) {
    const lang = window.RENDER_LANGUAGE;
    set_input_keyboard(lang.toLowerCase());
    get_bs_modal('LANG_KBD').show();
}

function handle_history_context(data) {
    const context = data['context'];
    if (context === 'content') {
        load_content_data(data['category'], data['name']);
    } else if (context === 'nav') {
        load_nav_data(data['category']);
    } else if (context === 'search') {
        load_search_history(data);
    }
}

function handle_popstate(e) {
    const data = e.state;
    if (data === null || data === undefined) return;
    // console.log('POP: ', e);
    window.carnatic_popstate = true;
    handle_history_context(data);
    const lang = data['language'];
    // set_language({ 'value' : lang });
}

function add_history(context, data) {
    const url = window.collection_name + '.html';
    // if (context === 'nav') return;
    data['language'] = window.GOT_LANGUAGE;
    if (!window.carnatic_popstate) {
        data['context'] = context;
        let title = 'Carnatic: ' + capitalize_word(data['category']);
        const name = data['name'];
        if (name !== undefined) title += ' ' + name;
        // console.log('PUSH: ', data, window.carnatic_popstate);
        history.pushState(data, title, url);
    }
    window.history_data = data;
    window.carnatic_popstate = false;
}

function load_youtube_frame() {
    const value = plain_get_attr('FRAME_PLAYER', 'data-src');
    plain_set_attr('FRAME_PLAYER', 'src', value);
    youtube_player_init();
}

function collection_init(collection, default_song) {
    const lang = 'English';
    window.collection_name = collection;
    window.default_song = default_song;

    const elements = document.getElementsByTagName('html');
    window.COLOR_SCHEME = elements[0].getAttribute('data-bs-theme');
    window.RENDER_LANGUAGE = lang;
    window.GOT_LANGUAGE = lang;
    window.history_data = undefined;
    window.carnatic_popstate = false;

    window.NAV_SCROLL_SPY = null;
    window.ACTIVE_MENU = null;
    window.ACTIVE_NAV = null;

    sessionStorage.clear();
    window.addEventListener('storage', on_storage_event, false);
    window.addEventListener('popstate', handle_popstate);

    document.addEventListener('DOMContentLoaded', function() {
        if (document.readyState === "interactive" || document.readyState === "complete" ) {
            setTimeout(load_youtube_frame, 0);
        }
    });

    const url_list = [ fetch_url_data('ID DATA', 'id.json'),
                       fetch_url_data('ABOUT DATA', 'about.json'),
                       fetch_url_data('LANG DATA', 'hk_lang_map.json')
                     ];
    Promise.all(url_list).then((values) => {
        const [ id_data, about_data, hk_data ] = values;
        load_init_data(id_data, about_data, hk_data);
    });

    init_input_keyboard();
    load_menu_data(lang);
}

